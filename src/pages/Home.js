import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML5, CSS, SASS, GIT, Figma, JavaScript, ReactJS,
                Redux-Toolkit, NPM, Styled-Components, Axios, Router-Dom,
                Emotion, Formik, Teamplate,
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB, Express</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
