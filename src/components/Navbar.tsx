'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BotMessageSquare } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Filosofi', href: '#philosophy' },
  { name: 'Metodologi', href: '#methodology' },
  { name: 'Layanan', href: '#services' },
  { name: 'Klien', href: '#clients' },
  { name: 'Perjalanan', href: '#journey' },
  { name: 'Penghargaan', href: '#award' },
  { name: 'Unduh', href: '#download' },
  { name: 'DWC.AI Agent', href: '/ai' },
];

export const Navbar = ({ forceSolid = false }: { forceSolid?: boolean }) => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* State for Scroll Spy */
  const [activeSection, setActiveSection] = useState<string>('home');
  const hasSolidBackground = forceSolid || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Scroll Spy Logic */
  useEffect(() => {
    const sections = navLinks.map(link => link.href.substring(1)); // ['home', 'philosophy', ...]
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px' // Trigger when section is in middle of viewport
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== '/') {
      return;
    }

    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId); // Optimistically set active
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  const getNavigationHref = (href: string) => href.startsWith('#') && pathname !== '/' ? `/${href}` : href;
  const isSectionLink = (href: string) => href.startsWith('#');


  /* Variants... (unchanged) */
  const sidebarVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 10 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        hasSolidBackground
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="text-2xl font-bold tracking-tighter z-50 group"
        >
          <span className={`transition-colors duration-300 ${hasSolidBackground ? 'text-foreground' : 'text-white'}`}>DWC</span>
          <span className={`text-primary transition-transform duration-300 group-hover:scale-150 inline-block ml-0.5`}>.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 bg-black/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10" onMouseLeave={() => setHoveredIndex(null)}>
           {navLinks.map((link, index) => {
            const isActive = isSectionLink(link.href) ? activeSection === link.href.substring(1) : pathname === link.href;
            return (
              <Link
                key={link.name}
                href={getNavigationHref(link.href)}
                onClick={(e) => isSectionLink(link.href) && handleSmoothScroll(e, link.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                  hasSolidBackground
                    ? (isActive || hoveredIndex === index) ? 'text-white' : 'text-foreground/80'
                    : 'text-white'
                }`}
              >
                {(hoveredIndex === index || isActive) && (
                  <motion.span
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      mass: 0.5
                    }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            href="https://api.whatsapp.com/send/?phone=6285940834227&text=Halo+DWC.AI%2C+aku+mendapatkan+informasi+dari+Websitenya+%2Adadikwahyuchang.id%2A.%0AIngin+bertanya+nih+%3F+&type=phone_number&app_absent=0"
            target="_blank"
            variant={hasSolidBackground ? 'primary' : 'white'}
            className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <BotMessageSquare className="w-4 h-4 mr-2" />
            DWC.AI
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-foreground w-6 h-6" />
          ) : (
            <Menu className={`${hasSolidBackground ? 'text-foreground' : 'text-white'} w-6 h-6`} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={getNavigationHref(link.href)}
                    className="text-3xl font-bold text-foreground hover:text-primary transition-colors tracking-tight"
                    onClick={(e) => {
                      if (isSectionLink(link.href)) handleSmoothScroll(e, link.href);
                      else setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Button
                  href="https://api.whatsapp.com/send/?phone=6285940834227&text=Halo+DWC.AI%2C+aku+mendapatkan+informasi+dari+Websitenya+%2Adadikwahyuchang.id%2A.%0AIngin+bertanya+nih+%3F+&type=phone_number&app_absent=0"
                  target="_blank"
                  className="mt-4 bg-primary text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BotMessageSquare className="w-5 h-5 mr-2" />
                  DWC.AI
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
