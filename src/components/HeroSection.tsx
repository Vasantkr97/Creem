import { RiArrowRightSLine } from "@remixicon/react"
import TextReveal from "./TextReveal"
import { motion } from "framer-motion"


const HeroSection = () => {
  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto px-4">
        <div className="relative flex flex-col pt-20 md:pt-40 min-h-screen overflow-hidden md:mt-0 mt-10">
            <div className="relative mx-auto flex justify-center text-neutral-300 text-[10px] sm:text-xs shadow-zinc-900">
                <div className="relative flex mx-auto items-center z-10 bg-neutral-800 px-4 py-1.5 rounded-full ring-1 ring-white/20  font-semibold">
                    <span>Keep more of what you earn. 0% fees until product-market fit 🎉</span>
                    <RiArrowRightSLine className="ml-2 w-4"/>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] w-[80%] mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[1px]"></span>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] w-[100%] mx-auto bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 blur-sm"></span>

                </div> 
            </div>
            <div className="relative z-10 max-w-6xl mt-6 text-center mx-auto text-2xl md:text-4xl lg:text-8xl font-semibold drop-shadow-2xl">
                <div className="flex flex-row space-x-4">
                    <motion.div 
                        initial= {{opacity: 0, filter: 'blur(20px)', textShadow: '0 0 0px rgba(255, 255, 255, 0)'}}
                        animate={{opacity: 1, filter: 'blur(0px)', textShadow: '0 0 60px rgba(255,255,255,1)'}}
                        className="drop-shadow-glowwhite whitespace-pre ">
                        Smooth 
                    </motion.div>
                    <div>Payment for</div>
                </div>
                <div>
                    <TextReveal/>
                </div>
            </div>
            <div className="relative z-10 max-w-3xl mt-6 mx-auto pt-6 text-center text-base md:text-xl">
                <div className="inline-block align-top text-balance">
                    Grow your SaaS without the squeeze.
                    <br />
                    A smoother Merchant of Record with transparent billing and better fees.
                    <br />
                    <br />
                    <strong className="text-[hsl(22_100%_79.8%)]">Zero Surprise.</strong>
                </div>
            </div>
            <div className="relative flex items-center justify-center z-10 mt-6 gap-8">
                <a className="px-4 py-1.5 border border-neutral-600 rounded-full bg-neutral-900 hover:bg-black/90 flex items-center justify-center">
                    Get started for free 🍦
                </a>
                <a className="px-4 py-1.5 rounded-full bg-transparent hover:bg-neutral-800 flex items-center justify-center space-x-2">
                    <span>Contact us</span>
                    <RiArrowRightSLine className="w-4" />
                </a>
            </div>
            <div className="relative mt-20 bg-neutral-800 border border-neutral-700 p-4 rounded-[32px]">
                <div className="bg-black border border-neutral-700 p-2 rounded-[24px]">
                    <img src="https://www.creem.io/_next/image?url=%2Fheader.png&w=1920&q=75" alt="HeroLogo" width='1920' height='1080' className="h-auto  rounded-[20px]"/>
                </div>
                <span className="absolute bottom-0 inset-x-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-black/80 to-black"></span>
            </div>
            <div className="flex items-center justify-center gap-3 mt-20">
                <span className="absolute bottom-0 inset-x-0 h-35 w-full scale-[1.1] bg-gradient-to-b from-transparent via-black/80 to-black"></span>
                <img src="https://www.creem.io/_next/image?url=https%3A%2F%2Fapi.producthunt.com%2Fwidgets%2Fembed-image%2Fv1%2Ffeatured.svg%3Fpost_id%3D489575%26theme%3Ddark&w=256&q=75" alt="img1Logo" className="h-auto max-w-[100%]"/>
                <img src="https://www.creem.io/_next/image?url=https%3A%2F%2Fapi.producthunt.com%2Fwidgets%2Fembed-image%2Fv1%2Ftop-post-topic-badge.svg%3Fpost_id%3D489575%26theme%3Ddark%26period%3Dmonthly%26topic_id%3D94&w=256&q=75" alt="img2Logo" className="h-auto max-w-[100%]"/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection