create table users (
    id serial primary key,
    name text,
    preferred contact method text,
    phone integer,
    email email,
    zipcode varchar(5),
    location map plot(?),
)

-- create table user-connections (
--     id serial primary key,

-- )

create table lending-item-categories (
    id serial primary key,
    category-name text,

)

create table category-books (
    id serial primary key,
    title text,
    author text,
    user_id integer references user (id) on delete cascade
)

create table category-power-tools (
    id serial primary key,
    power-tool-name text,
    power-tool-brand text,
    user_id integer references user (id) on delete cascade
)

create table category-hand-tools (
    id serial primary key,
    hand-tool-name text,
    user_id integer references user (id) on delete cascade
)