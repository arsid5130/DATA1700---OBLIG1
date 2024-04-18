const bilettskjema = document.getElementById('bilettskjema');
const bilettliste = document.getElementById('bilettliste');

const biletter = [];

bilettskjema.addEventListener('submit',function (event){
    event.preventDefault();

    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnummer = document.getElementById('telefonnummer').value;
    const epostadresse = document.getElementById('epostadresse').value;

    if (film === "" || antall === "" || fornavn==="" || etternavn==="" || telefonnummer==="" || epostadresse==="") {
        alert("Fyll ut alle av feltene");
        return;
    }

    if (!validateepostadresse(epostadresse)){
        alert("Skriv inn gyldig epostadresse");
        return;
    }

    if (!validatetelefonnummer(telefonnummer)){
        alert("Skriv inn gyldig telefonnummer med 8 sifre");
        return;
    }

    const bilett={
        film:film,
        antall:antall,
        fornavn:fornavn,
        etternavn:etternavn,
        telefonnummer:telefonnummer,
        epostadresse:epostadresse,
    };

    biletter.push(bilett);
    displaybiletter();
    bilettskjema.reset();

});


function displaybiletter() {
    bilettliste.innerHTML = '';
    biletter.forEach(function(bilett, index) {
        const li = document.createElement('li');
        li.textContent = `Billett ${index + 1}: -Navn: ${bilett.fornavn} ${bilett.etternavn} - Film: ${bilett.film}, Antall: ${bilett.antall}, Telefon: ${bilett.telefonnummer}, E-post: ${bilett.epostadresse}`;
        bilettliste.appendChild(li);
    });
}

function slettallebiletter() {
    biletter.length = 0;
    displaybiletter();
}

function validateepostadresse(epostadresse) {
    const re = /\S+@\S+\.\S+/;
    return re.test(epostadresse);
}

function validatetelefonnummer(telefonnummer) {
    const re = /^\d{8}$/;
    return re.test(telefonnummer);
}
