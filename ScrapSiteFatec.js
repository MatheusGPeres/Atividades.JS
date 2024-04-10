function pegarCod() {
     let divs = document.querySelectorAll(".tab-grid-content-header.tab-text")
         divs.forEach(div => {
            let cod = div.textContent.trim().split('|')[1];
            if (cod) {
            console.log(cod.trim());
        }
    });
}

pegarCod();
