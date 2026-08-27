import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationController() {
  useEffect(() => {
    // Wait until the preloader is finished and layout is fully stabilized
    const timer = setTimeout(() => {
      // 1. Reveal Fade & Rise (y) - Upgraded to elegant expo.out with y: 40 rise
      const reveals = document.querySelectorAll('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Reveal Slide from Left - Incorporates y: 30 rise and slide with expo.out
      const revealsLeft = document.querySelectorAll('.gsap-reveal-left');
      revealsLeft.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60, y: 30, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Reveal Slide from Right - Incorporates y: 30 rise and slide with expo.out
      const revealsRight = document.querySelectorAll('.gsap-reveal-right');
      revealsRight.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 60, y: 30, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Reveal Scale up - Perfect organic scale incorporating y: 40
      const revealsScale = document.querySelectorAll('.gsap-reveal-scale');
      revealsScale.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 5. Coordinated Stagger Containers - Buttery-smooth successive item cascading with y: 40
      const staggerContainers = document.querySelectorAll('.gsap-stagger-container');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              stagger: 0.12,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Refresh ScrollTrigger to ensure accurate positioning calculations
      ScrollTrigger.refresh();
    }, 2000);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
