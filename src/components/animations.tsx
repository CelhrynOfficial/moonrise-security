"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"

// Fade in animation for sections
export const FadeInSection = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode,
  delay?: number,
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Stagger container for multiple children
export const StaggerContainer = ({ children, className = "" }: {
  children: React.ReactNode,
  className?: string
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Individual stagger item
export const StaggerItem = ({ children, className = "" }: {
  children: React.ReactNode,
  className?: string
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Enhanced floating animation for elements
export const FloatingElement = ({ children, className = "", duration = 6, amplitude = 6 }: {
  children: React.ReactNode,
  className?: string,
  duration?: number,
  amplitude?: number
}) => (
  <motion.div
    animate={{
      y: [0, -amplitude, 0],
      rotate: [0, 1, 0, -1, 0], // Réduit de 2 à 1
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Enhanced glowing text effect with red theme
export const GlowText = ({ children, className = "", intensity = "medium" }: {
  children: React.ReactNode,
  className?: string,
  intensity?: "low" | "medium" | "high"
}) => {
  const glowValues = {
    low: {
      shadows: [
        "0 0 10px rgba(220, 44, 47, 0.3)",
        "0 0 20px rgba(220, 44, 47, 0.5)",
        "0 0 10px rgba(220, 44, 47, 0.3)"
      ]
    },
    medium: {
      shadows: [
        "0 0 20px rgba(220, 44, 47, 0.5)",
        "0 0 30px rgba(220, 44, 47, 0.8)",
        "0 0 20px rgba(220, 44, 47, 0.5)"
      ]
    },
    high: {
      shadows: [
        "0 0 30px rgba(220, 44, 47, 0.7)",
        "0 0 50px rgba(220, 44, 47, 1)",
        "0 0 30px rgba(220, 44, 47, 0.7)"
      ]
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{
        opacity: [0.8, 1, 0.8],
        textShadow: glowValues[intensity].shadows
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Advanced particle system with multiple types
export const AdvancedParticleField = ({ particleCount = 40, types = ["glow", "spark", "orb"] }: {
  particleCount?: number,
  types?: string[]
}) => {
  const [particles, setParticles] = useState<Array<{
    id: number,
    x: number,
    y: number,
    size: number,
    delay: number,
    type: string,
    speed: number,
    opacity: number
  }>>([])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 3,
      type: types[Math.floor(Math.random() * types.length)],
      speed: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.3
    }))
    setParticles(newParticles)
  }, [particleCount, types, isMounted])

  if (!isMounted) {
    return null
  }

  const getParticleStyle = (particle: { type: string }) => {
    switch (particle.type) {
      case "glow":
        return "bg-red-500/20 rounded-full shadow-lg shadow-red-500/50"
      case "spark":
        return "bg-gradient-to-r from-red-400 to-orange-500 rounded-sm"
      case "orb":
        return "bg-gradient-radial from-red-500/40 to-transparent rounded-full"
      default:
        return "bg-red-500/20 rounded-full"
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${getParticleStyle(particle)}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -150 * particle.speed, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0, particle.opacity, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Mouse trail effect
export const MouseTrail = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        x: mouseX,
        y: mouseY,
      }}
      animate={{
        opacity: isVisible ? 0.6 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-6 h-6 bg-gradient-radial from-red-500/50 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  )
}

// Enhanced card hover effects with 3D transform
export const AnimatedCard = ({ children, className = "" }: {
  children: React.ReactNode,
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [15, -15]) // Réduit de 30 à 15
  const rotateY = useTransform(x, [-100, 100], [-15, 15]) // Réduit de 30 à 15

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{
        scale: 1.02, // Réduit de 1.05 à 1.02
        y: -5, // Réduit de -10 à -5
        boxShadow: "0 15px 35px rgba(220, 44, 47, 0.25)" // Opacité réduite
      }}
      whileTap={{ scale: 0.99 }} // Réduit de 0.98 à 0.99
      transition={{
        type: "spring",
        stiffness: 200, // Réduit de 300 à 200
        damping: 25     // Augmenté de 20 à 25
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Enhanced pulse animation for buttons with glow
export const PulseButton = ({ children, className = "" }: {
  children: React.ReactNode,
  className?: string
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      boxShadow: [
        "0 0 0 0 rgba(220, 44, 47, 0.4)",
        "0 0 0 15px rgba(220, 44, 47, 0)",
        "0 0 0 0 rgba(220, 44, 47, 0)"
      ]
    }}
    transition={{
      boxShadow: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      },
      scale: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Typing animation effect with cursor
export const TypingText = ({ text, className = "", speed = 100 }: {
  text: string,
  className?: string,
  speed?: number
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block ml-1 text-red-500"
      >
        |
      </motion.span>
    </span>
  )
}

// Parallax container
export const ParallaxContainer = ({ children, offset = 50, className = "" }: {
  children: React.ReactNode,
  offset?: number,
  className?: string
}) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        y: scrollY * offset / 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Glow orb that follows cursor
export const GlowOrb = ({ size = 200, color = "red" }: {
  size?: number,
  color?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2)
      mouseY.set(e.clientY - size / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, size])

  return (
    <motion.div
      className="fixed pointer-events-none z-0 opacity-20"
      style={{
        x: mouseX,
        y: mouseY,
        width: size,
        height: size,
        background: "radial-gradient(circle, rgba(220, 44, 47, 0.3) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(20px)"
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }}
    />
  )
}

// Enhanced loading spinner with Moonrise theme
export const MoonriseSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-red-500/30 border-t-red-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

// Distortion effect component
export const DistortionText = ({ children, className = "" }: {
  children: React.ReactNode,
  className?: string
}) => (
  <motion.div
    className={className}
    whileHover={{
      skew: [0, 2, 0],
      scale: [1, 1.02, 1]
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
)
