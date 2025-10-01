Évaluation – Git, GitHub, CI


Checkout = changer de branche 
switch = changer de compte GitHub 



pull = met à jour les fichiers locaux par rapport aux modifications faites qui sont dans le git distant et merge avec le git distant

fetch = met à jour les fichiers locaux par rapport aux modif faites dans le git distant



rebase = mets dans une nouvelle branche les modifications faites, ça permet de garder une sorte d'historique

revert = modif les changements fait dans un comit précédent 



tag = marquer un commit, ex : l'un des comit est la version 1.0 ou qu'une fonctionnalités est fini d'être coder



stash = stocker des modif qu'on à pas commit au cas où si on est pas sur 


release = pour les versions officiel par ex une version 1.0 1.3 etc








Pour le conflit :  j'ai créer une branche conflict-toggle, j'ai ensuite changer le console log de la fonction toggleTask ensuite je suis passé sur toggle-task et j'ai merge vers conflict-toggle.
Pour régler le conflict j'ai ouvert studio code et je suis aller sur lib puis j'ai juste appuyer sur "Accept current changes" et ça à régler le conflit


Le conflit dans le cmd : 
PS C:\gitcidevA\eval-git-ci-js-base> git merge conflict-toggle Auto-merging eval-git-ci-js-base/lib/tasks.js CONFLICT (content): Merge conflict in eval-git-ci-js-base/lib/tasks.js Automatic merge failed; fix conflicts and then commit the result. PS C:\gitcidevA\eval-git-ci-js-base>


les commandes que j'ai utilisé : git switch, git push, git add task, git commit -m, npm test, git branch




Omar Chekkouri 



