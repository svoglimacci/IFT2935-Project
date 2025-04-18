
-- List members with overdue loans, including the number of overdue days
SELECT A.id_adherent, A.nom, A.prenom, COUNT(E.id_emprunt) AS overdue_count
FROM Adherent A
JOIN Emprunt E ON A.id_adherent = E.id_adherent
WHERE E.date_retour IS NULL AND E.date_emprunt < CURRENT_DATE - INTERVAL '15 days'
GROUP BY A.id_adherent, A.nom, A.prenom
ORDER BY overdue_count DESC;
