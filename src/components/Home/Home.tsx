import React, { JSX } from 'react';
import classes from './Home.module.css';
import useFetch from '@/hooks/useFetch';

export type HomeProps = {
  children?: JSX.Element | string;
};

const Home = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch<{ id: number; name: string; lastname: string }[]>(
    'http://localhost:8080/api/users',
  );

  return (
    <div>
      {isLoading && <div>Loading blog posts...</div>}
      {error && <div>{error}</div>}

      {users &&
        users.map((user) => (
          <div key={user.id} className={classes.user}>
            <h2>{user.name}</h2>
            <p>{user.lastname}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
