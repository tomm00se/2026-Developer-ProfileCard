import { useMemo } from "react";
import { getLuma } from "../utils/getLuma";

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

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p style={getLuma(color) ? { color: "#000" } : { color: "#fff" }}>
        {skill} {ratingIcon}
      </p>
    </div>
  );
};
