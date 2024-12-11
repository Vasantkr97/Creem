import { motion } from "framer-motion"
import { SliderContents } from "../Constants/Slider"
import { useState } from "react"

const SlideImages = () => {
  const [isHovered, setIsHovered] = useState(false);

  const array = [...SliderContents, ...SliderContents, ...SliderContents, ...SliderContents];


  return (
    <div
      className={`relative max-w-7xl overflow-hidden z-20 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]`}>
      <div className={`flex w-max min-w-full shrink-0 gap-4 py-4 flex-nowrap`}>
        <motion.div 
          animate={{
            x: isHovered ? "0%" : "-100%",
            transition: {
              ease: "linear",
              duration: 80,
              repeat: Infinity,
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex space-x-4 flex-shrink-0 mb-4 relative z-40"
          >
        {array.map((text: string, index: number) => (
          <span key={index} className="bg-neutral-900 flex items-center justify-center min-w-24 px-4 py-1.5 rounded-2xl spaxe-x-1 text-white text-sm">
            {text}
          </span>
        ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SlideImages