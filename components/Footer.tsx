"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              {/* Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "} */}
              {/* by{" "} */}
              <span className="font-semibold text-gray-900 dark:text-white">
                Yuvraj Singh Thakur
              </span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/yuvrajthakur18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/yuvrajthakur18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:ysthakur180402@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
