package com.example.oblig1webprogrammering;


public class Billett {
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefonnummer;
    private String epostadresse;

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnummer() {
        return telefonnummer;
    }

    public void setTelefonnummer(String telefonnummer) {
        this.telefonnummer = telefonnummer;
    }

    public String getEpostadresse() {
        return epostadresse;
    }

    public void setEpostadresse(String epostadresse) {
        this.epostadresse = epostadresse;
    }
}


