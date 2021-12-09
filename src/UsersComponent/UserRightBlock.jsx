import React from "react";

const UserRightBlock = () => {
  return (
    <div className="UserrightBlock">
      <div className="arrow">
        <nav>
          <span>
            <i class="fal fa-chevron-circle-left fa-3x"></i>
            <i class="fal fa-chevron-circle-right fa-3x"></i>
          </span>
        </nav>
      </div>
      <div className="userbtn">
        <div>
          <span>
            <button>UPGRADE</button>
          </span>
          <span>
            <button>USER</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserRightBlock;
