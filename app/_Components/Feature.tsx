"use client";
import React from "react";
import { StickyScroll } from '@/app/_Components/sticky-scroll-reveal';
import Image from "next/image";

const content = [
  {
    title: "Powerful Text Editor",
    description:
      `Our state-of-the-art text editor provides a seamless writing experience, enabling you to focus on your content without distractions. With a clean and intuitive interface, you can easily format your documents, add images, and include links. Whether you're drafting a blog post, writing code, or working on a report, our editor has all the tools you need to create stunning documents effortlessly.`,
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/1.jpg"
          width={700}
          height={700}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Easy File Handling",
    description:
      "Managing your files has never been easier. Upload, organize, and access your documents from anywhere with our user-friendly file handling system. With drag-and-drop functionality and robust search capabilities, you can find exactly what you need in seconds. Plus, our secure cloud storage ensures your files are always safe and accessible, giving you peace of mind.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/3.png"
          width={700}
          height={700}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Seamless Team Creation",
    description:
      "Bring your team together with our powerful collaboration tools. Create and manage teams effortlessly, assign roles, and set permissions to ensure everyone has the right level of access. Work on projects in real-time, leave comments, and track changes to keep everyone on the same page. With our platform, teamwork is more efficient, organized, and productive.",


    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/4.png"
        width={700}
        height={700}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Interactive canvas",
    description:
      "Our interactive canvas is the perfect space to brainstorm, plan, and visualize your ideas. Use it to create mind maps, flowcharts, diagrams, and more. With an array of shapes, connectors, and customizable options, you can bring your concepts to life with ease. Collaborate with your team in real-time, share your canvas, and watch your ideas evolve together.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
        src="/2.jpg"
        width={700}
        height={700}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
