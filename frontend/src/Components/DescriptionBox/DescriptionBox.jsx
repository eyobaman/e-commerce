import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ex odit
          fugit aliquam libero, a praesentium voluptate quae ab dignissimos!
          Incidunt veniam vero officia, tempora veritatis hic dicta id ex!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum unde
          laudantium adipisci nobis provident, commodi, nisi omnis saepe at
          blanditiis odio optio. Distinctio, odio molestias similique molestiae
          impedit accusantium eveniet!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
