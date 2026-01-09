import { useMemo } from "react";

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
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125;
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
