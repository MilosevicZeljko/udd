package rs.udd.search.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SearchField
{

    private String field;

    private String value;

    private Boolean phraseQuery;

    private LogicalOperation logic;

}
