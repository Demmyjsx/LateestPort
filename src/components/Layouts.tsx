import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, Linkedin, Github, CirclePower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navigation = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ademola-abdul", icon: <Linkedin className="w-6 h-7" /> },
  { name: "Github", href: "https://github.com/Demmyjsx", icon: <Github className="w-6 h-7" /> },
];

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if the current path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // State for toggling background color
  const [isDark, setIsDark] = useState(false);

  // Function to toggle dark/light mode
  const toggleBackground = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo link */}
            <Link
              to="/"
              className="text-2xl font-mono transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {"< />"}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-8">
              {navigation.map((item) => (
                item.icon ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors hover:text-primary ${isActive(item.href) ? "text-primary font-medium" : "text-muted-foreground"}`}
                  >
                    {item.icon} {/* Display the icon */}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors hover:text-primary ${isActive(item.href) ? "text-primary font-medium" : "text-muted-foreground"}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px]">
                <SheetHeader>
                  <SheetTitle className="font-mono text-left">{"< />"}</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      {item.icon ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-lg transition-colors hover:text-primary ${isActive(item.href) ? "text-primary font-medium" : "text-muted-foreground"}`}
                        >
                          {item.icon}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center gap-2 text-lg transition-colors hover:text-primary ${isActive(item.href) ? "text-primary font-medium" : "text-muted-foreground"}`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

       
          </nav>
        </div>
      </header>

      <main>
        <Outlet /> {/* Render the child routes here */}
      </main>
    </div>
  );
}
