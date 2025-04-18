-- List all books in the Fantasy genre that have been ordered and honored but not yet borrowed
SELECT L.id_livre, L.titre, L.auteur, C.date_commande
FROM Livre L
JOIN Livre_Commande LC ON L.id_livre = LC.id_livre
JOIN Commande C ON LC.id_commande = C.id_commande
WHERE L.genre = 'Fantasy' AND C.statut NOT IN ('annulée') AND L.id_livre NOT IN (SELECT id_livre FROM Emprunt WHERE date_retour IS NULL)
ORDER BY C.date_commande DESC;

