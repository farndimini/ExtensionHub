import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Download, Shield, Zap, Layout, Globe, ArrowRight, Menu } from "lucide-react";
import { motion } from "framer-motion";

const extensions = [
    {
        id: 1,
        title: "EcoPass",
        description: "Military-grade password encryption with zero-knowledge architecture.",
        rating: 4.8,
        downloads: "10k+",
        category: "Security",
        icon: Shield,
        color: "text-emerald-400 bg-emerald-400/10"
    },
    {
        id: 2,
        title: "TabMaster Pro",
        description: "AI-powered tab management that saves 80% more RAM.",
        rating: 4.9,
        downloads: "50k+",
        category: "Productivity",
        icon: Layout,
        color: "text-blue-400 bg-blue-400/10"
    },
    {
        id: 3,
        title: "FocusFlow",
        description: "Deep work timer with ambient soundscapes and site blocking.",
        rating: 4.7,
        downloads: "25k+",
        category: "Productivity",
        icon: Zap,
        color: "text-amber-400 bg-amber-400/10"
    },
    {
        id: 4,
        title: "DevTools Mate",
        description: "The ultimate debugging companion for full-stack developers.",
        rating: 5.0,
        downloads: "5k+",
        category: "Dev Tools",
        icon: Globe,
        color: "text-purple-400 bg-purple-400/10"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Index = () => {
    return (
        <div className="min-h-screen bg-transparent selection:bg-primary selection:text-white">

            {/* Navbar */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-background/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="p-2 bg-primary/20 rounded-lg">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <span className="self-center text-2xl font-bold whitespace-nowrap font-outfit tracking-tight">
                            Extension<span className="text-primary">Hub</span>
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
                        <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-white">
                            Sign In
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105">
                            Get Started
                        </Button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0">Discover</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors">Categories</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors">Developers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 hover:bg-white/10 transition-colors cursor-default">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            v2.0 is now live
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-outfit leading-tight">
                            Supercharge Your <br />
                            <span className="text-gradient">Browsing Experience</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Unlock the full potential of your browser with our curated collection of
                            <span className="text-white font-medium"> verified</span>,
                            <span className="text-white font-medium"> secure</span>, and
                            <span className="text-white font-medium"> high-performance</span> extensions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <div className="relative w-full max-w-md group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <Input
                                    type="search"
                                    placeholder="Find an extension..."
                                    className="pl-12 h-14 bg-white/5 border-white/10 rounded-full text-lg shadow-xl shadow-black/20 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
                            {[
                                { label: "Active Users", value: "2M+" },
                                { label: "Extensions", value: "500+" },
                                { label: "Developers", value: "150+" },
                                { label: "Rating", value: "4.9/5" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">Featured Extensions</h2>
                            <p className="text-gray-400 max-w-lg">Hand-picked tools that are trending this week. Boost your productivity and security today.</p>
                        </div>
                        <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-white gap-2 group">
                            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {extensions.map((ext) => (
                            <motion.div key={ext.id} variants={item}>
                                <Card className="glass-panel border-0 h-full hover:-translate-y-2 transition-transform duration-300 group">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-xl ${ext.color}`}>
                                                <ext.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md text-xs font-semibold text-yellow-500 border border-yellow-500/20">
                                                <Star className="h-3 w-3 fill-yellow-500" />
                                                {ext.rating}
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{ext.title}</CardTitle>
                                        <CardDescription className="text-gray-400">{ext.category}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                                            {ext.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="mt-auto border-t border-white/5 pt-4 flex justify-between items-center text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Download className="h-4 w-4" />
                                            {ext.downloads}
                                        </div>
                                        <Button size="sm" variant="ghost" className="hover:text-primary hover:bg-primary/10 -mr-2">
                                            Install
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/40 pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
                                <Shield className="h-8 w-8 text-primary" />
                                <span>ExtensionHub</span>
                            </div>
                            <p className="text-gray-400 max-w-sm mb-6">
                                The most trusted platform for discovering and managing browser extensions. Open source and community driven.
                            </p>
                            <div className="flex gap-4">
                                {/* Social Placeholders */}
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-gray-400">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                        <p>&copy; 2024 ExtensionHub. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
