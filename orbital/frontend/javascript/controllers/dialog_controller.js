import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="orbital-dialog"
export default class extends Controller {
  static values = {
    open: { type: Boolean, default: false },
    dismissible: { type: Boolean, default: true }
  }

  connect() {
    // Open dialog if open value is true
    if (this.openValue) {
      this.open()
    }
    
    // Handle backdrop clicks for dismissible dialogs
    if (this.dismissibleValue) {
      this.element.addEventListener('click', this.handleBackdropClick.bind(this))
    }
    
    // Listen for close event
    this.element.addEventListener('close', this.handleClose.bind(this))
  }

  disconnect() {
    this.element.removeEventListener('click', this.handleBackdropClick.bind(this))
    this.element.removeEventListener('close', this.handleClose.bind(this))
  }

  // Actions
  open() {
    this.element.showModal()
    this.element.setAttribute('data-state', 'open')
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('orbital:dialog:opened', {
      bubbles: true,
      detail: { dialog: this.element }
    }))
  }

  close() {
    this.element.close()
    this.element.setAttribute('data-state', 'closed')
  }

  // Private methods
  handleBackdropClick(event) {
    if (this.dismissibleValue && event.target === this.element) {
      this.close()
    }
  }

  handleClose() {
    this.element.setAttribute('data-state', 'closed')
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('orbital:dialog:closed', {
      bubbles: true,
      detail: { dialog: this.element }
    }))
  }
}
