'use client';

import React, { useState, useEffect, useRef } from 'react';
import { agendaData } from '../data/constants';

export default function AgendaSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Calculate vertical scroll progress through the agenda section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculation when top of container enters viewport middle
      const viewportTrigger = windowHeight * 0.6;
      const distanceScrolled = viewportTrigger - rect.top;
      const totalHeight = rect.height;

      let progress = (distanceScrolled / totalHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for popping up cards into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.getAttribute('data-index');
        if (entry.isIntersecting && index !== null) {
          setVisibleItems((prev) => ({ ...prev, [index]: true }));
        }
      });
    }, observerOptions);

    const itemElements = containerRef.current?.querySelectorAll('.timeline-item');
    if (itemElements) {
      itemElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="agenda" className="mx-auto mt-12 w-full max-w-6xl px-3 text-center sm:mt-20 sm:px-4 relative">
      {/* Section Header */}
      <div className="mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#EE4B15]/30 bg-[#EE4B15]/10 px-4 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#EE4B15] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#EE4B15] animate-ping" />
          ✦ OFFICIAL SCHEDULE & TIMELINE
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-blackhan text-white tracking-tight leading-[1.1] select-none">
          Event <span className="text-gradient-neon">Timeline</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Follow the snake timeline through 15 meticulously curated segments from morning registrations to keynotes, workshops, sponsor talks, and the grand wrap-up.
        </p>

        {/* Date & Meta Info Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-[#0C1235]/90 border border-[#EE4B15]/30 px-5 sm:px-7 py-2.5 rounded-full text-xs font-bold uppercase text-slate-200 tracking-wider mt-6 shadow-[0_0_25px_rgba(238,75,21,0.15)] select-none backdrop-blur-md">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#EE4B15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Tuesday, 8 September 2026</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2 text-[#EE4B15]">
            <svg className="w-4 h-4 text-[#EE4B15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>10:00 AM – 05:00 PM</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#EE4B15]">15</span> Sessions
          </div>
        </div>
      </div>

      {/* Snake Format Timeline Container */}
      <div ref={containerRef} className="relative mx-auto w-full max-w-5xl py-6">
        
        {/* Background Vertical Snake Track */}
        <div className="absolute left-6 sm:left-8 md:left-1/2 top-6 bottom-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

        {/* Scroll Progress Glowing Line */}
        <div
          className="absolute left-6 sm:left-8 md:left-1/2 top-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#EE4B15] via-[#FF7A45] to-[#EE4B15] shadow-[0_0_18px_rgba(238,75,21,0.95)] transition-all duration-150 ease-out pointer-events-none"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Laser Bullet Head moving with scroll line */}
        {scrollProgress > 0 && scrollProgress < 99 && (
          <div
            className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#EE4B15] shadow-[0_0_20px_#EE4B15,0_0_35px_#EE4B15] border-2 border-white transition-all duration-150 ease-out pointer-events-none z-30"
            style={{ top: `calc(1.5rem + ${scrollProgress}%)` }}
          >
            <span className="absolute inset-0 rounded-full bg-[#EE4B15] animate-ping opacity-75" />
          </div>
        )}

        {/* Timeline Items List */}
        <div className="space-y-10 sm:space-y-14 md:space-y-16">
          {agendaData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isRevealed = !!visibleItems[index];

            // Progress checkpoint ratio
            const itemProgressRatio = (index / (agendaData.length - 1)) * 100;
            const isPassedByLine = scrollProgress >= itemProgressRatio;

            return (
              <div
                key={item.sno || index}
                data-index={index}
                className="timeline-item relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Center / Left Snake Node on Spine */}
                <div
                  className="absolute left-6 sm:left-8 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
                >
                  {/* Outer Ripple Ping when revealed or passed */}
                  {(isRevealed || isPassedByLine) && (
                    <span className="absolute h-12 w-12 rounded-full bg-[#EE4B15]/30 animate-ping opacity-60" />
                  )}

                  {/* Numbered Node Badge */}
                  <div
                    className={`relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 font-black text-xs sm:text-sm transition-all duration-500 select-none shadow-lg ${
                      isPassedByLine || isRevealed
                        ? 'border-[#EE4B15] bg-[#EE4B15] text-white shadow-[0_0_25px_rgba(238,75,21,0.85)] scale-110'
                        : 'border-white/20 bg-[#0C1235] text-slate-400 scale-95'
                    }`}
                  >
                    {String(item.sno || index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Snake Horizontal Connecting Bridge (Desktop md:block) */}
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] pointer-events-none z-10 transition-all duration-500 ${
                    isEven
                      ? 'right-1/2 w-10 sm:w-14 origin-right bg-gradient-to-l'
                      : 'left-1/2 w-10 sm:w-14 origin-left bg-gradient-to-r'
                  } ${
                    isPassedByLine || isRevealed
                      ? 'from-[#EE4B15] to-[#EE4B15]/40 shadow-[0_0_10px_rgba(238,75,21,0.6)]'
                      : 'from-white/10 to-transparent'
                  }`}
                >
                  {/* Pulsing signal on the connector bridge */}
                  {(isPassedByLine || isRevealed) && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EE4B15] shadow-[0_0_8px_#EE4B15] ${
                        isEven ? 'right-0 animate-pulse' : 'left-0 animate-pulse'
                      }`}
                    />
                  )}
                </div>

                {/* Card Container Wrapper (Alternating Desktop Sides) */}
                <div
                  className={`w-full pl-14 sm:pl-20 md:pl-0 md:w-1/2 ${
                    isEven
                      ? 'md:pr-12 md:mr-auto md:text-right'
                      : 'md:pl-12 md:ml-auto md:text-left'
                  }`}
                >
                  {/* Card Content Box with Pop-up Animation */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveModalItem(item)}
                    className={`cursor-pointer group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,18,53,0.92),rgba(8,12,30,0.96))] p-5 sm:p-6 shadow-[0_15px_40px_rgba(3,6,18,0.45)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#EE4B15]/60 hover:shadow-[0_20px_50px_rgba(238,75,21,0.25)] ${
                      isRevealed
                        ? 'opacity-100 translate-y-0 scale-100 md:translate-x-0'
                        : `opacity-0 translate-y-10 scale-95 ${
                            isEven ? 'md:-translate-x-10' : 'md:translate-x-10'
                          }`
                    }`}
                  >
                    {/* Glowing Hover Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EE4B15]/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                    {/* Subtle Side Accent Beam */}
                    <div
                      className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#EE4B15] via-[#FF7A45] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isEven ? 'right-0' : 'left-0'
                      }`}
                    />

                    {/* Header Badges: Category, S.No & Duration */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3.5 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EE4B15]/30 bg-[#EE4B15]/15 px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#EE4B15]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#EE4B15] animate-pulse" />
                        {item.category}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                        {item.duration === 'Buffer' ? 'Buffer' : item.duration}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        #{String(item.sno || index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-blackhan text-white tracking-tight group-hover:text-[#FF8A50] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                      {item.description}
                    </p>

                    {/* Footer Info: Time Pill & Speaker Avatars */}
                    <div
                      className={`mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 ${
                        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                      }`}
                    >
                      {/* Timings Pill */}
                      <div className="inline-flex items-center gap-2 rounded-xl border border-[#EE4B15]/30 bg-[#EE4B15]/10 px-3 py-1.5 text-xs sm:text-sm font-tech font-bold text-[#EE4B15]">
                        <svg className="w-3.5 h-3.5 text-[#EE4B15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item.time}</span>
                      </div>

                      {/* Speakers or Action Badge */}
                      {item.speakers && item.speakers.length > 0 ? (
                        <div className={`flex items-center gap-2 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                          <div className="flex items-center -space-x-2">
                            {item.speakers.map((sp, sIdx) => (
                              <div key={sIdx} className="group/sp relative">
                                {sp.img ? (
                                  <img
                                    src={sp.img}
                                    alt={sp.name}
                                    className="h-8 w-8 rounded-full border-2 border-[#0C1235] object-cover shadow-md transition-all duration-200 group-hover/sp:z-30 group-hover/sp:scale-125 group-hover/sp:border-[#EE4B15]"
                                  />
                                ) : (
                                  <div className="h-8 w-8 rounded-full border-2 border-[#0C1235] bg-[#EE4B15]/20 text-[#EE4B15] flex items-center justify-center font-bold text-[10px] shadow-md">
                                    {sp.name.charAt(0)}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <span className="text-[11px] font-bold text-slate-300">
                            {item.speakers[0]?.name}
                            {item.speakers.length > 1 && ` +${item.speakers.length - 1}`}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-400 group-hover:text-[#EE4B15] transition-colors inline-flex items-center gap-1">
                          View details <span className="text-xs">→</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up Modal for Event Details */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-[28px] border border-[#EE4B15]/40 bg-[#0C1235] p-6 sm:p-8 text-left shadow-[0_0_60px_rgba(238,75,21,0.3)] animate-[fadeIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#EE4B15]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#EE4B15] text-white hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EE4B15]/30 bg-[#EE4B15]/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#EE4B15]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EE4B15] animate-pulse" />
                {activeModalItem.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                Duration: {activeModalItem.duration}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#EE4B15]">
                Segment #{activeModalItem.sno}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-blackhan text-white tracking-tight mb-3">
              {activeModalItem.title}
            </h3>

            {/* Timing Banner */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-[#EE4B15]/30 bg-[#EE4B15]/10 px-4 py-2 text-sm font-tech font-bold text-[#EE4B15] mb-4">
              <svg className="w-4 h-4 text-[#EE4B15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{activeModalItem.time}</span>
              <span className="text-slate-400 font-normal">({activeModalItem.duration})</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            {/* Speakers List if available */}
            {activeModalItem.speakers && activeModalItem.speakers.length > 0 && (
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                  Featured Speaker(s) & Mentors
                </h4>
                <div className="space-y-3">
                  {activeModalItem.speakers.map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                      {sp.img ? (
                        <img
                          src={sp.img}
                          alt={sp.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#EE4B15] shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#EE4B15]/20 text-[#EE4B15] flex items-center justify-center font-black text-sm border-2 border-[#EE4B15] shrink-0">
                          {sp.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-bold text-white">{sp.name}</div>
                        {(sp.role || sp.company) && (
                          <div className="text-xs text-slate-400 font-light">
                            {sp.role}{sp.company ? ` • ${sp.company}` : ''}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Close */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-full bg-[#EE4B15] hover:bg-[#FF7A45] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(238,75,21,0.4)]"
              >
                Close Pop-up
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
