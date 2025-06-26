import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Users, Coffee } from 'lucide-react';

const AboutMe: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    {
      icon: <Code size={24} className="text-primary-500" />,
      title: "Desarrollo de Juegos",
      description: "Game maker studio, Godot y motores personalizados"
    },
    {
      icon: <Sparkles size={24} className="text-primary-500" />,
      title: "Animación y Música",
      description: "Animación 2D, efectos visuales y composición musical"
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: "Experiencia del Jugador",
      description: "Diseño de juegos y psicología del jugador"
    },
    {
      icon: <Coffee size={24} className="text-primary-500" />,
      title: "Herramientas y Flujos",
      description: "Herramientas personalizadas, gestión de recursos y optimización"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-6">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
            <h1>Fran Romero – Desarrollador de Videojuegos</h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Soy un desarrollador indie de videojuegos de Nayarit, México 🇲🇽. Me encanta programar, diseñar juegos, hacer música y darle vida a mis ideas con arte pixel.

              💻 Tecnologías que uso: JavaScript, TypeScript, C#, Python 🎮 Motores de juego: GameMaker Studio 2, Unity, Godot 🎵 Música y sonido: Producción y composición para videojuegos

              He participado en game jams nacionales e internacionales y compartido mi experiencia en charlas sobre desarrollo.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-neutral-600">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;