package com.example.oblig1webprogrammering;

public class Billett {
    private String id;
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int telefonnummer;
    private String epostadresse;

    public Billett() {
    }

    public Billett(String id, String film, int antall, String fornavn, String etternavn, int telefonnummer, String epostadresse) {
        this.id = id;
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnummer = telefonnummer;
        this.epostadresse = epostadresse;
    }

    public String getid() {
        return id;
    }

    public void setid(String id) {
        this.id = id;
    }

    public String getfilm() {
        return film;
    }

    public void setfilm(String film) {
        this.film = film;
    }

    public int getantall() {
        return antall;
    }

    public void setantall(int antall) {
        this.antall = antall;
    }

    public String getfornavn() {
        return fornavn;
    }

    public void setfornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getetternavn() {
        return etternavn;
    }

    public void setetternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public int gettelefonnummer() {
        return telefonnummer;
    }

    public void settelefonnummer(int telefonnummer) {
        this.telefonnummer = telefonnummer;
    }

    public String getepostadresse() {
        return epostadresse;
    }

    public void setepostadresse(String epostadresse) {
        this.epostadresse = epostadresse;
    }
}



