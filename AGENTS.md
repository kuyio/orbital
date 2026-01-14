# Orbital View Components Library and Demo Application

This repository contains the Orbital view components library and design system, as well as a demo application to showcase its features.

The Orbital view components library provides a set of reusable UI components built with modern web technologies, designed to help developers create consistent and visually appealing user interfaces quickly and efficiently. It is based on `ORB Template` (https://github.com/open-rpc/orb-template), `Ruby`, `Rails`, and `Tailwind CSS`. The code is compiled using `vite` on `bun`.

The demo application serves as a practical example of how to implement and utilize the Orbital view components in a real-world scenario. It demonstrates various use cases and configurations, allowing developers to explore the capabilities of the library and understand how to integrate it into their own projects. It is also built with `Ruby on Rails` and uses `Tailwind CSS` for styling, as well as `ORB Template` for components.

## Folder Structure

### Demo App

- `demo/`: Contains the demo application showcasing the Orbital view components.
- `demo/app/views/static_pages/`: Contains the views for the demo application using Orbital components.
- `demo/app/assets/stylesheets/`: Contains the Tailwind CSS styles for the demo application, with theme customizations.
- `demo/app/components/`: Contains custom ORB-based components for the demo application, like the application frame.

### Orbital View Components Library

- `orbital/`: Contains the Orbital view components library and design system.
- `orbital/app/components/orbital/`: Contains the reusable Orbital view components.
- `orbital/frontend/stylesheets/components`: Contains the Tailwind CSS styles for the Orbital components.
- `orbital/frontend/javascript`: Contains the main JavaScript entry point for the Orbital library.

### Notes

- Both the demo application and the Orbital view components library are built using `Ruby on Rails` and utilize `Tailwind CSS` for styling.
- The Orbital components are designed to be easily integrated into other Rails applications, providing a consistent design system.
- The demo application serves as a reference implementation, demonstrating how to effectively use the Orbital components in a real-world scenario.
- `ORB Template` files have the file extension `.orb.erb` and are located in the `app/components` directory of both the demo application and the Orbital library. Reference documentation on the `ORB` Template language can be found at https://github.com/kuyio/orb_template
- The project uses `vite` on `bun` for compiling JavaScript and CSS assets, ensuring fast build times and efficient development workflows.
- Components are modeled after the `Shadcn UI` design system, adapted for use within the `Ruby on Rails` framework.
- Where possible, components should utilize modern CSS techniques and browser APIs to avoid reliance on JavaScript for styling and layout.
- The project adheres to best practices for accessibility and responsive design, ensuring that components are usable across a variety of devices and screen sizes.
- The Orbital view components are styles with custom BEM-style classes prefixed with `Orbital-`. Each component has a corresponding stylesheet in the `orbital/frontend/stylesheets/components` directory. These styles use Tailwind CSS utility classes primarily with `@apply` directives.
- View components use `data-` attributes for state management, interactions, and styling hooks, minimizing the need for JavaScript where possible.
- Component styles make use of the `data-` attributes to apply different styles based on component state (e.g., `data-state="open"`).
- Where CSS-only-based solutions are note feasible, Stimulus controllers are used for interactivity, located in the `orbital/frontend/javascript/controllers` directory.
- Stimulus controllers are registered with an `orbital-` prefix to avoid naming conflicts. The `Orbital` view component library first determines whether the host app already has a Stimulus application initialized; if not, it initializes one. It registers the `orbital-` controllers with the existing or newly created Stimulus application.
