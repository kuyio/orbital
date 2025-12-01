# Orbital - View Components

![Preview](./preview.png)

This repository contains **Orbital**, a demonstration of of you can build reusable view components for Ruby on Rails using the [ORB Template Language](https://github.com/kuyio/orb_template) together with [TailwindCSS](https://tailwindcss.com/), along with a sample Rails application that showcases how the components and component styles can be imported and used in a real app.

## Project Structure

- **`orbital/`** - The Orbital gem containing view components
- **`demo/`** - A Rails demo application that uses and showcases Orbital components

## Getting Started

### Prerequisites

- Ruby 3.x
- Node.js (for Tailwind CSS processing)
- Bundler gem

### Installation

Run the following commands to set up the demo application after cloning the repository:

   ```bash
   cd demo
   bundle install
   npm install
   # or bun install
   ```


### Running the Demo

   ```bash
   cd demo
   rails server
   ```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the demo application in action.

### Development

For development with live CSS reloading:

   ```bash
   cd demo
   foreman start -f Procfile.dev
   ```

## Available Components

The Orbital gem includes a variety of demo components:

- **Accordion** - Collapsible content sections
- **Badge** - Small status indicators
- **Button** - Interactive button elements
- **Button Group** - Grouped button layouts
- **Card** - Content containers with header, body, and footer
- **Checkbox** - Form input controls
- **Icon** - Icon display components
- **Image** - Responsive image handling
- **Navigation Menu** - Site navigation components
- **Spinner** - Loading indicators
- **Text** - Typography components
- **Text Field** - Form input fields
- **Typography** - Text styling utilities

## Customization

The components are built with Tailwind CSS v4 and can be easily customized through:

- **Tailwind Configuration** - Modify `tailwind.config.js` in both directories
- **Component Overrides** - Each component accepts custom CSS classes
- **Theme Variables** - Adjust colors, spacing, and typography through Tailwind's theme system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with the demo application
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE.txt).