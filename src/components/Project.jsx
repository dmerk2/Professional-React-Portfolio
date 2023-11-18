import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

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
            <CgWebsite className="icon m-1"/>
            Demo
          </Button>
          <Button href={repo} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon"/> Github
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
