import { Counter } from "@/components";
import { zoomIn } from "@/utils/motion";

import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <section className="w-full py-24 flex items-center justify-center z-40 gap-10">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={zoomIn({ delay: 0.4, duration: 0.6 })}
      >
        <Counter
          from={0}
          to={1.3}
          precision={1}
          duration={1}
          delay={0.4}
          prefix="$"
          postfix="T+"
          className="font-bold text-5xl text-primary-text"
        />
        <span className="font-light text-sm text-primary-text">
          Trade Volume
        </span>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={zoomIn({ delay: 0.7, duration: 0.6 })}
      >
        <Counter
          from={0}
          to={133}
          duration={1}
          delay={0.7}
          postfix="M+"
          className="font-bold text-5xl text-primary-text"
        />
        <span className="font-light text-sm text-primary-text">
          Trade Volume
        </span>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={zoomIn({ delay: 1, duration: 0.6 })}
      >
        <Counter
          from={0}
          to={300}
          duration={1}
          delay={1}
          postfix="+"
          className="font-bold text-5xl text-primary-text"
        />
        <span className="font-light text-sm text-primary-text">
          Trade Volume
        </span>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={zoomIn({ delay: 1.4, duration: 0.6 })}
      >
        <Counter
          from={0}
          to={4400}
          precision={1}
          duration={1}
          delay={1.4}
          postfix="T+"
          className="font-bold text-5xl text-primary-text"
        />
        <span className="font-light text-sm text-primary-text">
          Trade Volume
        </span>
      </motion.div>
    </section>
  );
};

export default Numbers;
