"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/app/_Components\/link-preview";

export function LinkPreviewDemo() {
  return (
    // SlateCraft: Empower teams with a collaborative canvas, an advanced text editor, and seamless project management for enhanced productivity

    <div className="flex justify-center items-center h-[10rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://slateflow.vercel.app/Dashboard" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
        Empower teams
        </LinkPreview>{" "}
        with a collaborative{" "}
        <LinkPreview  url="https://excalidraw.com/" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
        canvas
        </LinkPreview>{" "}
        an advanced
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        {" "}
        <LinkPreview
          url="https://slateflow.vercel.app/workspace/jd71gvqyk31pvz1s8a3j1nf63n6v68x4"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          text editor
        </LinkPreview>{" "}
        and seamless project management for enhanced productivity
      </p>
    </div>
  );
}
