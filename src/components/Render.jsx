import React, { useState, useEffect, useRef } from 'react';

export function Render() {
  /**
   * Code Start
   * Infinite rendering taking place over here.
   */

  // const [render, setrender] = useState(0);
  // useEffect(() => {
  //   setrender((prevrender) => prevrender + 1);
  // });
  // console.log(render);

  /**
   * Code End
   * Infinite rendering taking place over here.
   */

  /**
   * Inplace of state we can use Ref for storing data in state and prevent rendering of a component
   */
  const [age, setAge] = useState(10);
  const render = useRef(0);

  useEffect(() => {
    render.current = render.current + 1;
  });

  function updateAge() {
    setAge((prevage) => prevage + 5);
  }
  console.log('render function', render.current);
  return (
    <>
      <div className="center">
        <p>This is an testing component </p>
        <p>you are {age} years old</p>
        <button onClick={updateAge}>set age</button>
        <p>This state rendered {render.current} times</p>
      </div>
    </>
  );
}
