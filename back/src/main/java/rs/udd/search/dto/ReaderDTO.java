package rs.udd.search.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReaderDTO
{

    private Float lat;

    private Float lon;

    private String email;

    private String firstName;

    private String lastName;

}
