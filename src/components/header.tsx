import { Bell, Download, MessageSquare } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        {/* Search bar area - grayed out rectangles like in the original */}
        <div className="flex-1 max-w-2xl">
          <div className="flex gap-4">
            <div className="h-8 w-64 bg-muted rounded-md" />
            <div className="h-8 w-96 bg-muted rounded-md" />
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <Download className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          <MessageSquare className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
