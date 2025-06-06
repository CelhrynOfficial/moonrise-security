"use client"

import { motion } from "framer-motion"
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
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  FloatingElement,
  GlowText
} from "@/components/animations"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description?: string
  color: string
}

function EnhancedStatsCard({ title, value, icon, description, color }: StatsCardProps) {
  return (
    <AnimatedCard>
      <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <motion.div
            className="w-4 h-4 text-muted-foreground"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div
            className="text-2xl font-bold text-foreground"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <GlowText className={color}>{value}</GlowText>
          </motion.div>
          {description && (
            <motion.p
              className="text-xs text-muted-foreground mt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </CardContent>

        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(45deg, transparent, ${color.includes('green') ? 'rgba(34, 197, 94, 0.2)' :
                                                              color.includes('blue') ? 'rgba(59, 130, 246, 0.2)' :
                                                              color.includes('yellow') ? 'rgba(234, 179, 8, 0.2)' :
                                                              'rgba(168, 85, 247, 0.2)'}, transparent)`,
            backgroundSize: "200% 200%"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </Card>
    </AnimatedCard>
  )
}

interface ActivityItemProps {
  title: string
  description: string
  timestamp: string
  type: "info" | "warning" | "success"
  author: string
}

function EnhancedActivityItem({ title, description, timestamp, type, author }: ActivityItemProps) {
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
    <motion.div
      className="flex gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors relative overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02, x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="mt-1"
        animate={{
          rotate: type === "warning" ? [0, 5, -5, 0] : 0,
          scale: type === "success" ? [1, 1.1, 1] : 1
        }}
        transition={{
          duration: type === "warning" ? 0.5 : 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: type === "warning" ? 2 : 1
        }}
      >
        {getTypeIcon()}
      </motion.div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <motion.span
            className="font-medium text-foreground"
            whileHover={{ color: "#3b82f6" }}
          >
            {title}
          </motion.span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <motion.span
          className={`text-xs font-medium ${getTypeColor()}`}
          whileHover={{ scale: 1.05 }}
        >
          {author}
        </motion.span>
      </div>

      {/* Pulse effect for new items */}
      {type === "success" && (
        <motion.div
          className="absolute inset-0 bg-green-500/10 rounded-lg"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </motion.div>
  )
}

export function EnhancedDashboard() {
  return (
    <div className="space-y-6">
      {/* Enhanced Stats Grid */}
      <FadeInSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem>
            <EnhancedStatsCard
              title="Server Status"
              value="Online"
              icon={<Server />}
              description="All systems operational"
              color="text-green-400"
            />
          </StaggerItem>
          <StaggerItem>
            <EnhancedStatsCard
              title="Active Protections"
              value="47"
              icon={<Shield />}
              description="Security measures active"
              color="text-blue-400"
            />
          </StaggerItem>
          <StaggerItem>
            <EnhancedStatsCard
              title="Connected Users"
              value="1,247"
              icon={<Users />}
              description="+12% from last month"
              color="text-purple-400"
            />
          </StaggerItem>
          <StaggerItem>
            <EnhancedStatsCard
              title="Downloads"
              value="23.4K"
              icon={<Download />}
              description="Total client downloads"
              color="text-yellow-400"
            />
          </StaggerItem>
        </StaggerContainer>
      </FadeInSection>

      {/* Enhanced Activity Feed */}
      <FadeInSection delay={0.3}>
        <AnimatedCard>
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Activity className="w-5 h-5" />
                </motion.div>
                <GlowText>Recent Activity</GlowText>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <StaggerContainer>
                <StaggerItem>
                  <EnhancedActivityItem
                    title="Groups Feature Released"
                    description="In these days we have been working on a new feature. We are pleased to announce the arrival of Groups to Ocean! Since not everyone has a group like Enterprises, from now on users will be able to create groups where the group owner can monitor the scans of their respective members."
                    timestamp="2024-05-02"
                    type="success"
                    author="clichod"
                  />
                </StaggerItem>
                <StaggerItem>
                  <EnhancedActivityItem
                    title="Pin System Update"
                    description="Several days ago, we've been experiencing an issue regarding the 6-digit pins. Ocean has experienced unexpected growth in recent months, resulting in a limitation on the number of pins that can be generated and hence, duplicates appearing."
                    timestamp="2024-04-14"
                    type="info"
                    author="clichod"
                  />
                </StaggerItem>
                <StaggerItem>
                  <EnhancedActivityItem
                    title="Ocean 5.0 Released"
                    description="Ocean 5.0 has been released! 🎉 New methods for detecting clients in a customizable way were introduced with 'Custom Suspicious Files.' We have made a significant number of changes to the website and client."
                    timestamp="2023-12-20"
                    type="success"
                    author="ranciic"
                  />
                </StaggerItem>
                <StaggerItem>
                  <EnhancedActivityItem
                    title="System Maintenance"
                    description="hi ocean!"
                    timestamp="2023-12-10"
                    type="info"
                    author="clichod"
                  />
                </StaggerItem>
              </StaggerContainer>
            </CardContent>

            {/* Animated background pattern */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            </motion.div>
          </Card>
        </AnimatedCard>
      </FadeInSection>

      {/* Floating decorative elements */}
      <FloatingElement className="fixed top-20 right-20 pointer-events-none">
        <div className="w-3 h-3 bg-blue-500/20 rounded-full" />
      </FloatingElement>
      <FloatingElement className="fixed bottom-32 left-32 pointer-events-none">
        <div className="w-2 h-2 bg-purple-500/20 rounded-full" />
      </FloatingElement>
    </div>
  )
}
