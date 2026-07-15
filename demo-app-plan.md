# Demo App TODO

## Navigation cleanup

- [x] Remove "Directory" link from `AppFrame` nav
- [x] Remove "Docs" link from `AppFrame` nav (no planned page)
- [x] Add routes for `/components`, `/blocks`, `/charts`, `/themes`, `/colors` in `routes.rb`
- [x] Add controller actions for each page in `StaticPagesController`

## Page: Components (`/components`)

Restructured as a `ComponentsController` with index + show pages at `/components/:id`.
Each component page follows the shadcn pattern: title, subtitle, canonical example with
"View Code" toggle, usage section, variant demos, and API reference table.

- [x] Component index page with grid of links
- [x] Individual pages for all 25 components:
  - [x] Accordion, Alert, Badge, Button, ButtonGroup
  - [x] Card, CheckBox, Dialog (+ ConfirmationDialog, DeleteDialog)
  - [x] Dropdown, Expander, Heading, Icon, Image
  - [x] Kbd / KbdGroup, Menu (Item, Label, Separator, Sub)
  - [x] NavigationMenu, Popcard, Popover, Select
  - [x] Separator, Spinner, Text, TextField, Tooltip, Typography

## Page: Blocks (`/blocks`)

Composed UI patterns built from multiple Orbital components.

- [ ] Design block categories (e.g. forms, cards, hero sections, pricing tables, auth)
- [ ] Build 3-5 example blocks per category
- [ ] Create view at `static_pages/blocks.html.orb`

## Page: Charts (`/charts`)

- [ ] Decide on a charting approach (SVG-based components, or a JS library)
- [ ] Build or integrate basic chart types (bar, line, pie/donut, area)
- [ ] Create view at `static_pages/charts.html.orb` with live chart demos

## Page: Themes (`/themes`)

- [ ] Show the current Orbital CSS variable set (light + dark) with live swatches
- [ ] Allow live preview of variable overrides (color pickers or preset themes)
- [ ] Create view at `static_pages/themes.html.orb`

## Page: Colors (`/colors`)

- [ ] Display the full Orbital color palette: primary, secondary, muted, accent, destructive, semantic tones
- [ ] Show each color with its CSS variable name, hex value, and contrast ratio
- [ ] Light/dark side-by-side comparison
- [ ] Create view at `static_pages/colors.html.orb`

## Feature: CMD+K search

The search button in `AppFrame` (line 23-29) is cosmetic — no handler, no palette.

- [ ] Create a `CommandPalette` component (dialog-based overlay)
- [ ] Add a Stimulus controller to listen for `CMD+K` / `Ctrl+K` globally
- [ ] Wire the search button click to open the palette
- [ ] Populate searchable items from the nav pages and component list
- [ ] Implement keyboard navigation (arrow keys, enter to select, esc to close)
- [ ] Filter/fuzzy-match as user types

## Feature: Light/dark mode toggle

The moon button in `AppFrame` (line 39-41) is cosmetic. Dark mode CSS variables exist in `orbital/frontend/stylesheets/index.css` (`.dark` class on html/body).

- [ ] Add a Stimulus controller (`theme_controller.js`) that toggles `dark` class on `<html>`
- [ ] Persist preference in `localStorage`
- [ ] Respect `prefers-color-scheme` as the default when no preference is stored
- [ ] Swap the icon between moon (light mode) and sun (dark mode)
- [ ] Wire the button in `AppFrame` to the controller via `data-action`
