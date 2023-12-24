import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="section">
      <div className="container">
        <motion.ul
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
        >
          <h2 className="title-1">Projects</h2>
        </motion.ul>
        <motion.ul
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
        >
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </motion.ul>
      </div>
    </div>
  );
};

export default Projects;
