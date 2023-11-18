import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaGit,
  FaWordpress
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiSequelize,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiHeroku
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "../styles/Skills.css";

function Skills() {
  const icons = [
    { icon: <FaReact />, text: "React" },
    { icon: <FaNodeJs />, text: "Node" },
    { icon: <SiExpress />, text: "Express" },
    { icon: <SiMysql />, text: "SQL" },
    { icon: <FaDatabase />, text: "NoSQL" },
    { icon: <SiSequelize />, text: "Sequelize" },
    { icon: <SiMongodb />, text: "MongoDB" },
    { icon: <SiGraphql />, text: "Graphql" },
    { icon: <FaBootstrap />, text: "Bootstrap" },
    { icon: <FaCss3 />, text: "CSS3" },
    { icon: <FaHtml5 />, text: "HTML5" },
    { icon: <SiTailwindcss />, text: "Tailwind" },
    { icon: <FaGit />, text: "Git" },
    { icon: <SiJavascript />, text: "Javascript" },
    { icon: <SiJquery />, text: "Jquery" },
    { icon: <TbApi />, text: "REST API" },
    { icon: <FaWordpress />, text: "Wordpress" },
    { icon: <SiHeroku />, text: "Heroku" },
  ];

  return (
    <div className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="row">
        {icons.map(({ icon, text }, index) => (
          <div key={index} className={`col-md-4 ${index % 2 === 0 ? 'even-icon' : 'odd-icon'}`}>
            <div className="icon-container">
              {icon}
              <div className="icon-text">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
