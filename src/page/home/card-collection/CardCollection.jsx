import React from "react";
import "./card-collection.scss";
import imgThumbnail400_500 from "../../../assets/img/thumbnail/400x500-thumbnail.png";
export default function CardCollection({ image }) {
  const imageSrc = image ? image : imgThumbnail400_500;
  return (
    <div className="collection">
      <div className="collection__img">
        <img src={imageSrc} alt="collection" />
      </div>
    </div>
  );
}
