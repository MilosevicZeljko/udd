package rs.udd.search.services;

import java.io.IOException;


import com.google.gson.Gson;


import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.geo.GeoPoint;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import rs.udd.search.dto.ReaderDTO;
import rs.udd.search.models.BetaReader;

@Service
public class ReaderService
{

    @Autowired
    RestHighLevelClient restHighLevelClient;

    public ResponseEntity< ? > create( ReaderDTO reader ) throws IOException
    {
        BetaReader betaReader = new BetaReader();

        betaReader.setEmail( reader.getEmail() );
        betaReader.setFirstName( reader.getFirstName() );
        betaReader.setLastName( reader.getLastName() );
        betaReader.setId( "" + BetaReader.idInt );
        BetaReader.idInt = BetaReader.idInt + 1;
        GeoPoint geoPoint = new GeoPoint( reader.getLat(), reader.getLon() );
        betaReader.setPoint( geoPoint );

        IndexRequest indexRequest = new IndexRequest( BetaReader.INDEX );
        indexRequest.id( betaReader.getId() );
        indexRequest.source( new Gson().toJson( betaReader ), XContentType.JSON );

        IndexResponse index = restHighLevelClient.index( indexRequest, RequestOptions.DEFAULT );

        return new ResponseEntity<>( index, HttpStatus.CREATED );

    }


    public ResponseEntity< ? > search( Float lat, Float lon, Integer distance ) throws IOException
    {
        SearchRequest searchRequest = new SearchRequest();

        // BoolQueryBuilder filter = QueryBuilders.boolQuery().must( QueryBuilders.matchAllQuery() )
        //         .filter( QueryBuilders.geoDistanceQuery( "point" ).point( lat, lon ).distance( distance + "km" ) );


                // geo query for searching in area of specified radius
        QueryBuilder queryBuilder = QueryBuilders
        .boolQuery()
        .must(QueryBuilders.matchAllQuery())
        .mustNot(
            QueryBuilders
                .geoDistanceQuery("point")
                .point(lat, lon)
                .distance(distance + "km")
        );



        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query( queryBuilder );

        searchRequest.indices( BetaReader.INDEX );
        searchRequest.source( searchSourceBuilder );

        SearchResponse search = restHighLevelClient.search( searchRequest, RequestOptions.DEFAULT );

        return new ResponseEntity<>( search, HttpStatus.OK );

    }

}
