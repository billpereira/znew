import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo_blue.png" alt="MtM Logo" />
        </div>
        <div className="settings">
          <ul>
            <li className="badges" date-testid="quick-add-task-action"><img src="images/mtm_part2.png" alt="Profile" /></li>
            <li className="badges" date-testid="quick-add-task-action"><img src="images/mtm_part3.png" alt="Profile" /></li>
            <li className="badges" date-testid="quick-add-task-action"><img src="images/mtm_facilitator.png" alt="Profile" /></li>
            <li date-testid="dark-mode-action" className="profile"><img src="images/profile.png" alt="Profile" /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
