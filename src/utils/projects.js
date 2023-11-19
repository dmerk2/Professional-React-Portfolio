import DogFinder from "../assets/dogfinder.jpg";
import NowWereCookin from "../assets/nowwerecookin.jpg";
import ComfyCafe from "../assets/comfy_cafe.jpg";
import CodingQuiz from "../assets/coding-quiz.jpg";
import TextEditor from "../assets/text-editor.png";
import WeatherForecast from "../assets/weather-forecast.png";
const placeholderImageUrl = 'https://via.placeholder.com/150';

const projects = [
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
  {
    title: "Comfy Cafe",
    description: "A simple landing page website to display comfy cafes site",
    link: "https://dmerk2.github.io/comfy-cafe/",
    repo: "https://github.com/dmerk2/comfy-cafe",
    image: ComfyCafe,
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "A weather app to input a city and view the current weather and 5-day forecast.",
    link: "https://dmerk2.github.io/Weather-Forecast-Dashboard/",
    repo: "https://github.com/dmerk2/Weather-Forecast-Dashboard",
    image: WeatherForecast,
  },
];

export default projects;
