// homeData cover
import movieAdventure1 from './assets/movie-adventure.jpeg';
import movieRomance1 from './assets/movie-romance1.jpeg';
import movieComedy1 from './assets/movie-comedy1.jpeg';
import movieFamily1 from './assets/movie-family1.jpeg';
import movieRomance2 from './assets/movie-love1.jpeg';
import movieThriller1 from './assets/movie-thriller1.jpeg';
import movieAction1 from './assets/movie-action-1.jpeg';
import movieAnimation1 from './assets/movie-animation1.jpeg';
import movieAction2 from './assets/movie-action2.jpeg';
import movieFamily2 from './assets/movie-family2.jpeg';
import movieAdventure2 from './assets/movie-adventure2.jpeg';
import movieAction3 from './assets/movie-action3.jpeg';

//homeData video 
import video1 from './assets/videos/video1.mp4';
import video2 from './assets/videos/video2.mp4';
import video3 from './assets/videos/video3.mp4';
import video4 from './assets/videos/video4.mp4';
import video5 from './assets/videos/video5.mp4';
import video6 from './assets/videos/video6.mp4';
import video7 from './assets/videos/video7.mp4';
import video8 from './assets/videos/video8.mp4';
import video9 from './assets/videos/video9.mp4';
import video10 from './assets/videos/video10.mp4';
import video11 from './assets/videos/video11.mp4';
import video12 from './assets/videos/video12.mp4';

// popularData cover
import movie1 from './assets/popular-movies/movie1.jpeg';
import movie2 from './assets/popular-movies/movie2.jpeg';
import movie3 from './assets/popular-movies/movie3.jpeg';
import movie4 from './assets/popular-movies/movie4.jpeg';
import movie5 from './assets/popular-movies/movie5.jpeg';
import movie6 from './assets/popular-movies/movie6.jpeg';
import movie7 from './assets/popular-movies/movie7.jpeg';
import movie8 from './assets/popular-movies/movie8.jpeg';
import movie9 from './assets/popular-movies/movie9.jpeg';
import movie10 from './assets/popular-movies/movie10.jpeg';

// latestData cover 
import movie11 from './assets/latest-movie/movie1.jpeg';
import movie12 from './assets/latest-movie/movie2.jpeg';
import movie13 from './assets/latest-movie/movie3.jpeg';
import movie14 from './assets/latest-movie/movie4.jpeg';
import movie15 from './assets/latest-movie/movie5.jpeg';
import movie16 from './assets/latest-movie/movie6.jpeg';
import movie17 from './assets/latest-movie/movie7.jpeg';
import movie18 from './assets/latest-movie/movie8.jpeg';
import movie19 from './assets/latest-movie/movie9.jpeg';
import movie20 from './assets/latest-movie/movie10.jpeg';

// watchData cover 
import movie21 from './assets/watch-movie/movie1.jpeg';
import movie22 from './assets/watch-movie/movie2.jpeg';
import movie23 from './assets/watch-movie/movie3.jpeg';
import movie24 from './assets/watch-movie/movie4.jpeg';
import movie25 from './assets/watch-movie/movie5.jpeg';
import movie26 from './assets/watch-movie/movie6.jpeg';
import movie27 from './assets/watch-movie/movie7.jpeg';
import movie28 from './assets/watch-movie/movie8.jpeg';
import movie29 from './assets/watch-movie/movie9.jpeg';
import movie30 from './assets/watch-movie/movie10.jpeg';

// recommendedData cover 
import movie31 from './assets/recommended-movie/movie1.jpeg';
import movie32 from './assets/recommended-movie/movie2.jpeg';
import movie33 from './assets/recommended-movie/movie3.jpeg';
import movie34 from './assets/recommended-movie/movie4.jpeg';
import movie35 from './assets/recommended-movie/movie5.jpeg';
import movie36 from './assets/recommended-movie/movie6.jpeg';
import movie37 from './assets/recommended-movie/movie7.jpeg';
import movie38 from './assets/recommended-movie/movie8.jpeg';
import movie39 from './assets/recommended-movie/movie9.jpeg';
import movie40 from './assets/recommended-movie/movie10.jpeg';




