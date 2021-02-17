package rs.udd.search.dto;

import org.springframework.web.multipart.MultipartFile;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BookDTO
{

    private MultipartFile file;

    private String title;

    private String id;

    private String authorFirstName;

    private String authorLastName;

    private String isbn;

    private String genre;

    private Float latitude;

    private Float longitude;

}
