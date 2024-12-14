
import { features } from "../Constants/FeatureConstants"
import { motion } from "motion/react"

const Features = () => {

  const stepVariant = {
    hidden: { opacity: 0, y:50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i*0.2,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className='relative z-20 py-40 max-w-7xl mx-auto'>
      <h2 className='max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight'>Features for makers and founders</h2>
      <motion.div 
        initial= 'hidden'
        whileInView= "visible"
        variants={{
          visible: {
            transition: {
              stagggerChildren: 0.2
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
          {
            features.map((item, index) => (
              <motion.div 
                custom={index}
                variants={stepVariant}
                key={index} className={`relative flex flex-col lg:border-r py-10 lg:border-l  ${item.bb ? "lg:border-b" : ''} dark:border-neutral-800 group`}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 h-full w-full ${item.gradient ? "bg-gradient-to-t" : "bg-gradient-to-b"} from-primary/20 to-transparent pointer-events-none`}></div>
                <div className="mb-4 relative z-10 px-10">
                  {item.icon}
                </div>
                <div className="text-lg font-bold mb-2 relative z-10 px-10">
                  <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover:bg-primary transition duration-200"></div>
                  <span className="group-hover:translate-x-2 transition duration-200 inline-block">{item.title}</span>
                </div>
                <p className="text-sm max-w-xs mx-auto relative z-10 px-10 text-neutral-400">
                  {item.description}
                </p>
              </motion.div>
            ))
          }
      </motion.div>
    </div>
  )
}

export default Features