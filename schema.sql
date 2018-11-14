create table users (
    id serial primary key,
    name varchar(100),
    username varchar(20),
    email varchar(100),
    city text,
    state varchar(2)
);

create table categories (
    id serial primary key,
    categoryName text
);

create table items (
    id serial primary key,
    category_id integer references categories (id),
    name text,
    keyword text,
    owner integer references users (id),
    available boolean,
    borrower integer references users (id)
);