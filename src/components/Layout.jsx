import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export const AnimatedSection = ({ children, className = '', once = true, amount = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.2 } }
  };
  
  return (
    <motion.section
      ref={ref}
      className={`py-8 md:py-12 ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

const Layout = ({ children }) => {
  const mouseParticleContainerRef = useRef(null);

  useEffect(() => {
    const mouseParticleColors = ['rgba(236, 72, 153, 0.8)', 'rgba(168, 85, 247, 0.8)', 'rgba(244, 114, 182, 0.7)', 'rgba(192, 132, 252, 0.7)'];
    const mouseParticleShapes = ['sparkle', 'circle', 'soft-square'];

    const handleMouseMove = (e) => {
      if (mouseParticleContainerRef.current && Math.random() > 0.6) { 
        const particle = document.createElement('div');
        particle.classList.add('mouse-particle');
        const size = Math.random() * 15 + 5; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        const color = mouseParticleColors[Math.floor(Math.random() * mouseParticleColors.length)];
        const shape = mouseParticleShapes[Math.floor(Math.random() * mouseParticleShapes.length)];

        particle.style.position = 'fixed';
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particle.style.pointerEvents = 'none';
        particle.style.opacity = '1';
        particle.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        
        const angle = Math.random() * 360;
        const distance = Math.random() * 60 + 30;
        particle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(0.5)`;


        if (shape === 'sparkle') {
          particle.innerHTML = '✦';
          particle.style.color = color;
          particle.style.fontSize = `${size * 1.2}px`;
          particle.style.backgroundColor = 'transparent';
        } else if (shape === 'soft-square') {
          particle.style.backgroundColor = color;
          particle.style.borderRadius = '3px';
        } else {
          particle.style.backgroundColor = color;
          particle.style.borderRadius = '50%';
        }
        
        mouseParticleContainerRef.current.appendChild(particle);
        
        requestAnimationFrame(() => {
          particle.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${Math.sin(angle * Math.PI / 180) * distance}px) rotate(${angle + 90}deg) scale(1)`;
          particle.style.opacity = '0';
        });

        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseParticleContainerRef.current) mouseParticleContainerRef.current.innerHTML = '';
    };
  }, []);
  
  const { scrollYProgress } = useScroll();
  const progressBarScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative flex flex-col min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[60]"
        style={{ scaleX: progressBarScaleX }}
      />
      <div id="mouse-particle-container" ref={mouseParticleContainerRef} className="fixed inset-0 pointer-events-none z-[70]"></div>
      <div className="fixed inset-0 -z-20 animated-gradient-bg"></div>
      <Header />
      <main className="relative flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;