import { Application } from "@hotwired/stimulus"

// Check if host app already has Stimulus initialized
let application;
if (window.Stimulus) {
  // Use existing Stimulus application from host
  application = window.Stimulus;
  console.log("Orbital: Using existing Stimulus application");
} else {
  // Initialize new Stimulus application
  application = Application.start();
  application.debug = false;
  window.Stimulus = application;
  console.log("Orbital: Initialized new Stimulus application");
}

// Import and register Orbital controllers with 'orbital-' prefix
import DialogController from "./controllers/dialog_controller"
import PopoverController from "./controllers/popover_controller"
import MenuController from "./controllers/menu_controller"
import MenuSubController from "./controllers/menu_sub_controller"
import SelectController from "./controllers/select_controller"

application.register("orbital-dialog", DialogController)
application.register("orbital-popover", PopoverController)
application.register("orbital-menu", MenuController)
application.register("orbital-menu-sub", MenuSubController)
application.register("orbital-select", SelectController)

export { application }
