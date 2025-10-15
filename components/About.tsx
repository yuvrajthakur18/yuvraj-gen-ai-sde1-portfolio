"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Rocket, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Promoted to SDE 1",
      description: "Generative AI Engineer at Valuebound Solutions",
    },
    {
      icon: Code,
      title: "2 Years Experience",
      description: "Full-stack development with AI specialization",
    },
    {
      icon: Rocket,
      title: "Production AI Systems",
      description: "Deployed enterprise-grade GenAI applications",
    },
    {
      icon: Sparkles,
      title: "Tech Stack Mastery",
      description: "Python, FastAPI, LangChain, Next.js, AWS",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting the future of AI-powered applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
              <div className="relative aspect-square bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl flex items-center justify-center">
                {/* <div className="text-white text-9xl font-bold opacity-20">YT</div> */}
                <img
                  src="/UV-DP.png"
                  alt="Yuvraj Singh Thakur"
                  className="rounded-3xl object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Yuvraj Singh Thakur</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A Software Developer and Generative AI Engineer with 2 years of
              hands-on experience in building intelligent, scalable, and
              production-ready systems. I specialize in fine-tuning foundational
              models, developing end-to-end ML pipelines, and integrating AI
              reasoning into real-world applications. Beyond AI, I’ve worked
              extensively on backend architectures using Spring Boot and
              FastAPI, and delivered multiple full-stack web solutions with a
              strong focus on frontend scalability and user experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Current Role:</strong> Software Engineer → SDE 1
                  (Generative AI Engineer)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Experience:</strong> 2 Years (internship + full-time)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Focus:</strong> Agentic AI, LangChain, RAG Systems,
                  FastAPI, Spring Boot, React, and Scalable Full-Stack Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
