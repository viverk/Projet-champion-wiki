let version = null;
console.log("version : " + version);

function getVersion() {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
        .then(rep => rep.json())
        .then(dat => {
            version = dat[0];
            //alert(version);
            //return version;
        })

    return version;
}
console.log("fonction version : " + getVersion());


var callBackGetSuccess = function (donnees) {
    for (const prop in donnees.data) {
        var element = document.getElementById("zone");
        var caracteristiques =
            "<img src='http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/img/champion/" + donnees.data[prop].id + ".png' width='80' height='80'> </img>" + "<strong> Nom : </strong>" + donnees.data[prop].name + "<br>" + "<br>" +
            "<strong> Histoire : </strong>" + donnees.data[prop].lore + "<br>" + "<br>" +
            "<strong> Coûts des sorts : </strong>" + donnees.data[prop].partype + "<br>" + "<br>" +
            "<strong> Titre : </strong>" + donnees.data[prop].title + "<br>" + "<br>" +
            "<img src='http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/img/passive/" + donnees.data[prop].passive.image.full + "' width='30' height='30'> </img>" + "<strong> Passif : </strong>" + donnees.data[prop].passive.name + "<br>" +
            "<strong> Description : </strong>" + donnees.data[prop].passive.description + "<br>" + "<br>" +
            "<img src='http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/img/spell/" + donnees.data[prop].spells[0].id + ".png' width='30' height='30'> </img>" + "<strong> Q spell : </strong>" + donnees.data[prop].spells[0].name + "<br>" + " <strong> Description </strong>: " + donnees.data[prop].spells[0].description + "<br>" + "<br>" +
            "<img src='http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/img/spell/" + donnees.data[prop].spells[1].id + ".png' width='30' height='30'> </img>" + "<strong> W spell : </strong>" + donnees.data[prop].spells[1].name + "<br>" + " <strong> Description </strong>: " + donnees.data[prop].spells[1].description + "<br>" + "<br>" +
            "<img src='http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/img/spell/" + donnees.data[prop].spells[2].id + ".png' width='30' height='30'> </img>" + "<strong> E spell : </strong>" + donnees.data[prop].spells[2].name + "<br>" + " <strong> Description </strong>: " + donnees.data[prop].spells[2].description + "<br>" + "<br>" +
            "<img src='http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/img/spell/" + donnees.data[prop].spells[3].id + ".png' width='30' height='30'> </img>" + "<strong> R spell : </strong>" + donnees.data[prop].spells[3].name + "<br>" + " <strong> Description </strong>: " + donnees.data[prop].spells[3].description;
        element.innerHTML = caracteristiques;
        console.log("fonction version : " + getVersion());
        //alert(getVersion())
    }
    console.log("donnees api = ", donnees)
    champ = nomChampion.value;
    //console.log("nom du champion : " + champ)
    //console.log("test : " + donnees.data[champ].spells[0].name)  //la manière la plus simple 
    document.getElementById("suggestions").innerHTML = "";
    //console.log("fonction version : " + getVersion());



}

function getAPI() {
    var nomChampion = document.getElementById("nomChampion").value;
    //alert("nom du champion : " + nomChampion);
    var url = "http://ddragon.leagueoflegends.com/cdn/" + getVersion() + "/data/fr_FR/champion/" + nomChampion + ".json";

    $.get(url, callBackGetSuccess).done(function () {
        //alert("dedans") 

    })
    /*         .fail(function () {
                alert("error");
            })
            .always(function () {
                alert("dedans");
            }); */
}
