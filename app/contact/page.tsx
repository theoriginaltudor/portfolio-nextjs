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
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-32 md:gap-16 p-8">
        <div className="absolute inset-0 -z-10 hidden bg-[url(/globe.svg)] bg-no-repeat bg-center md:block" />
        <AvatarWithShadow />
        <Card className="w-[90vw] md:w-auto">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              You can reach out to me through the following channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6" />
              <span>Your City</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6" />
              <a href="tel:+1234567890" className="underline">
                +12 345 678 90
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <a href="mailto:dummy@email.com" className="underline">
                dummy@email.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="h-6 w-6" />
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="h-6 w-6" />
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
