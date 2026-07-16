# frozen_string_literal: true

class Demo::AppFrame < Orbital::Component
  orb_template <<-ORB
    <div **html_attributes>
      <Page>
        <Page:Header>
          <NavigationMenu>
            <NavigationMenu:Brand>
              <Button variant="link" url="/" class="mr-2">
                <svg width="28" height="28" viewBox="0 0 390 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="194.5" cy="195.5" r="157" stroke="currentColor" stroke-width="8"/>
                  <circle cx="194.5" cy="195.5" r="90.42" stroke="currentColor" stroke-width="8"/>
                  <circle cx="194.5" cy="195.5" r="43.58" fill="currentColor"/>
                  <circle cx="297.39" cy="76.87" r="24.21" fill="currentColor"/>
                  <circle cx="118.39" cy="241.87" r="16" fill="currentColor"/>
                </svg>
                <Text weight="bold">Orbital</Text>
              </Button>
            </NavigationMenu:Brand>

            <NavigationMenu:Mobile>
              <Menu>
                <Menu:Item url="/components" icon="cube">Components</Menu:Item>
                <Menu:Item url="/blocks" icon="table-cells">Blocks</Menu:Item>
                <Menu:Item url="/themes" icon="palette">Themes</Menu:Item>
                <Menu:Item url="/colors" icon="swatchbook">Colors</Menu:Item>
                <Menu:Separator/>
                <Menu:Item url="https://github.com/kuyio/orb_template" icon={{name: "github", variant: "brands"}}>GitHub</Menu:Item>
                <Menu:Item url="https://kuy.io" icon="compass">kuy.io</Menu:Item>
              </Menu>
            </NavigationMenu:Mobile>

            <Button url="/components" variant="ghost">Components</Button>
            <Button url="/blocks" variant="ghost">Blocks</Button>
            <Dropdown label="Customization" variant="ghost">
              <Menu>
                <Menu:Item url="/themes" icon="palette">Themes</Menu:Item>
                <Menu:Item url="/colors" icon="swatchbook">Colors</Menu:Item>
              </Menu>
            </Dropdown>
            <Expander/>
            <Button variant="outline" class="font-normal w-48 justify-between!">
              <span>Search...</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </Button>
            <Separator orientation="vertical" class="h-8"/>
            <Button variant="ghost" size="icon" url="https://github.com/kuyio/orb_template">
              <Icon name="github" variant="brands"/>
            </Button>
            <Separator orientation="vertical" class="h-8"/>
            <Button variant="ghost" size="icon" url="https://kuy.io">
              <Icon name="compass" variant="regular"/>
            </Button>
            <Separator orientation="vertical" class="h-8"/>
            <div data-controller="dark-mode">
              <Button variant="ghost" size="icon" data-action="click->dark-mode#toggle">
                <span data-icon="moon"><Icon name="moon" variant="regular"/></span>
                <span data-icon="sun" style="display:none"><Icon name="sun" variant="regular"/></span>
              </Button>
            </div>
          </NavigationMenu>
        </Page:Header>

        {{content}}
      </Page>
    </div>
  ORB

  private

  def default_attributes
    super.merge(
      class: class_names(
        "Orbital-App h-full w-full",
      )
    )
  end
end
