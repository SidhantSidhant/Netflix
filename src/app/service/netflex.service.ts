import { Injectable } from '@angular/core';
import { country } from '../sheard/module/country';

@Injectable({
    providedIn: 'root'
})
export class NetflexService {
     IMG_path:string = "https://image.tmdb.org/t/p/w1280";
    country: country[] = [
        {
            "adult": false,
            "backdrop_path": "/xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg",
            "genre_ids": [
                27
            ],
            "id": 943221,
            "original_language": "es",
            "original_title": "Mal de ojo",
            "overview": "Nala, a thirteen-year-old girl from the city, travels with her family to her grandmother's home in the countryside, to try to find a cure for her little sister's mysterious illness - But she'll soon find her granny is not exactly what she seems...",
            "popularity": 817.962,
            "poster_path": "/sChhX2wWgVbTd6j38ADrAfHd4mE.jpg",
            "release_date": "2022-09-22",
            "title": "Mal de ojo",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 144
        },
        {
            "adult": false,
            "backdrop_path": "/mYQSbZdGX0JJb49NLO04UA0iFEU.jpg",
            "genre_ids": [
                28,
                35,
                80
            ],
            "id": 1015963,
            "original_language": "en",
            "original_title": "High Heat",
            "overview": "When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen.",
            "popularity": 797.614,
            "poster_path": "/mmD0NVdhiRiCu64YKem5GK5PSfy.jpg",
            "release_date": "2022-12-16",
            "title": "High Heat",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 33
        },
        {
            "adult": false,
            "backdrop_path": "/vLPSvAt1CnfmDCeqG3zkFh0s6S4.jpg",
            "genre_ids": [
                10752,
                28
            ],
            "id": 542196,
            "original_language": "en",
            "original_title": "Wolf Hound",
            "overview": "Inspired by the real-life German special operations unit KG 200 that shot down, repaired, and flew Allied aircraft as Trojan horses, \"Wolf Hound\" takes place in 1944 German-occupied France and follows the daring exploits of Jewish-American fighter pilot Captain David Holden. Ambushed behind enemy lines, Holden must rescue a captured B-17 Flying Fortress crew, evade a ruthless enemy stalking him at every turn, and foil a plot that could completely alter the outcome of World War II.",
            "popularity": 784.234,
            "poster_path": "/6sMnY4fEVAfdadhANhGnNckxsmx.jpg",
            "release_date": "2022-06-03",
            "title": "Wolf Hound",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 16
        },
        {
            "adult": false,
            "backdrop_path": "/6YRQ8l93ZEs6x4rZojWoHIWdguK.jpg",
            "genre_ids": [
                28,
                80
            ],
            "id": 1024546,
            "original_language": "en",
            "original_title": "Detective Knight: Rogue",
            "overview": "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
            "popularity": 762.005,
            "poster_path": "/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
            "release_date": "2022-10-21",
            "title": "Detective Knight: Rogue",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 47
        },
        {
            "adult": false,
            "backdrop_path": "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
            "genre_ids": [
                878,
                28,
                12
            ],
            "id": 843794,
            "original_language": "ko",
            "original_title": "정이",
            "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
            "popularity": 759.972,
            "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
            "release_date": "2023-01-20",
            "title": "JUNG_E",
            "video": false,
            "vote_average": 6,
            "vote_count": 139
        },
        {
            "adult": false,
            "backdrop_path": "/1Re7Q0qUgTWLBGP547yc8zKK5Sd.jpg",
            "genre_ids": [
                53,
                27
            ],
            "id": 985335,
            "original_language": "en",
            "original_title": "Girl at the Window",
            "overview": "A troubled teenage girl who’s struggling to cope with the accidental death of her father suspects that the mysterious killer stalking her hometown is not only her neighbour but her mother’s new romantic interest.",
            "popularity": 723.955,
            "poster_path": "/y8PhaJDd4YcYX7DVKJxoDwBUCZO.jpg",
            "release_date": "2022-08-18",
            "title": "Girl at the Window",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 26
        },
        {
            "adult": false,
            "backdrop_path": "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
            "genre_ids": [
                27
            ],
            "id": 663712,
            "original_language": "en",
            "original_title": "Terrifier 2",
            "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
            "popularity": 719.155,
            "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
            "release_date": "2022-10-06",
            "title": "Terrifier 2",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 944
        },
        {
            "adult": false,
            "backdrop_path": "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
            "genre_ids": [
                16,
                14,
                18
            ],
            "id": 555604,
            "original_language": "en",
            "original_title": "Guillermo del Toro's Pinocchio",
            "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
            "popularity": 713.806,
            "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
            "release_date": "2022-11-18",
            "title": "Guillermo del Toro's Pinocchio",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 1675
        },
        {
            "adult": false,
            "backdrop_path": "/i6zyJ18xvVvqbN6eUdzgSwlhb8h.jpg",
            "genre_ids": [
                9648,
                80,
                27
            ],
            "id": 800815,
            "original_language": "en",
            "original_title": "The Pale Blue Eye",
            "overview": "West Point, New York, 1830. When a cadet at the burgeoning military academy is found hanged with his heart cut out, the top brass summons former New York City constable Augustus Landor to investigate. While attempting to solve this grisly mystery, the reluctant detective engages the help of one of the cadets: a strange but brilliant young fellow by the name of Edgar Allan Poe",
            "popularity": 699.514,
            "poster_path": "/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg",
            "release_date": "2022-12-22",
            "title": "The Pale Blue Eye",
            "video": false,
            "vote_average": 7,
            "vote_count": 846
        },
        {
            "adult": false,
            "backdrop_path": "/qdFrqXYH6PtyAVlegub7bpoSgro.jpg",
            "genre_ids": [
                16,
                12,
                35,
                10751
            ],
            "id": 573171,
            "original_language": "es",
            "original_title": "Huevitos Congelados",
            "overview": "The rooster Toto has a new enemy: a pirate who plans to turn him into a cryogenically frozen rooster.",
            "popularity": 635.895,
            "poster_path": "/gBBCBMXKzWRADtliUYfV69aVIcz.jpg",
            "release_date": "2022-12-14",
            "title": "A Frozen Rooster",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 195
        },
        {
            "adult": false,
            "backdrop_path": "/jJbEKl69hgNdQ9vQISqQGEDx4Lh.jpg",
            "genre_ids": [
                35
            ],
            "id": 632065,
            "original_language": "en",
            "original_title": "House Party",
            "overview": "Aspiring club promoters and best buds Damon and Kevin are barely keeping things together. Out of money, down on their luck and about to lose the roofs over their heads—and freshly fired from their low-lift jobs as house cleaners—the pair needs a huge windfall to make their problems go away. In a ‘what the hell?’ move, they decide to host the party of the year at an exclusive mansion, the site of their last cleaning job, which just happens to belong to none other than LeBron James. No permission? No problem. What could go wrong?",
            "popularity": 628.812,
            "poster_path": "/KiyKR9m6h01eIvGObGmpt16U3F.jpg",
            "release_date": "2023-01-12",
            "title": "House Party",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 19
        },
        {
            "adult": false,
            "backdrop_path": "/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
            "genre_ids": [
                16,
                878,
                12,
                10751
            ],
            "id": 877269,
            "original_language": "en",
            "original_title": "Strange World",
            "overview": "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
            "popularity": 627.748,
            "poster_path": "/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
            "release_date": "2022-11-23",
            "title": "Strange World",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 709
        },
        {
            "adult": false,
            "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
            "genre_ids": [
                14,
                28,
                35,
                80
            ],
            "id": 1013860,
            "original_language": "en",
            "original_title": "R.I.P.D. 2: Rise of the Damned",
            "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
            "popularity": 621.825,
            "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
            "release_date": "2022-11-15",
            "title": "R.I.P.D. 2: Rise of the Damned",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 341
        },
        {
            "adult": false,
            "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
            "genre_ids": [
                53
            ],
            "id": 985939,
            "original_language": "en",
            "original_title": "Fall",
            "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            "popularity": 603.806,
            "poster_path": "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
            "release_date": "2022-08-11",
            "title": "Fall",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 2341
        },
        {
            "adult": false,
            "backdrop_path": "/essb3JUruLtwNsiNVrUmVfOatHJ.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 725405,
            "original_language": "ko",
            "original_title": "옆방에 일본여자가 싼다",
            "overview": "Jae-kyung is embarrassed and runs away after seeing someone talking to herself at a bar. Did she live in her next room? Yuya and Jae-kyung, who are free from misunderstanding, are rapidly approaching. Soon, they will develop into a relationship with each other. However, the new relationship at the boarding house causes all relationships to break. To make matters worse, Jae-kyung misunderstood Yuya's appearance to share her concerns with Ken. Can their relationship be restored?",
            "popularity": 592.432,
            "poster_path": "/ltsm79ByVGCfzlKYD91lcQNjK8o.jpg",
            "release_date": "2020-07-09",
            "title": "Japanese Woman is Cheap in the Next Room",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 7
        },
        {
            "adult": false,
            "backdrop_path": "/90ZZIoWQLLEXSVm0ik3eEQBinul.jpg",
            "genre_ids": [
                28,
                27,
                53
            ],
            "id": 988233,
            "original_language": "en",
            "original_title": "Hex",
            "overview": "Following a mysterious disappearance on a jump, a group of skydivers experiences paranormal occurrences that leave them fighting for their lives.",
            "popularity": 576.561,
            "poster_path": "/xFJHb43ZAnnuiDztxZYsmyopweb.jpg",
            "release_date": "2022-11-01",
            "title": "Hex",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 30
        },
        {
            "adult": false,
            "backdrop_path": "/nITzFbM1JS7WEvFjjGL0kCb2yPr.jpg",
            "genre_ids": [
                16,
                10751,
                12
            ],
            "id": 1045944,
            "original_language": "en",
            "original_title": "The Boss Baby: Christmas Bonus",
            "overview": "Christmas Eve takes a twisty turn when the Boss Baby accidentally swaps places with one of Santa's elves and gets stranded at the North Pole.",
            "popularity": 573.25,
            "poster_path": "/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg",
            "release_date": "2022-12-06",
            "title": "The Boss Baby: Christmas Bonus",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 184
        },
        {
            "adult": false,
            "backdrop_path": "/bZ6hEHRoOB5wGkRm9P8AchduODu.jpg",
            "genre_ids": [
                10752,
                28,
                18
            ],
            "id": 966220,
            "original_language": "uk",
            "original_title": "Снайпер. Білий ворон",
            "overview": "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
            "popularity": 569.084,
            "poster_path": "/lZOODJzwuQo0etJJyBBZJOSdZcW.jpg",
            "release_date": "2022-05-03",
            "title": "Sniper: The White Raven",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 249
        },
        {
            "adult": false,
            "backdrop_path": "/chLZrgbUomn48GDYaq7HzVYLZbg.jpg",
            "genre_ids": [
                28,
                18
            ],
            "id": 39456,
            "original_language": "it",
            "original_title": "Femmine in fuga",
            "overview": "The young, pretty and shy Angela Duvall is jailed for murder in some Latin American country. In the prison she gets brutally \"initiated\" by the other inmates. The nice, honest and handsome prison doctor believe she's innocent and tries to help her out.",
            "popularity": 566.016,
            "poster_path": "/7g3IrtxAnqPIa8OJZBcrDGgDJGu.jpg",
            "release_date": "1984-05-10",
            "title": "Women in Fury",
            "video": false,
            "vote_average": 5,
            "vote_count": 18
        },
        {
            "adult": false,
            "backdrop_path": "/oMsoN3RsJEjxOWcImvwTffEnkMd.jpg",
            "genre_ids": [
                16,
                10751
            ],
            "id": 987750,
            "original_language": "es",
            "original_title": "Inspector Sun y la maldición de la viuda negra",
            "overview": "Shanghai, 1934. In an insect world parallel to that of humans, veteran Inspector Sun, a lone spider, leads his last mission against his archenemy the Red Locust, before embarking on a well-deserved retirement. His vacation aboard a Pan Am clipper between Shanghai and San Francisco comes to an abrupt end when millionaire Dr. Spindelthorp is found murdered. What begins as a routine case for Sun will ultimately decide the fate of humanity.",
            "popularity": 562.538,
            "poster_path": "/v1Wj5lzvsvFbXHdrmYGdXL10Q73.jpg",
            "release_date": "2022-12-28",
            "title": "Inspector Sun and the Curse of the Black Widow",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 58
        }
    ]
    constructor() { }
    getAllusersData() {
        return this.country;
    }

}
