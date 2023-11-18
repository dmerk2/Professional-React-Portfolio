import profilePic from "../assets/profile-image.png";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="container" id="about">
        <h2 className="mt-3">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={profilePic} alt="Daniel Merkin" className="profile-picture"/>
          </div>
          <div className="col-md-6">
            <p>
              I am a dedicated web developer with a genuine passion for
              problem-solving and a profound curiosity about how technology
              shapes our world. In collaborative environments, I thrive, viewing
              each project as a canvas for creativity and innovation.
            </p>
            <p>
              My journey in technology has been an exciting exploration of
              emerging trends. I find joy in staying abreast of the latest
              technologies and eagerly embracing upcoming innovations.
              Throughout my 34 years, I have come to appreciate the profound
              impact even small actions can have in making the world a better
              place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
