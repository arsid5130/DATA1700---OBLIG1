package com.example.oblig1webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagre")
    public void lagrebillett(Billett innbillett){
        rep.lagrebillett(innbillett);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentallebilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettallebilletter();
    }
}