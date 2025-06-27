import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import AvatarWithShadow from "@/components/AvatarWithShadow";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-32 md:gap-8 p-8">
        <div style={{ viewTransitionName: "avatar-group" }}>
          <AvatarWithShadow />
        </div>
        <div className="hidden md:flex flex-col gap-20">
          <Image
            src="/Sketch_arrow.png"
            alt="background sketch arrow"
            width={250}
            height={150}
            className="object-contain"
          />
          <Image
            src="/Sketch_arrow.png"
            alt="background sketch arrow"
            width={250}
            height={150}
            className="object-contain rotate-180 -scale-x-100"
          />
        </div>
        <Card className="w-[90vw] md:w-auto">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Here is my info. Feel free to reach out!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6" />
              <span>Hedehusene, Denmark</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6" />
              <a href="tel:+4591843038" className="underline">
                +45 91 84 30 38
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <a href="mailto:caserutudor@yahoo.com" className="underline">
                caserutudor@yahoo.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="h-6 w-6" />
              <a
                href="https://www.linkedin.com/in/tudor-caseru-9014b2129/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/tudor-caseru-9014b2129/
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="h-6 w-6" />
              <a
                href="https://github.com/theoriginaltudor"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/theoriginaltudor
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
