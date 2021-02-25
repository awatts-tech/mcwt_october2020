1. Create a table
```
    CREATE TABLE table_name (
        id SERIAL PRIMARY KEY,
        column_name COLUMN_TYPE
    );

```
2. Add record to a table
```
    INSERT INTO table_name (
        column1,
        column2
    ) VALUES (
        'BJ',
        'Clark'
    )l
```

3. Update an attribute
```
    UPDATE table_name SET column=123, column='abc' WHERE ... 
```
4. Remove a record
```
    DELETE FROM table_name WHERE -- don't forget the WHERE
```
5. Get a record based on criteria
```
    SELECT * FROM table_name WHERE
```

6. Using LIKE
```
    SELECT * FROM table_name WHERE 'C%' -- Starts with C
    SELECT * FROM table_name WHERE '%C' -- End with C
    SELECT * FROM table_name WHERE '%C%' -- Contains with C
```

7. Combine different criteria using AND or OR
```
    SELECT * FROM table_name WHERE first_name = 'BJ' OR first_name = 'Blair';
```

8. Creating a foreign key
```
    CREATE TABLE Comments( 
        id INT,
        comment VARCHAR(255)
    )

    CREATE TABLE CommentMeta (
        id SERIAL PRIMARY KEY,
        column_name COLUMN_TYPE,
        comment_id INT, 
        FOREIGN KEY (comment_id) REFERENCES Comments(id)
    );
```

9. Using JOINs
```
    SELECT * FROM Comments JOIN CommentMeta ON Comments.id = CommentMeta.comment_id WHERE ...
```
