-- List all books in the Fantasy genre that have been ordered but not yet borrowed
SELECT L.id_livre, L.titre, L.auteur, L.genre
FROM Livre L
JOIN Livre_Commande LC ON L.id_livre = LC.id_livre
LEFT JOIN Emprunt E ON L.id_livre = E.id_livre
WHERE L.genre = 'Fantasy' AND E.id_livre IS NULL;
