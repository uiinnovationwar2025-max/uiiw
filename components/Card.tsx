import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const CardComponent = ({
  className,
  title,
  children,
}: React.ComponentProps<"div">) => {
  return (
    <Card className={cn("w-72 max-w-sm", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription>{children}</CardDescription>
    </Card>
  );
};

export default CardComponent;
