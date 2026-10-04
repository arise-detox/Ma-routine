# Ma Routine — Nutrition

Application web (PWA) pour l'iPhone : menus et **listes de courses** du **lundi au vendredi**, calculés selon tes séances ROAD TO GI, ton poids actuel, ton poids cible et un **budget**. Elle fonctionne hors ligne une fois ouverte.

Adresse : https://arise-detox.github.io/Ma-routine/

## Installer sur l'iPhone
Ouvrir l'adresse dans Safari, puis Partager > « Sur l'écran d'accueil ».

## Ce que fait l'appli
- **Objectif** : profil (sexe, âge, taille, poids actuel, poids cible, rythme). L'appli calcule les calories de chaque jour d'après les séances de ROAD TO GI (functional lundi, mercredi, vendredi ; course et abdos mardi, jeudi), indique si le déficit (ou le surplus) est efficace, estime la date d'arrivée, et corrige le tir d'après la courbe de poids réelle.
- **Jours et repas à décocher** : tu retires un jour entier, ou un seul repas, quand tu manges ailleurs. La liste de courses et le budget se recalculent tout de suite ; le budget est dégressif (230 € pour 60 repas = 3,83 € par repas, 11,50 € par jour de 3 repas).
- **Menus** : cycles de 4 semaines (20 jours, 60 repas), un nouveau cycle différent d'au moins 70 % du précédent. Les quantités de féculents sont ajustées aux calories du jour, les protéines restent. Si les jours choisis ne tiennent pas dans le budget, les menus se rééquilibrent vers des recettes moins chères. Chaque repas peut être remplacé.
- **Courses** : liste par semaine avec les conditionnements du commerce et les restes déjà déduits, budget prévu et dépensé, prix modifiables. Un gros chiffre indique combien il te reste à la fin du cycle sur ton budget initial (budget moins courses prévues ou dépenses réelles), et chaque semaine affiche le reste après elle.
- **Aujourd'hui** : calories, protéines, eau et budget, repas à cocher, ajouts rapides, poids. Le week-end n'est pas planifié : on choisit les jours de la semaine suivante.
- **Marge de sécurité** : 15 € par cycle (modifiable dans les réglages, au prorata des repas gardés) sont réservés en plus des courses prévues pour les imprévus et les écarts de prix.
- **Ambiance** : thème noir et blanc, pluie de code blanche derrière l'appli (option colorée dans les réglages), police de terminal pour les titres et les chiffres, titres qui se « décodent » en changeant d'onglet. Désactivable ou réglable dans les réglages ; coupée automatiquement si l'iPhone est réglé sur « Réduire les animations ».
- **Prix** : relevés le 4 octobre 2026 sur auchan.fr pour l'Auchan Drive Hypermarché Kremlin-Bicêtre (Okabé), modifiables dans l'onglet Courses.
- **Recettes** : les 34 recettes, recherche et filtres. Les petits suisses nature (Auchan, 3,8 % MG) remplacent le skyr avec la même quantité de protéines ; la dinde hachée n'étant pas proposée au drive, la liste prévoit des escalopes de dinde à hacher.
- **Réglages** : budget, objectifs fixes si besoin, lundi de départ, reprise du poids et de la date depuis ROAD TO GI, sauvegarde et restauration.

## Calculs
Métabolisme de base (Mifflin-St Jeor) x activité hors séances + dépense de la séance du jour. L'écart voulu par semaine (1 kg de graisse ≈ 7 700 kcal) est réparti sur les 5 jours planifiés. Jamais plus de 25 % sous la dépense, ni sous le plancher de sécurité. Calories et protéines des recettes calculées à partir des quantités (tables usuelles, à ±10 %).

## Fichiers
`index.html` (application complète), `sw.js` (mode hors ligne), `manifest.json`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.

Pour essayer une autre date : ajouter `?d=2026-10-12` à l'adresse.
