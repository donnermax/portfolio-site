"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "The Westbourne Cafe",
      description: "A wordpress website for a cafe. Fully responsive with multiple advanced custom fields to help the owners easily make changes. ",
      image: "/wbcafe.jpg",
      tags: ["Javascript", "Wordpress", "Html5", "Tailwind"],
      liveLink: "https://www.thewestbournecafe.co.uk/",
      githubLink: "https://github.com/donnermax",
      category: "web",
    },
    {
      id: 2,
      title: "Boat Club web app - Member",
      description:
        "This webapp allows members to view, create and manage their boat bookings. Designed in a user friendly and visually appealing way.",
      image: "/bctmembersite.jpg",
      tags: ["React", "Supabase", "Figma", "Next.js"],
      liveLink: "https://www.myboatclub.app/",
      githubLink: "https://github.com/donnermax",
      category: "webapp",
    },
    {
      id: 3,
      title: "Boat Club web app - Staff",
      description:
        "Work in progress: The Staff management side of the boat club. Be able to analyse usage statistics and much more. My aim with this project is to make the web app as user friendly and beneficial to the team. To cut costs by integrating processes into the webapp.",
      image: "/bctstaff.jpg",
      tags: ["React", "Supabase", "Figma", "Next.js"],
      liveLink: "https://staff.myboatclub.app/",
      githubLink: "https://github.com/donnermax",
      category: "webapp",
    },
    {
      id: 4,
      title: "Guess My Number",
      description:
        "Guess a number between 1 and 20, each time you guess wrong you'll get a hint if the number is lower or higher than your guess. Once you guess right you'll get a score. Can you beat 3?",
      image:
        "/guess.png",
      tags: ["JavaScript", "css", "html"],
      liveLink: "https://guess-my-number-new.netlify.app/",
      githubLink: "https://github.com/donnermax",
      category: "game",
    },
    {
      id: 5,
      title: "The QR Co",
      description:
        "After being annoyed at having to pay for dynamic QR codes I decided to build my own web app. Create, manage and download your dynamic qr codes. Currently being used but new signups have been disabled.",
      image:
        "/qrapp.png",
      tags: ["Next.js", "Tailwind", "React", "Supabase", "Typescript"],
      liveLink: "https://www.theqrco.com/",
      githubLink: "https://github.com/donnermax",
      category: "webapp",
    },
    {
      id: 6,
      title: "Mapout",
      description:
        "As part of a Javascript course, this was a fun project that utilises browser storage to map your workouts. These workouts will be stored unless the cache is deleted.",
      image:
        "/mapout.png",
      tags: ["Javascript","html","css"],
      liveLink: "https://my-mapout.netlify.app/",
      githubLink: "https://github.com/donnermax",
      category: "web",
    },
    {
      id: 7,
      title: "Roll-it",
      description:
        "A two player game where you will roll a six sided dice, every time you roll the count accumulates until you click hold. Carefull though, if you roll a 1 your accumulation is removed and its the next players turn. First person to 50 wins!",
      image:
        "/dice.png",
      tags: ["Javascript","html","css"],
      liveLink: "https://its-the-dicey-game.netlify.app/",
      githubLink: "https://github.com/donnermax",
      category: "game",
    },
    {
      id: 8,
      title: "RIBs and Powerboats",
      description:
        "When an ex-colleague asked me to create them a simple listing website on wordpress for them I jumped at the opportunity. This is the staged version of the site. ",
      image:
        "/dice.png",
        tags: ["Javascript","html","css", "wordpress", "gsap"],
      liveLink: "https://maxd64.sg-host.com/",
      githubLink: "https://github.com/donnermax",
      category: "web",
    },
    {
      id: 9,
      title: "The Bankist",
      description:
        "As part of a Javascript course I built a basic site that allows you to login and transfer money between two accounts. Either use js with 1111 or jd with 2222.",
      image:
        "/bankist.png",
        tags: ["Javascript","html","css"],
      liveLink: "https://the-fake-bank-ist.netlify.app/",
      githubLink: "https://github.com/donnermax",
      category: "web",
    },
    {
      id: 10,
      title: "Adventur",
      description:
        "A small webapp/site built in next playing around with pages and app router. This is not a live site.",
      image:
        "/adventur.png",
        tags: ["Nextjs","html","css","javascript"],
      liveLink: "https://adventurine.netlify.app/",
      githubLink: "https://github.com/donnermax",
      category: "web",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Check out some of my recent work
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button aria-label="filter button all"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button aria-label="filter button web"
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
            >
              Web
            </Button>
            <Button aria-label="filter button webapp"
              variant={filter === "webapp" ? "default" : "outline"}
              onClick={() => setFilter("webapp")}
            >
              Webapp
            </Button>
            <Button aria-label="filter button game"
              variant={filter === "game" ? "default" : "outline"}
              onClick={() => setFilter("game")}
            >
              Game
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Footer - Ensure buttons are properly spaced */}
              <CardFooter className="flex justify-between mt-auto">
                {project.githubLink ? (
                  <Button aria-label="github button" variant="outline" size="sm" asChild>
                    <a aria-label="github link"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                ) : (
                  <span /> // This keeps the Live Demo button on the right
                )}
                <Button aria-label="project link button" size="sm" asChild>
                  <a aria-label="project link"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
// test
export default Projects;
