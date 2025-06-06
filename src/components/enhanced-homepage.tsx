"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Shield,
  Zap,
  Users,
  Eye,
  Server,
  Lock,
  ChevronRight,
  Moon
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

// Enhanced Navigation Header
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
        <span className="text-white font-bold text-xl">Moonrise</span>
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

// Enhanced Hero Section
function MoonriseHeroSection() {
  return (
    <section className="px-8 py-24 text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInSection delay={0.2}>
          <motion.h1 className="text-7xl font-bold mb-8">
            <GlowText intensity="high">
              <DistortionText>
                <motion.span
                  className="text-red-500 neon-red"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.01, textShadow: "0 0 25px rgba(220, 44, 47, 0.8)" }}
                >
                  Moonrise.
                </motion.span>
              </DistortionText>
            </GlowText>
            <motion.span
              className="text-white text-glow-md"
              initial={{ scale: 0.8, opacity: 0, x: -50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.01 }}
            >
              Undetectable.
            </motion.span>
            <motion.span
              className="text-red-400 text-glow-sm"
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.01 }}
            >
              Cheating.
            </motion.span>
          </motion.h1>
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Elite cheating solutions that rise above the darkness. Dominate servers for free.
          </motion.p>
        </FadeInSection>

        {/* Enhanced floating elements with various effects */}
        <FloatingElement className="absolute top-20 left-20" duration={4} amplitude={15}>
          <div className="w-3 h-3 bg-red-500/40 rounded-full intense-glow" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-32" duration={3} amplitude={12}>
          <div className="w-2 h-2 bg-red-400/50 rounded-full floating-glow" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 left-1/4" duration={5} amplitude={18}>
          <div className="w-4 h-4 bg-gradient-radial from-red-600/60 to-transparent rounded-full particle-float" />
        </FloatingElement>
        <FloatingElement className="absolute top-1/2 right-1/4" duration={3.5} amplitude={10}>
          <div className="w-1 h-8 bg-red-500/30 rounded-full shimmer" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/3 right-20" duration={4.5} amplitude={20}>
          <div className="w-5 h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </FloatingElement>
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(rgba(220, 44, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 44, 47, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
      </div>
    </section>
  )
}

// Enhanced Features Section
function MoonriseFeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Elite War Gear",
      description: "You will never fight again without our client after trying it.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Response",
      description: "Almost instant injection in your Minecraft instance.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "24/7 Vigilance for screenshare bypassing",
      description: "Our team is working with famous bypassers constantly working on new bypasses to stay undetected.",
      color: "from-red-600 to-pink-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Dedicated Network",
      description: "Store all your configs in our cloud.",
      color: "from-red-700 to-red-900"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elite Team",
      description: "Devoted developer trying his best to create the client you ever dreamt of.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero Breach",
      description: "Made to preserve your system integrity.",
      color: "from-red-500 to-red-800"
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-4">
            When darkness falls, we rise
          </motion.h2>
          <motion.p className="text-gray-400 text-lg">
            Discover why Moonrise stands as the ultimate product for Minecraft cheating.
          </motion.p>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <AnimatedCard>
                <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift">
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white relative"
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                        y: -3
                      }}
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-80`}
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
                      <div className="relative z-10 drop-shadow-lg">{feature.icon}</div>
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold text-white mb-3 text-glow-sm"
                      initial={{ opacity: 0.8 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.02,
                        textShadow: "0 0 12px rgba(220, 44, 47, 0.7)"
                      }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>

                  {/* Enhanced hover effect background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0`}
                    whileHover={{ opacity: 0.08 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Particle effect on hover */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{}}
                    onHoverStart={() => {}}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`particle-${feature.title}-${i}`}
                        className="absolute w-1 h-1 bg-red-500/60 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [-20, -40, -60]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Number.POSITIVE_INFINITY
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Multi-layer animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "linear-gradient(45deg, transparent, rgba(220, 44, 47, 0.4), transparent)",
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

                  {/* Second layer border */}
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

