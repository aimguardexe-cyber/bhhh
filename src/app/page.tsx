import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm">
        <Link href="/" className="flex items-center justify-center">
          <Code2 className="h-6 w-6" />
          <span className="font-bold ml-2">Coderyn</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Button variant="ghost" asChild>
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Sign In
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
                <div className="flex flex-col justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        The Ultimate Platform for Digital Creators
                        </h1>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                        Everything you need to sell, manage, and deliver your digital products seamlessly.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2 mx-auto">
                        <div className="flex space-x-2 justify-center">
                            <Button asChild>
                                <Link href="/dashboard">Get Started</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#features">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 dark:bg-muted/10">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Product Management</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Manage your digital products with ease.</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our platform provides all the tools you need to sell, manage, and deliver your software, code snippets, or any digital asset.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-4">
                            <li>
                                <div className="grid gap-1">
                                <h3 className="text-lg font-bold">Secure Delivery</h3>
                                <p className="text-sm text-muted-foreground">Instantly deliver files to customers after purchase.</p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                <h3 className="text-lg font-bold">License Management</h3>
                                <p className="text-sm text-muted-foreground">Generate and manage license keys for your software.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full h-80 rounded-lg overflow-hidden order-first lg:order-last">
                      <Image 
                        src="https://picsum.photos/seed/landing-feature/600/400"
                        alt="Feature"
                        fill
                        className="object-cover"
                        data-ai-hint="abstract technology"
                      />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Coderyn. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
