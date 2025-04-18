BEGIN TRANSACTION;
DROP SCHEMA IF EXISTS Bibliotheque CASCADE;
CREATE SCHEMA Bibliotheque;
SET SEARCH_PATH TO Bibliotheque;

CREATE TABLE Livre
(
  id_livre INT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  auteur VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL
);

CREATE TABLE Adherent
(
  id_adherent INT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  code_postal VARCHAR(10) NOT NULL,
  no_rue VARCHAR(10) NOT NULL,
  rue VARCHAR(255) NOT NULL,
  ville VARCHAR(255) NOT NULL
);

CREATE TABLE Emprunt
(
  id_emprunt SERIAL PRIMARY KEY,
  id_livre INT NOT NULL,
  id_adherent INT NOT NULL,
  date_emprunt DATE NOT NULL DEFAULT CURRENT_DATE,
  date_retour DATE,
  statut VARCHAR(50) NOT NULL,
  FOREIGN KEY (id_livre) REFERENCES Livre(id_livre),
  FOREIGN KEY (id_adherent) REFERENCES Adherent(id_adherent)
);
CREATE TABLE Commande
(
  id_commande INT PRIMARY KEY,
  id_adherent INT NOT NULL,
  statut VARCHAR(50) NOT NULL,
  date_commande DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY (id_adherent) REFERENCES Adherent(id_adherent)
);

CREATE TABLE Livre_Commande
(
  id_livre INT NOT NULL,
  id_commande INT NOT NULL,
  PRIMARY KEY (id_livre, id_commande),
  FOREIGN KEY (id_livre) REFERENCES Livre(id_livre),
  FOREIGN KEY (id_commande) REFERENCES Commande(id_commande)
);

COMMIT;