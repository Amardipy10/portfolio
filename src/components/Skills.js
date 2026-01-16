import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql, SiFigma, SiVercel, SiCplusplus } from 'react-icons/si';
import { PiDiamondLight } from 'react-icons/pi';
import { SiExpress, SiMongodb } from "react-icons/si";

const TechStack = () => {
    const icons = [
        <FaHtml5 className="text-[#E34F26] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <FaCss3Alt className="text-[#1572B6] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <IoLogoJavascript className="text-[#F7DF1E] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <FaReact className="text-[#61DAFB] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <FaNodeJs className="text-[#339933] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <SiMysql className="text-[#4479A1] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <FaPython className="text-[#3776AB] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <SiCplusplus className="text-[#00599C] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <SiFigma className="text-[#F24E1E] lg:text-5xl sm:text-4xl text-3xl" />,
        <SiVercel className="text-black lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <FaGithub className="text-[#181717] lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <SiExpress className="text-white lg:text-5xl sm:text-4xl text-3xl" />,
        <PiDiamondLight className="text-white" />,
        <SiMongodb className="text-[#47A248] lg:text-5xl sm:text-4xl text-3xl" />,
      ];

  return (
    <div
      id="skills"
      className="min-h-screen text-white flex flex-col items-center justify-center p-8 relative"
      style={{ backgroundColor: '#1f2a38' }}
    >
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          MY TECH STACK
        </h1>
      </div>

      {/* Code Icon */}
      <div className="text-8xl text-purple-400 mb-12 opacity-80 font-mono">{'</>'}</div>
{/* Icons Row */}
<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 max-w-7xl">
  {icons.map((icon, index) => (
    <div key={index} className="text-white">{icon}</div>
  ))}
</div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default TechStack;
