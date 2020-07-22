import React from 'react';

const Users = ({ users }) => {
  // array.map of users creating tags
  const userList = users.map(({userId, color, userName}) => {
    return (
      <p
        key={userId}
        style={{ "color": color }}
      >
        {userName}
      </p>
    );
  });
  // render the JSX.Elements[] of users
  return (
    <div className="Users">
      {userList}
    </div>
  );
}

export default Users;