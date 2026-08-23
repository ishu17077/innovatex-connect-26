'use client';

import React from 'react';
import { speakersList } from '../data/constants';

function SpeakerCard({ speaker, index }) {
  return (
    <div className="flex flex-col items-center w-[270px] sm:w-[290px] md:w-[310px] shrink-0 transition-transform duration-300 hover:-translate-y-1">

      {/* Slanted Card Frame Container */}
      <div className="relative w-full h-[310px] sm:h-[330px] md:h-[350px] mb-4">

        {/* Orange Accent Frame (Top & Right Outline) */}
        <div
          className="absolute -top-2.5 -right-2.5 w-full h-full -skew-x-[11deg] rounded-[3px] border-[2px] border-[#EE4B15] pointer-events-none z-0 shadow-[0_0_15px_rgba(238,75,21,0.2)]"
          aria-hidden="true"
        />

        {/* Foreground Photo Card (Slanted Parallelogram with subtle corner radius) */}
        <div className="relative w-full h-full -skew-x-[11deg] rounded-[3px] overflow-hidden z-10 bg-[#0C1235] shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
          <img
            src={speaker.image}
            alt={speaker.name}
            style={{
              objectPosition: speaker.imagePosition || (index === 1 ? '65% 18%' : 'center 15%'),
              transform: `scale(${speaker.scale || (index === 1 ? 1.4 : 1.3)})`,
            }}
            className="w-full h-full object-cover skew-x-[11deg]"
          />
        </div>
      </div>

      {/* Upright Text Information Below the Card */}
      <div className="text-center flex flex-col items-center w-full px-2">
        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wider uppercase font-sans">
          {speaker.name}
        </h3>
        <p className="mt-1 text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-[#EE4B15]">
          {speaker.role}
        </p>
        <p className="mt-0.5 text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
          {speaker.company}
        </p>
        {speaker.workshop && (
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE4B15]/10 border border-[#EE4B15]/30 text-[#EE4B15] text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-[0_0_12px_rgba(238,75,21,0.15)]">
            <span className="text-[8px] text-[#EE4B15]">✦</span>
            <span>Workshop: {speaker.workshop}</span>
          </div>
        )}
      </div>

    </div>
  );
}

export default function SpeakersSection() {
  return (
    <section id="speakers" className="relative z-10 w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Flex Row: Solid Orange Vertical SPEAKERS + Speaker Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-14">

          {/* Vertical "SPEAKERS" Solid Orange Typography */}
          <div className="flex items-center justify-center shrink-0 select-none px-2 lg:px-0">
            <h2
              className="font-blackhan text-5xl sm:text-6xl md:text-7xl lg:text-[86px] leading-none lg:[writing-mode:vertical-lr] select-none tracking-[0.08em]"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #EE4B15',
              }}
            >
              SPEAKERS
            </h2>
          </div>

          {/* Speaker Cards Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-12 w-full max-w-5xl">
            {speakersList.map((speaker, index) => (
              <SpeakerCard
                key={`${speaker.name}-${index}`}
                speaker={speaker}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
