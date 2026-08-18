import { Link, usePage } from "@inertiajs/react"
import { ChevronRightIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: React.ReactNode
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { url } = usePage();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Content Management System</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((menu) => (
          <Collapsible
            key={menu.title}
            defaultOpen={url.startsWith(menu.url)}
            render={<SidebarMenuItem />}
          >
            <SidebarMenuButton
              tooltip={menu.title}
              render={menu.items?.length ? <span></span> : <Link href={menu.url} />}
              className={cn("my-1", {
                "bg-primary text-secondary hover:bg-primary hover:text-secondary":
                  menu.url === url && !menu.items?.length
              })}
            >
              {menu.icon}{menu.title}
            </SidebarMenuButton>
            {menu.items?.length ? (
              <>
                <CollapsibleTrigger
                  render={
                    <SidebarMenuAction className="aria-expanded:rotate-90" />
                  }
                >
                  <ChevronRightIcon />
                  <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menu.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          render={<Link href={subItem.url} />}
                          className={cn("my-1", {
                            "bg-black text-white hover:bg-black hover:text-white": subItem.url === url
                          })}
                        >
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            ) : null}
          </Collapsible>
        ))
        }
      </SidebarMenu >
    </SidebarGroup >
  )
}
