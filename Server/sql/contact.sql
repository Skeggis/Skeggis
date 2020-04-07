create table contactus(
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    subject text not null,
    insertDate TIMESTAMPTZ default current_timestamp
);