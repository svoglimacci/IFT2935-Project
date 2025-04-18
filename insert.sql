BEGIN TRANSACTION;
SET SEARCH_PATH TO Bibliotheque;

INSERT INTO Livre (id_livre, titre, auteur, genre) VALUES
('1','Le Seigneur des Anneaux', 'J.R.R. Tolkien', 'Fantasy'),
('2','Les Misérables', 'Victor Hugo', 'Classique'),
('3','Le Comte de Monte-Cristo', 'Alexandre Dumas', 'Aventure'),
('4','1984', 'George Orwell', 'Science Fiction'),
('5','Le Petit Prince', 'Antoine de Saint-Exupéry', 'Fiction'),
('6','Le Grand Gatsby', 'F. Scott Fitzgerald', 'Classique'),
('7','Orgueil et Préjugés', 'Jane Austen', 'Romance'),
('8','Moby Dick', 'Herman Melville', 'Aventure'),
('9','L''étranger', 'Albert Camus', 'Fiction'),
('10','Madame Bovary', 'Gustave Flaubert', 'Classique'),
('11','Les Fleurs du mal', 'Charles Baudelaire', 'Poésie'),
('12','Don Quichotte', 'Miguel de Cervantes', 'Aventure');

INSERT INTO Adherent (id_adherent, nom, prenom, code_postal, no_rue, rue, ville) VALUES
('1', 'Dupont', 'Jean', '123456', '10', 'Rue de Paris', 'Paris'),
('2', 'Martin', 'Sophie', '936650', '20', 'Avenue des Champs', 'Lyon'),
('3', 'Leroy', 'Alice', '196630', '30', 'Boulevard Saint-Germain', 'Paris'),
('4', 'Durand', 'Paul', '123456', '40', 'Rue de Lyon', 'Marseille'),
('5', 'Dupuis', 'Claire', '123456', '50', 'Rue de Nice', 'Nice'),
('6', 'Dupont', 'Marie', '975965', '10', 'Rue de Paris', 'Paris'),
('7', 'Moreau', 'Luc', '085697','60', 'Rue de Lyon', 'Lyon'),
('8', 'Lemoine', 'Emma', '187319','70', 'Avenue de la République', 'Marseille'),
('9', 'Garnier', 'Thomas', '622256', '80', 'Boulevard de la Liberté', 'Nice'),
('10', 'Boucher', 'Alice', '856319','90', 'Rue de la Paix', 'Paris');



INSERT INTO Emprunt (id_livre, id_adherent, date_emprunt, date_retour, statut) VALUES
(5, 1, '2025-04-11', NULL, 'en cours'),
(6, 1, '2025-04-12', NULL, 'en cours'),
(2, 3, '2025-01-10', NULL, 'en retard'),
(4, 4, '2025-04-05', '2025-04-15', 'honoré'),
(7, 5, '2025-04-14', NULL, 'en cours'),
(3, 5, '2025-04-14', NULL, 'en cours'),
(8, 6, '2025-04-15', NULL, 'en cours'),
(9, 7, '2025-04-16', NULL, 'en cours'),
(10, 8, '2025-04-17', NULL, 'en cours'),
(11, 9, '2025-04-18', NULL, 'en cours');

INSERT INTO Commande (id_commande, id_adherent, statut, date_commande) VALUES
(1, 1, 'en cours', '2025-04-10'),
(2, 2, 'en cours', '2025-04-11'),
(3, 3, 'en cours', '2025-04-12'),
(4, 4, 'en cours', '2025-04-13'),
(5, 1, 'honorée', '2025-04-14'),
(6, 2, 'honorée', '2025-04-15'),
(7, 3, 'honorée', '2025-04-16'),
(8, 4, 'honorée', '2025-04-17'),
(9, 5, 'annulée', '2025-04-18'),
(10, 6, 'annulée', '2025-04-19'),
(11, 1, 'annulée', '2024-04-20'),
(12, 6, 'annulée', '20024-03-01');



INSERT INTO Livre_Commande (id_livre, id_commande) VALUES
(1, 1),
(3, 1),
(4,1),
(10,2),
(10,3),
(8,5),
(2, 6),
(5, 7),
(7, 8),
(9, 9),
(6, 10),
(3, 11),
(4, 11),
(8, 11),
(1, 12),
(2, 12);

COMMIT;



