package rs.udd.search.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


import com.google.gson.Gson;


import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import rs.udd.search.dto.BookDTO;
import rs.udd.search.handlers.DocumentHandler;
import rs.udd.search.handlers.PDFHandler;
import rs.udd.search.handlers.TextDocHandler;
import rs.udd.search.handlers.Word2007Handler;
import rs.udd.search.handlers.WordHandler;
import rs.udd.search.models.Book;

@Service
public class BookService
{

    final private static String[] FETCH_FIELDS =
    { "id", "filename", "textContent", "authorFirstName", "isbn", "authorLastName", "title", "genre" };

    @Autowired
    RestHighLevelClient restHighLevelClient;

    /**
     * @param book
     * @return IndexResponse
     * @throws IOException
     */
    public ResponseEntity< ? > create( BookDTO book ) throws IOException
    {
        DocumentHandler handler = getHandler( book.getFile().getOriginalFilename() );

        Book newBook = new Book();

        newBook.setAuthorFirstName( book.getAuthorFirstName() );
        newBook.setAuthorLastName( book.getAuthorLastName() );
        newBook.setGenre( book.getGenre() );
        newBook.setId( book.getFile().getOriginalFilename() );
        newBook.setIsbn( book.getIsbn() );
        newBook.setTitle( book.getTitle() );

        File convertedFile = convert( book.getFile() );
        newBook.setTextContent( handler.getText( convertedFile ) );

        IndexRequest indexRequest = new IndexRequest( Book.INDEX );
        indexRequest.id( book.getId() );

        String json = new Gson().toJson( newBook );

        indexRequest.source( json, XContentType.JSON );

        IndexResponse index = restHighLevelClient.index( indexRequest, RequestOptions.DEFAULT );

        return new ResponseEntity< IndexResponse >( index, HttpStatus.CREATED );

    }


    public ResponseEntity< ? > retrieveAll() throws IOException
    {

        SearchRequest searchRequest = new SearchRequest();

        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        boolQueryBuilder.must( QueryBuilders.matchAllQuery() );

        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query( boolQueryBuilder ).fetchSource( FETCH_FIELDS, null );

        searchRequest.indices( Book.INDEX );
        searchRequest.source( searchSourceBuilder );

        SearchResponse searchResponse = restHighLevelClient.search( searchRequest, RequestOptions.DEFAULT );

        return new ResponseEntity<>( searchResponse.getHits(), HttpStatus.OK );

    }


    private DocumentHandler getHandler( String fileName )
    {
        if ( fileName.endsWith( ".txt" ) )
        {
            return new TextDocHandler();
        }
        if ( fileName.endsWith( ".pdf" ) )
        {
            return new PDFHandler();
        }
        if ( fileName.endsWith( ".doc" ) )
        {
            return new WordHandler();
        }
        if ( fileName.endsWith( ".docx" ) )
        {
            return new Word2007Handler();
        }
        return null;

    }


    private File convert( MultipartFile file ) throws IOException
    {

        File convertedFile = new File( "pdf" + File.separator + file.getOriginalFilename() );
        convertedFile.createNewFile();
        FileOutputStream fos = new FileOutputStream( convertedFile );
        fos.write( file.getBytes() );
        fos.close();
        return convertedFile;

    }

}
