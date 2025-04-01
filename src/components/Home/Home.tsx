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
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { data: data } = useFetch(url || '');

  const handleClick = (url: string, buttonIndex: number) => {
    setUrl(url);
    setActiveButton(buttonIndex);
  };

  return (
    <div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/members/1', 1)}
          isActive={activeButton === 1}
        >
          Question 1
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/books', 2)}
          isActive={activeButton === 2}
        >
          Question 2
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/loans', 3)}
          isActive={activeButton === 3}
        >
          Question 3
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/orders', 4)}
          isActive={activeButton === 4}
        >
          Question 4
        </Button>
      </div>
      <div className={classes.dataContainer}>
        {data && (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
