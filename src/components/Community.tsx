"use client";

import Image from "next/image";
import { communitySection } from "@/data/content";
import { ArrowRight, Heart } from "lucide-react";

export default function Community() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {communitySection.heading}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-8">
            {communitySection.description}
          </p>
          <a
            href={communitySection.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-900 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            {communitySection.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {communitySection.works.map((work, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 group relative rounded-xl overflow-hidden bg-gray-100"
            >
              {/* Work Image */}
              <Image
                src={work.image}
                alt={`${work.username}的作品`}
                width={400}
                height={500}
                className="w-full block rounded-xl"
              />

              {/* User Info Row */}
              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <Image
                    src={work.avatar}
                    alt={work.username}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700 truncate">
                    {work.username}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0 text-gray-400">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{work.likes}</span>
                </div>
              </div>

              {/* Hover Overlay with "创作同款" Button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end justify-center pointer-events-none">
                <a
                  href={communitySection.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-12 px-6 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-white"
                >
                  创作同款
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
