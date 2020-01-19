import React from "react";
import { Link } from "react-router-dom";

export const BadgeContainer = ({ badgeImgUrl, groups, setQuizzFilter=""}) => {
  console.log(groups);
  console.log(setQuizzFilter)


  return (
    <div className="badge-container">
      <div className="badge-name">
        <img src={badgeImgUrl} />
      </div>
      <div className="groups-container">
        {groups &&
          groups.map(item => (
            <Link to="/quizz" key={item.title} onClick={()=>setQuizzFilter({category:item.category, title:item.title})}>
            <div className="challenge-button" >
              <img src={item.img}/>
              <span>{item.title}</span>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
