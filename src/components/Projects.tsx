import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';


type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  categories: ProjectCategory[];
  technologies: string[];
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');


  const projects: Project[] = [
    {
      id: 1,
      title: 'Quiz App',
      description: 'A Quiz app with questions and answer and score board at the end',
      image: 'https://cdn.vectorstock.com/i/500p/96/30/quiz-question-interface-social-media-vector-34889630.avif',
      liveUrl: 'https://quiz-app-bay-two-12.vercel.app/',
      githubUrl: 'https://github.com/TechBro-Sam/Quiz-App',
      categories: ['web', 'design'],
      technologies: ['React', 'TailwindCSS'],
    },
    {
      id: 2,
      title: 'Crypto Monitor App',
      description: 'Crypto Price Monitor  responsive, real-time cryptocurrency tracking application built with React.js and ShadCN UI for a modern, accessible interface.',
      image: 'https://media.istockphoto.com/id/2194779803/photo/bitcoin-sign-business-graph-background-crypto-concept-market-volatility.webp?a=1&b=1&s=612x612&w=0&k=20&c=ILPaxZpqsO6vhbp7uQM_0Qb-bAbRjsDHbFimHNdOm0k=',
      liveUrl: 'https://crypto-monitor-bice.vercel.app/',
      githubUrl: 'https://github.com/TechBro-Sam/crypto-monitor',
      categories: ['web', 'design'],
      technologies: ['React', 'TailwindCSS'],
    },

    {
      id: 3,
      title: 'Food Recipe Platform',
      description: 'A social platform for food enthusiasts to discover, share and save recipes with advanced search and filtering.',
      image: 'https://media.istockphoto.com/id/1367683688/video/vertical-food-preparation-blog-montage-for-social-media-montage.avif?s=640x640&k=20&c=ailKkmHS68EDVF2xgoelXjFbboZLJltk4o9kIRgWnyc=',
      liveUrl: 'https://food-app-eta-one.vercel.app/',
      githubUrl: 'https://github.com/TechBro-Sam/Food-app',
      categories: ['web', 'design'],
      technologies: ['Css', 'API','React.js'],
    },
    {
      id: 4,
      title: 'Gate App ',
      description: 'A comprehensive estate application with workout plans, in progress.',
      image: 'https://media.istockphoto.com/id/1411857136/photo/wide-automatic-sliding-gate-with-remote-control-installed-in-high-stone-fense-wall-security.jpg?s=612x612&w=0&k=20&c=ifsTMYnh1-XqjexM0P6t2bCto1sY5452vnN6esBeWrA=',
      liveUrl: 'https://estate-gate-app-veu6.vercel.app/',
      githubUrl: 'https://github.com/TechBro-Sam/Estate-Gate-App',
      categories: ['mobile','web','design'],
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    },
    {
      id: 5,
      title: 'WIRE App (On Going)',
      description: 'Wire App is a smart digital banking app with features like group savings, NFC transfers, and emergency-safe modes — built for modern, everyday money use.',
      image: 'https://media.istockphoto.com/id/1357084485/video/young-millennial-use-mobile-application-to-check-cryptocurrency-investment.avif?s=640x640&k=20&c=DQdvwuVO_Fe1VzwxpWGItSrepNePdJ61R33hPnsooKU=',
      liveUrl: '#',
      githubUrl: '#',
      categories: ['web', 'design','mobile'],
      technologies: ['React','CSS Animations','React Native'],
    },
    {
      id: 6,
      title: 'Quess Game app',
      description: 'A game app  guessing  a random number ',
      image: 'https://cdn.vectorstock.com/i/500p/27/04/glitch-game-controller-neon-play-vector-33752704.avif',
      liveUrl: 'https://guess-game-six-psi.vercel.app/',
      githubUrl: 'https://github.com/TechBro-Sam/Guess-Game',
      categories: ['web', 'design'],
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    },
    {
      id: 7,
      title: 'Deluxe saving  app',
      description: 'A simulation of how the saving app will be  ',
      image: 'https://img.freepik.com/free-psd/money-template-design_23-2151629635.jpg?t=st=1754903352~exp=1754906952~hmac=04cb2ce1841a4a6069a972a6e4d3fee01f110211a8c7188947107a0d597e6b02&w=1060',
      liveUrl: 'https://cooperative-savings-app.vercel.app/',
      githubUrl: 'https://github.com/TechBro-Sam/Guess-Game',
      categories: ['web', 'design'],
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-8 bg-gray-200">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium"
          >
            My Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-foreground text-lg italic">
              A selection of my recent projects showcasing my skills in frontend development,
              responsive design, and problem-solving.
            </p>
          </motion.div>
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="max-w-4xl mx-auto mb-12"
          onValueChange={(value) => setActiveCategory(value as ProjectCategory)}
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="web" className="mt-8">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="mobile" className="mt-8">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="design" className="mt-8">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-16">
          <Button className="group" asChild>
            <a href="https://github.com/TechBro-Sam?tab=repositories" target="_blank" rel="noopener noreferrer">
              View More on GitHub
              <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// ProjectGrid component to display projects in a grid layout
const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

// ProjectCard component for individual project display
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <FiGithub className="mr-2" /> Code
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="mr-2" /> Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Projects;
