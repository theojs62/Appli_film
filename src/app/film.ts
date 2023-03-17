export interface Film {
  title: string;
  year: number;
  affiche: string;
  entrees:number;
  rating:number;
  director: string;
  actors: string[];

}

export const FILMS: Film[] = [
  {
    title: 'Inception',
    year: 2010,
    affiche:'https://www.ecranlarge.com/uploads/image/001/365/inception-photo-1365579.jpg',
    entrees:100000,
    rating:2.5,
    director: 'Christopher Nolan',
    actors: ['Joseph Gordon-Levitt', 'Leonardo DiCaprio', 'Ellen Page'],
  },
  // Iron Man (2008)
  {
    title: 'Iron Man',
    year: 2008,
    affiche: 'https://fr.web.img3.acsta.net/medias/nmedia/18/62/89/45/18876909.jpg',
    entrees: 585174222,
    rating: 4.5,
    director: 'Jon Favreau',
    actors: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwyneth Paltrow'],
  },

// The Incredible Hulk (2008)
  {
    title: 'The Incredible Hulk',
    year: 2008,
    affiche: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
    entrees: 263427551,
    rating: 3.5,
    director: 'Louis Leterrier',
    actors: ['Edward Norton', 'Liv Tyler', 'Tim Roth', 'William Hurt'],
  },

// Iron Man 2 (2010)
  {
    title: 'Iron Man 2',
    year: 2010,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg',
    entrees: 623933331,
    rating: 4,
    director: 'Jon Favreau',
    actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Don Cheadle', 'Mickey Rourke'],
  },

// Thor (2011)
  {
    title: 'Thor',
    year: 2011,
    affiche: 'https://fr.web.img3.acsta.net/medias/nmedia/18/77/96/35/19701393.jpg',
    entrees: 449326618,
    rating: 4,
    director: 'Kenneth Branagh',
    actors: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins'],
  },

// Captain America: The First Avenger (2011)
  {
    title: 'Captain America: The First Avenger',
    year: 2011,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg',
    entrees: 370569774,
    rating: 3.5,
    director: 'Joe Johnston',
    actors: ['Chris Evans', 'Hayley Atwell', 'Sebastian Stan', 'Tommy Lee Jones'],
  },

// Marvel's The Avengers (2012)
  {
    title: 'Marvel\'s The Avengers',
    year: 2012,
    affiche: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71uTg-eGIjL._AC_SL1000_.jpg',
    entrees: 1518812988,
    rating: 4.5,
    director: 'Joss Whedon',
    actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner'],
  },

// Iron Man 3 (2013)
  {
    title: 'Iron Man 3',
    year: 2013,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg',
    entrees: 1215439994,
    rating: 3.5,
    director: 'Shane Black',
    actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Don Cheadle', 'Ben Kingsley'],
  },
  // Thor: The Dark World (2013)
  {
    title: 'Thor: The Dark World',
    year: 2013,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg',
    entrees: 644783140,
    rating: 3.5,
    director: 'Alan Taylor',
    actors: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins'],
  },

// Captain America: The Winter Soldier (2014)
  {
    title: 'Captain America: The Winter Soldier',
    year: 2014,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Captain_America_The_Winter_Soldier.jpg',
    entrees: 714421503,
    rating: 4,
    director: 'Anthony Russo, Joe Russo',
    actors: ['Chris Evans', 'Scarlett Johansson', 'Sebastian Stan', 'Anthony Mackie'],
  },

// Guardians of the Galaxy (2014)
  {
    title: 'Guardians of the Galaxy',
    year: 2014,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/8/8f/GOTG-poster.jpg',
    entrees: 773328629,
    rating: 4,
    director: 'James Gunn',
    actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper'],
  },

// Avengers: Age of Ultron (2015)
  {
    title: 'Avengers: Age of Ultron',
    year: 2015,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Avengers_Age_of_Ultron.jpg',
    entrees: 1405403694,
    rating: 4,
    director: 'Joss Whedon',
    actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner'],
  },

// Ant-Man (2015)
  {
    title: 'Ant-Man',
    year: 2015,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/7/75/Ant-Man_poster.jpg',
    entrees: 519311965,
    rating: 3.5,
    director: 'Peyton Reed',
    actors: ['Paul Rudd', 'Michael Douglas', 'Evangeline Lilly', 'Corey Stoll'],
  },

// Captain America: Civil War (2016)
  {
    title: 'Captain America: Civil War',
    year: 2016,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg',
    entrees: 1153296293,
    rating: 4,
    director: 'Anthony Russo, Joe Russo',
    actors: ['Chris Evans', 'Robert Downey Jr.', 'Scarlett Johansson', 'Sebastian Stan'],
  },

// Doctor Strange (2016)
  {
    title: 'Doctor Strange',
    year: 2016,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg',
    entrees: 677718395,
    rating: 4,
    director: 'Scott Derrickson',
    actors: ['Benedict Cumberbatch', 'Chiwetel Ejiofor', 'Rachel McAdams', 'Benedict Wong'],
  },
  // Guardians of the Galaxy Vol. 2 (2017)
  {
    title: 'Guardians of the Galaxy Vol. 2',
    year: 2017,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Guardians_of_the_Galaxy_Vol_2_poster.jpg',
    entrees: 863756051,
    rating: 4,
    director: 'James Gunn',
    actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper'],
  },

// Spider-Man: Homecoming (2017)
  {
    title: 'Spider-Man: Homecoming',
    year: 2017,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
    entrees: 880166924,
    rating: 4,
    director: 'Jon Watts',
    actors: ['Tom Holland', 'Michael Keaton', 'Jon Favreau', 'Zendaya'],
  },

// Thor: Ragnarok (2017)
  {
    title: 'Thor: Ragnarok',
    year: 2017,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg',
    entrees: 853977126,
    rating: 4,
    director: 'Taika Waititi',
    actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett', 'Mark Ruffalo'],
  },

// Black Panther (2018)
  {
    title: 'Black Panther',
    year: 2018,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_film_poster.jpg',
    entrees: 1347577744,
    rating: 4.5,
    director: 'Ryan Coogler',
    actors: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyongo', 'Danai Gurira'],
  },

// Avengers: Infinity War (2018)
  {
    title: 'Avengers: Infinity War',
    year: 2018,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
    entrees: 2797800564,
    rating: 4.5,
    director: 'Anthony Russo, Joe Russo',
    actors: ['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo', 'Chris Evans', 'Scarlett Johansson', 'Josh Brolin'],
  },

// Ant-Man and The Wasp (2018)
  {
    title: 'Ant-Man and The Wasp',
    year: 2018,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg',
    entrees: 622674139,
    rating: 3.5,
    director: 'Peyton Reed',
    actors: ['Paul Rudd', 'Evangeline Lilly', 'Michael Peña', 'Walton Goggins'],
  },

// Captain Marvel (2019)
  {
    title: 'Captain Marvel',
    year: 2019,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg',
    entrees: 1128274794,
    rating: 3.5,
    director: 'Anna Boden, Ryan Fleck',
    actors: ['Brie Larson', 'Samuel L. Jackson', 'Ben Mend'],
  },
// Avengers: Endgame (2019)
  {
    title: 'Avengers: Endgame',
    year: 2019,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
    entrees: 2797800564,
    rating: 4.5,
    director: 'Anthony Russo, Joe Russo',
    actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner'],
  },

// Spider-Man: Far From Home (2019)
  {
    title: 'Spider-Man: Far From Home',
    year: 2019,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
    entrees: 1131927996,
    rating: 4,
    director: 'Jon Watts',
    actors: ['Tom Holland', 'Zendaya', 'Jake Gyllenhaal', 'Samuel L. Jackson'],
  },

// Black Widow (2021)
  {
    title: 'Black Widow',
    year: 2021,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Black_Widow_%282021_film%29_poster.jpg',
    entrees: 378356233,
    rating: 3.5,
    director: 'Cate Shortland',
    actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour', 'Rachel Weisz'],
  },

// Shang-Chi and the Legend of the Ten Rings (2021)
  {
    title: 'Shang-Chi and the Legend of the Ten Rings',
    year: 2021,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Shang-Chi_poster.jpg',
    entrees: 431546811,
    rating: 4,
    director: 'Destin Daniel Cretton',
    actors: ['Simu Liu', 'Awkwafina', 'Tony Leung', 'Menger Zhang'],
  },

// Eternals (2021)
  {
    title: 'Eternals',
    year: 2021,
    affiche: 'https://upload.wikimedia.org/wikipedia/en/9/98/Eternals_poster.jpeg',
    entrees: 400718655,
    rating: 3.5,
    director: 'Chloé Zhao',
    actors: ['Gemma Chan', 'Richard Madden', 'Angelina Jolie', 'Salma Hayek'],
  },

// Spider-Man: No Way Home (2021)
  {
    title: 'Spider-Man: No Way Home',
    year: 2021,
    affiche: 'https://pbs.twimg.com/media/FEXvq9-XsAIyCU1.jpg:large',
    entrees: 1390000000,
    rating: 4.5,
    director: 'Jon Watts',
    actors: ['Tom Holland', 'Zendaya', 'Tobey Maguire', 'Andrew Garfield'],
  },
];
