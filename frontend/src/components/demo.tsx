// File: MyComponent.tsx

import React from 'react';
import {useState , useEffect} from 'react';

// ✅ Define types (optional but good practice)
type User = {
  name: string;
  age: number;
};

// ✅ Define the component
const MyComponent = ({name,age}:User) => {
  
  
  // ✅ useState with types
  const [user, setUser] = useState<User>({ name: '', age: 0 });
  const [users, setUsers] = useState<User[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setUsers([...users, user]); // 🆕 add user to array
    setUser({ name: '', age: 0 });
    setShowResult(true); // 👈 show result on button click
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setUser({ ...user, [name]:name==="age" ? Number(value) : value});
  };

  const create = () =>{
    return(
      <div>
        <h3>All Users:</h3>
          {users.map((u, index) => (
            <div key={index}>
              <p>Name: {u.name}</p>
              <p>Age: {u.age}</p>
            </div>
          ))}
      </div>
    )
  }

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   // ✅ Now we know this is running on client
  //   setIsClient(true);
  // }, []);

  // if (!isClient) return null

  return (
    <div>
      <h2>Hello, {user.name}</h2>
      <><h2>{name} , {age}</h2></>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <button onClick={handleClick}>button</button>
      {showResult && create()}
    </div>
  );
};

export default MyComponent;
