import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <span className="text-primary font-medium ">Hello, I'm SammyTheDev</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-6">
              <span className="block">Frontend</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Developer and Python Developer
              </span>
            </h1>
            <p className="text-lg text-foreground mb-8 max-w-lg italic">
              I create captivating web experiences with modern technologies like React, 
              focusing on clean code and beautiful, responsive designs.
              Currently diving into python Scripting and Automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View Projects
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-10">
              <a 
                href="https://github.com/TechBro-Sam" 
                target="_target" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiGithub size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sammythedev/" 
                target="_target" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiLinkedin size={22} />
              </a>
              <a 
                href="mailto:samuelawoepejo1234@gmail.com" 
                target='_target'
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiMail size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
    
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xl font-medium">
                <h1 style={{fontSize:30,fontFamily:'cursive'}}>
                  SammyTheDev
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;