import React from "react";

const Card = ({ title, description, imageUrl, tags, backgroundColor, textColor, titleColor, text }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" style={{ backgroundColor }}>
      <img className="w-full" src={imageUrl} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2" style={{ color: titleColor }}>{title}</div>
        <p className="" style={{ color: textColor }}>{description}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{ backgroundColor: tag.color, color: tag.textColor }}
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            #{tag.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
