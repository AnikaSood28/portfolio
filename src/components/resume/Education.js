import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering"
            subTitle="Vellore Institute Of Technology, Vellore, India (2022 - Present)"
            result="Currently pursuing my Bachelor's degree"
            des=""
          />
          <ResumeCard
            title="High School"
            subTitle="AVM Senior Secondary School, Palampur, Himachal Pradesh (2019 - 2021)"
            result="Percentage: 94"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
