"use client";

import { useState } from "react";
import Image from "next/image";
import { smartCanvasSection, ctaLink } from "@/data/content";

export default function SmartCanvas() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            {smartCanvasSection.heading}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-500 md:text-lg">
            {smartCanvasSection.description}
          </p>

          {/* CTA button */}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
          >
            立即创作
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Tab switcher */}
        <div className="mb-8 flex items-center justify-center gap-8 border-b border-gray-200">
          {smartCanvasSection.tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative pb-3 text-base font-medium transition-colors md:text-lg ${
                activeTab === index
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
              {/* Active indicator */}
              {activeTab === index && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Canvas display area */}
        <div className="relative mx-auto overflow-hidden rounded-2xl">
          {/* Background board */}
          <Image
            src={smartCanvasSection.background}
            alt="Smart Canvas board"
            width={1200}
            height={800}
            className="w-full"
          />

          {/* Tab content overlay */}
          {smartCanvasSection.tabs.map((tab, index) => (
            <Image
              key={index}
              src={tab.image}
              alt={tab.label}
              fill
              className={`object-contain transition-opacity duration-500 ${
                activeTab === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
