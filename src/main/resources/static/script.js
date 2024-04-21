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
        li.classList.add('list-group-item'); // Legg til Bootstrap-klassen
        li.innerHTML = `
            <p><strong>Navn:</strong> ${bilett.fornavn} ${bilett.etternavn}</p>
            <p><strong>Film:</strong> ${bilett.film}</p>
            <p><strong>Antall:</strong> ${bilett.antall}</p>
            <p><strong>Telefon:</strong> ${bilett.telefonnummer}</p>
            <p><strong>E-post:</strong> ${bilett.epostadresse}</p>
        `;
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
