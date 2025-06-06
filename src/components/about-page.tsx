"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Shield,
  Code,
  Users,
  Heart,
  Star,
  Target,
  ArrowLeft,
  ChevronRight,
  Moon,
  Github,
  Twitter,
  Mail,
  Globe,
  Zap,
  Trophy,
  Clock,
  Coffee
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
          { name: "About", href: "/about", active: true },
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
              scale: 1.05,
              boxShadow: "0 0 30px rgba(220, 44, 47, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
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

// Hero Section for About
function AboutHeroSection() {
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
          <span className="text-red-400">About</span>
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
                  Notre Mission
                </motion.span>
              </DistortionText>
            </GlowText>
            <motion.span
              className="text-white text-glow-md block"
              initial={{ scale: 0.8, opacity: 0, x: -50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            >
              Le Meilleur Client Gratuit
            </motion.span>
          </motion.h1>
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Chez Moonrise, nous croyons que les meilleurs outils de gaming devraient être accessibles à tous.
            Notre équipe passionnée travaille sans relâche pour créer le client de cheating le plus avancé,
            entièrement gratuit et ouvert à la communauté.
          </motion.p>
        </FadeInSection>

        {/* Mission Values */}
        <FadeInSection delay={1.0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Heart className="w-6 h-6" />, text: "100% Gratuit", color: "text-red-400" },
              { icon: <Users className="w-6 h-6" />, text: "Communauté First", color: "text-blue-400" },
              { icon: <Trophy className="w-6 h-6" />, text: "Performance Elite", color: "text-yellow-400" }
            ].map((value, index) => (
              <motion.div
                key={value.text}
                className="flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 44, 47, 0.1)" }}
              >
                <div className={value.color}>{value.icon}</div>
                <span className="text-white font-semibold">{value.text}</span>
              </motion.div>
            ))}
          </div>
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

// Our Story Section
function OurStorySection() {
  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-6">
            Notre Histoire
          </motion.h2>
          <motion.p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Moonrise est né d'une frustration commune : pourquoi les meilleurs clients de cheating
            coûtent-ils si cher ? Notre équipe a décidé de changer la donne.
          </motion.p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection delay={0.3}>
            <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden gradient-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Vision</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Démocratiser l'accès aux outils de gaming avancés en créant le client
                        de cheating le plus performant et le plus sûr, entièrement gratuit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Nous repoussons constamment les limites de ce qui est possible,
                        avec des techniques de bypass uniques et des optimisations de pointe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Communauté</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Notre communauté est au cœur de tout. Chaque fonctionnalité est pensée
                        pour et avec nos utilisateurs passionnés.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 44, 47, 0.15)" }}
                >
                  <div className="text-3xl font-bold text-red-400 mb-2">50K+</div>
                  <div className="text-gray-300">Utilisateurs Actifs</div>
                </motion.div>

                <motion.div
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 44, 47, 0.15)" }}
                >
                  <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </motion.div>

                <motion.div
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 44, 47, 0.15)" }}
                >
                  <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </motion.div>

                <motion.div
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 44, 47, 0.15)" }}
                >
                  <div className="text-3xl font-bold text-red-400 mb-2">0€</div>
                  <div className="text-gray-300">Forever Free</div>
                </motion.div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Pourquoi Gratuit ?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nous pensons que la passion du gaming ne devrait pas être limitée par les moyens financiers.
                  Moonrise est financé par des donations volontaires et notre engagement envers la communauté.
                </p>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

