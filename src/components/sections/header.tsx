import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { id: "01", label: "home", href: "#hero-section" },
  { id: "02", label: "expertise", href: "#expertise" },
  { id: "03", label: "work", href: "#work" },
  { id: "04", label: "experience", href: "#experience" },
  { id: "05", label: "contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="top-0 left-0 w-full z-50 bg-transparent">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="font-logo text-2xl font-bold">
            TamalSen._
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-12">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="flex items-baseline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                  >
                    <span
                      className="font-mono text-xs mr-2"
                      style={{ color: "var(--color-cyan-accent)" }}
                    >
                      {item.id}
                    </span>
                    <span>// {item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button className="md:hidden text-white" aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
