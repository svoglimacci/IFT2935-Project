type Member = {
  id: number;
  name: string;
  lastname: string;
};

type Members = {
  members: Member[];
  size: number;
};

type Book = {
  id: number;
  title: string;
  genre: string;
  author: string;
};

type Books = {
  books: Book[];
  size: number;
};

type Loan = {
  id: number;
  bookId: number;
  memberId: number;
  loanDate: string;
  returnDate: string;
};
type Loans = {
  loans: Loan[];
  size: number;
};

type Order = {
  id: number;
  bookId: number;
  memberId: number;
  orderDate: string;
};
type Orders = {
  orders: Order[];
  size: number;
};

export type { Member, Members, Book, Books, Loan, Loans, Order, Orders };
