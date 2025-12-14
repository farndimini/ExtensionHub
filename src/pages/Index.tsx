import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Download, Shield } from "lucide-react";

const extensions = [
    {
        id: 1,
        title: "EcoPass",
        description: "Securely manage your passwords with eco-friendly encryption methods.",
        rating: 4.8,
        downloads: "10k+",
        category: "Security"
    },
    {
        id: 2,
        title: "TabMaster Pro",
        description: "Organize your tabs intelligently and save memory.",
        rating: 4.9,
        downloads: "50k+",
        category: "Productivity"
    },
    {
        id: 3,
        title: "FocusFlow",
        description: "Block distractions and stay in the flow state with this timer.",
        rating: 4.7,
        downloads: "25k+",
        category: "Productivity"
    },
    {
        id: 4,
        title: "DevTools Mate",
        description: "Enhanced debugging utilities for web developers.",
        rating: 5.0,
        downloads: "5k+",
        category: "Developer Tools"
    }
];

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 font-bold text-xl text-primary">
                        <Shield className="h-6 w-6" />
                        <span>ExtensionHub</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Discover</a>
                        <a href="#" className="hover:text-primary transition-colors">Categories</a>
                        <a href="#" className="hover:text-primary transition-colors">Top Rated</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">Sign In</Button>
                        <Button>Submit Extension</Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 md:py-32 text-center container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Discover the Best <br className="hidden md:block" />
                    <span className="text-blue-600">Chrome Extensions</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Curated collection of powerful tools to supercharge your browsing experience.
                    Safe, verified, and ready to install.
                </p>

                <div className="max-w-md mx-auto relative mb-12">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search for extensions..."
                        className="pl-10 h-12 text-lg shadow-sm"
                    />
                </div>
            </section>

            {/* Featured Grid */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Featured Extensions</h2>
                    <Button variant="ghost">View All</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {extensions.map((ext) => (
                        <Card key={ext.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold text-xl">
                                    {ext.title[0]}
                                </div>
                                <CardTitle className="text-lg">{ext.title}</CardTitle>
                                <CardDescription>{ext.category}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {ext.description}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center text-sm font-medium text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    {ext.rating}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Download className="h-4 w-4" />
                                    {ext.downloads}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12 mt-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <div className="flex items-center justify-center gap-2 font-bold text-xl text-primary mb-4">
                        <Shield className="h-6 w-6" />
                        <span>ExtensionHub</span>
                    </div>
                    <p className="mb-4">&copy; 2024 ExtensionHub. All rights reserved.</p>
                    <div className="flex justify-center gap-6 text-sm">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
