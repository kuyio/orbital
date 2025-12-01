import { type Config } from 'tailwindcss';

export default {
  content: [
    "./app/components/**/*.rb",
    "./app/views/**/*.html.erb",
    "./frontend/javascript/**/*.js",
    "./frontend/javascript/**/*.ts",
    "./lib/**/*.rb"
  ]
} satisfies Config;