export const homeData = [
    {
        id: 1,
        name: 'Avatar',
        rating: 4.1,
        time: '3hr : 12mins',
        desc: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started...',
        stars: 'James Cameron, Rick Jaffa, Amanda Silver',
        genres: 'Action',
        tags: 'Action, Sci-Fi, Fantasy',
        cover: movieAdventure1,
        videoId: video1,
        date: '22-December-2022',
    },
    {
        id: 2,
        name: 'After',
        rating: 5.3,
        time: '1hr : 46mins',
        desc: "Based on Anna Todd's novel, AFTER follows Tessa (Langford), a dedicated student, dutiful daughter, and loyal girlfriend to her high-school sweetheart... ",
        stars: 'Josephine Langford, Hero Fiennes Tiffin, Selma Blair',
        genres: 'Drama',
        tags: 'Drama, Romance',
        cover: movieRomance1,
        videoId: video2,
        date: '12-May-2023',
    },

    {
        id: 3,
        name: 'No hard fellings',
        rating: 6.4,
        time: '1hr : 43mins',
        desc: 'On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking...',
        stars: 'Jennifer Lawrence, Andrew Barth, Natalie Morales',
        genres: 'Action',
        tags: 'Comedy, Romance',
        cover: movieComedy1,
        videoId: video3,
        date: '23-June-2023',
    },

    {
        id: 4,
        name: 'The Little Mermaid',
        rating: 7.2,
        time: '2hr : 15mins',
        desc: "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure.",
        stars: 'Halle Bailey, Javier Bardem, Jonah Hauer-King',
        genres: 'Fantasy',
        tags: 'Adventures, Family, Fantasy, Musical',
        cover: movieFamily1,
        videoId: video4,
        date: '26-May-2023',
    },

    {
        id: 5,
        name: 'Love at First Sight',
        rating: 6.9,
        time: '1hr : 31mins',
        desc: "Today should be one of the worst days of twenty-year-old Hadley Sullivan's life.",
        stars: 'Ben Hardy, Haley Lu Richardson, Jameela Jamil',
        genres: 'Drama',
        tags: 'Drama, Romance',
        cover: movieRomance2,
        videoId: video5,
        date: '15-September-2023',
    },

    {
        id: 6,
        name: 'Skyscraper',
        rating: 5.8,
        time: '1hr : 42mins',
        desc: "FBI Hostage Rescue Team leader and U.S. war veteran Will Sawyer now assesses security for skyscrapers. On assignment in Hong Kong he finds the tallest, safest building in the world suddenly ablaze and he's been framed for it.",
        stars: 'Dwayne Johnson, Neve Campbell, Pablo Schreiber',
        genres: 'Action',
        tags: 'Action, Thriller',
        cover: movieThriller1,
        videoId: video6,
        date: '12-May-2023',
    },

    {
        id: 7,
        name: 'Hypnotic',
        rating: 5.5,
        time: '1hr : 33mins',
        desc: 'Determined to find his missing daughter, Detective Danny Rourke finds himself...',
        stars: 'Ben Affleck, Alice Braga, Jeff Fahey',
        genres: 'Action',
        tags: 'Action, Adventures, Family',
        cover: movieAction1,
        videoId: video7,
        date: '12-May-2023',
    },

    {
        id: 8,
        name: 'Wish Dragon',
        rating: 7.2,
        time: '1hr : 38mins',
        desc: 'Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.',
        stars: 'Jimmy Wong, John, Jackie Chan',
        genres: 'Animation',
        tags: 'Animation, Adventure, Comedy',
        cover: movieAnimation1,
        videoId: video8,
        date: '15-January-2021',
    },

    {
        id: 9,
        name: 'Venon',
        rating: 6.6,
        time: '1hr : 52mins',
        desc: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.',
        stars: 'Tom Hardy, Michelle Williams, Riz Ahmed',
        genres: 'Action',
        tags: 'Action, Sci-Fi, Adventure',
        cover: movieAction2,
        videoId: video9,
        date: '03-October-2018',
    },

    {
        id: 10,
        name: 'Top Gun: Maverick',
        rating: 8.3,
        time: '2hr : 11mins',
        desc: "After thirty years, Maverick is still pushing the envelope as...",
        stars: 'Tom Cruise, Jennifer Connelly, Miles Teller',
        genres: 'Action',
        tags: 'Action, Adventure, Drama',
        cover: movieFamily2,
        videoId: video10,
        date: '27-May-2022',
    },

    {
        id: 11,
        name: 'Indiana Jones and the Dial of Destiny',
        rating: 6.7,
        time: '2hr : 22mins',
        desc: 'Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.',
        stars: 'Harrison Ford, Phoebe Waller-Bridge, Antonio Banderas',
        genres: 'Adventure',
        tags: 'Action, Adventure, Sci-Fi',
        cover: movieAdventure2,
        videoId: video11,
        date: '28-June-2023',
    },

    {
        id: 12,
        name: 'The Mother',
        rating: 5.6,
        time: '1hr : 58mins',
        desc: 'While fleeing from dangerous assailants, an assassin comes out of hiding to protect the daughter she left earlier in life.',
        stars: 'Jennifer Lopez, Lucy Paex, Omari Hardwick',
        genres: 'Action',
        tags: 'Action, Adventure, Thriller',
        cover: movieAction3,
        videoId: video12,
        date: '12-May-2023',
    },
];

