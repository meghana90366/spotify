import React from "react";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";
import "./UserBlock.css";
const UserHome = () => {
  return (
    <section id="userBlock">
      <article>
        <UserLeftBlock />
        <UserRightBlock />
      </article>
    </section>
  );
};

export default UserHome;
