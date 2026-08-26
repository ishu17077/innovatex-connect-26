'use client';

import Image from 'next/image';
import Link from 'next/link';

type Sponsor = {
  name: string;
  website: string;
  logo: string;
};

type Tier = 'gold' | 'silver' | 'bronze' | 'inkind';

const SPONSORS: Record<Tier, Sponsor[]> = {
  gold: [
    {
      name: 'Proveniq',
      website: 'www.proveniq.co.in',
      logo: '/sponsers/proveniq.webp',
    },
    {
      name: 'Miro',
      website: 'https://miro.com/',
      logo: '/sponsers/miro.jpeg',
    },
  ],

  silver: [
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
  ],

  bronze: [
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
  ],

  inkind: [
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
    {
      name: 'Sponsor Name',
      website: '#',
      logo: '',
    },
  ],
};

const TIER_CONFIG: Record<
  Tier,
  {
    label: string;
    color: string;
    glow: string;
  }
> = {
  gold: {
    label: 'GOLD',
    color: '#FFD000',
    glow: 'rgba(255, 208, 0, 0.08)',
  },

  silver: {
    label: 'SILVER',
    color: '#BFC3CF',
    glow: 'rgba(191, 195, 207, 0.06)',
  },

  bronze: {
    label: 'BRONZE',
    color: '#D68424',
    glow: 'rgba(214, 132, 36, 0.07)',
  },

  inkind: {
    label: 'IN-KIND',
    color: '#EE4B15',
    glow: 'rgba(238, 75, 21, 0.06)',
  },
};

function SponsorLogo({
  sponsor,
  tier,
}: {
  sponsor: Sponsor;
  tier: Tier;
}) {
  const config = TIER_CONFIG[tier];

  const content = (
    <div className="flex h-full w-full items-center justify-center">
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={320}
          height={180}
          className="
            max-h-[60px]
            max-w-[180px]
            object-contain
            opacity-70
            transition-all
            duration-300
            hover:opacity-100
            hover:scale-105
            sm:max-h-[70px]
            sm:max-w-[200px]
            md:max-h-[80px]
            md:max-w-[220px]
          "
        />
      ) : (
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            opacity-15
            sm:text-sm
          "
          style={{ color: config.color }}
        >
          LOGO
        </span>
      )}
    </div>
  );

  if (!sponsor.website || sponsor.website === '#') {
    return content;
  }

  return (
    <Link
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        h-full
        w-full
        transition-transform
        duration-300
        hover:scale-[1.02]
      "
    >
      {content}
    </Link>
  );
}

function TierSection({
  tier,
  sponsors,
}: {
  tier: Tier;
  sponsors: Sponsor[];
}) {
  const config = TIER_CONFIG[tier];

  const gridCols =
    sponsors.length <= 1
      ? 'grid-cols-1'
      : sponsors.length === 2
        ? 'grid-cols-2'
        : sponsors.length === 3
          ? 'grid-cols-1 sm:grid-cols-3'
          : 'grid-cols-2 md:grid-cols-4';

  return (
    <div
      className="relative mb-14 sm:mb-16 md:mb-20"
      style={{ '--tier-color': config.color } as React.CSSProperties}
    >
      {/* Ambient tier glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-x-4
          -inset-y-2
          rounded-3xl
          opacity-0
          transition-opacity
          duration-500
        "
        style={{
          background: `radial-gradient(ellipse at center, ${config.glow}, transparent 70%)`,
        }}
      />

      {/* Frame container */}
      <div className="relative min-h-[120px] sm:min-h-[150px] md:min-h-[170px]">
        {/* Top line */}
        <div
          className="
            absolute
            left-[60px]
            right-0
            top-0
            h-[2px]
            sm:left-[72px]
            md:left-[88px]
          "
          style={{ backgroundColor: config.color, opacity: 0.5 }}
        />

        {/* Left vertical line */}
        <div
          className="
            absolute
            bottom-0
            left-[18px]
            top-0
            w-[2px]
            sm:left-[20px]
          "
          style={{ backgroundColor: config.color, opacity: 0.5 }}
        />

        {/* Right vertical line */}
        <div
          className="
            absolute
            bottom-0
            right-0
            top-0
            w-[2px]
          "
          style={{ backgroundColor: config.color, opacity: 0.5 }}
        />

        {/* Bottom line */}
        <div
          className="
            absolute
            bottom-0
            left-[18px]
            right-0
            h-[2px]
            sm:left-[20px]
          "
          style={{ backgroundColor: config.color, opacity: 0.3 }}
        />

        {/* Corner accent - top left */}
        <div
          className="
            absolute
            left-[14px]
            top-[-4px]
            z-10
            h-[10px]
            w-[10px]
            rotate-45
            sm:left-[16px]
            sm:top-[-5px]
            sm:h-[12px]
            sm:w-[12px]
          "
          style={{ backgroundColor: config.color }}
        />

        {/* Tier label */}
        <div
          className="
            absolute
            left-[36px]
            top-[-14px]
            z-10
            bg-[#090D2B]
            pr-3
            sm:left-[40px]
            sm:top-[-16px]
            sm:pr-4
          "
        >
          <h3
            className="
              whitespace-nowrap
              text-[22px]
              font-blackhan
              uppercase
              leading-none
              tracking-tight
              sm:text-[28px]
              md:text-[34px]
            "
            style={{ color: config.color }}
          >
            {config.label}
          </h3>
        </div>

        {/* Sponsor logos grid */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            pl-[50px]
            pr-4
            pt-2
            sm:pl-[60px]
            sm:pr-6
            md:pl-[72px]
            md:pr-8
          "
        >
          {sponsors.length > 0 && (
            <div
              className={`
                grid
                w-full
                items-center
                justify-items-center
                gap-3
                sm:gap-4
                md:gap-5
                ${gridCols}
              `}
            >
              {sponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="
                    flex
                    h-[70px]
                    w-full
                    items-center
                    justify-center
                    px-2
                    sm:h-[85px]
                    sm:px-3
                    md:h-[100px]
                  "
                >
                  <SponsorLogo sponsor={sponsor} tier={tier} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SponsorsSection() {
  return (
    <section
      className="
        relative
        z-10
        w-full
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-6
          sm:px-8
          md:px-12
        "
      >
        {/* Heading */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <span
            className="
              mb-3
              inline-block
              select-none
              text-[10px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#EE4B15]
            "
          >
            &#10022; BACKED BY
          </span>
          <h2
            className="
              select-none
              text-[clamp(2.5rem,8vw,7rem)]
              font-blackhan
              uppercase
              leading-[0.85]
              tracking-[-0.05em]
              text-[#F1FDFD]
            "
          >
            SPONSORS
          </h2>
        </div>

        {/* Sponsor tiers */}
        <TierSection tier="gold" sponsors={SPONSORS.gold} />
        <TierSection tier="silver" sponsors={SPONSORS.silver} />
        <TierSection tier="bronze" sponsors={SPONSORS.bronze} />
        <TierSection tier="inkind" sponsors={SPONSORS.inkind} />
      </div>
    </section>
  );
}
