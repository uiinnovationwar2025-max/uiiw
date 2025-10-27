import Scrollable from "../Scrollable";
import type {
  TimelineBoxProps,
  TimelineEvent,
  TimelineProps,
} from "./interface";

// USAGE EXAMPLE

{
  /* <Timeline
        events={[
          {
            eventName: "Event Name",
            eventDate: "27 February 2025",
          },
          {
            eventName: "Event Name",
            eventDate: "27 February 2025",
          },
          {
            eventName: "Event Name",
            eventDate: "27 February 2025",
          },
          {
            eventName: "Event Name",
            eventDate: "27 February 2025",
          },
          {
            eventName: "Event Name",
            eventDate: "27 February 2025",
          },
        ]}
      /> */
}

const TimelineBox = ({ event, className = "" }: TimelineBoxProps) => {
  return (
    <div
      className={`justify-center flex flex-col gap-2 md:gap-4 ${className} font-primary font-bold text-white`}
    >
      <div className="relative">
        <h1 className="text-xs mx-4 md:text-xl absolute inset-0 flex items-center justify-center h-full font-unbounded text-neutral-50 z-10 text-center">
          {event.eventName}
        </h1>
        <img src="/timeline.svg" alt="vector" />
      </div>
      <div className="w-[160px] md:w-[240px] flex items-center justify-center relative h-8 md:h-14 md:mx-0 md:px-8 font-bold text-[9px] md:text-sm text-basic">
        <div className="rounded-full w-full h-full p-0.5">
          <div className="text-center bg-gradient-to-b from-[#307693] to-[#00567A] border-3 md:border-6 border-secondary-2 rounded-full w-full h-full flex justify-center items-center">
            {event.eventDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TimelineComp: React.FC<TimelineProps> = ({
  events,
}: {
  events: TimelineEvent[];
}) => {
  return (
    <Scrollable className="w-full flex gap-4 md:gap-8 items-center bg-[#82B9CF] p-4 px-5 sm:px-20 py-8 overflow-auto cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {events.map((event, index) => (
        <TimelineBox
          key={index}
          event={event}
          className={index === 0 ? "" : "-ml-2 md:-ml-5"}
        />
      ))}
    </Scrollable>
  );
};
