import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.5,
              type: "spring",
              stiffness: 100
            }}
            className='w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
          />
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='w-1 sm:h-80 h-40 violet-gradient'
          />
        </div>

        <div>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{' '}
            <motion.span
              className='text-gradient animate-text'
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
                background: 'linear-gradient(90deg, #915EFF, #FF006E, #8338EC, #3A86FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kaif
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`${styles.heroSubText} mt-2 text-white-100 max-w-md`}
          >
            I build modern, interactive <br className='sm:block hidden' />
            web interfaces & applications
          </motion.p>

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
          />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 24, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 shadow-md'
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
