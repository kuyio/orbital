import { application } from "./application"

import HelloController from "./hello_controller"

application.register("hello", HelloController)

import DarkModeController from "./dark_mode_controller"

application.register("dark-mode", DarkModeController)

import CommandPaletteController from "./command_palette_controller"

application.register("command-palette", CommandPaletteController)

import ThemeController from "./theme_controller"

application.register("theme", ThemeController)
