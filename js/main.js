var listeArticles = [];
/**
 * Méthode viderMain() qui se déclenche au click sur #dom_bouton1.
 * Il vide le contenu de <main>
 */
function viderMain(){
    console.log("ENTREE dans viderMain()");

    // Efface le contenu existant (tous les enfants) dans le main
    // Je recoupere la div avec la className ToDoList
    var todolistZone = document.getElementsByClassName('todolistZone')[0];

    //Maintenant je soupprime tous les premieres enfants (les cinq titres qui on est dans la page d'accueil)
    while (todolistZone.firstChild){
        todolistZone.removeChild(todolistZone.firstChild);

    }

}

function ajouterArticle(){
    viderMain();

    var todolistZone = document.getElementsByClassName('todolistZone')[0];
    var form = document.createElement("form");

    form.setAttribute("titre","description");
    var todolistZone = document.createElementsByClassName("form");
    var todolistZone = document.createElement('form').appendChild(document.createElement('form'));
}
    
    // Créer un formulaire "Ajouter un article"
/*
    <form class="form">
        <p>Ajouter un article</p>
        <div>
            <label for='titre'>titre : </label>
            <input type='text' name='titre' placeholder='Votre titre ici...' required>
        </div>
        <div>
            <label for='description'>description : </label>
            <input type='text' name='description' placeholder='Votre description ici...' required>
        </div>
        <button type='submit' onclick='submitForm()'>Enregistrer</button>";
    </form>
 */

/**
 * Méthode qui ajoute un article dans la BDD (tableau)
 */
function submitForm(){
    console.log("ENTREE dans submitForm()");
    var article = new Article($("input")[0].value, $("input")[1].value);
    listeArticles.push(article);
    console.log(listeArticles);
}

/**
 * Méthode qui affiche tous les articles
 */
function toutAfficher(){
    console.log("ENTREE dans toutAfficher()");
    var divHtmlTitreArticle = "";
   
    for(var i = 0 ; i < listeArticles.length ; i++){
        divHtmlTitreArticle +="<div class='todolistDiv'><a href='#'>" + listeArticles[i].titre +"</a></div>";
    }

}