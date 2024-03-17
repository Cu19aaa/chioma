import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      leftControls.start("visible");
      rightControls.start("visible");
    }
  }, [isInView, mainControls, leftControls, rightControls]);


  return (
    <div ref={ref} name='Experience' className='w-screen h-screen text-white bg-[#d0c3f1]'>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 90 },
          visible: {opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 4.0, delay: 0.25}}
      >
        <div className='w-full mx-auto p-4 pt-32'>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={leftControls}
            transition={{ duration: 1, delay: 0.5 }}
            className='pb-2 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'
          >
            Crafting 
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={rightControls}
            transition={{ duration: 1, delay: 0.5 }}
            className='flex justify-center items-center pt-3 pb-1 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'
          >
            Engaging
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={leftControls}
            transition={{ duration: 1, delay: 0.5 }}
            className='pb-2 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'
          >
            Experiences 
          </motion.div>
          <div className='flex flex-col justify-stretch items-center w-full h-full pt-12'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 text-[#6a5acd] gap-8 px-4 justify-between'>
              <div name='left' className='text-left text-sm font-thin'>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={leftControls}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cum beatae ipsam fugit illo adipisci! Cupiditate beatae tempora consequuntur aut assumenda sunt. Minima, dolore quibusdam repudiandae veniam asperiores fugiat amet culpa quaerat. Quidem nihil odit, similique itaque, cumque quia voluptas repudiandae error eius suscipit maxime?
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={leftControls}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='pt-6 text-left'
                >
                  Toolbelt: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, earum?
                </motion.p>
              </div>
              <div name='right' className='text-center'>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={rightControls}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className='flex space-x-24 pb-4 border-b font-bold text-gray border-gray-400 w-full'>
                    <p>FREELANCE</p>
                    <p>2019</p>
                    <p>CURRENT</p>
                  </div>
                  <div className='flex space-x-24  pt-6 pb-4 border-b font-bold text-gray border-gray-400 w-full'>
                    <p>TOKENPROOF</p>
                    <p>2022</p>
                    <p>2023</p>
                  </div>
                  <div className='flex space-x-24  pt-6 pb-4 border-b font-bold text-gray border-gray-400 w-full'>
                    <p>PREMINT</p>
                    <p>2022</p>
                    <p>2023</p>
                  </div>
                  <div className='flex space-x-24 pt-6 pb-4 border-b font-bold text-gray border-gray-400 w-full'>
                    <p>SNOWHOUSE</p>
                    <p>2021</p>
                    <p>2022</p>
                  </div>
                  <div className='flex space-x-24 pt-6 pb-2 border-b font-bold text-gray border-gray-400 w-full'>
                    <p>UNIKWAN</p>
                    <p>2020</p>
                    <p>2020</p>
                  </div>
                  <div className='flex space-x-24 pt-6 pb-4 border-b font-bold text-gray border-gray-400 w-full'>
                    <p>MY CAPTAIN</p>
                    <p>2019</p>
                    <p>2019</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
