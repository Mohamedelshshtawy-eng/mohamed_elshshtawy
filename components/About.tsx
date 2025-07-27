"use client"

import { motion } from "framer-motion"
import { Download, Award } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/30">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="About me"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-2 border-purple-500 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm"
              >
                <Award className="w-8 h-8 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Hello! I'm a unique blend of scientist and developer, bringing analytical thinking from my Chemistry and
                Zoology background into the world of technology. My journey started in the laboratory, where I developed
                a passion for problem-solving and systematic approaches to complex challenges.
              </p>

              <p className="text-lg">
                As an Educational Diploma holder and Chemistry Teacher, I've honed my ability to break down complex
                concepts and communicate them effectively. This skill translates perfectly into writing clean,
                maintainable code and collaborating with diverse teams.
              </p>

              <p className="text-lg">
                Today, I leverage my scientific mindset to build innovative web applications, implement AI/ML solutions,
                and create data-driven insights. I'm passionate about using technology to solve real-world problems and
                make a positive impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">5+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">15+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                <Award className="w-5 h-5" />
                View Certificates
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
