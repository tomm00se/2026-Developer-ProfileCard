import { Skill } from "./Skill";

export const SkillList = (props) => {
  return (
    <div className="skill-list">
      {props.skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  );
};
