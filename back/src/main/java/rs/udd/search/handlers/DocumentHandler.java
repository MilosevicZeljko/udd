package rs.udd.search.handlers;

import java.io.File;


import rs.udd.search.models.Book;

public abstract class DocumentHandler
{

    public abstract Book getIndexUnit( File file );

    public abstract String getText( File file );

}
