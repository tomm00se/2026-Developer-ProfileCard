import { useMemo } from "react";

export const Skill = ({ skill, rating, color }) => {
  const ratingIcon = useMemo(() => {
    if (rating === 3) {
      return "💪";
    } else if (rating === 2) {
      return "👍🏼";
    } else {
      return "👶🏼";
    }
  }, [rating]);

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>
        {skill} {ratingIcon}
      </p>
    </div>
  );
};
