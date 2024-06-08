import classes from "./DesignExamplesSection.module.css";
import DesignExample from "./DesignExample.jsx";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function DesignExamplesSection({ designExamples }) {
  const [scope, animate] = useAnimate();

  const isSectionInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isSectionInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isSectionInView]);

  const MotionDesignExample = motion(DesignExample);
  return (
    <motion.section
      className={classes.section}
      ref={scope}
      initial={{ opacity: 0 }}
    >
      {designExamples.map((example, i) => (
        <MotionDesignExample
          {...example}
          key={example.key}
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
        >
          {example.description}
        </MotionDesignExample>
      ))}
    </motion.section>
  );
}
