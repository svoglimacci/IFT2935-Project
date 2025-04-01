import React, { JSX, useState } from 'react';
import classes from './Home.module.css';
import useFetch from '@/hooks/useFetch';
import Button from '../Button/Button';

export type HomeProps = {
  children?: JSX.Element | string;
};

//God awful, but it works lmao
const Home = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null); // Track active button

  const { data: data } = useFetch<{
    id: number;
    name: string;
    lastname: string;
  }>(url || '');

  const handleClick = (url: string, buttonIndex: number) => {
    setUrl(url);
    setActiveButton(buttonIndex); // Set the active button
  };

  return (
    <div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/users/1', 1)}
          isActive={activeButton === 1}
        >
          Question 1
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/users/2', 2)}
          isActive={activeButton === 2}
        >
          Question 2
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/users/3', 3)}
          isActive={activeButton === 3}
        >
          Question 3
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/users/4', 4)}
          isActive={activeButton === 4}
        >
          Question 4
        </Button>
      </div>
      <div className={classes.dataContainer}>
        {data && (
          <div className={classes.dataContainer}>{JSON.stringify(data)}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
