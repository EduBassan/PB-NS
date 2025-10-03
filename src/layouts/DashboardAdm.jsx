import PageNotFound from "@/pages/PageNotFound";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardAdm () {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    return (
      <div>
        {! usuarioLogado && (
                <PageNotFound/>
        )}
        {usuarioLogado?.tipo === "adm" && (
          <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            }
          }
          >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
              <Outlet/>
        </SidebarInset>
        </SidebarProvider>
        )}    
    </div>
  )
}