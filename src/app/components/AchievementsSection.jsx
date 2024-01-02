"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    prefix: "+",
    metric: "Completed Projects",
    value: "33",
    
  },
  {
    prefix: "~",
    metric: "Different Users",
    value: "28,000",
  },
  {
    metric: "Years Experience",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-2 px-4 xl:gap-16  xl:px-16 ">
    
      <div className="sm:border-transparent sm:border rounded-md pt-8 px-16 flex flex-col sm:flex-row items-center justify-between">
      
        
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-gradient2 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
             
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
        
      </div>
      
    </div>
  );
};

export default AchievementsSection;