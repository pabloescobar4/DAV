import React, { useState } from 'react';

export const Abc = (props) => {
  const data = [
    {
      id: 0,
      firstname: 'dheeraj',
      age: 25,
    },
    {
      id: 1,
      firstname: 'dhiraj',
      age: 24,
    },
    {
      id: 2,
      firstname: 'dheraj',
      age: 23,
    },
    {
      id: 3,
      firstname: 'dheeraj',
      age: 25,
    },
    {
      id: 4,
      firstname: 'dhiraj',
      age: 24,
    },
    {
      id: 5,
      firstname: 'dheraj',
      age: 23,
    },
  ];

  const [myData, setmyData] = useState(data);
  const clearArray = () => {
    setmyData([]);
  };
  return (
    <>
      {myData.map((element) => {
        return (
          <h1 key = {element.id} >
            firstname : {element.firstname} & age: {element.age}
          </h1>
        );
      })}
      <button onClick={clearArray}>Clear</button>
    </>
  );
};
