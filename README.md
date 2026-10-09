# Ma Routine — Nutrition

Application web (PWA) pour l'iPhone : menus et **listes de courses** du **lundi au vendredi**, calculés selon tes séances ROAD TO GI, ton poids actuel, ton poids cible et un **budget**. Elle fonctionne hors ligne une fois ouverte.

Adresse : https://arise-detox.github.io/Ma-routine/

## Installer sur l'iPhone
Ouvrir l'adresse dans Safari, puis Partager > « Sur l'écran d'accueil ».

## Ce que fait l'appli
- **Budget modifiable** : onglet Objectif, carte « Mon budget » (budget du cycle, marge, budget du week-end), avec un bouton « Modifier mon budget » dans Courses et Week-end. Tout se recalcule tout de suite.
- **Choix de l'objectif** : onglet Objectif, « Mon objectif de poids » : **déficit** (perte de poids), **maintien** (calories = dépense, poids cible facultatif), **prise de muscle** (petit surplus de +0,1 à +0,3 kg par semaine, 2 g de protéines par kg) ou automatique (déduit de ton poids cible). Le rythme proposé s'adapte au choix.
- **Objectif** : profil (sexe, âge, taille, poids actuel, poids cible, rythme). L'appli calcule les calories de chaque jour d'après les séances de ROAD TO GI (functional lundi, mercredi, vendredi ; course et abdos mardi, jeudi), indique si le déficit (ou le surplus) est efficace, estime la date d'arrivée, et corrige le tir d'après la courbe de poids réelle.
- **Jours et repas à décocher** : tu retires un jour entier, ou un seul repas, quand tu manges ailleurs. La liste de courses et le budget se recalculent tout de suite ; le budget est dégressif (230 € pour 60 repas = 3,83 € par repas, 11,50 € par jour de 3 repas).
- **Menus** : cycles de 4 semaines (20 jours, 60 repas), un nouveau cycle différent d'au moins 70 % du précédent. Les quantités de féculents sont ajustées aux calories du jour, les protéines restent. Si les jours choisis ne tiennent pas dans le budget, les menus se rééquilibrent vers des recettes moins chères. Chaque repas peut être remplacé.
- **Courses** : liste par semaine avec les conditionnements du commerce et les restes déjà déduits, budget prévu et dépensé, prix modifiables. Un gros chiffre indique combien il te reste à la fin du cycle sur ton budget initial (budget moins courses prévues ou dépenses réelles), et chaque semaine affiche le reste après elle.
- **Prix devant chaque article** : dans la liste de courses, le coût de chaque lot s'affiche en tête de ligne (prix du lot, besoin, reste), avec le sous-total de chaque rayon.
- **Week-end · cheat meal** (onglet Week-end) : samedi et dimanche, 3 repas par jour (matin, midi, soir) en recettes gourmandes : burgers, pizzas, tex-mex, kebab… **Le thème change chaque mois** (Burger party, Pizza & pasta, Tex-Mex, Street food) et **les recettes changent chaque week-end** (56 recettes de repas, 14 petits-déjeuners). Budget de **40 € par week-end**, en plus des 230 € du cycle (modifiable dans les réglages) : liste de courses du week-end aux prix Auchan Okabé, avec les restes qui se gardent d'un week-end à l'autre du mois. Bouton « Nouveau menu » pour retirer d'autres recettes ; calories, protéines et coût au prorata de chaque recette, bilan par rapport à ta dépense si ton profil est rempli. Sur 60 week-ends simulés, les courses restent sous 40 €.
- **Cocher ou retirer un repas du week-end** : chaque repas a sa case « au menu ». Décocher un repas le retire des courses, du budget et du bilan calorique ; la carte « Argent économisé » affiche ce que tu gardes sur le week-end et le cumul des week-ends passés (budget non dépensé et repas retirés).
- **Le cheat meal n'annule pas ton déficit** : les repas du week-end gardés au menu sont comparés à ta dépense estimée. Le surplus est retiré en semaine (réparti sur les 5 jours du lundi au vendredi qui précèdent, portions de féculents ajustées, protéines gardées) sans jamais passer sous la limite de sécurité (25 % sous ta dépense). Si tes calories de semaine sont déjà au minimum conseillé, l'appli le dit et affiche l'effet sur ton poids. Désactivable dans les réglages ; le rythme prévu dans l'onglet Objectif tient compte du week-end.
- **Aujourd'hui** : calories, protéines, eau et budget, repas à cocher, ajouts rapides, poids. Le samedi et le dimanche, la carte du jour affiche les repas cheat meal.
- **Marge de sécurité** : 15 € par cycle (modifiable dans les réglages, au prorata des repas gardés) sont réservés en plus des courses prévues pour les imprévus et les écarts de prix.
- **Charte graphique** : inspirée du template Cami de Squarespace (fond sable, texte brun très foncé, titres Poppins medium serrés, boutons et cartes carrés, beaucoup d'air) avec des couleurs chaleureuses : sable, crème, terracotta, olive, ocre. Poppins (licence SIL OFL, sous-ensemble latin) est intégrée dans `fonts/` et fonctionne hors ligne. La pluie de code de l'ancien thème reste disponible en option dans les réglages (éteinte par défaut, en brun sur sable ou en terracotta et ocre) ; elle s'arrête si l'iPhone est réglé sur « Réduire les animations ».
- **Prix** : relevés le 4 octobre 2026 (repas de la semaine) et le 9 octobre 2026 (cheat meal du week-end) sur auchan.fr pour l'Auchan Drive Hypermarché Kremlin-Bicêtre (Okabé), modifiables dans l'onglet Courses et dans les réglages (« Prix du week-end »). Les prix des magasins changent : à relever de nouveau de temps en temps.
- **Recettes** : les 34 recettes, recherche et filtres. Les petits suisses nature (Auchan, 3,8 % MG) remplacent le skyr avec la même quantité de protéines ; la dinde hachée n'étant pas proposée au drive, la liste prévoit des escalopes de dinde à hacher.
- **Réglages** : budget, objectifs fixes si besoin, lundi de départ, reprise du poids et de la date depuis ROAD TO GI, sauvegarde et restauration.

## Calculs
Métabolisme de base (Mifflin-St Jeor) x activité hors séances + dépense de la séance du jour. L'écart voulu par semaine (1 kg de graisse ≈ 7 700 kcal) est réparti sur les 5 jours planifiés. Jamais plus de 25 % sous la dépense, ni sous le plancher de sécurité. Calories et protéines des recettes calculées à partir des quantités (tables usuelles, à ±10 %).

## Fichiers
`index.html` (application complète), `sw.js` (mode hors ligne), `manifest.json`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.

Pour essayer une autre date : ajouter `?d=2026-10-12` à l'adresse.
