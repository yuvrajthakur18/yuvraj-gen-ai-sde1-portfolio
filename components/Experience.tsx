"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2024 - 2025",
      company: "Valuebound Solutions",
      role: "Associate → SDE 1 (Generative AI Engineer)",
      description:
        "Promoted to SDE 1, leading development of production-grade GenAI applications. Built AI Interview Assistant, LeadLens, and centralized content management systems. Specialized in LangChain, RAG pipelines, and end-to-end AI system design.",
      technologies: ["Python", "LangChain", "FastAPI", "PyTorch", "Next.js", "AWS"],
    },
    {
      year: "2024",
      company: "Avaali Solutions",
      role: "Backend Developer",
      description:
        "Developed enterprise-grade backend systems using Spring Boot. Built procurement platform with automated workflows, REST APIs, and microservices architecture. Focused on scalable system design and performance optimization.",
      technologies: ["Spring Boot", "Java", "Microservices", "REST APIs"],
    },
    {
      year: "2023",
      company: "Linkites Infotech",
      role: "Web Developer Intern",
      description:
        "Built full-stack web applications using React and Node.js. Developed responsive UIs, integrated APIs, and collaborated with cross-functional teams on multiple client projects.",
      technologies: ["React.js", "Node.js", "JavaScript", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building production systems across AI, backend, and full-stack domains
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-600 to-cyan-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div
                  className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div
                  className={`ml-24 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {exp.company}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
