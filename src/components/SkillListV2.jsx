import { Skill } from "./Skill";

// Following V2 of the module ive created a second skill list component using the existing skill component but using array.map()

export const SkillListV2 = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map((skillItem, key) => (
        <Skill
          key={key}
          skill={skillItem.skill}
          rating={skillItem.rating}
          color={skillItem.color}
        />
      ))}
    </div>
  );
};
