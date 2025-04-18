-- List all members who have borrowed books but have not returned them yet this month
SELECT A.id_adherent, A.nom, A.prenom, COUNT(E.id_livre) AS borrow_count
FROM Adherent A
JOIN Emprunt E ON A.id_adherent = E.id_adherent
WHERE E.date_retour IS NULL AND EXTRACT(MONTH FROM E.date_emprunt) = EXTRACT(MONTH FROM CURRENT_DATE)
AND EXTRACT(YEAR FROM E.date_emprunt) = EXTRACT(YEAR FROM CURRENT_DATE)
GROUP BY A.id_adherent, A.nom, A.prenom
ORDER BY borrow_count DESC;