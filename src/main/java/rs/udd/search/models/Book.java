package rs.udd.search.models;

import org.springframework.data.elasticsearch.core.geo.GeoPoint;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Book
{

    public static final String INDEX = "book";

    private String id;

    private String isbn;

    private String authorFirstName;

    private String authorLastName;

    private GeoPoint point;

    private String title;

    private String genre;

    private String textContent;

    private String url = "localhost:8080/api/book/";

}
