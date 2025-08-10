import { motion } from 'framer-motion';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';


type SkillCategory = 'frontend' | 'backend' | 'tools';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 40 },
    { name: 'TailwindCSS', level: 75 },
    { name: 'Framer Motion', level: 60 },
    { name: 'Redux', level: 70 },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 45 },
    { name: 'Express', level: 40 },
    { name: 'MongoDB', level: 30 },
    { name: 'Python',  level:70 }
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Jest & Testing', level: 30 },
    { name: 'Vercel/Netlify', level: 85 },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium"
          >
            My Skills
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-muted-foreground text-lg">
              I'm constantly learning and evolving my skill set to stay current with
              industry standards and best practices.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools & Others</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="frontend" className="space-y-8">
              <SkillList skills={frontendSkills} />
            </TabsContent>
            
            <TabsContent value="backend" className="space-y-8">
              <SkillList skills={backendSkills} />
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-8">
              <SkillList skills={toolsSkills} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            My Development Process
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Research',
                description: 'Understanding the problem and researching best solutions'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating wireframes and prototypes to visualize the solution'
              },
              {
                step: '03',
                title: 'Develop',
                description: 'Writing clean, efficient, and maintainable code'
              },
              {
                step: '04',
                title: 'Test & Deploy',
                description: 'Thorough testing and seamless deployment to production'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm relative"
              >
                <span className="absolute -top-4 -left-4 bg-primary text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {item.step}
                </span>
                <h4 className="text-xl font-semibold mb-2 mt-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillList = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;