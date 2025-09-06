export interface TimelineProps {
  events: TimelineEvent[];
}

export type TimelineEvent = {
  eventName: string;
  eventDate: React.ReactNode;
};

export interface TimelineBoxProps {
  event: TimelineEvent;
  className?: string;
}
