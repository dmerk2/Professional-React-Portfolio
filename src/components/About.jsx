import { Container, Row, Col, Image } from "react-bootstrap";
import profilePic from "../assets/profile-image.png";
import "../styles/About.css";

const About = () => {
  return (
    <Container id="about" className="about-section">
      <h2>About Me</h2>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Image
            src={profilePic}
            alt="Daniel Merkin"
            className="profile-picture"
          />
        </Col>
        <Col md={6}>
          <p>
            I am a dedicated web developer with a genuine passion for
            problem-solving and a profound curiosity about how technology shapes
            our world. In collaborative environments, I thrive, viewing each
            project as a canvas for creativity and innovation.
          </p>
          <p>
            My journey in technology has been an exciting exploration of
            emerging trends. I find joy in staying abreast of the latest
            technologies and eagerly embracing upcoming innovations. Throughout
            my 34 years, I have come to appreciate the profound impact even
            small actions can have in making the world a better place.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
