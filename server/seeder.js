import { pool } from './db.js';

const createTablesQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    lastname VARCHAR(255)
  );

  CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    author VARCHAR(255) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS loans (
    id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    member_id INT NOT NULL,
    loan_date DATE NOT NULL,
    return_date DATE,
    CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE,
    CONSTRAINT fk_member FOREIGN KEY (member_id) REFERENCES members (id) ON DELETE CASCADE,
    CONSTRAINT check_loan_duration CHECK (return_date IS NULL OR return_date > loan_date),
    CONSTRAINT check_max_loan_duration CHECK (return_date IS NULL OR return_date <= loan_date + INTERVAL '14 days')
  );

  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    member_id INT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'honored', 'canceled')),
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT fk_order_book FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE,
    CONSTRAINT fk_order_member FOREIGN KEY (member_id) REFERENCES members (id) ON DELETE CASCADE
  );
`;

const insertDataQuery = `
  INSERT INTO users (name, lastname) VALUES
  ('John', 'Doe'),
  ('Alice', 'Smith');

  INSERT INTO books (title, genre, author) VALUES
  ('The Great Gatsby', 'Fiction', 'F. Scott Fitzgerald'),
  ('1984', 'Dystopian', 'George Orwell'),
  ('To Kill a Mockingbird', 'Fiction', 'Harper Lee');

  INSERT INTO members (name, address) VALUES
  ('John Doe', '123 Main St'),
  ('Alice Smith', '456 Elm St'),
  ('Bob Johnson', '789 Oak St');

  INSERT INTO loans (book_id, member_id, loan_date, return_date) VALUES
  (1, 1, '2023-10-01', '2023-10-10'),
  (2, 2, '2023-10-05', NULL), -- Not yet returned
  (3, 3, '2023-10-07', '2023-10-15');

  INSERT INTO orders (book_id, member_id, status, order_date) VALUES
  (1, 2, 'pending', '2023-10-08'),
  (2, 3, 'honored', '2023-10-06'),
  (3, 1, 'canceled', '2023-10-05');
`;

pool.query(createTablesQuery, (createTablesError) => {
  if (createTablesError) {
    console.error('Error creating tables:', createTablesError);
    pool.end();
  } else {
    pool.query(insertDataQuery, (insertDataError) => {
      if (insertDataError) {
        console.error('Error inserting data:', insertDataError);
      } else {
        console.log('Data inserted successfully!');
      }

      pool.end();
    });
  }
});
