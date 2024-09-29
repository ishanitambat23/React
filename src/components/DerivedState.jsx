import { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

export const DerivedState = () => {
  const [users, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  //console.log(users);

  //Derived state count of users
  const usersCount = users.length;
  console.log(usersCount);

  //Derived state average
  const averageAge = users.reduce((accum, currElem)=> accum+currElem.age,0)/usersCount;

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((currElem,index) => {
            return (
                <li key= {index}>
                    {currElem.name} - {currElem.age} year old
                </li>
            );
        })}
        <p>Total Users: {usersCount}</p>
        <p>Total Users: {averageAge}</p>
      </ul>
    </div>
  );
};
