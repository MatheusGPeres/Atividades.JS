//Mude todas as divs (filhas do body) da página por P's. Mantenha o conteúdo
function mudarDiv() {
    let divs = document.querySelectorAll("div");
    let body = document.body;


    for (let i = 0; i < divs.length; i++) {
        let p = document.createElement("p");
        p.innerHTML = divs[i].innerHTML;
        body.replaceChild(p, divs[i]);
    }
}

//Remova todas as LI's de uma UL de ID "UL2"
function removerLi() {
    let ul2 = document.querySelector("#ul2");
    let lista = ul2.querySelectorAll("li");

    lista.forEach(li => {
        ul2.removeChild(li)
    });
}


//Remova todas as LI's de todas as UL's.
function removerLis() {
    let uls = document.querySelectorAll("ul");

    uls.forEach(ul => {
        let lis = ul.querySelectorAll("li");
        lis.forEach(li => {
            li.remove();
        });
    });
}
