"use client";

import { TimelineComp } from "@/components/elements/TimelineComp";
import Image from "next/image";

const events = [
  {
    eventName: "Open Registration MCC",
    eventDate: <>12 - 19 September 2025</>,
  },

  {
    eventName: "Opening & Case Distribution MCC",
    eventDate: <>24 September 2025</>,
  },
  {
    eventName: "Submission MCC",
    eventDate: <>25 - 27 September 2025</>,
  },
  {
    eventName: "Open Registration BPC & BCC",
    eventDate: <>September - October 2025</>,
  },
  {
    eventName: "Discover UI with Innovators (DUWI)",
    eventDate: <>27 September 2025</>,
  },
  {
    eventName: "MCC Winner Announcement",
    eventDate: <>2 October 2025</>,
  },

  {
    eventName: "Opening & Case Reveal BPC dan BCC",
    eventDate: <>October 2025</>,
  },
  {
    eventName: "Submission BPC & BCC",
    eventDate: <>October 2025</>,
  },
  {
    eventName: "Semi-finalist Announcement",
    eventDate: <>November 2025</>,
  },
  {
    eventName: "Proposal Submission",
    eventDate: <>November 2025</>,
  },
  {
    eventName: "Finalist Announcement",
    eventDate: <>November 2025</>,
  },
  {
    eventName: "Technical Meeting",
    eventDate: <>November 2025</>,
  },
  {
    eventName: "Mentoring",
    eventDate: <>November 2025</>,
  },
  {
    eventName: "Submission Final Pitch Deck",
    eventDate: <>November 2025</>,
  },
  {
    eventName: "Pitching Day dan Awarding Night",
    eventDate: <>November 2025</>,
  },
];

const Timeline = () => {
  return (
    <main className="flex flex-col items-center py-12 sm:py-24">
      <h1 className="relative text-primary-1 font-visby text-3xl sm:text-5xl font-bold mb-12 sm:mb-24">
        Timeline
      </h1>
      <Image
        src={"/line-1.webp"}
        alt="line-1"
        width={1920}
        height={1080}
        className="w-full mb-6 sm:mb-16"
      />
      <TimelineComp events={events} />
      <Image
        src={"/line-2.webp"}
        alt="line-2"
        width={1920}
        height={1080}
        className="w-full mt-6 sm:mt-16"
      />
    </main>
  );
};

export default Timeline;
