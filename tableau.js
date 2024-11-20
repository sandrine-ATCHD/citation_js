const tableau=[
    
        { citation: "Je pense, donc je suis.", auteur: "René Descartes" },
        { citation: "La vie sans réflexion n’est pas digne d’être vécue.", auteur: "Socrate" },
        { citation: "Le bonheur dépend de nous.", auteur: "Aristote" },
        { citation: "L'homme est condamné à être libre.", auteur: "Jean-Paul Sartre" },
        { citation: "Connaître, c'est se souvenir.", auteur: "Platon" },
        { citation: "L'enfer, c'est les autres.", auteur: "Jean-Paul Sartre" },
        { citation: "L'homme est la mesure de toutes choses.", auteur: "Protagoras" },
        { citation: "Il n'y a qu'une seule manière d'échouer, c'est d'abandonner avant d'avoir réussi.", auteur: "Georges Clémenceau" },
        { citation: "Ce qui ne nous tue pas nous rend plus fort.", auteur: "Friedrich Nietzsche" },
        { citation: "La vie est la fleur pour laquelle l'amour est le miel.", auteur: "Victor Hugo" },
        { citation: "Le secret du bonheur, c'est de chercher le bonheur des autres.", auteur: "Socrate" },
        { citation: "L'homme naît libre, et partout il est dans les fers.", auteur: "Jean-Jacques Rousseau" },
        { citation: "La sagesse commence dans l'émerveillement.", auteur: "Socrate" },
        { citation: "La connaissance de soi est le commencement de toute sagesse.", auteur: "Aristote" },
        { citation: "Le doute est le commencement de la sagesse.", auteur: "Aristote" },
        { citation: "L'amour est l'unique vérité.", auteur: "Albert Einstein" },
        { citation: "Le seul vrai voyage, ce ne serait pas d’aller vers de nouveaux paysages, mais d’avoir d’autres yeux.", auteur: "Marcel Proust" },
        { citation: "La liberté commence là où l'ignorance finit.", auteur: "Victor Hugo" },
        { citation: "Vivre sans espérance, c’est cesser de vivre.", auteur: "Fyodor Dostoevsky" },
        { citation: "Le bonheur est parfois caché dans l'inconnu.", auteur: "Victor Hugo" },
        { citation: "On peut juger de la grandeur d’un homme par la manière dont il traite les petits.", auteur: "Saint-Exupéry" },
        { citation: "La vérité est rarement pure et jamais simple.", auteur: "Oscar Wilde" },
        { citation: "Tout ce que nous sommes est le résultat de ce que nous avons pensé.", auteur: "Bouddha" },
        { citation: "La pensée est la clef de tout.", auteur: "Confucius" },
        { citation: "Les hommes naissent égaux, mais ils ne le restent pas.", auteur: "Montesquieu" },
        { citation: "La seule manière de se libérer d’une tentation, c’est d’y céder.", auteur: "Oscar Wilde" },
        { citation: "Tout est vanité.", auteur: "Jean de La Fontaine" },
        { citation: "L’amour est une liberté et une contrainte.", auteur: "Sartre" },
        { citation: "La vie est courte, l’art est long.", auteur: "Hippocrate" },
        { citation: "La folie, c’est de faire toujours la même chose et de s’attendre à un résultat différent.", auteur: "Albert Einstein" },
        { citation: "L'homme est une passion inutile.", auteur: "Jean-Paul Sartre" },
        { citation: "Il n'y a pas de vérité absolue.", auteur: "Friedrich Nietzsche" },
        { citation: "L'homme est un loup pour l'homme.", auteur: "Thomas Hobbes" },
        { citation: "On ne voit bien qu'avec le cœur.", auteur: "Antoine de Saint-Exupéry" },
        { citation: "La sagesse est fille de l'expérience.", auteur: "Léonard de Vinci" },
        { citation: "Tout homme est coupable de tout ce qu'il n'a pas empêché.", auteur: "Voltaire" },
        { citation: "Il faut être absolument moderne.", auteur: "Arthur Rimbaud" },
        { citation: "Le plus grand malheur, c'est de ne pas être heureux.", auteur: "Blaise Pascal" },
        { citation: "Le doute est le commencement de la sagesse.", auteur: "Aristote" },
        { citation: "Là où il y a de l’amour, il n’y a pas de péché.", auteur: "Mahatma Gandhi" },
        { citation: "La guerre est la continuation de la politique par d'autres moyens.", auteur: "Carl von Clausewitz" },
        { citation: "L'homme n'a pas d'objectifs dans la vie est comme un bateau sans gouvernail.", auteur: "Ralph Waldo Emerson" },
        { citation: "Le plaisir de la sagesse est supérieur à tous les autres plaisirs.", auteur: "Platon" },
        { citation: "Les femmes aiment l'art comme elles aiment la mode.", auteur: "Simone de Beauvoir" },
        { citation: "Il n'y a qu'une façon d'échouer, c'est de ne pas essayer.", auteur: "Georges Clémenceau" },
        { citation: "Tout homme peut se permettre d’être un génie, mais peu de gens s’y risquent.", auteur: "Albert Einstein" },
        { citation: "Il faut chercher la vérité dans le fond de son cœur.", auteur: "Confucius" },
        { citation: "Les hommes naissent libres, et partout ils sont dans les fers.", auteur: "Jean-Jacques Rousseau" },
        { citation: "Le plus grand obstacle à la découverte n'est pas l'ignorance, mais l'illusion de la connaissance.", auteur: "Daniel Boorstin" },
        { citation: "La beauté est dans l'œil de celui qui regarde.", auteur: "Margaret Wolfe Hungerford" },
        { citation: "L'homme est un être de contradiction.", auteur: "François de La Rochefoucauld" },
        { citation: "Il n'y a rien de plus puissant qu’une idée dont l'heure est venue.", auteur: "Victor Hugo" },
        { citation: "Le temps est un grand maître, il règle bien des choses.", auteur: "Pierre Corneille" },
        { citation: "L'homme est la seule créature qui refuse d'être ce qu'elle est.", auteur: "Albert Camus" },
        { citation: "Les vérités ne sont jamais absolues.", auteur: "Jean-Paul Sartre" },
        { citation: "Le seul bien véritable, c'est la connaissance.", auteur: "Platon" },
        { citation: "La vie sans réflexion n’est pas digne d’être vécue.", auteur: "Socrate" },
        { citation: "Tout ce qui est secret finit par être révélé.", auteur: "Euripide" },
        { citation: "Le but de la vie est de vivre en accord avec la nature.", auteur: "Sénèque" },
        { citation: "L'humanité ne se divise pas en races, mais en cultures.", auteur: "Claude Lévi-Strauss" },
        { citation: "L'art de la sagesse consiste à savoir quoi ignorer.", auteur: "William James" },
        { citation: "Il y a dans le cœur de l'homme un lieu que nul ne connaît, et que nul ne peut atteindre.", auteur: "Jean-Paul Sartre" },
        { citation: "La vie n'est pas d'attendre que les orages passent, mais de danser sous la pluie.", auteur: "Sénèque" },
        { citation: "Le plaisir de la sagesse est supérieur à tous les autres plaisirs.", auteur: "Platon" },
        { citation: "Les hommes ne vivent pas simplement d'airs, mais d'idées.", auteur: "John Stuart Mill" },
        { citation: "Le meilleur moyen de prédire l'avenir est de le créer.", auteur: "Abraham Lincoln" },
        { citation: "La vraie liberté est celle de l'esprit.", auteur: "Sénèque" },
        { citation: "Un homme est ce qu'il pense.", auteur: "Bouddha" },
        { citation: "Le seul vrai voyage consiste à se perdre et à se retrouver.", auteur: "Marcel Proust" },
        { citation: "La joie ne réside pas dans la recherche du plaisir, mais dans l'absence de douleur.", auteur: "Epicure" },
        { citation: "Vivre est la chose la plus rare au monde. La plupart des gens existent, c'est tout.", auteur: "Oscar Wilde" },
        { citation: "Nous ne pouvons pas résoudre nos problèmes avec le même type de pensée que celle qui les a créés.", auteur: "Albert Einstein" },
        { citation: "L’éducation est l’arme la plus puissante qu’on puisse utiliser pour changer le monde.", auteur: "Nelson Mandela" },
        { citation: "La vérité finit toujours par éclater.", auteur: "Sophocle" },
      
        
]




function afficherCitationAleatoire()
{
        const elementaleatoire=tableau[Math.floor(Math.random() * tableau.length)]

        const containerauteur= document.getElementById('citation')
        
        const containeurcitation=document.getElementById('auteur')
        containerauteur.innerHTML = `<p>"${elementaleatoire.citation}"</p>`;
        containeurcitation.innerHTML= `<p>"${elementaleatoire.auteur}"</p>`;
        };


        setInterval(() => afficherCitationAleatoire(tableau), 3000);

    
        afficherCitationAleatoire(tableau);



        const swiper = new Swiper('.swiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
             
              
                // Navigation arrows
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              
            
});
              
  

  

