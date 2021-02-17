package rs.udd.search.controllers;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import rs.udd.search.dto.BookDTO;
import rs.udd.search.services.BookService;

@RestController
@RequestMapping( value = "/api/book" )
public class BookController
{

    @Autowired
    BookService service;

    @PostMapping( "/" )
    public ResponseEntity< ? > create( BookDTO book ) throws IOException
    {
        return this.service.create( book );

    }


    @GetMapping( "/" )
    public ResponseEntity< ? > retrieve() throws IOException
    {
        return this.service.retrieveAll();

    }

}
