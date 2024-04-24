import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Personal Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Successfully Deployed Websites"
            subTitle="Personal Projects"
            result="Accomplished"
            des="Deployed websites mentioned in my portfolio, showcasing skills and projects effectively."
          />
          <ResumeCard
            title="Participation in Flipkart Runway"
            subTitle="Event Participation"
            result="Achieved"
            des="Participated in Flipkart Runway, demonstrating commitment to personal and professional development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
