import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BtnLive from "../components/btnGitLiveLInk/BtnLive";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="section">
      <div className="container">
        <button className="btn-back">
          <Link to={"/projects"} className="link-back">
            Back
          </Link>
        </button>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}
      >
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>
            <div className="btns-wrap">
              <BtnGitHub link={project.gitHubLink} target="blank" />
              <BtnLive link={project.gitLiveLink} target="blank" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
