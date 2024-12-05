import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";


const  TextReveal: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const words: string[] = [
        "AI Editing",
        "DevTools",
        "Boilerplates",
        "Templates", 
        "AI Music",
        "Communities",
        "AI Projects",
        "Indie Hackers",
        "Micro SaaS",
        "GPT Wrapper",
        "Screen Recording"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(( value ) => ( value + 1  ) % words.length)
    }, 2000);

    return () => clearInterval(timer)

    },[])

    return (
        <div className="relative inline-block z-10 mt-6 text-[hsl(22_100%_79.8%)] px-2">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={words[currentIndex]}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 100, y: 0}}
                    exit={{opacity: 0, scaleX: 1, y:-10}}
                    transition={{duration: 0.5}}
                    >
                    {words[currentIndex].split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity: 0, filter: 'blur(20px)', textShadow: '0 0 0px hsl(22, 100%, 79.8%, 0)' }}
                            animate={{opacity: 1, filter: 'blur(0px)', textShadow: " 0 0 40px hsl(22, 100%, 79.8%, 1)"}}
                            transition={{duration: 0.3, delay: index * 0.05}}
                        > 
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default TextReveal;











