import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiTwotoneMail } from "react-icons/ai";
import "../styles/MyJumbotron.css";

const MyJumbotron = () => {
  const { height } = useSpring({
    from: { height: "50px" },
    to: { height: "150px" },
    config: { duration: 1000 },
  });

  return (
    <div className="jumbotron p-5 text-center d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col>
            <animated.div style={{ height, overflow: "hidden" }}>
              <h1>Full Stack Web Developer</h1>
              <p>
                Hi, I am Daniel Merkin, a passionate web developer with
                expertise in building modern and responsive web applications.
              </p>
              <Button className="contact-button" href="#contact">
                <AiTwotoneMail className="mail-icon"/>
                Contact Me
              </Button>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyJumbotron;