// Team Section
function TeamSection() {
  const teamMembers = [
    {
      name: "Alexandre 'Nexus' Martin",
      role: "Lead Developer & Founder",
      description: "Passionné de reverse engineering depuis l'âge de 15 ans. Alexandre a fondé Moonrise avec la vision de démocratiser l'accès aux outils de gaming avancés.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["C++", "Reverse Engineering", "Anti-Cheat Bypass"],
      social: {
        github: "nexus-dev",
        twitter: "nexus_moonrise"
      },
      years: "6 ans d'expérience",
      color: "from-red-500 to-red-700"
    },
    {
      name: "Sarah 'Phantom' Chen",
      role: "Security Researcher",
      description: "Experte en sécurité informatique, Sarah est responsable des techniques de bypass les plus avancées. Elle veille à ce que Moonrise reste indétectable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c96c4039?w=300&h=300&fit=crop&crop=face",
      skills: ["Cryptography", "Memory Analysis", "Stealth Tech"],
      social: {
        github: "phantom-sec",
        twitter: "phantom_research"
      },
      years: "8 ans d'expérience",
      color: "from-purple-500 to-red-500"
    },
    {
      name: "Marcus 'Storm' Rodriguez",
      role: "UI/UX Designer",
      description: "Designer passionné, Marcus crée l'interface utilisateur intuitive de Moonrise. Il croit que la puissance doit s'accompagner d'une expérience utilisateur exceptionnelle.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["UI Design", "UX Research", "Frontend Dev"],
      social: {
        github: "storm-ui",
        twitter: "storm_design"
      },
      years: "4 ans d'expérience",
      color: "from-blue-500 to-red-500"
    },
    {
      name: "Emma 'Nova' Thompson",
      role: "Community Manager",
      description: "Emma gère notre communauté Discord de 50k+ membres. Elle s'assure que chaque utilisateur reçoit le support nécessaire et que les feedbacks sont entendus.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Community Building", "Support", "Content Creation"],
      social: {
        github: "nova-community",
        twitter: "nova_moonrise"
      },
      years: "3 ans d'expérience",
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Thomas 'Cipher' Dubois",
      role: "DevOps Engineer",
      description: "Thomas maintient notre infrastructure et assure la distribution sécurisée de Moonrise. Il optimise les performances et la fiabilité de nos serveurs.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      skills: ["Infrastructure", "Security", "Automation"],
      social: {
        github: "cipher-ops",
        twitter: "cipher_devops"
      },
      years: "5 ans d'expérience",
      color: "from-green-500 to-red-500"
    },
    {
      name: "Luna 'Echo' Kim",
      role: "QA & Testing Lead",
      description: "Luna teste rigoureusement chaque version de Moonrise sur des centaines de serveurs. Elle garantit la qualité et la stabilité que nos utilisateurs méritent.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      skills: ["Quality Assurance", "Game Testing", "Bug Hunting"],
      social: {
        github: "echo-qa",
        twitter: "echo_testing"
      },
      years: "4 ans d'expérience",
      color: "from-yellow-500 to-red-500"
    }
  ]

  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold text-white mb-6">
            Notre Équipe
          </motion.h2>
          <motion.p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Des développeurs passionnés unis par une mission commune :
            créer le meilleur client de cheating gratuit au monde.
          </motion.p>
        </FadeInSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <StaggerItem key={member.name}>
              <AnimatedCard>
                <Card className="bg-gray-900/30 backdrop-blur-sm border-red-900/30 relative overflow-hidden group gradient-border hover-lift h-full">
                  <CardContent className="p-8 relative z-10">
                    {/* Avatar */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-24 h-24 mx-auto relative">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full p-1`}
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(220, 44, 47, 0.3)",
                              "0 0 30px rgba(220, 44, 47, 0.6)",
                              "0 0 20px rgba(220, 44, 47, 0.3)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Name and Role */}
                    <motion.h3
                      className="text-xl font-bold text-white mb-2 text-center text-glow-sm"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 15px rgba(220, 44, 47, 0.8)"
                      }}
                    >
                      {member.name}
                    </motion.h3>

                    <motion.p
                      className="text-red-400 font-semibold text-center mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      {member.role}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed mb-6 text-center"
                      whileHover={{ opacity: 1, y: -2 }}
                    >
                      {member.description}
                    </motion.p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="bg-black/40 text-red-400 px-3 py-1 rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{
                            backgroundColor: "rgba(220, 44, 47, 0.2)",
                            scale: 1.05
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Experience */}
                    <motion.div
                      className="flex items-center justify-center gap-2 mb-6 text-gray-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{member.years}</span>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                      <motion.a
                        href={`https://github.com/${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={`https://twitter.com/${member.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </CardContent>

                  {/* Enhanced hover effects */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0`}
                    whileHover={{ opacity: 0.08 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Particle effect on hover */}
                  <motion.div className="absolute inset-0" whileHover={{}}>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`particle-${member.name}-${i}`}
                        className="absolute w-1 h-1 bg-red-500/60 rounded-full"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${20 + i * 15}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          y: [-10, -30, -50]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Number.POSITIVE_INFINITY
                        }}
                      />
                    ))}
                  </motion.div>
                </Card>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Join Us Section
function JoinUsSection() {
  return (
    <section className="px-8 py-24 relative">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <motion.div
            className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            Nous Recrutons
          </motion.div>

          <motion.h2 className="text-5xl font-bold text-white mb-6">
            Rejoignez Notre Mission
          </motion.h2>

          <motion.p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Vous partagez notre vision d'un gaming accessible à tous ?
            Nous cherchons toujours des talents passionnés pour rejoindre l'équipe Moonrise.
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
                    <Users className="w-5 h-5" />
                    Rejoindre Discord
                    <motion.span
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      🚀
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
              <Button
                variant="outline"
                className="border-2 border-red-500 text-red-400 hover:bg-red-500/20 hover:border-red-400 px-10 py-4 text-lg rounded-xl font-bold relative overflow-hidden group backdrop-blur-sm"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ x: 2 }}
                >
                  <Mail className="w-5 h-5" />
                  Nous Contacter
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

        {/* Open Positions */}
        <FadeInSection delay={0.5}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: "Développeur C++", type: "Remote", icon: <Code className="w-6 h-6" /> },
              { role: "Security Researcher", type: "Remote", icon: <Shield className="w-6 h-6" /> },
              { role: "Community Moderator", type: "Remote", icon: <Users className="w-6 h-6" /> }
            ].map((position, index) => (
              <motion.div
                key={position.role}
                className="bg-gray-900/30 border border-red-900/30 rounded-lg p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(220, 44, 47, 0.1)"
                }}
              >
                <div className="text-red-400 mb-3 flex justify-center">{position.icon}</div>
                <h3 className="text-white font-bold mb-2">{position.role}</h3>
                <span className="text-gray-400 text-sm">{position.type}</span>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Enhanced Particle Field for About page
function AboutParticleField() {
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
        particleCount={40}
        types={["glow", "spark", "orb"]}
      />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => {
          const x = (i * 35.7) % 100
          const y = (i * 47.3) % 100
          const size = (i % 4) + 2
          const delay = (i * 0.5) % 3
          const blur = (i % 3) + 1

          return (
            <motion.div
              key={`about-particle-${i}-${x}-${y}`}
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
                x: [0, Math.sin(i + 20) * 20, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 8 + (i % 4),
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

// Main About Page Component
export function MoonriseAboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mouse trail effect */}
      <MouseTrail />

      {/* Glow orb that follows cursor */}
      <GlowOrb size={280} />

      {/* Enhanced particle field */}
      <AboutParticleField />

      {/* Background with parallax */}
      <ParallaxContainer offset={10} className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 30px 40px, rgba(220, 44, 47, 0.4), transparent),
                             radial-gradient(3px 3px at 50px 80px, rgba(220, 44, 47, 0.3), transparent),
                             radial-gradient(1px 1px at 100px 50px, rgba(220, 44, 47, 0.5), transparent),
                             radial-gradient(1px 1px at 140px 90px, rgba(255, 255, 255, 0.8), transparent),
                             radial-gradient(2px 2px at 170px 40px, rgba(220, 44, 47, 0.2), transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 160px',
            opacity: 0.3
          }}
          animate={{
            backgroundPosition: ["0px 0px", "300px 160px", "0px 0px"]
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
      </ParallaxContainer>

      {/* Content */}
      <div className="relative z-10">
        <MoonriseNavigation />
        <AboutHeroSection />
        <OurStorySection />
        <TeamSection />
        <JoinUsSection />
      </div>
    </div>
  )
}
