$(function() {
    hentAlle();
});

function regbillett() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnummer = $("#telefonnummer").val();
    const epostadresse = $("#epostadresse").val();

    if (film === "" || antall === "" || fornavn === "" || etternavn === "" || telefonnummer === "" || epostadresse === "") {
        alert("Fyll ut alle av feltene");
        return;
    }

    if (!validateepostadresse(epostadresse)) {
        alert("Skriv inn gyldig epostadresse");
        return;
    }

    if (!validatetelefonnummer(telefonnummer)) {
        alert("Skriv inn gyldig telefonnummer med 8 sifre");
        return;
    }

    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnummer: telefonnummer,
        epostadresse: epostadresse
    };

    const url = "/lagre";
    $.post(url, billett, function(resultat) {
        hentAlle();
    });

    // Tøm input-feltene
    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnummer").val("");
    $("#epostadresse").val("");
};

function hentAlle() {
    $.get("/hentAlle", function(data) {
        formaterData(data);
    });
};

function formaterData(billetter) {
    var ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epostadresse</th>" +
        "</tr>";
    for (let i in billetter) {
        ut += "<tr><td>" + billetter[i].film + "</td><td>" + billetter[i].antall + "</td><td>" + billetter[i].fornavn + "</td><td>" + billetter[i].etternavn + "</td><td>" + billetter[i].telefonnummer + "</td><td>" + billetter[i].epostadresse + "</td></tr>"
    }
    $("#billettene").html(ut);
}

function slettbillettene() {
    $.get("/slettAlle", function(data) {
        hentAlle();
    });
};

function validateepostadresse(epostadresse) {
    const re = /\S+@\S+\.\S+/;
    return re.test(epostadresse);
}

function validatetelefonnummer(telefonnummer) {
    const re = /^\d{8}$/;
    return re.test(telefonnummer);
}
