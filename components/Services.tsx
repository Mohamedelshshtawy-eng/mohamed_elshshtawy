"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Brain, GraduationCap, Server } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Science Graduate",
      description: "Chemistry and Zoology Science Graduate with strong analytical and research skills",
      skills: ["Chemistry", "Zoology", "Research", "Laboratory Skills"],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Professional",
      description: "Educational Diploma holder and experienced Chemistry Teacher",
      skills: ["Teaching", "Curriculum Development", "Student Assessment", "Educational Technology"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Developer",
      description: "Creating responsive and interactive user interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Developer",
      description: "Building robust server-side applications and APIs",
      skills: ["Node.js", "Express", "Nest.js", "RESTful APIs"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Expert",
      description: "Designing and managing various database systems",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications in the cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Data Science",
      description: "Implementing machine learning and data analysis solutions",
      skills: ["Python", "Machine Learning","Deep Learning","Data Science" ,"Data Analysis", "AI Models"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications",
      skills: ["React Native", "Flutter"],
    },
  ]

  const languages = [
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 95 },
    { name: "Java", level: 95 },
    { name: "GoLang", level: 85 },
    { name: "TypeScript", level: 85 },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-slate-900">
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
              My Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Combining scientific knowledge with cutting-edge technology to deliver innovative solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-md text-xs border border-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Programming Languages
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-cyan-400">{lang.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
