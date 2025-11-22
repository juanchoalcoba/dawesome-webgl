import { useEffect, useRef, useState } from "react"
import { Activity, TrendingUp, Users, Zap, Database, Cpu, Server, BarChart3 } from "lucide-react"

export function StunningDashboardStandalone() {
    const [mounted, setMounted] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        setMounted(true)

        // Animated background particles
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            })
        }

        function animate() {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(180, 180, 180, ${0.25 + Math.random() * 0.25})`
                ctx.fill()

                // Connect nearby particles
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 150) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(150, 150, 150, ${0.08 * (1 - dist / 150)})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const metrics = [
        { icon: Users, label: "Active Users", value: "48.2K", change: "+12.5%" },
        { icon: TrendingUp, label: "Revenue", value: "$127.8K", change: "+23.1%" },
        { icon: Activity, label: "Requests", value: "2.4M", change: "+8.3%" },
        { icon: Zap, label: "Performance", value: "98.5%", change: "+2.1%" },
    ]

    const serverStats = [
        { name: "CPU Usage", value: 45 },
        { name: "Memory", value: 67 },
        { name: "Storage", value: 34 },
        { name: "Network", value: 89 },
    ]

    return (
        <div className="min-h-screen rounded-4xl bg-black relative overflow-hidden p-4 md:p-8 text-white">
            {/* Animated Background */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />

            {/* Gray Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className={`mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                    <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-neutral-300 via-white to-neutral-500 bg-clip-text text-transparent">
                        Analytics Dashboard
                    </h1>
                    <p className="text-lg text-slate-400">Real-time system monitoring and performance metrics</p>
                </div>

                {/* Metrics Grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    {metrics.map((metric, i) => (
                        <div
                            key={i}
                            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <metric.icon className="w-8 h-8 text-neutral-200" />
                                    <span className="text-sm font-medium text-neutral-300 px-2 py-1 bg-neutral-500/10 rounded-full">
                                        {metric.change}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 mb-1">{metric.label}</p>
                                <p className="text-3xl font-bold text-white">{metric.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Dashboard Card */}
                <div
                    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Activity Chart */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-white">System Activity</h2>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 text-sm bg-neutral-500/20 text-neutral-200 rounded-lg hover:bg-neutral-500/30 transition-colors">
                                            24h
                                        </button>
                                        <button className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">7d</button>
                                        <button className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">30d</button>
                                    </div>
                                </div>

                                {/* Animated Chart */}
                                <div className="h-64 relative">
                                    <svg viewBox="0 0 800 200" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgb(160,160,160)" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="rgb(160,160,160)" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgb(200,200,200)" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="rgb(200,200,200)" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Area Chart 1 */}
                                        <path
                                            d="M0,150 L100,120 L200,140 L300,80 L400,100 L500,60 L600,90 L700,50 L800,70 L800,200 L0,200 Z"
                                            fill="url(#gradient1)"
                                            className={`transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
                                        />
                                        <path
                                            d="M0,150 L100,120 L200,140 L300,80 L400,100 L500,60 L600,90 L700,50 L800,70"
                                            fill="none"
                                            stroke="rgb(180,180,180)"
                                            strokeWidth="3"
                                            className={`transition-opacity duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
                                        />

                                        {/* Area Chart 2 */}
                                        <path
                                            d="M0,180 L100,160 L200,170 L300,130 L400,140 L500,110 L600,120 L700,100 L800,110 L800,200 L0,200 Z"
                                            fill="url(#gradient2)"
                                            className={`transition-opacity duration-1000 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}
                                        />
                                        <path
                                            d="M0,180 L100,160 L200,170 L300,130 L400,140 L500,110 L600,120 L700,100 L800,110"
                                            fill="none"
                                            stroke="rgb(200,200,200)"
                                            strokeWidth="3"
                                            className={`transition-opacity duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}
                                        />

                                        {/* Grid lines */}
                                        {[0, 50, 100, 150, 200].map((y) => (
                                            <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        ))}
                                    </svg>

                                    {/* Legend */}
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-neutral-400" />
                                            <span className="text-sm text-slate-400">API Requests</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-neutral-500" />
                                            <span className="text-sm text-slate-400">Data Transfer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Server Resources */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {serverStats.map((stat, i) => (
                                    <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-slate-400">{stat.name}</span>
                                            <span className="text-sm font-bold text-neutral-300">
                                                {stat.value}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-neutral-400 to-neutral-600 transition-all duration-1000 ease-out"
                                                style={{
                                                    width: mounted ? `${stat.value}%` : "0%",
                                                    transitionDelay: `${500 + i * 100}ms`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Status Cards */}
                        <div className="space-y-4">
                            {/* System Status */}
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-neutral-500/20 rounded-xl">
                                        <Server className="w-6 h-6 text-neutral-200" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">System Status</h3>
                                        <p className="text-sm text-slate-400">All systems operational</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {["Database", "API Gateway", "Cache Layer", "CDN"].map((service, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <span className="text-sm text-slate-400">{service}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                                                <span className="text-xs text-green-300 font-medium">Active</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-semibold text-white mb-4">Quick Actions</h3>
                                <div className="space-y-2">
                                    {[
                                        { icon: Database, label: "View Logs" },
                                        { icon: Cpu, label: "Performance" },
                                        { icon: BarChart3, label: "Reports" },
                                    ].map((action, i) => (
                                        <button
                                            key={i}
                                            className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-all duration-200 group"
                                        >
                                            <action.icon className="w-5 h-5 text-neutral-300 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm text-white">{action.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Live Stats */}
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-400/10 rounded-full blur-2xl animate-pulse" />
                                <div className="relative">
                                    <h3 className="font-semibold text-white mb-3">Live Stats</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-400">Uptime</span>
                                                <span className="text-white font-medium">99.98%</span>
                                            </div>
                                            <div className="text-2xl font-bold text-neutral-300">47d 12h 34m</div>
                                        </div>
                                        <div className="pt-3 border-t border-white/10">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-400">Avg Response</span>
                                                <span className="text-green-300 font-medium">45ms</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
