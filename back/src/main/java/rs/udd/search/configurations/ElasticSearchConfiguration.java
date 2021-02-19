package rs.udd.search.configurations;

import java.io.IOException;


import javax.annotation.PostConstruct;


import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.client.indices.CreateIndexRequest;
import org.elasticsearch.client.indices.CreateIndexResponse;
import org.elasticsearch.client.indices.GetIndexRequest;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;


import rs.udd.search.models.BetaReader;
import rs.udd.search.models.Book;

@Configuration
public class ElasticSearchConfiguration extends AbstractElasticsearchConfiguration
{

    @Override
    @Bean
    public RestHighLevelClient elasticsearchClient()
    {
        ClientConfiguration clientConfiguration = ClientConfiguration.builder().connectedTo( "localhost:9200" ).build();
        RestHighLevelClient restHighLevelClient = RestClients.create( clientConfiguration ).rest();

        return restHighLevelClient;

    }


    @PostConstruct
    public void initializeIndexes() throws IOException
    {
        RestHighLevelClient elasticsearchClient = elasticsearchClient();

        // GetIndexRequest getIndexRequest = new GetIndexRequest(Book.INDEX);

        GetIndexRequest getIndexRequestBook = new GetIndexRequest( Book.INDEX );
        GetIndexRequest getIndexRequestBeta = new GetIndexRequest( BetaReader.INDEX );

        if ( !elasticsearchClient.indices().exists( getIndexRequestBook, RequestOptions.DEFAULT ) )
        {
            CreateIndexRequest createIndexRequest = new CreateIndexRequest( Book.INDEX );

            createIndexRequest.settings( Settings.builder()

                    .put( "index.number_of_shards", 1 )

                    .put( "index.number_of_replicas", 0 )

            );

            XContentBuilder xContentBuilder = XContentFactory.jsonBuilder();

            xContentBuilder.startObject();
            {
                xContentBuilder.startObject( "properties" );
                {
                    xContentBuilder.startObject( "id" );
                    {
                        xContentBuilder.field( "type", "keyword" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "isbn" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "authorFirstName" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "authorLastName" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "title" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "genre" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "textContent" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "url" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "point" );
                    {
                        xContentBuilder.field( "type", "geo_point" );
                        xContentBuilder.field( "store", "true" );
                    }
                    xContentBuilder.endObject();
                }
                xContentBuilder.endObject();

            }
            xContentBuilder.endObject();

            createIndexRequest.mapping( xContentBuilder );

            CreateIndexResponse create = elasticsearchClient.indices().create( createIndexRequest, RequestOptions.DEFAULT );

            System.err.println( create );

        }

        if ( !elasticsearchClient.indices().exists( getIndexRequestBeta, RequestOptions.DEFAULT ) )
        {
            CreateIndexRequest createIndexRequest = new CreateIndexRequest( BetaReader.INDEX );

            createIndexRequest.settings( Settings.builder()

                    .put( "index.number_of_shards", 1 )

                    .put( "index.number_of_replicas", 0 )

            );

            XContentBuilder xContentBuilder = XContentFactory.jsonBuilder();

            xContentBuilder.startObject();
            {
                xContentBuilder.startObject( "properties" );
                {
                    xContentBuilder.startObject( "id" );
                    {
                        xContentBuilder.field( "type", "keyword" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "point" );
                    {
                        xContentBuilder.field( "type", "geo_point" );
                        xContentBuilder.field( "store", "true" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "email" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "firstName" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------
                    xContentBuilder.startObject( "lastName" );
                    {
                        xContentBuilder.field( "type", "text" );
                        xContentBuilder.field( "store", "true" );
                        xContentBuilder.field( "analyzer", "serbian" );
                    }
                    xContentBuilder.endObject();
                    // ! --------------------------------------

                }
                xContentBuilder.endObject();

            }
            xContentBuilder.endObject();

            createIndexRequest.mapping( xContentBuilder );

            CreateIndexResponse create = elasticsearchClient.indices().create( createIndexRequest, RequestOptions.DEFAULT );

            System.err.println( create );

        }

    }

}
