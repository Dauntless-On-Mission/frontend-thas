import React from "react";

const Card = ({ data }) => {
  const { postLink, title, author, url } = data;
  console.log(postLink, title, url, author);
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt={title} width="250px" />
      </div>
      <div className="card-desc">
        <div className="card-title">
          <b>
            <a href={postLink} target="blank">
              {title}
            </a>
          </b>
        </div>
        <div className="card-author">
          By : <i>{author} (src: Reddit)</i>
        </div>
      </div>
    </div>
  );
};

export default Card;
