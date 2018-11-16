update items set owner = 30 where id = 21;
--Register (users-create)
insert into users

--Login (users-retrieve)

--My Account:
--show borrowed items (items- retrieve)
select * from items where borrower = this.id;
--show all my items (items- retrieve)
select * from items where owner = this.id;
--lend an item (items- update)
update items set available = false, borrower = 7 where id = 5;
--add items (items- create)
insert into items (category, name, keywords, owner, available)
values (1, 'Altered Carbon', 'Richard Morgan Takeshi Kovacs Netflix 2002 sci-fi fiction', 1, true);
--delete items (items-delete)
select * from items where owner = 1 and name ilike '%carbon%';
    --get items.id (items- retrieve)
	delete from items where id = 31;
--update account info (users-update)
update users set name = 'whatever' where id = 1;
--delete account (users- delete)

--Searches:
--get category items (items- retrieve)
select i.name, i.keywords, i.available, u.city, u.state
	from items i
	inner join users u
	on i.owner = u.id
	where category = 1;
    --then filter (items- retrieve)
	select i.name, i.keywords, i.available, u.city, u.state 
		from items i 
		inner join users u
		on i.owner = u.id
		where (i.category = 1 and i.name ilike '%20%' or i.keywords ilike '%20%');