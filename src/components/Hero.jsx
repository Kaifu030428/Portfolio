import{motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      
      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Vertical line + dot */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg animate-pulse' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-gradient animate-text'>Kaif</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-md`}>
            I build modern, interactive <br className='sm:block hidden' />
            web interfaces & applications
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 shadow-md'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

Hero.jsx


