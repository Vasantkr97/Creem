import { RiArrowRightSLine } from "@remixicon/react"
import TextReveal from "./TextReveal"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { heroContent, heroLinks } from "../Constants/Enable"


const HeroSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2
    })

    const containerVariants ={
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { staggerChildren: 0.3 }}
    }

    const fadeInup ={
        hidden: { opacity:0, y:20 },
        visible: { opacity: 1, y:0, transition: { duration: 0.6}}
    }

    const fadeIn = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: {duration: 0.6}}
    }

    const imageVariants ={
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
            scale: 0.8
        },
        hiddenRight: {
            x: "100%",
            opacity: 0,
            scale: 0.8
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 30,
                damping:12,
                mass: 0.5,
                duration: 0.8,
                when: "beforeChildren"
            }
        }
    }

  return (
    <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden max-w-7xl mx-auto px-4">
        <div className="relative flex flex-col pt-20 md:pt-40 min-h-screen overflow-hidden md:mt-0 mt-10">
            <div className="relative mx-auto flex justify-center text-neutral-300 text-[10px] sm:text-xs shadow-zinc-900">
                <motion.div 
                    variants={fadeInup}
                    className="relative flex mx-auto items-center z-10 bg-neutral-800 px-4 py-1.5 rounded-full ring-1 ring-white/20  font-semibold">
                    <span>{heroContent.bannerText}</span>
                    <RiArrowRightSLine className="ml-2 w-4"/>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[1px]"></span>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] w-[100%] mx-auto bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 blur-sm"></span>

                </motion.div> 
            </div>
            <div className="relative z-10 max-w-6xl mt-6 text-center mx-auto text-2xl md:text-4xl lg:text-8xl font-semibold drop-shadow-2xl">
                <motion.div
                    variants={fadeInup}
                    className="flex flex-row space-x-4">
                    <motion.div 
                        initial= {{opacity: 0, filter: 'blur(20px)', textShadow: '0 0 0px rgba(255, 255, 255, 0)'}}
                        animate={{opacity: 1, filter: 'blur(0px)', textShadow: '0 0 60px rgba(255,255,255,1)'}}
                        className="drop-shadow-glowwhite whitespace-pre ">
                        Smooth 
                    </motion.div>
                    <div>Payment for</div>
                </motion.div>
                <motion.div
                    variants={fadeInup}
                >
                    <TextReveal/>
                </motion.div>
            </div>
            <div className="relative z-10 max-w-3xl mt-6 mx-auto pt-6 text-center text-base md:text-xl">
                <motion.div 
                    variants={fadeInup}
                    className="inline-block align-top text-balance">
                    {heroContent.secondaryText}
                    <br />
                    {heroContent.description}
                    <br />
                    <br />
                    <strong className="text-[hsl(22_100%_79.8%)]">{heroContent.zeroSurprise}</strong>
                </motion.div>
            </div>
            <motion.div 
                variants={fadeInup}
                className="relative flex items-center justify-center z-10 mt-6 gap-8">
                <a className="px-4 py-1.5 border border-neutral-600 rounded-full bg-neutral-900 hover:bg-black/90 flex items-center justify-center">
                    {heroContent.buttonTextStart}
                </a>
                <a className="px-4 py-1.5 rounded-full bg-transparent hover:bg-neutral-800 flex items-center justify-center space-x-2">
                    <span>{heroContent.buttonTextContact}</span>
                    <RiArrowRightSLine className="w-4" />
                </a>
            </motion.div>
            <motion.div 
                variants={fadeIn}
                className="relative mt-20 bg-neutral-800 border border-neutral-700 p-4 rounded-[32px]">
                <div className="bg-black border border-neutral-700 p-2 rounded-[24px]">
                    <img src={heroLinks.heroLogo} alt="HeroLogo" width='1920' height='1080' className="h-auto  rounded-[20px]"/>
                </div>
                <span className="absolute bottom-0 inset-x-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-black/80 to-black"></span>
            </motion.div>
            <div ref={ref} className="flex items-center justify-center gap-3 mt-20">
                <span className="absolute bottom-0 inset-x-0 h-35 w-full scale-[1.1] bg-gradient-to-b from-transparent via-black/80 to-black"></span>
                <motion.img 
                    variants={imageVariants}
                    initial="hiddenLeft"
                    animate={isInView ? "visible" : "hidden"}
                    src={heroLinks.productHuntLogo1} alt="img1Logo" className="h-auto max-w-[100%]"/>
                
                <motion.img 
                    variants={imageVariants}
                    initial='hiddenRight'
                    animate={isInView ? "visible" : "hidden"}
                    src={heroLinks.productHuntLogo2} alt="img2Logo" className="h-auto max-w-[100%]"/>
            </div>
        </div>
    </motion.div>
  )
}

export default HeroSection