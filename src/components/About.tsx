import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { FiCode, FiLayers, FiMonitor } from 'react-icons/fi';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-8 bg-slate-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            About Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mt-2 mb-6 underline"
          >
            My Background
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-foreground text-lg italic">
            I’m Awopejo Samuel Opemipo, a software developer with a solid academic and technical foundation. I earned a Diploma in Software Engineering (DISM) from Aptech Computer Education, graduating with distinction after two years of focused, hands-on learning in software development principles and real-world applications.
Currently, I’m in my final year pursuing a B.Sc. in Software Engineering at Osun State University, where I’m deepening my knowledge in system design, software architecture, and full-stack development.
My background blends formal education with practical experience giving me a strong understanding of both theory and execution across the software development lifecycle.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full bg-white">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <FiCode className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Creating responsive, accessible, and modern web interfaces using 
                  React.js, TypeScript, and TailwindCSS.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full bg-white">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <FiMonitor className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Designing intuitive user experiences with attention to detail, 
                  accessibility, and modern design principles.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full bg-white">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <FiLayers className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full-Stack Experience</h3>
                <p className="text-muted-foreground">
                  Complementing frontend skills with knowledge of backend technologies and 
                  database management for complete solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4 underline">My Journey</h3>
            <div className="space-y-4 text-foreground">
              <p className='italic text-black '>
              My journey into tech started as my dad's suggestion, but quickly became a lifestyle. Alongside my formal education, I taught myself by building real-world projects and experimenting with modern tools.
I began with the basics HTML, CSS, JavaScript  and evolved into building modern interfaces using React.js. As I grew, I picked up Python for backend scripting, automation, and systems development. I’m also exploring tools like Firebase and Supabase to bring full-stack ideas to life.
Currently, I'm working on two major personal projects:
Wire App  A digital banking platform designed to redefine mobile money with smart features like group savings (Wire Circles), NFC transfers, and emergency modes.
GateApp  A smart estate gate access and logistics tool aimed at improving estate security and automation.
These projects reflect my growth, creativity, and vision as a developer. I’m still building, learning, and collaborating  with a focus on solving real problems through clean code and thoughtful design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;