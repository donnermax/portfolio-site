import { Card, CardContent } from "@components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Layers, 
  PenTool, 
  Server, 
  Smartphone, 
  Terminal 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "SASS"]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MySQL", "Firebase", "Supabase", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Vercel", "Netlify"]
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      skills: ["Figma", "Adobe XD"]
    },
  
    {
      title: "CMS",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["WordPress", "Shopify"]
    },
    {
      title: "Architecture & Patterns",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: [ "Serverless", "Design Patterns", "Clean Code", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;