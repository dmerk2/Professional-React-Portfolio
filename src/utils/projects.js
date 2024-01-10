import DogFinder from "../assets/dogfinder.jpg";
import NowWereCookin from "../assets/nowwerecookin.jpg";
import CodingQuiz from "../assets/coding-quiz.jpg";
import TextEditor from "../assets/text-editor.png";
import GoogleBooks from "../assets/googlebookssearch.png";
import BranchOut from "../assets/Home-Page-Logged-In.png"

const projects = [
  {
    title: "Branch Out",
    description:
      "A MERN stack application serving as a dedicated social media platform designed for web developers.",
    link: "https://branch-out-web-service.onrender.com/",
    repo: "https://github.com/dmerk2/Branch-Out",
    image: BranchOut,
  },
  {
    title: "Google Book Search",
    description:
      "A MERN stack application enabling users to log in, save favorite books, and retrieve them effortlessly",
    link: "https://shielded-beyond-73145-20d419db12a1.herokuapp.com/",
    repo: "https://github.com/dmerk2/Book-Search-Engine",
    image: GoogleBooks,
  },
  {
    title: "Now We're Cooking",
    description:
      "Secure and user-friendly recipe blogging site with advanced security features.",
    link: "https://nowwerecooking-494c285649f9.herokuapp.com/",
    repo: "https://github.com/RobKaiser97/Recipe-Blog",
    image: NowWereCookin,
  },
  {
    title: "PWA Text Editor",
    description:
      "The JATE Text Editor is a powerful web application designed for writing and editing code.",
    link: "https://evening-sea-02025-d78ee56e0095.herokuapp.com/",
    repo: "https://github.com/dmerk2/PWA-Text-Editor",
    image: TextEditor,
  },
  {
    title: "Dog Finder",
    description:
      "A platform for individuals interested in adopting dogs, offering valuable information about specific dog breeds.",
    link: "https://dmerk2.github.io/Dog-Finder/",
    repo: "https://github.com/dmerk2/Dog-Finder",
    image: DogFinder,
  },
  {
    title: "Coding Quiz",
    description:
      "A timed multiple-choice quiz with your final score recorded on the high scores page.",
    link: "https://dmerk2.github.io/Coding-Quiz/",
    repo: "https://github.com/dmerk2/Coding-Quiz",
    image: CodingQuiz,
  },
];

export default projects;
