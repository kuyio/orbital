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

### Component Rules

1. Always use existing Orbital components where possible over custom Tailwind classes. Reaching for raw `<div class="flex ...">` or other Tailwind utilities when an Orbital component exists is a design smell.
2. Each Orbital component requires:
   - A component `.rb` file in `orbital/app/components/orbital/`
   - A stylesheet in `orbital/frontend/stylesheets/components/`
   - A documentation page in the demo app
   - A Stimulus controller in `orbital/frontend/javascript/controllers/` where dynamic behaviour is required
3. Use ORB template syntax (`orb_template <<-ORB ... ORB`) where appropriate. Simple components can directly use `def call ... end` with Rails tag helpers.
4. CSS classes must adhere to the `Orbital-` prefix and BEM-style conventions (e.g. `Orbital-Card`, `Orbital-Card-Header`, `Orbital-Card-Content`).

### Technical Notes

- `ORB Template` files have the file extension `.orb.erb` and are located in the `app/components` directory of both the demo application and the Orbital library. Reference documentation on the `ORB` Template language can be found at https://github.com/kuyio/orb_template
- The project uses `vite` on `bun` for compiling JavaScript and CSS assets, ensuring fast build times and efficient development workflows.
- Components are modeled after the `Shadcn UI` design system, adapted for use within the `Ruby on Rails` framework.
- Where possible, components should utilize modern CSS techniques and browser APIs to avoid reliance on JavaScript for styling and layout.
- The project adheres to best practices for accessibility and responsive design, ensuring that components are usable across a variety of devices and screen sizes.
- Component stylesheets use Tailwind CSS utility classes primarily with `@apply` directives within a `@layer components` block.
- View components use `data-` attributes for state management, interactions, and styling hooks, minimizing the need for JavaScript where possible.
- Component styles make use of the `data-` attributes to apply different styles based on component state (e.g., `data-state="open"`, `data-variant`, `data-size`).
- Where CSS-only-based solutions are not feasible, Stimulus controllers are used for interactivity, located in the `orbital/frontend/javascript/controllers` directory.
- Stimulus controllers are registered with an `orbital-` prefix to avoid naming conflicts. The `Orbital` view component library first determines whether the host app already has a Stimulus application initialized; if not, it initializes one. It registers the `orbital-` controllers with the existing or newly created Stimulus application.

## Issue Tracking instructions for Agents

This project uses `xpo` (Exponential) via the MCP server registered in `.mcp.json`.
Always use the MCP tools — never shell out to the `xpo` CLI.

Issue IDs in this project use the prefix `orbital-` (e.g. `orbital-a1b2c3`).

### Hard Rules

1. Every code change must be backed by an xpo issue transitioned to DOING before any file is modified.
2. Never start work on a BACKLOG issue without explicit user approval to transition it.
3. Bugs discovered during implementation may be filed and fixed without approval — file the issue, link it to the current work, and fix it.
4. Before beginning any implementation task, load the `xpo-workflow` skill and follow it.
5. If an MCP tool call fails, report the error to the user. Never fall back to the CLI.

### Agent Identity

Set the `assignee` field to yourself when transitioning an issue to DOING. Use the form
`<Agent Name> <agent@<host>.local>` — e.g. `Claude Code <agent@macbook.local>`.
