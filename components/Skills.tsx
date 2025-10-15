"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FileCode } from "lucide-react";

interface Skill {
  name: string;
  logo: string;
  className?: string;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "text-orange-500",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      className: "text-red-600",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "text-yellow-500",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      className: "text-blue-600",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      className: "text-red-600",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      className: "text-orange-500",
    },
    {
      name: "CrewAI",
      logo: "https://raw.githubusercontent.com/joaomdmoura/crewAI/main/docs/crewai_logo.png",
      className: "text-purple-600",
    },
    {
      name: "LangChain",
      logo: "https://raw.githubusercontent.com/langchain-ai/langchain/main/docs/static/img/brand/icon.png",
      className: "text-green-600",
    },
    {
      name: "OpenAI APIs",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-1.svg",
      className: "text-green-600",
    },
    {
      name: "Generative AI",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-1.svg",
      className: "text-blue-500",
    },
    {
      name: "Large Language Models",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      className: "text-purple-600",
    },
    {
      name: "Multimodal AI",
      logo: "https://cdn.worldvectorlogo.com/logos/pytorch-3.svg",
      className: "text-indigo-600",
    },
    {
      name: "Deep Learning",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      className: "text-pink-600",
    },
    {
      name: "Neural Networks",
      logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
      className: "text-teal-600",
    },
    {
      name: "RAG",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-1.svg",
      className: "text-orange-500",
    },
    {
      name: "Vector DB",
      logo: "https://www.pinecone.io/images/pinecone-logo-standard.png",
      className: "text-blue-500",
    },
    {
      name: "Web Scraping",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scrapy/scrapy-original.svg",
      className: "text-green-600",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "text-cyan-400",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "text-gray-900",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "text-blue-600",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building intelligent systems with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="flex flex-col items-center justify-center p-4 h-28 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-12 h-12 mb-3">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                  <div
                    className={`absolute inset-0 w-12 h-12 rounded-lg bg-gradient-to-br ${skill.className} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden`}
                  >
                    <FileCode className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                  {skill.name}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
