package rs.udd.search.controllers;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import rs.udd.search.dto.ReaderDTO;
import rs.udd.search.services.ReaderService;

@RestController( )
@RequestMapping( value = "/api/reader" )
public class BetaReaderController
{

    @Autowired
    private ReaderService service;

    @PostMapping( value = "/" )
    public ResponseEntity< ? > create( @RequestBody ReaderDTO reader ) throws IOException
    {

        return this.service.create( reader );

    }


    @GetMapping( value = "/lat/{lat}/lon/{lon}/distance/{distance}" )
    public ResponseEntity< ? > search( @PathVariable Float lat, @PathVariable Float lon, @PathVariable Integer distance ) throws IOException
    {
        return this.service.search( lat, lon, distance );

    }

}
