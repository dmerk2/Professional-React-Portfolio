import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

import "../styles/Project.css";

// eslint-disable-next-line react/prop-types
const Project = ({ title, description, image, link, repo }) => {
  return (
    <Card>
      <Card.Img src={image} alt={`${title} project`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="button-container">
          <Button href={link} target="_blank" rel="noopener noreferrer">
            Demo
          </Button>
          <Button href={repo} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Github
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
