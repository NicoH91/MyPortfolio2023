import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hi, I'm Nicolas
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Contact Me</button>
          
        </div>

        <div className="icons">
          <a href="https://www.linkedin.com/in/nicolas-haddad-10382a242/" target={"_blank"}>
            <AiFillLinkedin color="yellow" size={40} />
          </a>
          <a href="https://github.com/NicoH91" target={"_blank"}>
            <AiFillGithub color="yellow " size={40} />
          </a>
        </div>
      </Animate>
    </section>
  );
};
export default Home;