import React from "react";
import { BadgeContainer } from "./BadgeContainer";

export const Roadmap = ({setQuizzFilter}) => {

  const part1 = [
      {
      title:"Architecture",
      category:"architecture",
      img:"images/btn_architecture_2.png"
    },
      {
      title:"Operating System",
      category:"operatingsystem",
      img:"images/btn_operatingsystem_2.png"
    },
      {
      title:"Zowe",
      category:"zowe",
      img:"images/btn_zowe_2.png"
    }
  ]

  return (
    <div>
      <h2>Here start's your journey to Z</h2>
      <h3>
        <span>Welcome to the mainframe!</span>
      </h3>
      <BadgeContainer badgeImgUrl="images/mtm_facilitator.png" groups={part1} setQuizzFilter={setQuizzFilter}/>
      <BadgeContainer badgeImgUrl="images/mtm_part2.png"/>
      <BadgeContainer badgeImgUrl="images/mtm_part3.png"/>
    </div>
  );
};
