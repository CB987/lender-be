create table users (
    id serial primary key,
    name varchar(100),
    username varchar(20) ,
    pwhash varchar(100),
    email varchar(100),
    city text,
    state varchar(2)
);

create table categories (
    id serial primary key,
    categoryname text
);

create table items (
    id serial primary key,
    category_id integer references categories (id),
    name text,
    keyword text,
    owner_id integer references users (id) on delete cascade,
    available boolean,
    borrower_id integer references users (id)
);

--create additional table to display itemLocations and when user inputs add item it sends to both tables. additional class for method of displaying to search page.
-- CREATE TABLE booksLocation AS
-- SELECT i.name, i.keyword, i.available, u.city, u.state
-- FROM items i
-- INNER JOIN users u
-- ON i.owner_id = u.id
-- WHERE i.category_id = 1;

