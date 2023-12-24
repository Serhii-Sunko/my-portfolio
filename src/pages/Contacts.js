import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="title-1">Contacts</h1>
        </motion.div>
        <ul className="content-list">
          <li className="content-list__item">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="title-2">Location</h2>
              <p>Ardfinnan, Clonmel, Co. Tipperary, Ireland</p>
            </motion.div>
          </li>
          <li className="content-list__item">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="title-2">Telephone / WhatsApp</h2>
              <p>
                <a href="tel:+353874899359">+353(87)-489-93-59</a>
              </p>
            </motion.div>
          </li>
          <li className="content-list__item">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:sergeysunko01@gmail.com">
                  sergeysunko01@gmail.com
                </a>
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
