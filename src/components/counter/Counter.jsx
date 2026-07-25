import { useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, end, {
      duration: 2,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.floor(value) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [end, isInView, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default Counter;
