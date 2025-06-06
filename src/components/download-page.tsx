"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Download,
  Shield,
  CheckCircle,
  AlertTriangle,
  Monitor,
  Smartphone,
  Gamepad2,
  Settings,
  ArrowLeft,
  ChevronRight,
  Moon,
  FileText,
  Play,
  Clock,
  Users,
  Lock,
  Zap,
  HardDrive,
  Cpu,
  MemoryStick,
  Globe,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  GlowText,
  AdvancedParticleField,
  AnimatedCard,
  PulseButton,
  MouseTrail,
  GlowOrb,
  ParallaxContainer,
  DistortionText
} from "@/components/animations"

// Navigation Header identical to other pages
function MoonriseNavigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur-sm relative z-50"
    >
      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <motion.div
          className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(220, 44, 47, 0.5)",
              "0 0 30px rgba(220, 44, 47, 0.8)",
              "0 0 20px rgba(220, 44, 47, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Moon className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>
        <Link href="/" className="text-white font-bold text-xl hover:text-red-400 transition-colors">
          Moonrise
        </Link>
      </motion.div>

      <motion.div
        className="flex items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {[
          { name: "Features", href: "/features", active: false },
          { name: "About", href: "/about", active: false },
          { name: "Download", href: "/download", active: true }
        ].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Link
              href={item.href}
              className={`${
                item.active
                  ? "text-red-400 text-glow-sm"
                  : "text-gray-300 hover:text-red-400"
              } transition-colors relative group`}
            >
              {item.name}
              <motion.div
                className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 ${
                  item.active ? "w-full" : "w-0"
                }`}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <PulseButton>
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(220, 44, 47, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-lg font-medium relative overflow-hidden group neon-border">
              <motion.span
                className="relative z-10 flex items-center gap-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                🌙 Get Started
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
        </PulseButton>
      </motion.div>
    </motion.nav>
  )
}

// Hero Section for Download
function DownloadHeroSection() {
  return (
    <section className="px-8 py-24 text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-red-400">Download</span>
        </motion.div>

        <FadeInSection delay={0.3}>
          <motion.h1 className="text-6xl font-bold mb-8">
            <GlowText intensity="high">
              <DistortionText>
                <motion.span
                  className="text-red-500 neon-red"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                >
                  Download
                </motion.span>
              </DistortionText>
            </GlowText>
            <motion.span
              className="text-white text-glow-md block"
              initial={{ scale: 0.8, opacity: 0, x: -50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            >
              Moonrise Client
            </motion.span>
          </motion.h1>
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Get instant access to the most powerful Minecraft cheating client.
            Undetectable, reliable, and constantly updated.
          </motion.p>
        </FadeInSection>

        <motion.div
          className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          Version 3.2.1 - Latest Build
        </motion.div>

        {/* Floating elements */}
        <FloatingElement className="absolute top-20 left-20" duration={4} amplitude={15}>
          <div className="w-3 h-3 bg-red-500/40 rounded-full intense-glow" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-32" duration={3} amplitude={12}>
          <div className="w-2 h-2 bg-red-400/50 rounded-full floating-glow" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 left-1/4" duration={5} amplitude={18}>
          <div className="w-4 h-4 bg-gradient-radial from-red-600/60 to-transparent rounded-full particle-float" />
        </FloatingElement>
      </div>
    </section>
  )
}

// Download Options Section
function DownloadOptionsSection() {
  const downloadOptions = [
    {
      title: "Windows Client",
      icon: <Monitor className="w-12 h-12" />,
      description: "Full-featured client for Windows 10/11",
      version: "v3.2.1",
      size: "42.3 MB",
      status: "Available",
      statusColor: "text-green-400",
      color: "from-red-500 to-red-700",
      recommended: true
    },
    {
      title: "Launcher",
      icon: <Play className="w-12 h-12" />,
      description: "Auto-updating launcher with mod management",
      version: "v2.1.0",
      size: "15.7 MB",
      status: "Available",
      statusColor: "text-green-400",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Portable Version",
      icon: <HardDrive className="w-12 h-12" />,
      description: "No installation required, runs from USB",
      version: "v3.2.1",
      size: "47.1 MB",
      status: "Available",
      statusColor: "text-green-400",
      color: "from-red-600 to-pink-600"
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-4">
            Choose Your Download
          </motion.h2>
          <motion.p className="text-gray-400 text-lg">
            Select the version that fits your needs
          </motion.p>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloadOptions.map((option, index) => (
            <StaggerItem key={option.title}>
              <AnimatedCard>
                <Card className={`bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift h-full ${
                  option.recommended ? 'ring-2 ring-red-500/50' : ''
                }`}>
                  {option.recommended && (
                    <motion.div
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Recommended
                    </motion.div>
                  )}

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 text-white relative mx-auto"
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                        y: -3
                      }}
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-xl opacity-80`}
                        whileHover={{
                          opacity: 1,
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(220, 44, 47, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(220, 44, 47, 0.3)",
                            "0 0 20px rgba(220, 44, 47, 0.5)",
                            "0 0 10px rgba(220, 44, 47, 0.3)"
                          ]
                        }}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                      <div className="relative z-10 drop-shadow-lg">{option.icon}</div>
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-white mb-3 text-center text-glow-sm"
                      initial={{ opacity: 0.8 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.05,
                        textShadow: "0 0 15px rgba(220, 44, 47, 0.8)"
                      }}
                    >
                      {option.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6 text-center"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {option.description}
                    </motion.p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Version:</span>
                        <span className="text-white font-semibold">{option.version}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Size:</span>
                        <span className="text-white font-semibold">{option.size}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Status:</span>
                        <span className={`font-semibold ${option.statusColor}`}>{option.status}</span>
                      </div>
                    </div>

                    <PulseButton>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full"
                      >
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-bold relative overflow-hidden group">
                          <motion.span
                            className="relative z-10 flex items-center justify-center gap-2"
                            whileHover={{ x: 2 }}
                          >
                            <Download className="w-5 h-5" />
                            Download Now
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                        </Button>
                      </motion.div>
                    </PulseButton>
                  </CardContent>

                  {/* Enhanced hover effects */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0`}
                    whileHover={{ opacity: 0.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// System Requirements Section
function SystemRequirementsSection() {
  const requirements = [
    {
      category: "Minimum Requirements",
      specs: [
        { icon: <Monitor className="w-5 h-5" />, label: "OS", value: "Windows 10 64-bit" },
        { icon: <Cpu className="w-5 h-5" />, label: "Processor", value: "Intel i3-4000 / AMD FX-6000" },
        { icon: <MemoryStick className="w-5 h-5" />, label: "Memory", value: "4 GB RAM" },
        { icon: <HardDrive className="w-5 h-5" />, label: "Storage", value: "100 MB available space" },
        { icon: <Globe className="w-5 h-5" />, label: "Network", value: "Broadband Internet connection" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Recommended Requirements",
      specs: [
        { icon: <Monitor className="w-5 h-5" />, label: "OS", value: "Windows 11 64-bit" },
        { icon: <Cpu className="w-5 h-5" />, label: "Processor", value: "Intel i5-8000 / AMD Ryzen 5 2600" },
        { icon: <MemoryStick className="w-5 h-5" />, label: "Memory", value: "8 GB RAM" },
        { icon: <HardDrive className="w-5 h-5" />, label: "Storage", value: "500 MB available space" },
        { icon: <Globe className="w-5 h-5" />, label: "Network", value: "High-speed Internet connection" }
      ],
      color: "from-red-500 to-red-700"
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-4">
            System Requirements
          </motion.h2>
          <motion.p className="text-gray-400 text-lg">
            Make sure your system can handle the power of Moonrise
          </motion.p>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((req, index) => (
            <StaggerItem key={req.category}>
              <AnimatedCard>
                <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift h-full">
                  <CardHeader>
                    <motion.h3
                      className="text-2xl font-bold text-white text-center text-glow-sm"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 15px rgba(220, 44, 47, 0.8)"
                      }}
                    >
                      {req.category}
                    </motion.h3>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4">
                      {req.specs.map((spec, specIndex) => (
                        <motion.div
                          key={spec.label}
                          className="flex items-center justify-between p-3 bg-black/30 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: specIndex * 0.1 }}
                          whileHover={{
                            backgroundColor: "rgba(220, 44, 47, 0.1)",
                            scale: 1.02
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="text-red-400"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                              {spec.icon}
                            </motion.div>
                            <span className="text-gray-300 font-medium">{spec.label}:</span>
                          </div>
                          <span className="text-white font-semibold">{spec.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${req.color} opacity-0`}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Installation Guide Section
function InstallationGuideSection() {
  const steps = [
    {
      step: 1,
      title: "Download Client",
      description: "Click the download button above to get the latest version",
      icon: <Download className="w-8 h-8" />,
      color: "from-red-500 to-red-700"
    },
    {
      step: 2,
      title: "Run Installer",
      description: "Right-click and run as administrator for best compatibility",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 3,
      title: "Launch Minecraft",
      description: "Start Minecraft and wait for the main menu to appear",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-red-600 to-pink-600"
    },
    {
      step: 4,
      title: "Inject Client",
      description: "Press the inject hotkey (F1) to load Moonrise modules",
      icon: <Zap className="w-8 h-8" />,
      color: "from-red-700 to-red-900"
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-4">
            Installation Guide
          </motion.h2>
          <motion.p className="text-gray-400 text-lg">
            Get up and running in less than 5 minutes
          </motion.p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedCard>
                <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift h-full text-center">
                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white relative mx-auto"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl opacity-80`}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10">{step.icon}</div>
                    </motion.div>

                    <motion.div
                      className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold text-white mb-3"
                      whileHover={{
                        color: "#DC2C2F",
                        scale: 1.05
                      }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed"
                      whileHover={{ opacity: 1, y: -2 }}
                    >
                      {step.description}
                    </motion.p>
                  </CardContent>

                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-500/50"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: (index + 1) * 0.2, duration: 0.5 }}
                    />
                  )}
                </Card>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <FadeInSection delay={1} className="mt-16">
          <Card className="bg-yellow-500/10 border-yellow-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-yellow-400 font-bold mb-2">Important Security Notice</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Always download Moonrise from official sources only. Disable Windows Defender real-time protection
                    temporarily during installation. Join our Discord for support and updates on the latest bypasses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  )
}

// Support Section
function SupportSection() {
  const supportOptions = [
    {
      title: "Discord Community",
      description: "Join our active Discord server for instant support and updates",
      icon: <Users className="w-8 h-8" />,
      action: "Join Discord",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and module documentation",
      icon: <FileText className="w-8 h-8" />,
      action: "Read Docs",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for setup and configuration",
      icon: <Play className="w-8 h-8" />,
      action: "Watch Videos",
      color: "from-red-500 to-pink-500"
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-4">
            Need Help?
          </motion.h2>
          <motion.p className="text-gray-400 text-lg">
            We're here to support you every step of the way
          </motion.p>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <StaggerItem key={option.title}>
              <AnimatedCard>
                <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift h-full">
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white relative mx-auto"
                      whileHover={{
                        scale: 1.15,
                        rotate: 10
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-xl opacity-80`}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10">{option.icon}</div>
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold text-white mb-3"
                      whileHover={{ color: "#DC2C2F", scale: 1.05 }}
                    >
                      {option.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6"
                      whileHover={{ opacity: 1, y: -2 }}
                    >
                      {option.description}
                    </motion.p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="border-2 border-red-500 text-red-400 hover:bg-red-500/20 hover:border-red-400 px-6 py-2 rounded-lg font-medium relative overflow-hidden group"
                      >
                        <motion.span
                          className="relative z-10 flex items-center gap-2"
                          whileHover={{ x: 2 }}
                        >
                          {option.action}
                          <ExternalLink className="w-4 h-4" />
                        </motion.span>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Enhanced Particle Field for Download page
function DownloadParticleField() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AdvancedParticleField
        particleCount={35}
        types={["glow", "spark", "orb"]}
      />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => {
          const x = (i * 31.7) % 100
          const y = (i * 43.3) % 100
          const size = (i % 4) + 2
          const delay = (i * 0.4) % 3
          const blur = (i % 3) + 1

          return (
            <motion.div
              key={`download-particle-${i}-${x}-${y}`}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                background: `radial-gradient(circle, rgba(220, 44, 47, ${0.1 + (i % 3) * 0.1}) 0%, transparent 70%)`,
                filter: `blur(${blur}px)`
              }}
              animate={{
                y: [0, -150 - (i % 50), 0],
                x: [0, Math.sin(i + 10) * 25, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 7 + (i % 4),
                repeat: Number.POSITIVE_INFINITY,
                delay: delay,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>
    </>
  )
}

// Main Download Page Component
export function MoonriseDownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mouse trail effect */}
      <MouseTrail />

      {/* Glow orb that follows cursor */}
      <GlowOrb size={300} />

      {/* Enhanced particle field */}
      <DownloadParticleField />

      {/* Background with parallax */}
      <ParallaxContainer offset={15} className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 25px 35px, rgba(220, 44, 47, 0.4), transparent),
                             radial-gradient(3px 3px at 45px 75px, rgba(220, 44, 47, 0.3), transparent),
                             radial-gradient(1px 1px at 95px 45px, rgba(220, 44, 47, 0.5), transparent),
                             radial-gradient(1px 1px at 135px 85px, rgba(255, 255, 255, 0.8), transparent),
                             radial-gradient(2px 2px at 165px 35px, rgba(220, 44, 47, 0.2), transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '280px 140px',
            opacity: 0.4
          }}
          animate={{
            backgroundPosition: ["0px 0px", "280px 140px", "0px 0px"]
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
      </ParallaxContainer>

      {/* Content */}
      <div className="relative z-10">
        <MoonriseNavigation />
        <DownloadHeroSection />
        <DownloadOptionsSection />
        <SystemRequirementsSection />
        <InstallationGuideSection />
        <SupportSection />
      </div>
    </div>
  )
}
