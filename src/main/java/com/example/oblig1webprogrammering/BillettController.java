package com.example.oblig1webprogrammering;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    private List<Billett> billetter = new ArrayList<>();

    @GetMapping("/bilettliste")
    public List<Billett> hentAlleBilletter() {
        return billetter;
    }

    @PostMapping("/bestillbillett")
    public String bestillBillett(@RequestBody Billett billett) {
        billetter.add(billett);
        return "Billett bestilt: " + billett.getFilm() + ", " + billett.getAntall() + " stk.";
    }
}
