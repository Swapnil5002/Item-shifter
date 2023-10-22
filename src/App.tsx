import { useState } from 'react';
import './style.css';

export const App = () => {
  const cardData = [
    {
      name: 'CSS',
      position: 'left',
      checked: false,
    },
    {
      name: 'JS',
      position: 'left',
      checked: false,
    },
    {
      name: 'HTML',
      position: 'left',
      checked: false,
    },
    {
      name: 'REACT',
      position: 'left',
      checked: false,
    },
  ];
  const [data, setData] = useState({
    leftData: [],
    rightData: [],
  });
  const handleRight = () => {};
  const handleLeft = () => {};

  return (
    <>
      {cardData.map((val, index) => {
        <input type="checkbox" className="right" key={index}>
          {val.name}
        </input>;
      })}
      <button onClick={handleRight}>Move right</button>
      <button onClick={handleLeft}>move left</button>
      <input type="checkbox" className="right"></input>
    </>
  );
};
