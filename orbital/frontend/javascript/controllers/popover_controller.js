import { Controller } from "@hotwired/stimulus"
import { computePosition, flip, shift, offset, autoPlacement } from "@floating-ui/dom"

// Connects to data-controller="orbital-popover"
export default class extends Controller {
  static values = {
    trigger: { type: String, default: "click" }, // "click" or "hover"
    position: { type: String, default: "auto" }
  }
  
  static targets = ["trigger", "content"]

  connect() {
    this.boundShow = this.show.bind(this)
    this.boundHide = this.hide.bind(this)
    this.boundDelayedHide = this.delayedHide.bind(this)
    this.boundUpdatePosition = this.updatePosition.bind(this)
    this.hideTimeout = null
    
    // Set up trigger based on type
    if (this.triggerValue === "hover") {
      this.setupHoverTrigger()
    } else {
      this.setupClickTrigger()
    }
  }

  disconnect() {
    this.teardownTrigger()
    this.teardownPositioning()
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout)
    }
  }

  // Actions
  async show() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout)
      this.hideTimeout = null
    }
    
    if (this.hasContentTarget) {
      try {
        // Pre-calculate position BEFORE showing popover (eliminates jump)
        const { x, y, placement } = await this.calculatePosition()
        this.contentTarget.style.left = `${x}px`
        this.contentTarget.style.top = `${y}px`
        this.contentTarget.dataset.placement = placement
        
        // Clear positioned flag
        this.contentTarget.removeAttribute('data-positioned')
        
        // Now show popover at the correct position
        this.contentTarget.showPopover()
        this.element.setAttribute('data-state', 'open')
        
        // Mark as positioned
        this.contentTarget.setAttribute('data-positioned', 'true')
        
        // Set up dynamic repositioning
        this.setupPositioning()
        
        // Dispatch custom event
        this.element.dispatchEvent(new CustomEvent('orbital:popover:shown', {
          bubbles: true,
          detail: { popover: this.contentTarget }
        }))
      } catch (e) {
        // Popover API not supported, fallback gracefully
        console.warn('Popover API not supported:', e)
      }
    }
  }

  hide() {
    if (this.hasContentTarget) {
      try {
        this.contentTarget.hidePopover()
        this.element.setAttribute('data-state', 'closed')
        
        // Clear positioned flag for next open
        this.contentTarget.removeAttribute('data-positioned')
        
        // Clean up positioning listeners
        this.teardownPositioning()
        
        // Dispatch custom event
        this.element.dispatchEvent(new CustomEvent('orbital:popover:hidden', {
          bubbles: true,
          detail: { popover: this.contentTarget }
        }))
      } catch (e) {
        // Popover API not supported, fallback gracefully
        console.warn('Popover API not supported:', e)
      }
    }
  }

  delayedHide() {
    // Add small delay before hiding to allow mouse movement between trigger and popover
    this.hideTimeout = setTimeout(() => {
      this.hide()
    }, 100)
  }

  async toggle() {
    if (this.hasContentTarget) {
      try {
        const isOpen = this.element.getAttribute('data-state') === 'open'
        
        if (isOpen) {
          this.contentTarget.hidePopover()
          this.element.setAttribute('data-state', 'closed')
          this.contentTarget.removeAttribute('data-positioned')
          this.teardownPositioning()
        } else {
          // Pre-calculate position BEFORE showing popover (eliminates jump)
          const { x, y, placement } = await this.calculatePosition()
          this.contentTarget.style.left = `${x}px`
          this.contentTarget.style.top = `${y}px`
          this.contentTarget.dataset.placement = placement
          
          // Clear positioned flag
          this.contentTarget.removeAttribute('data-positioned')
          
          // Now show popover at the correct position
          this.contentTarget.showPopover()
          this.element.setAttribute('data-state', 'open')
          
          // Mark as positioned
          this.contentTarget.setAttribute('data-positioned', 'true')
          
          this.setupPositioning()
        }
      } catch (e) {
        // Popover API not supported, fallback gracefully
        console.warn('Popover API not supported:', e)
      }
    }
  }

  // Calculate position without applying it (for pre-positioning)
  async calculatePosition() {
    if (!this.hasTriggerTarget || !this.hasContentTarget) {
      return { x: 0, y: 0, placement: 'bottom' }
    }
    
    const referenceEl = this.triggerTarget
    const floatingEl = this.contentTarget
    
    // Determine middleware based on position value
    let middleware, placement
    
    if (this.positionValue === 'auto') {
      // Use autoPlacement for automatic positioning
      middleware = [
        offset(8),
        autoPlacement({
          allowedPlacements: ['top', 'bottom', 'left', 'right']
        }),
        shift({ padding: 8 })
      ]
    } else {
      // Use specific placement with flip and shift
      placement = this.positionValue
      middleware = [
        offset(8),
        flip(),
        shift({ padding: 8 })
      ]
    }
    
    try {
      const result = await computePosition(referenceEl, floatingEl, {
        placement,
        middleware
      })
      
      return {
        x: result.x,
        y: result.y,
        placement: result.placement || placement || 'bottom'
      }
    } catch (e) {
      console.warn('Failed to compute position:', e)
      return { x: 0, y: 0, placement: 'bottom' }
    }
  }

  // Apply position and placement data attribute
  async updatePosition() {
    const { x, y, placement } = await this.calculatePosition()
    
    if (this.hasContentTarget) {
      Object.assign(this.contentTarget.style, {
        left: `${x}px`,
        top: `${y}px`,
      })
      this.contentTarget.dataset.placement = placement
    }
  }

  setupPositioning() {
    // Reposition on scroll and resize
    window.addEventListener('scroll', this.boundUpdatePosition, true)
    window.addEventListener('resize', this.boundUpdatePosition)
  }

  teardownPositioning() {
    window.removeEventListener('scroll', this.boundUpdatePosition, true)
    window.removeEventListener('resize', this.boundUpdatePosition)
  }

  // Lifecycle callback when position value changes
  positionValueChanged() {
    // Reposition if popover is currently open
    if (this.element.getAttribute('data-state') === 'open') {
      this.updatePosition()
    }
  }

  // Private methods
  setupHoverTrigger() {
    if (this.hasTriggerTarget) {
      this.triggerTarget.addEventListener('mouseenter', this.boundShow)
      this.triggerTarget.addEventListener('mouseleave', this.boundDelayedHide)
    }
    
    if (this.hasContentTarget) {
      this.contentTarget.addEventListener('mouseenter', this.boundShow)
      this.contentTarget.addEventListener('mouseleave', this.boundDelayedHide)
    }
  }

  setupClickTrigger() {
    // Add explicit click handler as fallback for native popovertarget
    if (this.hasTriggerTarget) {
      this.triggerTarget.addEventListener('click', this.handleClick.bind(this))
    }
    
    // Also listen for native toggle events from popovertarget
    if (this.hasContentTarget) {
      this.contentTarget.addEventListener('toggle', this.handleToggle.bind(this))
    }
  }

  teardownTrigger() {
    if (this.hasTriggerTarget) {
      this.triggerTarget.removeEventListener('mouseenter', this.boundShow)
      this.triggerTarget.removeEventListener('mouseleave', this.boundDelayedHide)
      this.triggerTarget.removeEventListener('click', this.handleClick.bind(this))
    }
    
    if (this.hasContentTarget) {
      this.contentTarget.removeEventListener('mouseenter', this.boundShow)
      this.contentTarget.removeEventListener('mouseleave', this.boundDelayedHide)
      this.contentTarget.removeEventListener('toggle', this.handleToggle.bind(this))
    }
  }

  handleClick(event) {
    // Fallback click handler - only trigger if the native popovertarget didn't work
    // Check if the clicked element or its parent has popovertarget attribute
    const target = event.currentTarget
    const hasPopoverTarget = target.hasAttribute('popovertarget') || 
                            target.querySelector('[popovertarget]')
    
    // If no popovertarget attribute, manually toggle the popover
    if (!hasPopoverTarget && this.hasContentTarget) {
      event.preventDefault()
      this.toggle()
    }
  }

  async handleToggle(event) {
    const state = event.newState // "open" or "closed"
    this.element.setAttribute('data-state', state)
    
    // Update position when opened via native toggle event
    if (state === 'open') {
      // Clear positioned flag during position calculation
      this.contentTarget.removeAttribute('data-positioned')
      
      // Position immediately (popover is already shown by native API)
      const { x, y, placement } = await this.calculatePosition()
      this.contentTarget.style.left = `${x}px`
      this.contentTarget.style.top = `${y}px`
      this.contentTarget.dataset.placement = placement
      
      // Mark as positioned to trigger CSS visibility
      this.contentTarget.setAttribute('data-positioned', 'true')
      
      this.setupPositioning()
    } else {
      this.teardownPositioning()
    }
    
    // Dispatch custom event
    const eventName = state === 'open' ? 'orbital:popover:shown' : 'orbital:popover:hidden'
    this.element.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      detail: { popover: this.contentTarget }
    }))
  }
}
