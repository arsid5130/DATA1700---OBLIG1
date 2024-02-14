const bilettskjema = document.getElementById('bilettskjema');
const bilettliste = document.getElementById('bilettliste');

const biletter = [];

bilettskjema.addEventListener('submit',function (event){
    event.preventDefault();

    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const epost = document.getElementById('epost').value;

    if (film === "" || antall === "" || fornavn==="" || etternavn==="" || telefonnr==="" || epost==="") {
        alert("Fyll ut alle feltene");
        return;
    }

    if (!validateepost(epost)){
        alert("Skriv inn gyldig epost");
        return;
    }

    if (!validatetelefonnr(telefonnr)){
        alert("Skriv inn gyldig telefonnummer med 8 sifre");
        return;
    }

    const bilett={
        film:film,
        antall:antall,
        fornavn:fornavn,
        etternavn:etternavn,
        telefonnr:telefonnr,
        epost:epost,
    };

    biletter.push(bilett);
    displaybiletter();
    bilettskjema.reset();

});


function displaybiletter() {
    bilettliste.innerHTML = '';
    biletter.forEach(function(bilett, index) {
        const li = document.createElement('li');
        li.textContent = `Billett ${index + 1}: -Navn: ${bilett.fornavn} ${bilett.etternavn} - Film: ${bilett.film}, Antall: ${bilett.antall}, Telefon: ${bilett.telefonnr}, E-post: ${bilett.epost}`;
        bilettliste.appendChild(li);
    });
}

function slettallebiletter() {
    biletter.length = 0;
    displaybiletter();
}

function validateepost(epost) {
    const re = /\S+@\S+\.\S+/;
    return re.test(epost);
}

function validatetelefonnr(telefonnr) {
    const re = /^\d{8}$/;
    return re.test(telefonnr);
}
