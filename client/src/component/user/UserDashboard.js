import React from "react";

import UserLayout from "../hoc/UserLayout";
import Button from "../utils/Button";
import UserHistoryBlock from "../utils/user/UserHistoryBlock";

const UserDashboard = ({ user }) => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User information</h1>
          <div>
            <span>{user.userData.name}</span>
            <span>{user.userData.lastName}</span>
            <span>{user.userData.email}</span>
          </div>
          <Button
            type="default"
            title="Edit account info"
            linkTo="/user/profile"
          />
        </div>

        {user.userData.history ? (
          <div className="user_nfo_panel">
            <h1>History purchases</h1>
            <div className="user_product_block_wrapper">
              <UserHistoryBlock products={user.userData.history} />
            </div>
          </div>
        ) : null}
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
