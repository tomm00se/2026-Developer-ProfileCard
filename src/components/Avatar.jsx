export const Avatar = ({ imageUrl, alt }) => {
  return (
    <div>
      <img className="avatar" src={imageUrl} alt={alt} />
    </div>
  );
};
