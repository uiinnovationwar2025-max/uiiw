import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import CardComponent from "@/components/Card";

export default function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <CardComponent title="LOREM IPSUM">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio
          vitae accusantium repellat voluptatum non consequuntur minima beatae
          veritatis et vel delectus temporibus repudiandae dolor, culpa
          exercitationem nesciunt porro illo.
          <Button type="submit" className="w-full mt-7" size={"lg"}>
            Button
          </Button>
        </CardComponent>
      </div>
    </>
  );
}