// Enhanced CTA Section
function MoonriseCTASection() {
  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <motion.div
            className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="w-2 h-2 bg-red-500 rounded-full moonrise-pulse"
            />
            Available Now
          </motion.div>

          <motion.h2 className="text-5xl font-bold text-white mb-6">
            Ready to rise above the darkness?
          </motion.h2>

          <motion.p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the elite ranks of those who refuse to be vulnerable. Your powerful cheating solution awaits.
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
                    Begin Your Rise
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Enhanced Footer
function MoonriseFooter() {
  return (
    <motion.footer
      className="px-8 py-16 bg-black/50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Moonrise Logo */}
        <FadeInSection className="text-center mb-20">
          <motion.div
            className="text-8xl font-bold text-gray-800 mb-8"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(220, 44, 47, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            MOONRISE
          </motion.div>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <StaggerItem>
            <motion.div whileHover={{ scale: 1.02 }}>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(220, 44, 47, 0.3)",
                      "0 0 20px rgba(220, 44, 47, 0.6)",
                      "0 0 10px rgba(220, 44, 47, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Moon className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-white font-bold text-lg">Moonrise Client</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Rise above. Dominate beyond.</p>
            </motion.div>
          </StaggerItem>

          {/* Enhanced sections */}
          {[
            {
              title: "Resources",
              links: [
                { name: "Documentation", hasArrow: true }
              ]
            },
            {
              title: "Connect",
              links: [
                { name: "Discord", hasArrow: false },
                { name: "YouTube", hasArrow: false },
                { name: "Github (Soon)", hasArrow: false }
              ]
            }
          ].map((section, sectionIndex) => (
            <StaggerItem key={section.title}>
              <div>
                <motion.h4
                  className="text-white font-semibold mb-6"
                  whileHover={{ color: "#DC2C2F" }}
                >
                  {section.title}
                </motion.h4>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={`/${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors"
                      >
                        {link.name}
                        {link.hasArrow && <ChevronRight className="w-3 h-3" />}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Animated red bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
    </motion.footer>
  )
}

// Enhanced Particle Field for Moonrise with multiple layers
function MoonriseParticleField() {
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
        particleCount={25}
        types={["glow", "spark"]}
      />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => {
          // Use static values based on index to avoid hydration issues
          const x = (i * 23.7) % 100
          const y = (i * 37.3) % 100
          const size = (i % 4) + 2
          const delay = (i * 0.3) % 3
          const blur = (i % 3) + 1

          return (
            <motion.div
              key={`extra-particle-static-${i}-${x}-${y}`}
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

        {/* Floating orbs with static positioning */}
        {Array.from({ length: 8 }, (_, i) => {
          const x = (i * 41.7) % 100
          const y = (i * 59.3) % 100
          const size = (i % 2) + 1

          return (
            <motion.div
              key={`orb-static-${i}-${x}-${y}`}
              className="absolute rounded-full neon-border"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
              }}
              animate={{
                y: [0, -80, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          )
        })}
      </div>
    </>
  )
}

// Main Moonrise Homepage Component
export function MoonriseHomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mouse trail effect */}
      <MouseTrail />

      {/* Glow orb that follows cursor */}
      <GlowOrb size={300} />

      {/* Enhanced Moonrise Particle Field */}
      <MoonriseParticleField />

      {/* Enhanced Red Starfield Background with parallax */}
      <ParallaxContainer offset={20} className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(220, 44, 47, 0.4), transparent),
                             radial-gradient(3px 3px at 40px 70px, rgba(220, 44, 47, 0.3), transparent),
                             radial-gradient(1px 1px at 90px 40px, rgba(220, 44, 47, 0.5), transparent),
                             radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.8), transparent),
                             radial-gradient(2px 2px at 160px 30px, rgba(220, 44, 47, 0.2), transparent),
                             radial-gradient(1px 1px at 200px 50px, rgba(220, 44, 47, 0.6), transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '250px 120px',
            opacity: 0.5
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

      {/* Additional layered background */}
      <ParallaxContainer offset={10} className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 20% 30%, rgba(220, 44, 47, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(220, 44, 47, 0.15) 0%, transparent 50%)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </ParallaxContainer>

      {/* Content with Moonrise branding */}
      <div className="relative z-10">
        <MoonriseNavigation />
        <MoonriseHeroSection />
        <MoonriseFeaturesSection />
        <MoonriseCTASection />
        <MoonriseFooter />
      </div>
    </div>
  )
}
