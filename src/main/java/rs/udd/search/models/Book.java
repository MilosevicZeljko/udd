package rs.udd.search.models;

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

    private String title;

    private String genre;

    private String textContent;

}
