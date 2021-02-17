package rs.udd.search;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@SpringBootApplication
@ComponentScan( "rs.udd.search" )
@EnableElasticsearchRepositories( "rs.udd.search" )
public class SearchApplication
{

	public static void main( String[] args )
	{
		SpringApplication.run( SearchApplication.class, args );

	}

}
