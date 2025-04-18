-- Find the top 3 most borrowed books along with their borrow count this year
SELECT L.id_livre, L.titre, L.auteur, COUNT(E.id_livre) AS borrow_count
FROM Livre L
JOIN Emprunt E ON L.id_livre = E.id_livre
WHERE EXTRACT(YEAR FROM E.date_emprunt) = EXTRACT(YEAR FROM CURRENT_DATE)
GROUP BY L.id_livre, L.titre, L.auteur
ORDER BY borrow_count DESC
LIMIT 3;
