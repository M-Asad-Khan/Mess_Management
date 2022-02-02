import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Buttonfield from "../../../Atoms/Buttons/CustomeButtons";

const MenuCard = ({ title, menuDetails, isTrue }) => {
  const [userIn, setUserIn] = useState(0);
  const [userOut, setUserOut] = useState(0);

  return (
    <Grid item xs={12} sm={12} md={4}>
      <div className="card">
        <div className="cardLeaves">
          <div className="cardHeaderText">{title}</div>
          <div className="cardBody">
            <span className="cardBodyText">{menuDetails}</span>
          </div>
          {isTrue === "true" ? (
            <div>
              <Buttonfield
                fieldValue="In"
                id="menu-in"
                type="primary"
                className="menu-Action-button"
                onchangefunction={() => setUserIn(userIn + 1)}
              />
              {userIn > 0 ? (
                <span className="userStatus"> {userIn} </span>
              ) : (
                " "
              )}
              <Buttonfield
                fieldValue="Out"
                id="menu-in"
                type="primary"
                className="menu-Action-button"
                onchangefunction={() => setUserOut(userOut + 1)}
              />
              {userOut > 0 ? (
                <span className="userStatus"> {userOut} </span>
              ) : (
                " "
              )}
            </div>
          ) : (
            <div className="yesterday-feedback">
              <label>Feedback</label>
              <input
                type="textarea"
                placeholder="Please enter your feedback here"
              />
              <Buttonfield
                fieldValue="Submit"
                id="menu-in"
                type="primary"
                className="menu-Action-button"
              />
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default MenuCard;
