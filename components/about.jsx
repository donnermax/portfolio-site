import { Card, CardContent } from "@components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Get to know me and my background
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/profile.webp"
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I&apos;m a passionate web developer with a strong foundation in
              creating responsive and user-friendly websites. With expertise in
              modern web technologies, I strive to build applications that not
              only look great but also provide exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started in 2023, and since then,
              I&apos;ve worked on various projects ranging from small business
              websites to complex web applications. I&apos;m constantly learning and
              adapting to new technologies to stay at the forefront of web
              development.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-4xl text-primary">1+</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Years Experience
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="font-bold text-4xl text-primary">20+</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// test
export default About;
