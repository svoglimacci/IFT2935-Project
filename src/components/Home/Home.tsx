import React, { JSX, useState } from 'react';
import classes from './Home.module.css';
import useFetch from '@/hooks/useFetch';
import Button from '../Button/Button';

export type HomeProps = {
  children?: JSX.Element | string;
};

const questions = [
  'Liste des membres dont les prêts sont en retard, y compris le nombre de jours de retard',
  "Les 3 livres les plus empruntés avec leur nombre d'emprunts cette année",
  'Liste de tous les membres qui ont emprunté des livres mais ne les ont pas encore rendus ce mois-ci',
  'Liste de tous les livres du genre Fantasy qui ont été commandés mais pas encore empruntés',
  'Liste de tous les membres qui ont emprunté des livres mais ne les ont pas encore rendus ce mois-ci',
];

//God awful, but it works lmao
const Home = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { data: data } = useFetch(url || '');
  const [question, setQuestion] = useState<string | null>(null);

  const handleClick = (url: string, buttonIndex: number) => {
    setUrl(url);
    setActiveButton(buttonIndex);
    setQuestion(questions[buttonIndex - 1]);
  };

  return (
    <div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/q1', 1)}
          isActive={activeButton === 1}
        >
          Question 1
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/q2', 2)}
          isActive={activeButton === 2}
        >
          Question 2
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/q3', 3)}
          isActive={activeButton === 3}
        >
          Question 3
        </Button>
        <Button
          onClick={() => handleClick('http://localhost:8080/api/q4', 4)}
          isActive={activeButton === 4}
        >
          Question 4
        </Button>
      </div>
      <div className={classes.dataContainer}>
        {data && (
          <div>
            <h2>{question}</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
