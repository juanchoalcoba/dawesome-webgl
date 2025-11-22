import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Code2Icon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Showcase" },
    { to: "/explore", label: "Explore" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {/* NAV WRAPPER */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-black/10"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="p-2 rounded-xl bg-linear-to-br from-gray-700 to-black 
                   shadow-xs group-hover:scale-110 transition-transform duration-300"
            >
              <Code2Icon className="w-6 h-6 text-white" />
            </div>

            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-300",
                scrolled ? "text-white" : "text-black"
              )}
            >
              DesignAwesome
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-black/70 hover:text-black"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className={cn(
                "flex items-center shadow-lg transition-all duration-300",
                scrolled
                  ? "bg-linear-to-r from-purple-900 to-primary text-white hover:opacity-90"
                  : "bg-black text-white hover:bg-gray-800"
              )}
            >
              <Sparkles
                className={cn(
                  "w-4 h-4 mr-1 transition-colors",
                  scrolled ? "text-white" : "text-white"
                )}
              />
              Get Started
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-white" : "text-black"
            )}
          >
            {open ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6 transition-all",
                  scrolled ? "text-white" : "text-black"
                )}
              />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className="text-4xl font-semibold text-white hover:text-primary transition-all"
          >
            {l.label}
          </Link>
        ))}

        <Button
          size="lg"
          className="flex justify-center cursor items-center w-60 bg-linear-to-r from-purple-600 to-primary text-white shadow-xl hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Get Started
        </Button>
      </div>
    </>
  );
}
