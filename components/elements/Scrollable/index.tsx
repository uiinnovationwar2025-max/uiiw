import { cn } from "@/lib/utils";

export default function Scrollable({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={cn("cursor-grab", className)}
      style={{ userSelect: "none" }}
      onMouseDown={(e) => {
        const container = e.currentTarget;
        const startX = e.pageX - container.offsetLeft;
        const scrollLeft = container.scrollLeft;
        const onMouseMove = (moveEvent: MouseEvent) => {
          const x = moveEvent.pageX - container.offsetLeft;
          container.scrollLeft = scrollLeft - (x - startX);
        };
        const onMouseUp = () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      }}
    >
      {children}
    </div>
  );
}