export const popularData = [
    {
        id: 1,
        cover: movie1,
        name: 'Avatar',
        time: '3hr : 10mins',
    },

    {
        id: 2,
        cover: movie2,
        name: 'The Equalizer III',
        time: '2hr : 12mins',
    },

    {
        id: 3,
        cover: movie3,
        name: 'About Time',
        time: '2hr : 04mins',
    },

    {
        id: 4,
        cover: movie4,
        name: 'Every Day',
        time: '1hr : 37mins',
    },

    {
        id: 5,
        cover: movie5,
        name: 'Holidate',
        time: '1hr : 47mins',
    },

    {
        id: 6,
        cover: movie6,
        name: '6 Underground',
        time: '2hr : 8mins',
    },

    {
        id: 7,
        cover: movie7,
        name: 'John Wick 2',
        time: '2hr : 2mins',
    },

    {
        id: 8,
        cover: movie8,
        name: 'In Time',
        time: '1hr : 43mins',
    },

    {
        id: 9,
        cover: movie9,
        name: 'Onward',
        time: '1hr : 49mins',
    },

    {
        id: 10,
        cover: movie10,
        name: 'Tangled',
        time: '1hr : 33mins',
    },
];


export const latestData = [
    {
        id: 1,
        cover: movie11,
        name: 'Heart of stone',
        time: '2hr : 02mins',
    },

    {
        id: 2,
        cover: movie12,
        name: 'The Covenant',
        time: '2hr : 03mins',
    },

    {
        id: 3,
        cover: movie13,
        name: 'The black demon',
        time: '1hr : 40mins',
    },

    {
        id: 4,
        cover: movie14,
        name: 'The Grinch',
        time: '1hr : 30mins',
    },

    {
        id: 5,
        cover: movie15,
        name: 'A good person',
        time: '2hr : 25mins',
    },

    {
        id: 6,
        cover: movie16,
        name: 'Barbie',
        time: '1hr : 54mins',
    },

    {
        id: 7,
        cover: movie17,
        name: 'Vivo',
        time: '1hr : 43mins',
    },

    {
        id: 8,
        cover: movie18,
        name: 'Purple Heart',
        time: '2hr : 02mins',
    },

    {
        id: 9,
        cover: movie19,
        name: 'Pride and Prejudice',
        time: '2hr : 07mins',
    },

    {
        id: 10,
        cover: movie20,
        name: 'Kandahar',
        time: '2hr : 00mins',
    },
];

export const watchtData = [
    {
        id: 1,
        cover: movie21,
        name: 'Spiderhead',
        time: '1hr : 46mins',
    },

    {
        id: 2,
        cover: movie22,
        name: 'American Sniper',
        time: '2hr : 13mins',
    },

    {
        id: 3,
        cover: movie23,
        name: 'The Dawn Wall',
        time: '1hr : 40mins',
    },

    {
        id: 4,
        cover: movie24,
        name: 'Transformers: Rise of the Beasts',
        time: '2hr : 07mins',
    },

    {
        id: 5,
        cover: movie25,
        name: 'Last Man Down',
        time: '1hr : 27mins',
    },

    {
        id: 6,
        cover: movie26,
        name: 'The Boss Baby',
        time: '1hr : 37mins',
    },

    {
        id: 7,
        cover: movie27,
        name: 'The Man from Toronto',
        time: '1hr : 50mins',
    },

    {
        id: 8,
        cover: movie28,
        name: 'Clifford the Big Red Dog',
        time: '1hr : 36mins',
    },

    {
        id: 9,
        cover: movie29,
        name: 'Elemental',
        time: '1hr : 41mins',
    },

    {
        id: 10,
        cover: movie30,
        name: 'Killers Of The Flower Moon',
        time: '3hr : 26mins',
    },
];



export const recommendedData = [
    {
        id: 1,
        cover: movie31,
        name: 'Top Gun: Maverick',
        time: '2hr : 11mins',
    },

    {
        id: 2,
        cover: movie32,
        name: 'Wish Dragon',
        time: '1hr : 38mins',
    },

    {
        id: 3,
        cover: movie33,
        name: 'The gentleman driver',
        time: '1hr : 23mins',
    },

    {
        id: 4,
        cover: movie34,
        name: 'See you soon',
        time: '1hr : 47mins',
    },

    {
        id: 5,
        cover: movie35,
        name: 'A million miles away',
        time: '2hr : 01mins',
    },

    {
        id: 6,
        cover: movie36,
        name: 'Greyhound',
        time: '1hr : 31mins',
    },

    {
        id: 7,
        cover: movie37,
        name: 'Happiness for beginners',
        time: '1hr : 43mins',
    },

    {
        id: 8,
        cover: movie38,
        name: 'A star is born',
        time: '2hr : 15mins',
    },

    {
        id: 9,
        cover: movie39,
        name: 'The Northman',
        time: '2hr : 17mins',
    },

    {
        id: 10,
        cover: movie40,
        name: 'Only God Forgives',
        time: '1hr : 30mins',
    },
];

