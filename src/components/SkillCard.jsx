import { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaJava,
  FaGitAlt
} from 'react-icons/fa';
import {
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiJavascript
} from 'react-icons/si';

const iconMap = {
  react: FaReact,
  nodejs: FaNodeJs,
  express: SiExpress,
  tailwind: SiTailwindcss,
  figma: FaFigma,
  git: FaGitAlt,
  mysql: SiMysql,
  mongodb: SiMongodb,
  cpp: SiCplusplus,
  java: FaJava,
  python: FaPython,
  javascript: SiJavascript
};

export default function SkillCard({ frontSkill, backSkill }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const FrontIcon = iconMap[frontSkill.toLowerCase()];
  const BackIcon = iconMap[backSkill.toLowerCase()];

  return (
    <div className="skill-card-container">
      <div
        className={`skill-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="skill-card-front">
          <FrontIcon />
        </div>
        <div className="skill-card-back">
          <BackIcon />
        </div>
      </div>
    </div>
  );
}