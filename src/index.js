import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { Avatar } from "./components/Avatar";
import { Intro } from "./components/Intro";
import { SkillList } from "./components/SkillList";
import { Title } from "./components/Title";
import { SkillListV2 } from "./components/SkillListV2";
import { skills } from "./skills";

function App() {
  return (
    <div className="card">
      <Avatar imageUrl="./avatar.jpg" alt="Avatar" />
      <div className="data">
        <Title title="Tommy Bowden" />
        <Intro data="26 Year old software engineer from the UK. I love music, pokémon and skateboarding!" />
        {/* <SkillList
          skills={[
            { skill: "Javascript", rating: 3, color: "#845EC2" },
            { skill: "Typescript", rating: 3, color: "#845EC2" },
            { skill: "React", rating: 2, color: "#ff9671" },
            { skill: "C#", rating: 1, color: "#d65db1" },
            { skill: "React Native", rating: 2, color: "#ff6f91" },
          ]}
        /> */}
        <SkillListV2 skills={skills} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
