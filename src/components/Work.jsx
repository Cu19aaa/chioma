import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import work1 from '../assets/Your Tok HUB.png';

const Work = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const selectedControls = useAnimation();
    const worksControls = useAnimation();
    const gridItemsControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            selectedControls.start("visible");
            setTimeout(() => {
                worksControls.start("visible");
                gridItemsControls.start("visible");
            }, 1000); // Adjust the delay according to your preference
        }
    }, [isInView, selectedControls, worksControls, gridItemsControls]);

    return (
        <div ref={ref} name='work' className='w-screen h-screen text-white bg-[#d0c3f1]'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={selectedControls}
                transition={{ duration: 1.0 }}
            >
                <div className='w-full mx-auto p-4'>
                    <div className='pb-2 border-b  text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'>
                        <p>Selected</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={worksControls}
                transition={{ duration: 1.0, delay: 0.5 }} // Adjust the delay according to your preference
            >
                <div className='flex justify-center items-center pt-3 pb-1 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'>
                    <p>Works</p>
                </div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={gridItemsControls}
                transition={{ duration: 1.0, delay: 0.5 }} // Adjust the delay according to your preference
            >
                {/*Container*/}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-20 pt-14'>
                    {/*Grid Items 1 to 4*/}
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${work1})` }}
                            className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto pt-16 content-div'
                        >
                            {/*hover*/}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-black tracking-wider'>
                                    Website Portfolio
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Work;
