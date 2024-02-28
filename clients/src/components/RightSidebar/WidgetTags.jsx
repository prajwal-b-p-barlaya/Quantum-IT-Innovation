import React from "react";

const WidgetTags = () => {
  const tags = [
    "dsa", "html", "css","react JS", "java", 'javascript', "mern",  "mongodb","mysql","next.js","node.js",'php',"python","reactjs","fullstack"
  ];

  return (
    <div className="widget-tags">
      <h4>Trending tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
