import { useMemo } from "react";
import { rgbToHsb } from "../utils/rgbToHsb";

export const Skill = ({ skill, rating, color }) => {
  const ratingIcon = useMemo(() => {
    if (rating === 1) {
      return "🥇";
    } else if (rating === 2) {
      return "🥈";
    } else if (rating === 3) {
      return "🥉";
    } else {
      return "🎖️";
    }
  }, [rating]);

  const isTextAccessible = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const textToggle = rgbToHsb(r, g, b);
    return textToggle[2] > 80;
  };

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p
        style={isTextAccessible(color) ? { color: "#000" } : { color: "#fff" }}
      >
        {skill} {ratingIcon}
      </p>
    </div>
  );
};
