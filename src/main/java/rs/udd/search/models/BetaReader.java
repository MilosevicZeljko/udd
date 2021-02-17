package rs.udd.search.models;

import org.springframework.data.elasticsearch.core.geo.GeoPoint;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BetaReader
{

    public static final String INDEX = "beta";

    public static Integer idInt = 1;

    private String id;

    private GeoPoint point;

    private String email;

    private String firstName;

    private String lastName;

}
