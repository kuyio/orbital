import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="orbital-menu-sub"
export default class extends Controller {
  static targets = ["trigger", "content"]

  toggle() {
    const isOpen = this.element.getAttribute('data-state') === 'open'
    if (isOpen) {
      this.close()
    } else {
      this.open()
    }
  }
  
  open() {
    this.element.setAttribute('data-state', 'open')
    this.triggerTarget.setAttribute('aria-expanded', 'true')
    
    // Focus first item in submenu
    const firstItem = this.contentTarget.querySelector('[role="menuitem"]')
    if (firstItem) {
      firstItem.focus()
    }
  }
  
  close() {
    this.element.setAttribute('data-state', 'closed')
    this.triggerTarget.setAttribute('aria-expanded', 'false')
    
    // Return focus to trigger
    this.triggerTarget.focus()
  }
}
