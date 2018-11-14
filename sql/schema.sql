create table users (
    id serial primary key,
    name text,
    username text,
    email email,
    location text,
)

create table lending-item-categories (
    id serial primary key,
    category-name text,
)

create table items (
    id serial primary key,
    name text,
    keyword text,
    owner integer references users (id),
    available boolean
    borrower integer references users (id),
)