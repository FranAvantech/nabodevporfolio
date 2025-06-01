import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Gamepad2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-[20%] left-[15%] w-16 h-16 rounded-full bg-primary-300 opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[25%] right-[10%] w-24 h-24 rounded-full bg-secondary-300 opacity-30"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-[30%] right-[20%] w-12 h-12 rounded-full bg-accent-300 opacity-25"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Gamepad2 size={60} className="text-primary-500" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-800 mb-4"
            >
              Desarrollador de videojuegos  <br className="md:hidden" />
              <span className="text-primary-500">Independiente</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed"
            >
               Programador indie que transforma ideas raras en juegos aún más raros.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="bg-primary-500 hover:bg-primary-600 text-white font-heading font-medium px-8 py-3 rounded-full transition-all shadow-game hover:shadow-game-hover hover:translate-y-1 active:translate-y-2"
              >
                Ver mi Trabajo
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-heading font-medium px-8 py-3 rounded-full transition-all"
              >
                Sobre Mí
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://devuego.lat/fotos/fran-romero-nabodev.jpg" 
                alt="Nabodev" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-48 h-48 md:w-56 md:h-56 rounded-full bg-primary-300 opacity-20 transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-70}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-primary-500 text-sm mb-2 font-medium">Desliza hacia abajo</span>
          <ChevronDown size={24} className="text-primary-500" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;