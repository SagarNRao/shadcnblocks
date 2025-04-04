"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Instagram, Linkedin, ArrowRight, Mountain, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Circle } from "lucide-react"

export default function AnimatedFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter signup
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={item} className="space-y-4">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Circle className="h-6 w-6" />
              <span className="text-xl font-bold">XYZ Inc</span>
            </motion.div>
            <p className="text-muted-foreground">
              Building the future, one pixel at a time. We create digital experiences that delight and inspire.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2">
              {["Blog", "Documentation", "FAQ", "Support", "Privacy Policy"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-medium">Stay Updated</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pr-10"
                />
                <motion.div
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {isSubmitted ? <CheckCircle className="h-5 w-5 text-green-500" /> : null}
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} XYZ Inc. All rights reserved.</p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {[
              { icon: <Twitter className="h-5 w-5" />, href: "#" },
              { icon: <Instagram className="h-5 w-5" />, href: "#" },
              { icon: <Github className="h-5 w-5" />, href: "#" },
              { icon: <Linkedin className="h-5 w-5" />, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

