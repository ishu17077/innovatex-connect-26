export const speakersList = [{
    name: 'Devesh Tulshyan',
    role: 'Full Stack (AI+Cloud) Engineer',
    company: 'Tata Consultancy Services(TCS)',
    image: '/speakers/devesh-tulshyan.jpeg',
  },
  {
    name: 'Sristi Majumder',
    role: 'System Engineer',
    company: 'Tata Consultancy Services(TCS)',
    image: '/speakers/sristi-majumder.jpeg',
  },
  {
    name: 'Avik Agarwala',
    role: 'AI ENGINEER',
    company: 'TCS',
    image: '/speakers/avik-agarwala.jpeg',
  },

];

export const agendaData = [
  {
    sno: 1,
    time: '10:00am - 10:15am',
    duration: '15mins',
    title: 'Event Setup, Registration and Student Check-In',
    category: 'CHECK-IN',
    badge: 'Registration',
    description: 'Welcome attendees, distribute ID badges, entry kits, and complete student check-in verification.',
    type: 'setup'
  },
  {
    sno: 2,
    time: '10:15am - 10:30am',
    duration: '15mins',
    title: 'Opening, Introduction & Event Flow',
    category: 'OPENING',
    badge: 'Keynote',
    description: 'Official opening ceremony, introduction to InnovateX Connect 26, mentors, rules, and overview of the day.',
    type: 'intro'
  },
  {
    sno: 3,
    time: '10:30am - 11:15am',
    duration: '45mins',
    title: 'Speaker 1 : Technical Session by Avik Agarwala',
    category: 'TECHNICAL SESSION',
    badge: 'Speaker 1',
    description: 'In-depth technical keynote on AI engineering, real-world model deployment, and production machine learning architectures.',
    speakers: [
      {
        name: 'Avik Agarwala',
        role: 'AI Engineer',
        company: 'TCS',
        img: '/speakers/avik-agarwala.jpeg'
      }
    ],
    type: 'speaker'
  },
  {
    sno: 4,
    time: '11:15am - 11:30am',
    duration: '15mins',
    title: 'Sponsor Talk : Myrad by Mr. Himanshu Malik',
    category: 'SPONSOR TALK',
    badge: 'Industry Insight',
    description: 'Special presentation by Myrad highlighting tech tools, career avenues, and ecosystem developments.',
    speakers: [
      {
        name: 'Mr. Himanshu Malik',
        role: 'Speaker',
        company: 'Myrad'
      }
    ],
    type: 'sponsor'
  },
  {
    sno: 5,
    time: '11:30am - 12:15pm',
    duration: '45mins',
    title: 'Speaker 2 : Technical Session by Devesh Tulshyan',
    category: 'TECHNICAL SESSION',
    badge: 'Speaker 2',
    description: 'Scalable Full Stack (AI + Cloud) architecture, enterprise cloud infra patterns, and next-gen developer stacks.',
    speakers: [
      {
        name: 'Devesh Tulshyan',
        role: 'Full Stack (AI+Cloud) Engineer',
        company: 'Tata Consultancy Services (TCS)',
        img: '/speakers/devesh-tulshyan.jpeg'
      }
    ],
    type: 'speaker'
  },
  {
    sno: 6,
    time: '12:15pm - 12:30pm',
    duration: '15mins',
    title: 'Q&A and Audience Interaction',
    category: 'INTERACTION',
    badge: 'Open Floor',
    description: 'Open floor Q&A session with morning speakers, discussing technical nuances and audience queries.',
    type: 'interactive'
  },
  {
    sno: 7,
    time: '12:30pm - 01:15pm',
    duration: '45mins',
    title: 'Lunch Break + Red Bull Activation Promotion & In-kind Distribution',
    category: 'LUNCH & NETWORKING',
    badge: 'Refreshment',
    description: 'Catered lunch break with Red Bull activation booth, energy drinks, promotional giveaways, and community mingling.',
    type: 'break'
  },
  {
    sno: 8,
    time: '01:15pm - 02:00pm',
    duration: '45mins',
    title: 'Speaker 3 : Technical Session by Sristhi Majumder',
    category: 'TECHNICAL SESSION',
    badge: 'Speaker 3',
    description: 'Core systems engineering concepts, building resilient backends, and performance tuning at scale.',
    speakers: [
      {
        name: 'Sristhi Majumder',
        role: 'System Engineer',
        company: 'Tata Consultancy Services (TCS)',
        img: '/speakers/sristi-majumder.jpeg'
      }
    ],
    type: 'speaker'
  },
  {
    sno: 9,
    time: '02:00pm - 02:15pm',
    duration: '15mins',
    title: 'Sponsor Talk : Ruin Run by Mr. Sukrit Deb',
    category: 'SPONSOR TALK',
    badge: 'Industry Insight',
    description: 'Exciting insights into creative technology, game development, and community platforms by Ruin Run.',
    speakers: [
      {
        name: 'Mr. Sukrit Deb',
        role: 'Speaker',
        company: 'Ruin Run'
      }
    ],
    type: 'sponsor'
  },
  {
    sno: 10,
    time: '02:15pm - 02:45pm',
    duration: '30mins',
    title: 'Speaker Panel Discussion & Audience Q&A',
    category: 'PANEL DISCUSSION',
    badge: 'Panel AMA',
    description: 'Fireside panel discussion with engineering leads discussing future industry trends, followed by audience Q&A.',
    speakers: [
      {
        name: 'Avik Agarwala',
        img: '/speakers/avik-agarwala.jpeg'
      },
      {
        name: 'Devesh Tulshyan',
        img: '/speakers/devesh-tulshyan.jpeg'
      },
      {
        name: 'Sristhi Majumder',
        img: '/speakers/sristi-majumder.jpeg'
      }
    ],
    type: 'panel'
  },
  {
    sno: 11,
    time: '02:45pm - 03:00pm',
    duration: '15mins',
    title: 'Sponsor Talk : Miro by Subha Prasana Parida',
    category: 'SPONSOR TALK',
    badge: 'Collaboration',
    description: 'Collaborative development, visual whiteboarding workflows, and community benefits presented by Miro.',
    speakers: [
      {
        name: 'Subha Prasana Parida',
        role: 'Speaker',
        company: 'Miro'
      }
    ],
    type: 'sponsor'
  },
  {
    sno: 12,
    time: '03:00pm - 03:30pm',
    duration: '30mins',
    title: 'Speaker Felicitation & Recognition Ceremony',
    category: 'CEREMONY',
    badge: 'Recognition',
    description: 'Formal recognition and felicitation of all esteemed speakers, mentors, and partners with awards and mementos.',
    type: 'ceremony'
  },
  {
    sno: 13,
    time: '03:30pm - 4:00pm',
    duration: '30mins',
    title: 'Closing Note from InnovateX & GDG JISU',
    category: 'CLOSING NOTE',
    badge: 'Community',
    description: 'Final address by the organizers, key takeaways, gratitude to participants, and future event roadmap.',
    type: 'closing'
  },
  {
    sno: 14,
    time: '4:00pm - 4:30pm',
    duration: '30mins',
    title: 'Photography, Networking, Dispersal & Wrap-up',
    category: 'NETWORKING',
    badge: 'Photo Op',
    description: 'Official group photograph, informal networking, exchanging developer contacts, and participant dispersal.',
    type: 'networking'
  },
  {
    sno: 15,
    time: '4:30pm - 5:00pm',
    duration: 'Buffer',
    title: 'Venue Cleanup, Inventory Check & Handover',
    category: 'BUFFER',
    badge: 'Operations',
    description: 'Organizer buffer period, logistical audit, venue inspection, equipment collection, and official handover.',
    type: 'buffer'
  }
];

export const ticketBenefits = [
  "Full 8-hour session access",
  "Lunch & high-tea included",
  "1-on-1 mentor guidance",
  "Hands-on workshop tracks",
  "Registration kit & certificate",
  "Exclusive community access"
];

export const faqData = [{
    q: "Is InnovateX Connect’26 free?",
    a: "Yes, registration is totally free of cost. If your profile gets shortlisted, you will receive a payment link to confirm your spot with a minimal contribution amount."
  },
  {
    q: "Is a laptop mandatory?",
    a: "Yes. Participants must bring their own laptop for the hands-on workshop."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes! All registered participants will receive a digital participation certificate."
  },
  {
    q: "Will there be a workshop?",
    a: "Yes! We’ll have an interactive, hands-on developer workshop."
  },
  {
    q: "Will food be provided?",
    a: "Yes! Lunch and beverages will be provided to all registered participants."
  },
  {
    q: "Will there be swags?",
    a: "Absolutely! Participants will get exclusive swags and goodies."
  },
  {
    q: "Will lunch and beverages be provided?",
    a: "Yes! Lunch and beverages will be provided to all registered participants."
  }
];