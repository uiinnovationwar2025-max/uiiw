"use client";

import { TimelineComp } from "@/components/elements/TimelineComp";

const events = [
  {
    eventName: "Open Registration MCC",
    eventDate: <>1 - 1 September 2025</>,
  },
  {
    eventName: "DUWI (Workshop, Talkshow, and Campus Tour)",
    eventDate: <>20 September 2025</>,
  },
  {
    eventName: "Case Reveal MCC",
    eventDate: <>15 September 2025</>,
  },
  {
    eventName: "Submission MCC",
    eventDate: <>15 - 17 September 2025</>,
  },
  {
    eventName: "Pengumuman MCC",
    eventDate: <>20 September 2025</>,
  },
  {
    eventName: "Open Registration BPC, dan BCC",
    eventDate: <>21 September - 12 Oktober 2025</>,
  },
  {
    eventName: "Open Registration BPC, dan BCC Extend",
    eventDate: <>13 - 19 Oktober 2025</>,
  },
  {
    eventName: "Case Reveal BPC dan BCC",
    eventDate: <>20 Oktober 2025</>,
  },
  {
    eventName: "Submission BMC dan Essay",
    eventDate: <>20 - 26 Oktober 2025</>,
  },
  {
    eventName: "Penilaian BMC dan Essay",
    eventDate: <>27 Oktober - 2 November 2025</>,
  },
  {
    eventName: "Pengumuman Semi Finalis",
    eventDate: <>3 November 2025</>,
  },
  {
    eventName: "Submission Proposal",
    eventDate: <>3 - 9 November 2025</>,
  },
  {
    eventName: "Penilaian Proposal",
    eventDate: <>10 - 16 November 2025</>,
  },
  {
    eventName: "Pengumuman Finalis",
    eventDate: <>17 November 2025</>,
  },
  {
    eventName: "Submission Draft Pitch Deck",
    eventDate: <>17 - 21 November 2025</>,
  },
  {
    eventName: "Mentoring",
    eventDate: <>22 November 2025</>,
  },
  {
    eventName: "Submission Final Pitch Deck",
    eventDate: <>22 - 26 November 2025</>,
  },
  {
    eventName: "Pitching Day dan Awarding Night",
    eventDate: <>29 November 2025</>,
  },
];

const Timeline = () => {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 sm:py-24">
      <h1 className="relative text-primary-1 font-visby text-3xl sm:text-5xl font-bold mb-12 sm:mb-24">
        Timeline
      </h1>
      <img src={"/line-1.webp"} alt="line-1" className="w-full mb-6 sm:mb-16" />
      <TimelineComp events={events} />
      <img src={"/line-2.webp"} alt="line-2" className="w-full mt-6 sm:mt-16" />
    </main>
  );
};

export default Timeline;
