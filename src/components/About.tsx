import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a developer with a passion for building intelligent, real-world
          applications at the intersection of AI and full stack engineering.
          Currently pursuing my Integrated MTech in Artificial Intelligence at
          VIT Bhopal, I've worked on AI-driven tools including a Resume Parser,
          Real-Time Translator, and Autocorrect system - applying Machine
          Learning and NLP to solve practical problems.
          <br />
          <br />
          Beyond code, I tell stories through a lens - leading media and
          photography teams across three clubs where I blend creativity with
          technical craft. Whether I'm building touchless gesture-controlled
          interfaces or capturing a moment on camera, I care about the
          experience people have on the other side.
        </p>
      </div>
    </div>
  );
};

export default About;
