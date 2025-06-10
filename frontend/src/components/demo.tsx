// File: MyComponent.tsx

import React, { useState } from 'react';

// ✅ Define types (optional but good practice)
type User = {
  name: string;
  age: number;
};

// ✅ Define the component
const MyComponent: React.FC = () => {
  // ✅ useState with types
  const [user, setUser] = useState<User>({ name: '', age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Hello, {user.name}</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
    </div>
  );
};

export default MyComponent;
