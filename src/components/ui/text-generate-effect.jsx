import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const controls = useAnimation();
  let wordsArray = words.split(" ");

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const renderWords = () => {
    return (
      <motion.div animate={controls} initial="hidden" variants={textVariants}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
