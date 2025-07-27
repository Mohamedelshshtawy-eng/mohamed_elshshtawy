"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code, Sparkles } from "lucide-react"

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500"
          style={{ scaleX: scrollProgress }}
          initial={{ scaleX: 0 }}
          transformOrigin="0%"
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-1 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Enhanced Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative flex items-center space-x-3 group cursor-pointer"
          >
            {/* Animated Icon Container */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden"
            >
              {/* Background Animation */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, #00ffff, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #3b82f6)",
                    "linear-gradient(45deg, #3b82f6, #00ffff)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0"
              />

              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code className="w-6 h-6 text-white relative z-10" />
              </motion.div>

              {/* Sparkle Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1 right-1"
              >
                <Sparkles className="w-3 h-3 text-yellow-300" />
              </motion.div>
            </motion.div>

            {/* Animated Text */}
            <div className="flex flex-col">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Elshsht
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-slate-400 font-medium tracking-wider"
              >
                CREATIVE DEVELOPER
              </motion.div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background Animation */}
            <motion.div
              animate={{
                background: isMenuOpen
                  ? "linear-gradient(45deg, #ef4444, #dc2626)"
                  : "linear-gradient(45deg, #00ffff, #8b5cf6)",
              }}
              className="absolute inset-0 opacity-20"
            />

            {/* Icon with smooth transition */}
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-red-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-cyan-400" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/30 rounded-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 1.5, opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-slate-800 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

              <div className="container mx-auto px-4 py-6 space-y-2 relative">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    onClick={() => setIsMenuOpen(false)}
                    className="block relative group"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-slate-800/50">
                      {/* Icon */}
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full" />
                      </motion.div>

                      {/* Text */}
                      <span className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                        {item.name}
                      </span>

                      {/* Arrow */}
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <div className="w-0 h-0 border-l-4 border-l-cyan-400 border-y-2 border-y-transparent" />
                      </motion.div>
                    </div>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.a>
                ))}

                {/* Social Links in Mobile Menu */}
                <motion.div variants={itemVariants} className="pt-4 mt-4 border-t border-slate-700/50">
                  <div className="flex justify-center space-x-4">
                    {[
                      { name: "GitHub", icon: "🚀" },
                      { name: "LinkedIn", icon: "💼" },
                      { name: "Email", icon: "📧" },
                    ].map((social, index) => (
                      <motion.button
                        key={social.name}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl flex items-center justify-center text-lg hover:border-cyan-400/60 transition-all duration-300"
                      >
                        {social.icon}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
