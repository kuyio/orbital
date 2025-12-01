import { type Config } from 'tailwindcss';

export default {
  content: [
    "./app/views/**/*.orb",
    "./app/views/**/*.html.erb",
    "./app/components/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.ts"
  ]
} satisfies Config;