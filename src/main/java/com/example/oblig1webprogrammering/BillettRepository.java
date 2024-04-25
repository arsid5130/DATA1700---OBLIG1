package com.example.oblig1webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagrebillett(Billett billett) {
        String sql = "INSERT INTO billett (film,antall,fornavn,etternavn,telefonnummer,epostadresse) VALUES(?,?,?,?,?,?)";
        db.update(sql,billett.getfilm(),billett.getantall(),billett.getfornavn(),billett.getetternavn(),billett.gettelefonnummer(),billett.getepostadresse());
    }

    public List<Billett> hentallebilletter() {
        String sql = "SELECT * FROM billett";
        List<Billett> allebilletter = db.query(sql,new BeanPropertyRowMapper(Billett.class));
        return allebilletter;
    }

    public void slettallebilletter () {
        String sql = "DELETE FROM billett";
        db.update(sql);
    }
}

