import {
  LayoutDashboard,
  MapPin,
  Settings,
  Wrench,
  Building,
  Users,
  Download,
  FileText,
  Shield,
  History,
  Plus,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  badge?: string | number
  isActive?: boolean
  hasSubmenu?: boolean
}

function SidebarItem({ icon, label, badge, isActive, hasSubmenu }: SidebarItemProps) {
  return (
    <div className={cn(
      "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors",
      isActive ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    )}>
      <div className="flex items-center gap-3">
        <div className="w-4 h-4">{icon}</div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
        {hasSubmenu && <ChevronRight className="w-3 h-3" />}
      </div>
    </div>
  )
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
          {title}
        </h3>
        <Plus className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground" />
      </div>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-card border-r border-border p-4 space-y-6">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3">
        <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">🌊</span>
        </div>
        <span className="font-semibold text-foreground">anticheat.ac</span>
      </div>

      {/* Services Section */}
      <SidebarSection title="Services">
        <SidebarItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          isActive={true}
        />
        <SidebarItem
          icon={<MapPin />}
          label="Pins"
          badge="13"
        />
        <SidebarItem
          icon={<Settings />}
          label="Custom Strings"
        />
        <SidebarItem
          icon={<Wrench />}
          label="Configs"
        />
      </SidebarSection>

      {/* Enterprise Section */}
      <SidebarSection title="Enterprise">
        <SidebarItem
          icon={<Building />}
          label="Enterprise"
        />
      </SidebarSection>

      {/* Groups Section */}
      <SidebarSection title="Groups">
        <SidebarItem
          icon={<Users />}
          label="Groups"
          badge="New"
        />
      </SidebarSection>

      {/* Other Section */}
      <SidebarSection title="Other">
        <SidebarItem
          icon={<Download />}
          label="Download"
        />
        <SidebarItem
          icon={<FileText />}
          label="Terms of Service"
        />
        <SidebarItem
          icon={<Shield />}
          label="Privacy Policy"
        />
        <SidebarItem
          icon={<History />}
          label="Changelogs"
        />
      </SidebarSection>

      {/* User Section */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">R</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">reesecatt</div>
            <div className="text-xs text-muted-foreground">Customer</div>
          </div>
          <Settings className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
        </div>
      </div>
    </div>
  )
}
