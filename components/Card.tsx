import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CardComponent = ({
  className,
  title,
  children,
}: React.ComponentProps<"div">) => {
  return (
    <Card className={cn("w-72 max-w-sm", className)}>
      <CardHeader>
        <CardTitle className="font-visby">{title}</CardTitle>
      </CardHeader>
      <CardDescription className="font-questrial">{children}</CardDescription>
    </Card>
  );
};

export default CardComponent;
