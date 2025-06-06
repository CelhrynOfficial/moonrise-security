"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Shield,
  Zap,
  Eye,
  Server,
  Users,
  Lock,
  Target,
  MousePointer,
  Timer,
  Activity,
  Navigation,
  Crosshair,
  ArrowLeft,
  ChevronRight,
  Moon,
  Sword,
  Move3D,
  Settings,
  Palette
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

// Navigation Header identical to homepage
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
          { name: "Features", href: "/features", active: true },
          { name: "About", href: "/about", active: false },
          { name: "Download", href: "/download", active: false }
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

// Hero Section for Features
function FeaturesHeroSection() {
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
          <span className="text-red-400">Features</span>
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
                  Elite Arsenal
                </motion.span>
              </DistortionText>
            </GlowText>
            <motion.span
              className="text-white text-glow-md block"
              initial={{ scale: 0.8, opacity: 0, x: -50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            >
              Dominate Every Server
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
            Moonrise consists of various elite modules, each offering a unique advantage.
            Each module has been crafted for maximum performance and stealth.
          </motion.p>
        </FadeInSection>

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

// Module Categories
function ModuleCategoriesSection() {
  const categories = [
    {
      icon: <Sword className="w-12 h-12" />,
      title: "Combat",
      description: "Advanced combat modules for ultimate PvP dominance",
      color: "from-red-500 to-red-700",
      modules: [
        "Aim Assist", "Auto Block", "Auto Clicker", "Backtrack", "Criticals",
        "Hit Select", "Hitboxes", "Knockback Delay", "Lag Range", "Piercing",
        "Reach", "Sprint Reset", "Timer Range", "Velocity", "Weapons"
      ]
    },
    {
      icon: <Move3D className="w-12 h-12" />,
      title: "Movement",
      description: "Superior mobility and movement enhancement modules",
      color: "from-orange-500 to-red-500",
      modules: [
        "Fast Accel", "Instant Stop", "Inv Walk", "Keep Sprint", "No Jump Delay",
        "No Slow", "Safe Walk", "Sprint", "Strafe"
      ]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Utility",
      description: "Essential utility modules for tactical advantages",
      color: "from-red-600 to-pink-600",
      modules: [
        "Anti Bot", "Auto Pot", "Auto Rod", "Auto Soup", "Auto Tool",
        "Blink", "Bridge Assist", "Fake Lag", "Fast Mine", "Fast Place",
        "Friends", "Item Use Fix", "No Hit Delay", "No Item Release",
        "No Use Delay", "Ping Fix", "Refill", "Teams", "Timer"
      ]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Visual",
      description: "Advanced visual enhancements and ESP modules",
      color: "from-red-700 to-red-900",
      modules: [
        "Anti Debuff", "Block ESP", "Chams", "Chest ESP", "Free Look",
        "GUI", "Indicators", "Item ESP", "Mod Overlay", "Name Tags",
        "No Hurt Cam", "Notifications", "Player ESP", "Pointers", "Trajectories"
      ]
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-4">
            Module Categories
          </motion.h2>
          <motion.p className="text-gray-400 text-lg">
            Organized for maximum efficiency and ease of use
          </motion.p>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <StaggerItem key={category.title}>
              <AnimatedCard>
                <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift h-full">
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
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-80`}
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
                      <div className="relative z-10 drop-shadow-lg">{category.icon}</div>
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-white mb-4 text-center text-glow-sm"
                      initial={{ opacity: 0.8 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.02,
                        textShadow: "0 0 12px rgba(220, 44, 47, 0.7)"
                      }}
                    >
                      {category.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6 text-center"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.description}
                    </motion.p>

                    <div className="grid grid-cols-2 gap-2">
                      {category.modules.map((module, moduleIndex) => (
                        <motion.div
                          key={module}
                          className="text-sm text-gray-400 bg-black/30 px-3 py-2 rounded-lg text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: moduleIndex * 0.05 }}
                          whileHover={{
                            backgroundColor: "rgba(220, 44, 47, 0.1)",
                            color: "#DC2C2F",
                            scale: 1.05
                          }}
                        >
                          {module}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Enhanced hover effects */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0`}
                    whileHover={{ opacity: 0.08 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "conic-gradient(from 0deg, transparent, rgba(220, 44, 47, 0.3), transparent)",
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
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

// CTA Section
function FeaturesCTASection() {
  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <motion.div
            className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <motion.span
              className="w-2 h-2 bg-red-500 rounded-full moonrise-pulse"
            />
            All Modules Available
          </motion.div>

          <motion.h2 className="text-5xl font-bold text-white mb-6">
            Ready to dominate every server?
          </motion.h2>

          <motion.p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of elite players using Moonrise to rise above the competition.
          </motion.p>

          <div className="flex gap-6 justify-center flex-wrap">
            <PulseButton>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 15px 35px rgba(220, 44, 47, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-10 py-4 text-lg rounded-xl font-bold relative overflow-hidden group">
                  <motion.span
                    className="relative z-10 flex items-center gap-3"
                    whileHover={{ x: 2 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      🌙
                    </motion.span>
                    Download Moonrise
                    <motion.span
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      ⚡
                    </motion.span>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </Button>
              </motion.div>
            </PulseButton>

            <motion.div
              whileHover={{
                scale: 1.02,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-400 hover:bg-red-500/20 hover:border-red-400 px-10 py-4 text-lg rounded-xl font-bold relative overflow-hidden group backdrop-blur-sm"
                >
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 2 }}
                  >
                    Learn More
                    <motion.span
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      📖
                    </motion.span>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </Link>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Enhanced Particle Field
function FeaturesParticleField() {
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
        particleCount={30}
        types={["glow", "spark"]}
      />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => {
          const x = (i * 23.7) % 100
          const y = (i * 37.3) % 100
          const size = (i % 4) + 2
          const delay = (i * 0.3) % 3
          const blur = (i % 3) + 1

          return (
            <motion.div
              key={`features-particle-${i}-${x}-${y}`}
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
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 6 + (i % 4),
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

// Main Features Page Component
export function MoonriseFeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mouse trail effect */}
      <MouseTrail />

      {/* Glow orb that follows cursor */}
      <GlowOrb size={300} />

      {/* Enhanced particle field */}
      <FeaturesParticleField />

      {/* Background with parallax */}
      <ParallaxContainer offset={20} className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(220, 44, 47, 0.4), transparent),
                             radial-gradient(3px 3px at 40px 70px, rgba(220, 44, 47, 0.3), transparent),
                             radial-gradient(1px 1px at 90px 40px, rgba(220, 44, 47, 0.5), transparent),
                             radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.8), transparent),
                             radial-gradient(2px 2px at 160px 30px, rgba(220, 44, 47, 0.2), transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '250px 120px',
            opacity: 0.3
          }}
          animate={{
            backgroundPosition: ["0px 0px", "250px 120px", "0px 0px"]
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
      </ParallaxContainer>

      {/* Content */}
      <div className="relative z-10">
        <MoonriseNavigation />
        <FeaturesHeroSection />
        <ModuleCategoriesSection />
        <FeaturesCTASection />
      </div>
    </div>
  )
}
