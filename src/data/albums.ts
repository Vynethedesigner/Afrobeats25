import type { Album } from '../types';

// Using placeholder images - these will be replaced with actual album artwork
const generatePlaceholder = (id: number) =>
    `https://picsum.photos/seed/album${id}/500/500`;

export const albums: Album[] = [
    {
        id: '1',
        title: 'Stubborn',
        artist: 'Victony',
        artwork: generatePlaceholder(1),
        releaseDate: '2025-01-15',
        genre: 'AFROBEATS',
        spotifyUrl: 'https://open.spotify.com/album/stubborn',
        tracks: [
            { number: 1, title: 'Intro', duration: '1:30' },
            { number: 2, title: 'Stubborn', duration: '3:15' },
            { number: 3, title: 'Everything', duration: '3:42', featured: ['Rema'] },
            { number: 4, title: 'Soweto', duration: '3:28' },
            { number: 5, title: 'Kolomental', duration: '2:58' },
            { number: 6, title: 'Dice', duration: '3:11' },
            { number: 7, title: 'Jaga', duration: '3:35' },
            { number: 8, title: 'Outro', duration: '2:15' },
        ],
        reactions: [
            { type: 'tweet', content: 'Victony doesn\'t miss. This album is a masterpiece from start to finish 🔥', author: 'MusicCritic', handle: '@AfroMusicDaily', date: '2025-01-16' },
            { type: 'quote', content: 'A defining moment for Afrobeats in 2025', source: 'Rolling Stone Africa' },
        ]
    },
    {
        id: '2',
        title: 'Children of Africa',
        artist: 'Seyi Vibez',
        artwork: generatePlaceholder(2),
        releaseDate: '2025-02-10',
        genre: 'STREET POP',
        spotifyUrl: 'https://open.spotify.com/album/children-of-africa',
        tracks: [
            { number: 1, title: 'Ori', duration: '3:20' },
            { number: 2, title: 'Para Boi', duration: '2:55' },
            { number: 3, title: 'Big Vibe', duration: '3:18' },
            { number: 4, title: 'Catalyst', duration: '3:45' },
            { number: 5, title: 'Professor Peller', duration: '3:02' },
            { number: 6, title: 'Ghost Mode', duration: '3:33', featured: ['Asake'] },
        ],
        reactions: [
            { type: 'tweet', content: 'Seyi Vibez really understood the assignment. Every track hits different 💫', author: 'Lagos Music Head', handle: '@LagosVibes', date: '2025-02-11' },
        ]
    },
    {
        id: '3',
        title: 'Lemon Chase',
        artist: 'Kizz Daniel',
        artwork: generatePlaceholder(3),
        releaseDate: '2025-03-05',
        genre: 'AFROBEATS',
        spotifyUrl: 'https://open.spotify.com/album/lemon-chase',
        tracks: [
            { number: 1, title: 'Lemon', duration: '2:48' },
            { number: 2, title: 'Buga 2.0', duration: '3:22' },
            { number: 3, title: 'Wayo', duration: '3:05' },
            { number: 4, title: 'Nesesari', duration: '3:15' },
            { number: 5, title: 'My G', duration: '3:40', featured: ['Davido'] },
        ],
        reactions: [
            { type: 'headline', content: 'Kizz Daniel Delivers Another Summer Anthem Collection', source: 'Native Magazine' },
        ]
    },
    {
        id: '4',
        title: 'Wa Jo Pa',
        artist: 'Various Artists',
        artwork: generatePlaceholder(4),
        releaseDate: '2025-02-20',
        genre: 'HIGHLIFE',
        spotifyUrl: 'https://open.spotify.com/album/wa-jo-pa',
        tracks: [
            { number: 1, title: 'Dance Floor', duration: '3:10' },
            { number: 2, title: 'Lagos to London', duration: '3:35' },
            { number: 3, title: 'Amapiano Dreams', duration: '4:02' },
            { number: 4, title: 'Highlife Revival', duration: '3:28' },
        ],
        reactions: [
            { type: 'tweet', content: 'This compilation is what we needed. All the biggest artists in one place 🙌', author: 'Afro Enthusiast', handle: '@AfroEnthusiast', date: '2025-02-21' },
        ]
    },
    {
        id: '5',
        title: 'Son of Chico',
        artist: 'Oxlade',
        artwork: generatePlaceholder(5),
        releaseDate: '2025-04-12',
        genre: 'RNB',
        spotifyUrl: 'https://open.spotify.com/album/son-of-chico',
        tracks: [
            { number: 1, title: 'Heritage', duration: '3:25' },
            { number: 2, title: 'Ojuju', duration: '3:48' },
            { number: 3, title: 'Kulosa Remix', duration: '3:15', featured: ['Camila Cabello'] },
            { number: 4, title: 'Emotions', duration: '4:10' },
            { number: 5, title: 'Away', duration: '3:55' },
            { number: 6, title: 'Tables Turn', duration: '3:30' },
        ],
        reactions: [
            { type: 'quote', content: 'Oxlade proves once again why he\'s the king of emotional Afrobeats', source: 'Pitchfork' },
            { type: 'tweet', content: 'I\'ve had this on repeat for 3 days straight. Oxlade is different gravy 😭', author: 'Music Lover', handle: '@MusicIsLife_', date: '2025-04-13' },
        ]
    },
    {
        id: '6',
        title: 'Quarters',
        artist: 'Chopstix',
        artwork: generatePlaceholder(6),
        releaseDate: '2025-03-28',
        genre: 'HIP-HOP',
        spotifyUrl: 'https://open.spotify.com/album/quarters',
        tracks: [
            { number: 1, title: 'Producer Tag', duration: '0:45' },
            { number: 2, title: 'Levels', duration: '3:20' },
            { number: 3, title: 'Street Code', duration: '3:05' },
            { number: 4, title: 'Vibes Only', duration: '3:42' },
        ],
        reactions: [
            { type: 'headline', content: 'Chopstix Shows Producer Albums Can Dominate Charts', source: 'OkayAfrica' },
        ]
    },
    {
        id: '7',
        title: 'Heavy Is The Crown',
        artist: 'Burna Boy',
        artwork: generatePlaceholder(7),
        releaseDate: '2025-05-01',
        genre: 'AFRO-FUSION',
        spotifyUrl: 'https://open.spotify.com/album/heavy-is-the-crown',
        tracks: [
            { number: 1, title: 'Crown', duration: '4:15' },
            { number: 2, title: 'Giant of Africa', duration: '3:55' },
            { number: 3, title: 'Odogwu Returns', duration: '3:40' },
            { number: 4, title: 'Spiritual Warfare', duration: '4:30' },
            { number: 5, title: 'Champions', duration: '3:25', featured: ['Wizkid'] },
            { number: 6, title: 'Lagos Love Story', duration: '4:10' },
            { number: 7, title: 'Outro: Legacy', duration: '5:00' },
        ],
        reactions: [
            { type: 'tweet', content: 'Burna Boy just dropped the album of the year. No debate. 👑🔥', author: 'Hip Hop Head', handle: '@HipHopDaily', date: '2025-05-02' },
            { type: 'quote', content: 'A monumental achievement that cements Burna Boy\'s legendary status', source: 'The Guardian' },
        ]
    },
    {
        id: '8',
        title: 'Morayo Deluxe',
        artist: 'Wizkid',
        artwork: generatePlaceholder(8),
        releaseDate: '2025-06-15',
        genre: 'RNB',
        spotifyUrl: 'https://open.spotify.com/album/morayo-deluxe',
        tracks: [
            { number: 1, title: 'Mama\'s Prayer', duration: '3:40' },
            { number: 2, title: 'IDK', duration: '2:55', featured: ['Tems'] },
            { number: 3, title: 'Bad To Me', duration: '3:18' },
            { number: 4, title: 'Piece of Me', duration: '3:50' },
            { number: 5, title: 'Money & Love', duration: '4:05' },
        ],
        reactions: [
            { type: 'tweet', content: 'Big Wiz never disappoints. This man is a living legend 🐐', author: 'Wizkid FC', handle: '@WizkidFC_', date: '2025-06-16' },
        ]
    },
    {
        id: '9',
        title: 'No Pressure',
        artist: 'Tiwa Savage',
        artwork: generatePlaceholder(9),
        releaseDate: '2025-04-25',
        genre: 'AFROBEATS',
        spotifyUrl: 'https://open.spotify.com/album/no-pressure',
        tracks: [
            { number: 1, title: 'Pressure', duration: '3:15' },
            { number: 2, title: 'Queen', duration: '3:28' },
            { number: 3, title: 'Lagos Girl', duration: '3:05' },
            { number: 4, title: 'No Wahala', duration: '3:42', featured: ['Ayra Starr'] },
            { number: 5, title: 'Boss Lady', duration: '3:20' },
        ],
        reactions: [
            { type: 'headline', content: 'Tiwa Savage Returns With Her Most Personal Album Yet', source: 'Vogue Africa' },
        ]
    },
    {
        id: '10',
        title: 'Rush Hour',
        artist: 'Ayra Starr',
        artwork: generatePlaceholder(10),
        releaseDate: '2025-07-08',
        genre: 'AFRO-POP',
        spotifyUrl: 'https://open.spotify.com/album/rush-hour',
        tracks: [
            { number: 1, title: 'Rush', duration: '2:50' },
            { number: 2, title: 'Sabi Girl', duration: '3:10' },
            { number: 3, title: 'Gen Z Anthem', duration: '3:35' },
            { number: 4, title: 'Fashion Killer', duration: '3:15' },
            { number: 5, title: 'Bloody Samaritan 2', duration: '3:48' },
            { number: 6, title: 'Last Heartbreak', duration: '4:02' },
        ],
        reactions: [
            { type: 'tweet', content: 'Ayra Starr is leading a whole generation. This album is perfection 💖', author: 'Gen Z Music', handle: '@GenZMusic', date: '2025-07-09' },
            { type: 'quote', content: 'The future of Afrobeats is in excellent hands', source: 'Billboard' },
        ]
    },
    {
        id: '11',
        title: 'Made in Lagos 2',
        artist: 'Wizkid',
        artwork: generatePlaceholder(11),
        releaseDate: '2025-08-20',
        genre: 'RNB',
        spotifyUrl: 'https://open.spotify.com/album/made-in-lagos-2',
        tracks: [
            { number: 1, title: 'Lagos State of Mind', duration: '3:55' },
            { number: 2, title: 'Essence Pt. 2', duration: '4:10', featured: ['Tems', 'Justin Bieber'] },
            { number: 3, title: 'Ojuelegba Forever', duration: '3:45' },
            { number: 4, title: 'Star Boy Legacy', duration: '4:25' },
        ],
        reactions: [
            { type: 'headline', content: 'Wizkid\'s Lagos Saga Continues With Triumphant Sequel', source: 'Complex' },
        ]
    },
    {
        id: '12',
        title: 'African Giant 2',
        artist: 'Burna Boy',
        artwork: generatePlaceholder(12),
        releaseDate: '2025-09-10',
        genre: 'AFRO-FUSION',
        spotifyUrl: 'https://open.spotify.com/album/african-giant-2',
        tracks: [
            { number: 1, title: 'Giant Returns', duration: '4:00' },
            { number: 2, title: 'Ye Ye Ye', duration: '3:30' },
            { number: 3, title: 'Anybody', duration: '3:45' },
            { number: 4, title: 'Monsters', duration: '4:15', featured: ['21 Savage'] },
            { number: 5, title: 'African Time', duration: '3:55' },
        ],
        reactions: [
            { type: 'tweet', content: 'Two incredible albums from Burna in one year. We are blessed 🙏', author: 'Outsiders', handle: '@Outsiders_NG', date: '2025-09-11' },
        ]
    },
    {
        id: '13',
        title: 'Timeless 2',
        artist: 'Davido',
        artwork: generatePlaceholder(13),
        releaseDate: '2025-10-05',
        genre: 'AFROBEATS',
        spotifyUrl: 'https://open.spotify.com/album/timeless-2',
        tracks: [
            { number: 1, title: 'Timeless', duration: '3:25' },
            { number: 2, title: 'Assurance 2', duration: '3:40' },
            { number: 3, title: 'FEM Remix', duration: '3:15' },
            { number: 4, title: 'Champion Sound', duration: '3:55', featured: ['Focalistic'] },
            { number: 5, title: 'Jowo Forever', duration: '4:20' },
            { number: 6, title: 'ATL to Lagos', duration: '3:35' },
        ],
        reactions: [
            { type: 'quote', content: 'OBO delivers another classic for the culture', source: 'The FADER' },
        ]
    },
    {
        id: '14',
        title: 'Street Dreams',
        artist: 'Rema',
        artwork: generatePlaceholder(14),
        releaseDate: '2025-11-01',
        genre: 'AFRO-RAVE',
        spotifyUrl: 'https://open.spotify.com/album/street-dreams',
        tracks: [
            { number: 1, title: 'Calm Down 2.0', duration: '3:20' },
            { number: 2, title: 'Soundgasm', duration: '3:45' },
            { number: 3, title: 'Global', duration: '3:30' },
            { number: 4, title: 'Benin to Berlin', duration: '4:00', featured: ['Don Toliver'] },
            { number: 5, title: 'Young Legend', duration: '3:25' },
        ],
        reactions: [
            { type: 'tweet', content: 'Rema is on a different level. Global domination loading 🌍🚀', author: 'Ravers', handle: '@RaversWorldwide', date: '2025-11-02' },
            { type: 'headline', content: 'Rema Cements His Place Among Afrobeats\' Elite', source: 'NME' },
        ]
    },
    {
        id: '15',
        title: 'Year of Return',
        artist: 'Stonebwoy',
        artwork: generatePlaceholder(15),
        releaseDate: '2025-12-01',
        genre: 'AFRO-DANCEHALL',
        spotifyUrl: 'https://open.spotify.com/album/year-of-return',
        tracks: [
            { number: 1, title: 'Ghana Rising', duration: '4:10' },
            { number: 2, title: 'Dancehall King', duration: '3:40' },
            { number: 3, title: 'Putuu Remix', duration: '3:25', featured: ['Shatta Wale'] },
            { number: 4, title: 'Accra Nights', duration: '3:50' },
        ],
        reactions: [
            { type: 'quote', content: 'Ghana\'s finest exports his biggest statement yet', source: 'BBC Africa' },
        ]
    },
];

// Stats for the hero section
export const stats = {
    artists: albums.reduce((acc, album) => {
        if (!acc.includes(album.artist)) acc.push(album.artist);
        return acc;
    }, [] as string[]).length,
    albums: albums.length,
};
