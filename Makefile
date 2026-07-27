.PHONY: help setup test lint build clean \
       orbital-setup orbital-deps orbital-build orbital-test orbital-lint-ruby orbital-lint-js orbital-typecheck \
       demo-setup demo-deps demo-build demo-test demo-lint-ruby demo-lint-js demo-dev

ORBITAL_DIR := orbital
DEMO_DIR := demo

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-24s\033[0m %s\n", $$1, $$2}'

# ─── Global ──────────────────────────────────────────────────────────────────

setup: orbital-setup demo-setup ## Install all dependencies

test: lint orbital-test demo-test ## Run all tests and linters

lint: orbital-lint-ruby orbital-lint-js orbital-typecheck demo-lint-ruby demo-lint-js ## Run all linters

build: orbital-build demo-build ## Build all assets

clean: ## Remove build artifacts and caches
	rm -rf $(ORBITAL_DIR)/.parcel-cache
	rm -rf $(ORBITAL_DIR)/app/assets/javascripts/orbital/*.js
	rm -rf $(ORBITAL_DIR)/app/assets/stylesheets/orbital/*.css
	rm -rf $(DEMO_DIR)/app/assets/builds/*
	rm -rf $(DEMO_DIR)/tmp/cache

# ─── Orbital Gem ─────────────────────────────────────────────────────────────

orbital-setup: orbital-deps ## Set up the orbital gem

orbital-deps: ## Install orbital gem dependencies
	cd $(ORBITAL_DIR) && bundle install
	cd $(ORBITAL_DIR) && bun install

orbital-build: ## Build orbital JS and CSS assets
	cd $(ORBITAL_DIR) && bun run build

orbital-test: ## Run orbital RSpec tests
	cd $(ORBITAL_DIR) && bundle exec rspec

orbital-lint-ruby: ## Lint orbital Ruby files with RuboCop
	cd $(ORBITAL_DIR) && bundle exec rubocop

orbital-lint-js: ## Lint orbital JS/TS/CSS files with Biome
	bun x biome check $(ORBITAL_DIR)/frontend

orbital-typecheck: ## Type-check orbital TypeScript
	cd $(ORBITAL_DIR) && bun x tsc --noEmit

# ─── Demo App ────────────────────────────────────────────────────────────────

demo-setup: demo-deps ## Set up the demo app
	cd $(DEMO_DIR) && bin/rails db:prepare

demo-deps: ## Install demo app dependencies
	cd $(DEMO_DIR) && bundle install
	cd $(DEMO_DIR) && bun install

demo-build: ## Build demo JS and CSS assets
	cd $(DEMO_DIR) && bun run build
	cd $(DEMO_DIR) && bun run build:css

demo-test: ## Run demo Rails tests
	cd $(DEMO_DIR) && bin/rails test

demo-lint-ruby: ## Lint demo Ruby files with RuboCop
	cd $(DEMO_DIR) && bundle exec rubocop

demo-lint-js: ## Lint demo JS/TS/CSS files with Biome
	bun x biome check $(DEMO_DIR)/app/assets $(DEMO_DIR)/app/javascript

demo-dev: ## Start the demo development server
	cd $(DEMO_DIR) && bin/dev
