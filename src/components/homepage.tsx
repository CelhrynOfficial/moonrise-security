import Link from "next/link"
import {
  Edit,
  Zap,
  Shield,
  Target,
  Radio,
  Sparkles,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Navigation Header Component
function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-sm">🌊</span>
        </div>
        <span className="text-white font-semibold text-lg">Ocean</span>
      </div>

      <div className="flex items-center gap-8">
        <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
        <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
        <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">Faq</Link>
        <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
        <Link href="/changelogs" className="text-gray-300 hover:text-white transition-colors">Changelogs</Link>
        <Link href="/download" className="text-gray-300 hover:text-white transition-colors">Download</Link>
      </div>

      <Link href="/dashboard">
        <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-medium">
          🏠 Dashboard
        </Button>
      </Link>
    </nav>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="px-8 py-24 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-bold mb-8">
          <span className="text-blue-500">Think.</span>
          <span className="text-white">Scan.</span>
          <span className="text-white">Find.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          With the most powerful detections to keep your server and community free of cheating.
        </p>
      </div>
    </section>
  )
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Custom Strings",
      description: "We offer a clean and customizable service."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Scanner",
      description: "Ocean will take no longer than 30 seconds."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Support",
      description: "We offer enviable support"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Real Detections",
      description: "Our detections are verified by various minds and digital forensics services."
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Public API",
      description: "The opportunity for developers to automate the tool to their liking"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Ease of use",
      description: "In just 3 clicks, you'll get unimaginable quality."
    }
  ]

  return (
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            A reliable solution for cheaters
          </h2>
          <p className="text-gray-400 text-lg">
            Discover why Ocean's quality and service surpass everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-gray-900/50 border-gray-800 card-hover">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-gray-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Before/After Section Component
function BeforeAfterSection() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Before and after preview
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Start detecting cheaters
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your experience before and after using Ocean reflected in a simple image.
          </p>
        </div>

        <div className="flex gap-8 items-center">
          {/* Before/After Comparison */}
          <div className="flex-1">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Before</h3>
                <h3 className="text-2xl font-bold text-white">After</h3>
              </div>

              <div className="grid grid-cols-2 gap-8 h-80">
                {/* Before Side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                      📁
                    </div>
                    <span className="text-gray-300">Legit File</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                      📁
                    </div>
                    <span className="text-gray-300">Legit File</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                      📁
                    </div>
                    <span className="text-gray-300">Legit File</span>
                  </div>
                </div>

                {/* After Side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                      ⚠️
                    </div>
                    <span className="text-red-400">Detected Cheat</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                      📁
                    </div>
                    <span className="text-gray-300">Legit File</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                      📁
                    </div>
                    <span className="text-gray-300">Legit File</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Content */}
          <div className="w-80 space-y-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Protect your community from cheaters
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Detect all cheats in any computer
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="px-8 py-16 bg-black/50">
      <div className="max-w-6xl mx-auto">
        {/* Ocean Logo */}
        <div className="text-center mb-20">
          <div className="text-8xl font-bold text-gray-800 mb-8">OCEAN</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌊</span>
              </div>
              <span className="text-white font-semibold">Ocean - anticheat.ac</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">think.scan.find</p>

            <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium inline-block">
              DMCA PROTECTED
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <div className="space-y-3">
              <Link href="/download" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                Download <ChevronRight className="w-3 h-3" />
              </Link>
              <Link href="/how-to-use" className="text-gray-400 hover:text-white text-sm block">
                How to use
              </Link>
              <Link href="/cli" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                CLI <ChevronRight className="w-3 h-3" />
              </Link>
              <Link href="/docs" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                Docs <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <div className="space-y-3">
              <Link href="/tos" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                ToS <ChevronRight className="w-3 h-3" />
              </Link>
              <Link href="/privacy" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                Privacy <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-white font-semibold mb-6">Community</h4>
            <div className="space-y-3">
              <Link href="#" className="text-gray-400 hover:text-white text-sm block">
                Discord
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm block">
                Youtube
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm block">
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Homepage Component
export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Starfield Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, white, transparent),
                           radial-gradient(2px 2px at 40px 70px, white, transparent),
                           radial-gradient(1px 1px at 90px 40px, white, transparent),
                           radial-gradient(1px 1px at 130px 80px, white, transparent),
                           radial-gradient(2px 2px at 160px 30px, white, transparent)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px',
          opacity: 0.1
        }} />
      </div>

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <BeforeAfterSection />
        <Footer />
      </div>
    </div>
  )
}
