import React, { useState } from 'react';

function CreateGroup() {
  const [groupName, setGroupName] = useState();

  // API call that creates group
  const createGroup = async (event) => {
    event.preventDefault();
    const response = await fetch('https://grocelist-server.herokuapp.com/api/groups/create-group', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        group_name: groupName,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  // rendering page
  return (
    <div>
      <form onSubmit={createGroup}>
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          type='text'
          data-testid='group'
          placeholder='Group Name'
        />
        <br />
        <input type='submit' value='Create Group' />
      </form>
    </div>
  );
}

export default CreateGroup;
