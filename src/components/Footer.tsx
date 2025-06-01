import React from 'react';
import { Link } from 'react-scroll';
import { Gamepad2, Instagram, Youtube, BookIcon as TiktokIcon, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/nabodrop/", label: "Instagram" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@nabodev", label: "YouTube" },
    { icon: <TiktokIcon size={20} />, url: "https://play.google.com/store/apps/dev?id=6277823320637847447", label: "TikTok" },
    { icon: <Twitter size={20} />, url: "https://x.com/nabodrop", label: "Twitter" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/fran-rome-016109172/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Gamepad2 size={28} className="text-primary-300" />
            <span className="font-heading font-bold text-xl text-white">
              Desarrollador de videojuegos
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-heading text-neutral-200 hover:text-white transition-colors cursor-pointer"
            >
              Sobre Mí
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-heading text-neutral-200 hover:text-white transition-colors cursor-pointer"
            >
              Proyectos
            </Link>
            <Link
              to="awards"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-heading text-neutral-200 hover:text-white transition-colors cursor-pointer"
            >
              Premios
            </Link>
          </nav>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="text-neutral-300 hover:text-white transition-colors p-2 hover:bg-primary-800 rounded-full"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} Fran Romero Nabodev. Todos los derechos reservados.
          </p>
          <p className="text-neutral-400 text-sm">
            Diseñado con 💙 y mucho café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;