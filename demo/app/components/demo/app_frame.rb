# frozen_string_literal: true

class Demo::AppFrame < Orbital::Component
  orb_template <<-ORB
    <div **html_attributes>
      <Page>
        <Page:Header>
          <NavigationMenu>
            <Button variant="ghost" size="icon" url="/">
              <Image asset="logo.svg" width=28 height=28/>
            </Button>
            <Button url="/docs" variant="ghost">Docs</Button>
            <Button url="/components" variant="ghost">Components</Button>
            <Button url="/blocks" variant="ghost">Blocks</Button>
            <Button url="/charts" variant="ghost">Charts</Button>
            <Button url="/directory" variant="ghost">Directory</Button>
            <Button url="/themes" variant="ghost">Themes</Button>
            <Button url="/colors" variant="ghost">Colors</Button>
          </NavigationMenu>
          <div class="ml-auto flex items-center gap-2 h-6">
            <Button variant="secondary" class="font-normal w-64 justify-between!">
              <span>Search documentation...</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </Button>
            <Separator orientation="vertical"/>
            <Button variant="ghost" size="icon" url="https://github.com/kuyio/orb_template">
              <Icon name="github" variant="brands" />
            </Button>
            <Separator orientation="vertical"/>
            <Button variant="ghost" size="icon" url="https://kuy.io">
              <Icon name="compass" variant="regular"/>
            </Button>
            <Separator orientation="vertical"/>
            <Button variant="ghost" size="icon">
              <Icon name="moon" variant="regular"/>
            </Button>
          </div>
        </Page:Header>

        {{content}}
      </Page>
    </div>
  ORB

  private

  def default_attributes
    super.merge(
      class: class_names(
        "Orbital-App h-full w-full overflow-hidden",
      )
    )
  end
end
