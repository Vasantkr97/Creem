import { RiAddLine } from "@remixicon/react"
import FiveRows from "./FiveRows"
import { useState } from "react";
import { motion } from 'motion/react'


const Card3 = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      const {clientX, clientY} = event;
      const target = event.currentTarget.getBoundingClientRect();
      const x = (clientX - (target.left + target.width / 2)) / 15;
      const y = (clientY - (target.top + target.height / 2)) / 15;
      setMousePosition({ x, y })
    }

  return (
    <motion.section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x:0, y:0 });
      }}
      style={{
        transform: isHovering 
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)` 
          : 'translate3d(0px, 0px, 0px) scale3d(1,1,1)',
          transition: "transform 0.1s ease-out",
      }}
      className="min-h-[600px] lg:min-h-[600px] xl:min-h-[400xl] mx-auto w-full col-span-1 lg:col-span-3">
      <div className="h-full relative overflow-hidden rounded-2xl bg-custom-radial shadow-custom-shadow">
        <motion.div 
          style={{
            transform: isHovering
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
            : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out"
          }}
          className="h-full px-4 py-20 sm:px-10 ">
          <div className="w-full h-full absolute inset-0 bg-[url('https://www.creem.io/noise.webp')] [background-size:30%] [mask-image:radial-gradient(#fff,_transparent,_75%)] opacity-10 transform scale-[1.2]"></div>
          <h2 className="font-semibold text-balance text-base md:text-xl lg:text-3xl text-left text-primary tracking-[-0.015rem]"> 
            More than just payments
          </h2>
          <p className="mt-4 max-w-[40rem] text-left text-base/6 text-neutral-200">
            Creem streamlines everything from payment processing, marketing and back-office operations, with powerful analytics and revenue boosting tools ready to deploy instantly. Use the features you need to optimize your operations, collect payments, and delight customers.
          </p>
          <div className="h-full w-full sm:w-[80%] mx-auto bg-neutral-800 mt-10 rounded-2xl shadow-white/40 group ">
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none z-[10]"></div>
            <div className="flex flex-1 w-full h-full flex-col space-y-2">
              <div className="flex justify-between border-neutral-700 pb-2 p-4">
                <h2 className="text-sm font-bold">Enable features</h2>
                <p className="text-sm px-2.5 py-1 rounded-2xl flex-shrink-0 flex space-x-1 items-center bg-neutral-700">
                  <RiAddLine />
                  <span>Add</span>
                </p>
              </div>
              <div>
                <FiveRows />
              </div>
            </div>          
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Card3