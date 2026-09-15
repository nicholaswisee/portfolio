"use client";

import { cn } from "@/lib/utils";
import { usePortfolioPreferences } from "@/components/PortfolioPreferences";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
              visible,
            })
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "glass-surface relative z-[60] mx-auto hidden w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center self-start rounded-full border border-border px-4 py-2 lg:grid",
        visible
          ? "bg-background/90 shadow-lg shadow-foreground/5 backdrop-blur-xl"
          : "bg-background/75 shadow-md shadow-foreground/5 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      data-site-nav="true"
      className={cn(
        "relative z-20 hidden flex-row items-center justify-center space-x-1 text-sm font-medium transition-colors duration-200 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative rounded-full px-4 py-2 text-muted transition-colors hover:text-foreground focus-visible:bg-elevated focus-visible:text-foreground motion-safe:active:scale-[0.98]"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-full bg-elevated"
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "glass-surface relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-2xl border border-border px-0 py-2 lg:hidden",
        visible
          ? "bg-background/90 backdrop-blur-xl"
          : "bg-background/75 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn("flex w-full flex-row items-center justify-between px-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-14 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-xl border border-border bg-surface p-4 shadow-lg shadow-foreground/10",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="rounded-md p-2 text-foreground transition-colors hover:bg-elevated focus-visible:bg-elevated motion-safe:active:scale-[0.98]"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};

export const NavbarLogo = () => {
  const { theme } = usePortfolioPreferences();

  return (
    <a
      href="#top"
      aria-label="Nicholas Wise home"
      className="relative z-20 flex shrink-0 justify-self-start rounded-md p-1 focus-visible:bg-elevated"
    >
      <img
        src={theme === "dark" ? "/logo.png" : "/logo-invert.png"}
        alt=""
        aria-hidden="true"
        className="size-7 rounded-[0.35rem]"
      />
    </a>
  );
};
