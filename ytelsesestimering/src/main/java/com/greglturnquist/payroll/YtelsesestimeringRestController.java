package com.greglturnquist.payroll;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class YtelsesestimeringRestController {

    @RequestMapping(value = "/beregnAFPBE")
    public ResponseEntity<Object> beregnAFPBE(
            @RequestParam(value="pensjonsgrunnlagAP", defaultValue="300000") String pensjonsgrunnlagAP
    ) {

        System.out.println("pensjonsgrunnlagAP = " + pensjonsgrunnlagAP);

        Ytelse ytelse = new Ytelse(pensjonsgrunnlagAP, pensjonsgrunnlagAP);

        return new ResponseEntity<>(ytelse, HttpStatus.OK);
    }

}
