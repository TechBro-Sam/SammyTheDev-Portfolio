import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white italic">
              SammyTheDev Portfolio
            </Link>
            <p className="mt-4 text-white max-w-md italic">
             I Create beautiful, functional web experiences with modern technologies. 
             I am available for freelance projects and full-time positions.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://github.com/TechBro-Sam"  
                target="_target" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sammythedev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:samuelawopejo1234@gmail.com" 
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="Email"
                target='_target'
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white italic">Samuelawopejo1234@gmail.com</li>
              <li className="text-white italic">+234-912-231-3714</li>
              <li className="text-white italic">Lagos NG</li>
            </ul>
            <div className="mt-6">
              <Button asChild className='bg-slate-500'>
                <a href="#contact"  className="text-blue italic">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            &copy; {currentYear} AWOPEJO SAMUEL OPEMIPO. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex items-center space-x-6 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground  transition-colors">
                 I LOVE MY TECH
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground transition-colors">
                  I ALWAYS DELIVER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;