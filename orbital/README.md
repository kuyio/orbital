# Orbital

A modern, themable component library for Ruby on Rails applications using ViewComponent and Tailwind CSS.

## Features

- **Themable**: Easily customize colors, typography, and spacing using CSS variables
- **Dark Mode**: Built-in dark mode support via class toggle
- **Accessible**: Components follow accessibility best practices
- **Type-Safe**: Built with ViewComponent for type-safe component rendering
- **Modern Stack**: Uses Tailwind CSS 4.x for styling

## Installation

Add the gem to your application's Gemfile:

```bash
bundle add orbital
```

Or install it yourself:

```bash
gem install orbital
```

## Usage

### Basic Usage

Include Orbital's CSS in your application:

```erb
<!-- In your layout file -->
<%= stylesheet_link_tag "orbital/index" %>
```

Then use Orbital components in your views:

```erb
<%= render Orbital::Button.new(variant: :primary, size: :default) do %>
  Click me
<% end %>
```

### Theming

Orbital components use CSS variables for theming, making it easy to customize the appearance to match your brand.

#### Method 1: Override CSS Variables

Create a CSS file that overrides Orbital's defaults:

```css
/* app/assets/stylesheets/theme.css */
:root {
  --primary: #your-brand-color;
  --primary-foreground: white;
  --radius: 1rem; /* Adjust border radius */
}
```

Then import it after Orbital's CSS:

```erb
<%= stylesheet_link_tag "orbital/index" %>
<%= stylesheet_link_tag "theme" %>
```

#### Method 2: Inline in Your Main CSS

In your main application CSS file:

```css
/* app/assets/stylesheets/application.css */
@import "orbital/index.css";

:root {
  /* Your theme overrides */
  --primary: #your-brand-color;
  --secondary: #your-secondary-color;
  --radius: 0.75rem;
}
```

#### Available Theme Variables

**Color Variables:**
- `--primary` / `--primary-foreground` - Main brand color (buttons, links, focus states)
- `--secondary` / `--secondary-foreground` - Secondary actions and backgrounds
- `--destructive` / `--destructive-foreground` - Error states and destructive actions
- `--muted` / `--muted-foreground` - Subdued text and backgrounds
- `--accent` / `--accent-foreground` - Accent colors for hover states
- `--card` / `--card-foreground` - Card component backgrounds
- `--popover` / `--popover-foreground` - Popover backgrounds
- `--border` - Border colors
- `--input` - Input field border colors
- `--ring` - Focus ring colors

**Semantic Feedback Colors:**
- `--tone-success` - Success messages
- `--tone-warning` - Warning messages
- `--tone-danger` - Danger/error messages
- `--tone-magic` - Special/magic messages
- `--tone-info` - Info messages

**Layout & Typography:**
- `--radius` - Border radius (default: `0.5rem`)
- `--font-weight-normal/medium/semibold/bold` - Font weights
- `--text-body-xs/sm/md/lg/xl` - Body text sizes
- `--text-heading-xs/sm/md/lg/xl/2xl/3xl/4xl` - Heading sizes

For a complete example, see [`demo/custom-theme.css`](demo/custom-theme.css).

### Dark Mode

Orbital includes built-in dark mode support. To enable dark mode, add the `dark` class to your `<html>` or `<body>` element:

```erb
<html class="<%= dark_mode? ? 'dark' : '' %>">
  <!-- Your app -->
</html>
```

You can also customize dark mode colors:

```css
.dark {
  --primary: #your-dark-mode-primary;
  --card: #your-dark-mode-card-bg;
  /* ... other dark mode overrides */
}
```

### Host Application Responsibilities

Orbital **only styles** `.Orbital-*` components. Your host application is responsible for:

- Page background colors and layouts
- Body text colors and default fonts
- Global margins and padding
- Any non-component styling

Example host app CSS:

```css
html {
  background-color: #f9fafb;
}

body {
  margin: 0;
  padding: 20px;
  font-family: 'Inter', system-ui, sans-serif;
  color: #1f2937;
}
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

### Building CSS

To build the CSS assets:

```bash
bun run build
```

The CSS will be compiled to `app/assets/stylesheets/orbital/index.css`.

### Running Tests

```bash
rake spec
```

## Documentation

- [Theming Guide](demo/README.md) - Complete theming documentation with examples
- [Custom Theme Example](demo/custom-theme.css) - Example pink theme with all variables documented

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/orbital. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/[USERNAME]/orbital/blob/main/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Orbital project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/[USERNAME]/orbital/blob/main/CODE_OF_CONDUCT.md).
