"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Briefcase,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

type Project = {
  title: string;
  projectType: string;
  keywords: string;
  description: string;
  status: string;
  year: number;
  link: string;
  tags: string[];
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Completed", "Ongoing", "Planned"];

  const filteredProjects = (projectsData as Project[]).filter((project) => {
    if (filter === "All") return true;
    return project.status === filter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "Ongoing":
        return <Clock className="w-4 h-4" />;
      case "Planned":
        return <Sparkles className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Ongoing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "Scoping":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Building intelligent systems from concept to production
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className={
                  filter === filterOption
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                    : ""
                }
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusIcon(project.status)}
                    {project.status}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <Briefcase className="w-4 h-4 flex-shrink-0" />
                  {/* <span className="font-medium truncate">
                    {project.projectType}
                  </span> */}
                  {/* <span className="text-gray-400 dark:text-gray-500">•</span> */}
                  <span className="text-xs truncate">{project.keywords}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 6).map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.link !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
