# frozen_string_literal: true

class Demo::AppFrame < Orbital::Component
  orb_template <<-ORB
    <div **html_attributes>
      <Page>
        <Page:Header>
          <NavigationMenu>
            <NavigationMenu:Brand>
              <Button variant="link" url="/" class="mr-2">
                <Image asset="logo.svg" width=28 height=28/>
                <Text weight="bold">Orbital</Text>
              </Button>
            </NavigationMenu:Brand>

            <NavigationMenu:Mobile>
              <Menu>
                <Menu:Item url="/components" icon="cube">Components</Menu:Item>
                <Menu:Item url="/blocks" icon="table-cells">Blocks</Menu:Item>
                <Menu:Item url="/themes" icon="palette">Theming</Menu:Item>
                <Menu:Separator/>
                <Menu:Item url="https://github.com/kuyio/orb_template" icon={{name: "github", variant: "brands"}}>GitHub</Menu:Item>
                <Menu:Item url="https://kuy.io" icon="compass">kuy.io</Menu:Item>
              </Menu>
            </NavigationMenu:Mobile>

            <Button url="/components" variant="ghost">Components</Button>
            <Button url="/blocks" variant="ghost">Blocks</Button>
            <Button url="/themes" variant="ghost">Theming</Button>
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
            <Button variant="ghost" size="icon">
              <Icon name="moon" variant="regular"/>
            </Button>
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
