import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Server,
  Shield,
  Users,
  Download,
  AlertTriangle,
  CheckCircle,
  Activity
} from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description?: string
}

function StatsCard({ title, value, icon, description }: StatsCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="w-4 h-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}

interface ActivityItemProps {
  title: string
  description: string
  timestamp: string
  type: "info" | "warning" | "success"
  author: string
}

function ActivityItem({ title, description, timestamp, type, author }: ActivityItemProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return <Activity className="w-4 h-4 text-blue-500" />
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case "success":
        return "text-green-400"
      case "warning":
        return "text-yellow-400"
      default:
        return "text-blue-400"
    }
  }

  return (
    <div className="flex gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className="mt-1">{getTypeIcon()}</div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground">{title}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <span className={`text-xs font-medium ${getTypeColor()}`}>
          {author}
        </span>
      </div>
    </div>
  )
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Server Status"
          value="Online"
          icon={<Server />}
          description="All systems operational"
        />
        <StatsCard
          title="Active Protections"
          value="47"
          icon={<Shield />}
          description="Security measures active"
        />
        <StatsCard
          title="Connected Users"
          value="1,247"
          icon={<Users />}
          description="+12% from last month"
        />
        <StatsCard
          title="Downloads"
          value="23.4K"
          icon={<Download />}
          description="Total client downloads"
        />
      </div>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ActivityItem
            title="Groups Feature Released"
            description="In these days we have been working on a new feature. We are pleased to announce the arrival of Groups to Ocean! Since not everyone has a group like Enterprises, from now on users will be able to create groups where the group owner can monitor the scans of their respective members. This could be useful for a team requiring simple and constant monitoring, for example, a server with a 'Screenshare' team."
            timestamp="2024-05-02"
            type="success"
            author="clichod"
          />
          <ActivityItem
            title="Pin System Update"
            description="Several days ago, we've been experiencing an issue regarding the 6-digit pins. Ocean has experienced unexpected growth in recent months, resulting in a limitation on the number of pins that can be generated and hence, duplicates appearing. We have updated the pin system, from now on, they will follow the format: A1B2C3D4, decreasing the possibility of duplicates."
            timestamp="2024-04-14"
            type="info"
            author="clichod"
          />
          <ActivityItem
            title="Ocean 5.0 Released"
            description="Ocean 5.0 has been released! 🎉 New methods for detecting clients in a customizable way were introduced with 'Custom Suspicious Files.' We have made a significant number of changes to the website and client, making the tool increasingly better and with a highly enviable range of detectability."
            timestamp="2023-12-20"
            type="success"
            author="ranciic"
          />
          <ActivityItem
            title="System Maintenance"
            description="hi ocean!"
            timestamp="2023-12-10"
            type="info"
            author="clichod"
          />
        </CardContent>
      </Card>
    </div>
  )
}
