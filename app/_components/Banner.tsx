'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    const handleHireMeClick = () => {
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            
            // Trigger neon glow effect after scroll
            setTimeout(() => {
                const emailElement = document.getElementById('contact-email');
                const phoneElement = document.getElementById('contact-phone');
                
                if (emailElement && phoneElement) {
                    // Add neon glow classes
                    emailElement.classList.add('neon-glow');
                    phoneElement.classList.add('neon-glow');
                    
                    // Remove neon glow after 3 seconds
                    setTimeout(() => {
                        emailElement.classList.remove('neon-glow');
                        phoneElement.classList.remove('neon-glow');
                    }, 3000);
                }
            }, 1000); // Wait for scroll to complete
        }
    };

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-center items-center"
                ref={containerRef}
            >
                <div className="text-center max-w-[800px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground text-center">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            JAYDEEP
                        </span>
                        . A creative Frontend Developer with 3+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        onClick={handleHireMeClick}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
