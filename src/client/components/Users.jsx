import React from 'react';


const Users = ({users}) => {
  const userList = users.map(user => {
    return (
      <p style={{ "color": user.color }}>
        {user.userName}
      </p>
    );
  });
  return (
    <div className="Users">
      {userList}
    </div>
  );
}

export default Users;