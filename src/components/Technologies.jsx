import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -100 },
  animate: {
    y: [30,-30],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

//javaSE, javaEE, spring boot
//html,javascript,reactjs
//css,bootstrap,tailwind
//mysql,mongodb

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* backend */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 text-orange-500 p-4"
        >
          <RiJavaLine className="text-4xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 text-green-600 p-4"
        >
          <SiSpring className="text-4xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 text-green-700 p-4"
        >
          <SiSpringboot className="text-4xl" />
        </motion.div>

        {/* frontend */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-4xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-4xl text-yellow-300" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-4xl text-green-400" />
        </motion.div>

        {/* database */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-4xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-4xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
