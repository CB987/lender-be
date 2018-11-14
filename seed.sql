
insert into categories
    (categoryName)
values
    ('books'),
    ('movies'),
    ('power tools'),
    ('hand tools'),
    ('yard tools'),
    ('kitchen electric appliances'),
    ('kitchen gadgets, non-electric'),
    ('booze')
    ('craft items'),
    ('halloween costumes'),
    ('decorations/ holiday items'),

    insert into users
        (name, username, email, city, state)
    values
        ('Clare', 'cb23', 'clare@email.com', 'Mableton','GA'),
        ('Amelia', 'as12', 'amelia@email.com', 'Decatur','GA'),
        ('Steven', 'sk34', 'steven@email.com', 'Johns Creek','GA'),
        ('Alex', 'ar45', 'alex@email.com', 'Alanta','GA'),
        ('Anokhee', 'aj56', 'anokhee@email.com', 'Sandy Springs', 'GA'),
        ('April', 'ac67', 'april@email.com', 'Roswell', 'GA'),
        ('Aylin', 'ad78', 'aylin@email.com', 'Alpharetta', 'GA'),
        ('Beth', 'bd89', 'beth@email.com', 'Marietta', 'GA'),
        ('Evan', 'ep90', 'evan@email.com', 'Stonecrest', 'GA'),
        ('Greg', 'gf01', 'greg@email.com', 'Smyrna', 'GA'),
        ('Helen', 'hh09', 'helen@email.com', 'Dunwoody', 'GA'),
        ('Ian', 'ih98', 'ian@email.com', 'Brookhaven', 'GA'),
        ('Isaac', 'is87', 'isaac@email.com', 'Peachtree City', 'GA'),
        ('Jake', 'jh76', 'jake@email.com', 'Peachtree Corners', 'GA'),
        ('Liz', 'lc65', 'liz@email.com', 'Gainesville', 'GA'),
        ('Stan', 'sc54', 'stan@email.com', 'East Point', 'GA'),
        ('Brien', 'bm43', 'brien@email.com', 'Newnan', 'GA'),
        ('Carlos', 'cr32', 'carlos@email.com', 'Douglasville', 'GA'),
        ('ChrisA', 'cookiepants', 'chrisa@email.com', 'Chamblee', 'GA'),
        ('Collin', 'ca21', 'collin@email.com', 'Kennesaw', 'GA'),
        ('Ed', 'ew10', 'ed@email.com', 'Chamblee', 'GA'),
        ('Kyle', 'ks01', 'kyle@email.com', 'Lawrenceville', 'GA'),
        ('Lorenzo', 'ls12', 'lorenzo@email.com', 'Tucker', 'GA'),
        ('Max', 'mm23', 'max@email.com', 'Duluth', 'GA'),
        ('Michael', 'mb34', 'michael@email.com', 'Stone Mountain', 'GA'),
        ('Quinton', 'qm45', 'quinton@email.com', 'Stockbridge', 'GA'),
        ('Sam', 'se56', 'sam@email.com', 'Woodstock', 'GA'),
        ('Will', 'wh67', 'will@email.com', 'Canton', 'GA'),
        ('ChrisF', 'cf78', 'chrisf@email.com', 'Snellville', 'GA'),
        ('Melon', 'mh89', 'melon@email.com', 'Austell', 'GA');

insert into items
    (category_id, name, keyword, available)
values
    (1, 'The Rosie Effect', 'Graeme Simsion 2014 fiction comedy romance romcom', true),
    (1, 'Committed', 'Elizabeth Gilbert 2010 memoir marriage', true),
    (1, 'The Checklist Manifesto', 'Atul Gawande 2010 memoir self-help surgeon', true),
    (1, 'The Language of Baklava', 'Diana Abu-Jaber 2005 memoir Jordan Arab-American', true),
    (1, 'Plowing the Dark', 'Richard Powers 2002 sci-fi virtual reality fiction', true),
    (1, 'The Bastard of Istanbul', 'Elif Shafak 2007 fiction family Turkey women', true),
    (1, 'You Better Not Cry', 'Augusten Burroughs Christmas 2009 stories memoir', true),
    (1, 'The Case of the Missing Books', 'Ian Sansom 2006 fiction mobile library mystery Ireland', true),
    (1, 'Irrepressible Reformer:A Biography of Melvil Dewey', 'Wayne Wiegand 1996 biography non-fiction Melville', true),
    (1, 'Born on a Blue Day', 'Daniel Tammet 2007 memoir autistic autism savant', true),
    (1, 'The Devil Wears Prada', 'Lauren Weisberger 2006 fiction fashion', true),
    (1, 'The Final Frontiersman', 'James Campbell Heimo Korth Alaska Arctic Wilderness 2005 memoir', true),
    (1, 'Walking the Gobi', 'Helen Thayer 2007 memoir desert nomad', true),
    (1, 'Dearest Friend: A Life of Abigail Adams', 'Lynne Withey American History 2002 President biography', true),
    (1, 'The Confessions of Nat Turner', 'William Styron 1992 fiction American History race slavery', true),
    (1, 'The Passage', 'Justin Cronin 2010 vampire apocalyptic fiction', true),
    (1, 'The Professor and the Madman', 'Simon Winchester 2004 Oxford English Dictionary history', true),
    (1, 'Wool', 'Hugh Howey 2012 fiction apocalyptic sci-fi', true),
    (1, 'To Kill a Mockingbird', 'Harper Lee 1960 fiction american history racism law southern', true),
    (1, 'A Smarter Way to Learn Python', 'Mark Myers 2016 programming coding computer language', true),
    (1, 'Two Wheels & a Taxi', 'Virginai Urrutia 1987 memoir Andes Ecuador bicycle travel', true),
    (1, 'Rosiebelle Lee Wildcat Tennessee', 'Raymond Andrews Benny 1988 american southern fiction', true),
    (1, 'Goldie Vance', 'Hope Larson Brittney Williams Sarah Stern 2016 graphic novel', true),
    (1, 'Black Widow: Homecoming', 'Richard Morgan Bill Sienkiewicz 2005 graphic novel natasha romanov', true),
    (1, 'Leaving Mother Lake', 'Yang Erche Namu Christine Mathieu 2004 China memoir', true),
    (1, 'Lockdown', 'Laurie King 2017 mystery california school shooting', true),
    (1, 'Nightingale Wood', 'Stella Gibbons fiction english 1920s flapper', true),
    (1, 'My Own Miraculous', 'Joshilyn Jackson 2013 southern georgia fiction family', true),
    (1, 'Genius: The Game', 'Leopoldo Gout 2016 YA sci-fi fiction adventure', true),
    (1, 'The Arrivals', 'Melissa Marr 2013 sci-fi alternate fiction western', true);

