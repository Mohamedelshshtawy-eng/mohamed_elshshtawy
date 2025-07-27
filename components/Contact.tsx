"use client"

import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you need a full-stack
                developer, data scientist, or educational consultant, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-slate-400">mohamedelshshtwy745@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-slate-400">+201026058663</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-slate-400">Egypt,Elgarbya</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300 group"
                >
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="Project Discussion"
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400 resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
