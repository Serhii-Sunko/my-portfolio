import "./style.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function Header() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["with passion for learning and creating."],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.5 }}
          >
            <h1 className="header__title">
              <strong>
                Hi, my name is <em>Serhii</em>
              </strong>
              <br /> a frontend developer
            </h1>
          </motion.div>
          <div className="header__text">
            <p ref={el}></p>
          </div>
          <a href="https://ibb.co/qRpdTHP" target={"blank"} className="button">
            View Certificate
          </a>
        </div>
      </header>
    </>
  );
}
