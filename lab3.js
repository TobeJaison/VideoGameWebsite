
    window.onload = function () {
        function game(title, developer, release_date, game_description, price, genre, game_rating, platform, image_URL) {
            this.title = title;
            this.developer = developer;
            this.release_date = release_date;
            this.game_description = game_description;
            this.price = price;
            this.genre = genre;
            this.game_rating = game_rating;
            this.platform = platform;
            this.image_URL = image_URL;
        }
        //Some of the event handlers are at the end of the page
            /*Genre 1: Action-adventure*/

        var actionAdOneV1 = new game("Marvel's Spider-Man: Miles Morales (PS4)", "Insomniac Games", "November 20, 2020", "The game is a spin - off of Marvel's Spider-Man, and depicts Miles' struggle to balance the duties of his civilian persona and Spider - Man when his new home, Harlem, is threatened by a war between the Roxxon Energy Corporation and the Tinkerer's high-tech criminal army, the Underground.", 49.99, "Action-Adventure", 5, "PS4", "images3/miles.png");
        var actionAdOneV2 = new game("Marvel's Spider-Man: Miles Morales (PS5)", "Insomniac Games", "November 20, 2020", "The game is a spin - off of Marvel's Spider-Man, and depicts Miles' struggle to balance the duties of his civilian persona and Spider - Man when his new home, Harlem, is threatened by a war between the Roxxon Energy Corporation and the Tinkerer's high-tech criminal army, the Underground.", 49.99, "Action-Adventure", 5, "PS5", "images3/miles.png");
        var actionAdTwoV1 = new game("Marvel's Spider-Man (PS4)", "Insomniac Games", "September 7, 2018", "Marvel's Spider-Man is an open-world action-adventure title that allows the player to control Spider-Man throughout Manhattan, New York City. Spider-Man fights enemies with his brawler moveset and a wide array of web gadgets.", 28.99, "Action-Adventure", 5, "PS4", "images3/spidermanps4.jpg");
        var actionAdTwoV2 = new game("Marvel's Spider-Man Remastered (PS5)", "Insomniac Games", "November 20, 2020", "Marvel's Spider-Man is an open-world action-adventure title that allows the player to control Spider-Man throughout Manhattan, New York City. This game is a remaster of the PS4 game Marvels's Spider-Man .", 39.99, "Action-Adventure", 4, "PS5", "images3/spiderRemaster.jpg");
        var actionAdThreeV1 = new game("Shadow of the Tomb Raider (PS4)", "Eidos-Montréal and Nixxes Software BV", "September 14, 2018", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "PS4", "images3/tombraider.jpg");
        var actionAdThreeV2 = new game("Shadow of the Tomb Raider (PS5)", "Eidos-Montréal and Nixxes Software BV", "March 18, 2021", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "PS5", "images3/tombraider.jpg");
        var actionAdThreeV3 = new game("Shadow of the Tomb Raider (Xbox One)", "Eidos-Montréal and Nixxes Software BV", "September 14, 2018", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "Xbox One", "images3/tombraider.jpg");
        var actionAdThreeV4 = new game("Shadow of the Tomb Raider (PC)", "Eidos-Montréal and Nixxes Software BV", "September 14, 2018", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "PC", "images3/tombraider.jpg");
       // var actionAdThreeV5 = new game("Shadow of the Tomb Raider (PC)", "Eidos-Montréal and Nixxes Software BV", "November 5, 2019", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "PC", "images3/tombraider.jpg");
       // var actionAdThreeV6 = new game("Shadow of the Tomb Raider", "Eidos-Montréal and Nixxes Software BV", "November 5, 2019", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "action-adventure", 4.4, "PC", "images3/tombraider.jpg");
        var actionAdThreeV7 = new game("Shadow of the Tomb Raider (Stadia)", "Eidos-Montréal and Nixxes Software BV", "November 19, 2019", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "Stadia", "images3/tombraider.jpg");
        var actionAdThreeV8 = new game("Shadow of the Tomb Raider (Xbox Series X/S)", "Eidos-Montréal and Nixxes Software BV", "March 18, 2021", "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across the continents of Central and South America.", 20.53, "Action-Adventure", 4, "Xbox Series X/S", "images3/tombraider.jpg");
        var actionAdFourV1 = new game("Assassin's Creed Origins (PS4)", "Ubisoft Montreal and Ubisoft Milan", "October 27, 2017", "Assassin's Creed Origins is an action-adventure stealth game. Players complete quests—linear scenarios with set objectives to progress through the story. As the players explore the world, they encounter different non-playable characters who need assistance from Bayek.", 19.95, "Action-Adventure", 4, "PS4", "images3/assassinOr.jpg");
        var actionAdFourV2 = new game("Assassin's Creed Origins (Xbox One)", "Ubisoft Montreal and Ubisoft Milan", "October 27, 2017", "Assassin's Creed Origins is an action-adventure stealth game. Players complete quests—linear scenarios with set objectives to progress through the story. As the players explore the world, they encounter different non-playable characters who need assistance from Bayek.", 19.95, "Action-Adventure", 4, "Xbox One", "images3/assassinOr.jpg");
        var actionAdFourV3 = new game("Assassin's Creed Origins (Stadia)", "Ubisoft Montreal and Ubisoft Milan", "October 27, 2017", "Assassin's Creed Origins is an action-adventure stealth game. Players complete quests—linear scenarios with set objectives to progress through the story. As the players explore the world, they encounter different non-playable characters who need assistance from Bayek.", 19.95, "Action-Adventure", 4, "Stadia", "images3/assassinOr.jpg");
        var actionAdFourV4 = new game("Assassin's Creed Origins (PC)", "Ubisoft Montreal and Ubisoft Milan", "October 27, 2017", "Assassin's Creed Origins is an action-adventure stealth game. Players complete quests—linear scenarios with set objectives to progress through the story. As the players explore the world, they encounter different non-playable characters who need assistance from Bayek.", 19.95, "Action-Adventure", 4, "PC", "images3/assassinOr.jpg");
        var actionAdFiveV1 = new game("The Last of Us Part II (PS4)", "Naughty Dog", "June 19, 2020", "When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.", 19.99, "Action-Adventure", 3.0, "PS4", "images3/lastOf.jpg");

        var actionAdArr = [actionAdOneV1, actionAdOneV2, actionAdTwoV1, actionAdTwoV2, actionAdThreeV1, actionAdThreeV2, actionAdThreeV3, actionAdThreeV4, actionAdThreeV7, actionAdThreeV8, actionAdFourV1, actionAdFourV2, actionAdFourV3, actionAdFourV4, actionAdFiveV1];
        /*Genre 2: Racing*/

        var racingOneV1 = new game("Need for Speed Payback (PS4)", "Ghost Games", "November 10, 2017", "Need for Speed Payback is a racing game set in an open world environment of Fortune Valley; a fictional version of Las Vegas, Nevada. It is focused on action driving and has three playable characters (each with different sets of skills) working together to pull off action movie-like sequences", 53.42, "Racing", 4, "PS4", "images3/payback.jpg");
        var racingOneV2 = new game("Need for Speed Payback (Xbox One)", "Ghost Games", "November 10, 2017", "Need for Speed Payback is a racing game set in an open world environment of Fortune Valley; a fictional version of Las Vegas, Nevada. It is focused on action driving and has three playable characters (each with different sets of skills) working together to pull off action movie-like sequences", 53.42, "Racing", 4, "Xbox One", "images3/payback.jpg");
        var racingOneV3 = new game("Need for Speed Payback (PC)", "Ghost Games", "November 10, 2017", "Need for Speed Payback is a racing game set in an open world environment of Fortune Valley; a fictional version of Las Vegas, Nevada. It is focused on action driving and has three playable characters (each with different sets of skills) working together to pull off action movie-like sequences", 53.42, "Racing", 4, "PC", "images3/payback.jpg");
        var racingTwoV1 = new game("Forza Horizon 4 (PC)", "Playground Games", "October 2, 2018", "Forza Horizon 4 is a racing video game set in an open world environment based in a fictionalised Great Britain, with regions that include condensed representations of Edinburgh, the Lake District (including Derwentwater), Ambleside and the Cotswolds (including Broadway), Bamburgh among others.", 19.99, "Racing", 4, "PC", "images3/forza4.jpg");
        var racingTwoV2 = new game("Forza Horizon 4 (Xbox One)", "Playground Games", "October 2, 2018", "Forza Horizon 4 is a racing video game set in an open world environment based in a fictionalised Great Britain, with regions that include condensed representations of Edinburgh, the Lake District (including Derwentwater), Ambleside and the Cotswolds (including Broadway), Bamburgh among others.", 19.99, "Racing", 4, "Xbox One", "images3/forza4.jpg");
        var racingTwoV3 = new game("Forza Horizon 4 (Xbox Series X/S)", "Playground Games", "November 10, 2020", "Forza Horizon 4 is a racing video game set in an open world environment based in a fictionalised Great Britain, with regions that include condensed representations of Edinburgh, the Lake District (including Derwentwater), Ambleside and the Cotswolds (including Broadway), Bamburgh among others.", 19.99, "Racing", 4, "Xbox Series X/S", "images3/forza4.jpg");
        var racingThreeV1 = new game("Gran Turismo Sport (PS4)", "Polyphony Digital", "October 17, 2017", "Gran Turismo Sport is a racing game and includes two game modes: Sport Mode and Arcade Mode. Online racing is also featured in the game and saving is only allowed in online mode.", 15.41, "Racing", 4.0, "PS4", "images3/grandTur.jpg");
        var racingFourV1 = new game("The Crew 2 (PS4)", "Ivory Tower", "June 28, 2018", "the game, players assume control of a racer, who is trying to work their way to become successful in multiple disciplines. It features a persistent open world environment for racing and free - roaming across a scaled - down recreation of the contiguous United States.", 21.99, "Racing", 4, "PS4", "images3/crew2.jpg");
        var racingFourV2 = new game("The Crew 2 (Xbox One)", "Ivory Tower", "June 28, 2018", "the game, players assume control of a racer, who is trying to work their way to become successful in multiple disciplines. It features a persistent open world environment for racing and free - roaming across a scaled - down recreation of the contiguous United States.", 21.99, "Racing", 4, "Xbox One", "images3/crew2.jpg");
        var racingFourV3 = new game("The Crew 2 (PC)", "Ivory Tower ", "June 28, 2018", "the game, players assume control of a racer, who is trying to work their way to become successful in multiple disciplines. It features a persistent open world environment for racing and free - roaming across a scaled - down recreation of the contiguous United States.", 21.99, "Racing", 4, "PC", "images3/crew2.jpg");
        var racingFourV4 = new game("The Crew 2 (Stadia)", "Ivory Tower ", "March 25, 2020", "the game, players assume control of a racer, who is trying to work their way to become successful in multiple disciplines. It features a persistent open world environment for racing and free - roaming across a scaled - down recreation of the contiguous United States.", 21.99, "Racing", 4, "Stadia", "images3/crew2.jpg");
        var racingFiveV1 = new game("Need for Speed Heat (PS4)", "Ghost Games", "November 8, 2019", " This game takes place in an environment called Palm City.players can switch between day and night. During the day, players can take part in sanctioned race events, which reward players with cash to spend on new cars and upgrades. During the night, players can take part in illicit street racing, which rewards REP.", 14.99, "Racing", 4, "PS4", "images3/heat.jpg");
        var racingFiveV2 = new game("Need for Speed Heat (Xbox One)", "Ghost Games", "November 8, 2019", " This game takes place in an environment called Palm City.players can switch between day and night. During the day, players can take part in sanctioned race events, which reward players with cash to spend on new cars and upgrades. During the night, players can take part in illicit street racing, which rewards REP.", 14.99, "Racing", 4, "Xbox One", "images3/heat.jpg");
        var racingFiveV3 = new game("Need for Speed Heat (PC)", "Ghost Games", "November 8, 2019", " This game takes place in an environment called Palm City.players can switch between day and night. During the day, players can take part in sanctioned race events, which reward players with cash to spend on new cars and upgrades. During the night, players can take part in illicit street racing, which rewards REP.", 14.99, "Racing", 4, "PC", "images3/heat.jpg");

        var racingArr = [racingOneV1, racingOneV2, racingOneV3, racingTwoV1, racingTwoV2, racingTwoV3, racingThreeV1, racingFourV1, racingFourV2, racingFourV3, racingFourV4, racingFiveV1, racingFiveV2, racingFiveV3];
        /*Genre 3: Sports*/

        var sportsOneV1 = new game("PGA Tour 2K21 (PS4)", "HB Studios", "August 21, 2020", " It's a continuation of The Golf Club franchise integrated with 2K Sports . PGA Tour 2K21 received positive reviews, with critics acknowledging that the game preserved the extent of realism seen in its predecessors, while adding more difficulty levels and assists to make it more accessible to a wider audience.", 59.99, "Sports", 3, "PS4", "images3/pga21.jpg");
        var sportsOneV2 = new game("PGA Tour 2K21 (Xbox One)", "HB Studios", "August 21, 2020", " It's a continuation of The Golf Club franchise integrated with 2K Sports . PGA Tour 2K21 received positive reviews, with critics acknowledging that the game preserved the extent of realism seen in its predecessors, while adding more difficulty levels and assists to make it more accessible to a wider audience.", 59.99, "Sports", 3, "Xbox One", "images3/pga21.jpg");
        var sportsOneV3 = new game("PGA Tour 2K21 (Stadia)", "HB Studios", "August 21, 2020", " It's a continuation of The Golf Club franchise integrated with 2K Sports . PGA Tour 2K21 received positive reviews, with critics acknowledging that the game preserved the extent of realism seen in its predecessors, while adding more difficulty levels and assists to make it more accessible to a wider audience.", 59.99, "Sports", 3, "Stadia", "images3/pga21.jpg");
        var sportsOneV4 = new game("PGA Tour 2K21 (Nintendo Switch)", "HB Studios", "August 21, 2020", " It's a continuation of The Golf Club franchise integrated with 2K Sports . PGA Tour 2K21 received positive reviews, with critics acknowledging that the game preserved the extent of realism seen in its predecessors, while adding more difficulty levels and assists to make it more accessible to a wider audience.", 59.99, "Sports", 3, "Nintendo Switch", "images3/pga21.jpg");
        var sportsOneV5 = new game("PGA Tour 2K21 (PC)", "HB Studios", "August 21, 2020", " It's a continuation of The Golf Club franchise integrated with 2K Sports . PGA Tour 2K21 received positive reviews, with critics acknowledging that the game preserved the extent of realism seen in its predecessors, while adding more difficulty levels and assists to make it more accessible to a wider audience.", 59.99, "Sports", 3, "PC", "images3/pga21.jpg");
        var sportsTwoV1 = new game("NHL 21(PS4)", "EA Vancouver", "October 16, 2020", "Players create their custom hockey player and choose to begin their career as a prospect in either the Canadian Hockey League or European hockey leagues, such as the Swedish Hockey League or Deutsche Eishockey Liga, or choose to go undrafted and sign to a team of their choice as a free agent in the National Hockey League.", 14.98, "Sports", 2, "PS4", "images3/nhl21.jpg");
        var sportsTwoV2 = new game("NHL 21(Xbox One)", "EA Vancouver", "October 16, 2020", "Players create their custom hockey player and choose to begin their career as a prospect in either the Canadian Hockey League or European hockey leagues, such as the Swedish Hockey League or Deutsche Eishockey Liga, or choose to go undrafted and sign to a team of their choice as a free agent in the National Hockey League.", 14.98, "Sports", 2, "Xbox One", "images3/nhl21.jpg");
        var sportsThreeV1 = new game("FIFA 22 (PS4)", "EA Vancouver and EA Romania", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "PS4", "images3/fifa22.jpg");
        var sportsThreeV2 = new game("FIFA 22 (PS5)", "EA Vancouver and EA Romania", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "PS5", "images3/fifa22.jpg");
        var sportsThreeV3 = new game("FIFA 22 (Stadia)", "EA Vancouver and EA Romania", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "Stadia", "images3/fifa22.jpg");
        var sportsThreeV4 = new game("FIFA 22 (Xbox One)", "EA Vancouver and EA Romania", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "Xbox One", "images3/fifa22.jpg");
        var sportsThreeV5 = new game("FIFA 22 (Xbox Series X/S)", "EA Vancouver and EA Romania", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "Xbox Series X/S", "images3/fifa22.jpg");
        var sportsThreeV6 = new game("FIFA 22 (PC)", "EA Vancouver and EA Romania ", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "PC", "images3/fifa22.jpg");
        var sportsThreeV7 = new game("FIFA 22 (Nintendo Switch)", "EA Vancouver and EA Romania ", "October 1, 2021", "FIFA 22 combines Advanced 11v11 Match Capture and proprietary machine learning technology to deliver the most realistic, fluid and responsive football experience for next-gen consoles and Stadia, unlocking the raw emotion, passion and physicality of the world's game.", 39.99, "Sports", 2, "Nintendo Switch", "images3/fifa22.jpg");
        var sportsFourV1 = new game("Tony Hawk's Pro Skater 1 + 2 (PS4)", "Vicarious Visions", "September 4, 2020", "It is a remaster of the first two games in the Tony Hawk's series: Tony Hawk's Pro Skater (1999) and Tony Hawk's Pro Skater 2 (2000) which were originally developed by Neversoft. It is the first major game in the series since Tony Hawk's Pro Skater 5 (2015) ", 29.99, "Sports", 4, "PS4", "images3/hawk.jpg");
        var sportsFourV2 = new game("Tony Hawk's Pro Skater 1 + 2 (Xbox One)", "Vicarious Visions", "September 4, 2020", "It is a remaster of the first two games in the Tony Hawk's series: Tony Hawk's Pro Skater (1999) and Tony Hawk's Pro Skater 2 (2000) which were originally developed by Neversoft. It is the first major game in the series since Tony Hawk's Pro Skater 5 (2015) ", 29.99, "Sports", 4, "Xbox One", "images3/hawk.jpg");
        var sportsFourV3 = new game("Tony Hawk's Pro Skater 1 + 2 (PC)", "Vicarious Visions", "September 4, 2020", "It is a remaster of the first two games in the Tony Hawk's series: Tony Hawk's Pro Skater (1999) and Tony Hawk's Pro Skater 2 (2000) which were originally developed by Neversoft. It is the first major game in the series since Tony Hawk's Pro Skater 5 (2015) ", 29.99, "Sports", 4, "PC", "images3/hawk.jpg");
        var sportsFourV4 = new game("Tony Hawk's Pro Skater 1 + 2 (Xbox Series X/S)", "Vicarious Visions", "March 26,2021", "It is a remaster of the first two games in the Tony Hawk's series: Tony Hawk's Pro Skater (1999) and Tony Hawk's Pro Skater 2 (2000) which were originally developed by Neversoft. It is the first major game in the series since Tony Hawk's Pro Skater 5 (2015) ", 29.99, "Sports", 4, "Xbox Series X/S", "images3/hawk.jpg");
        var sportsFourV5 = new game("Tony Hawk's Pro Skater 1 + 2 (PS5)", "Vicarious Visions", "March 26, 2021", "It is a remaster of the first two games in the Tony Hawk's series: Tony Hawk's Pro Skater (1999) and Tony Hawk's Pro Skater 2 (2000) which were originally developed by Neversoft. It is the first major game in the series since Tony Hawk's Pro Skater 5 (2015) ", 29.99, "Sports", 4, "PS5", "images3/hawk.jpg");
        var sportsFourV6 = new game("Tony Hawk's Pro Skater 1 + 2 (Nintendo Switch)", "Vicarious Visions", "June 25, 2021", "It is a remaster of the first two games in the Tony Hawk's series: Tony Hawk's Pro Skater (1999) and Tony Hawk's Pro Skater 2 (2000) which were originally developed by Neversoft. It is the first major game in the series since Tony Hawk's Pro Skater 5 (2015) ", 29.99, "Sports", 4, "Nintendo Switch", "images3/hawk.jpg");
        var sportsFiveV1 = new game("Big Mario Golf: Super Rush (Nintendo Switch)", "Camelot Software Planning", "June 25, 2021", "Through traditional golf rules, the player's primary objective is to get the ball into each hole with the fewest possible number of strokes, using the various golf clubs available to them. ", 45.99, "Sports", 3, "Nintendo Switch", "images3/mario.jpg");

        var sportsArr = [sportsOneV1, sportsOneV2, sportsOneV3, sportsOneV4, sportsOneV5, sportsTwoV1, sportsTwoV2, sportsThreeV1, sportsThreeV2, sportsThreeV3, sportsThreeV4, sportsThreeV5, sportsThreeV6, sportsThreeV7, sportsFourV1, sportsFourV2, sportsFourV3, sportsFourV4, sportsFourV5, sportsFourV6, sportsFiveV1];
        /* Genre 4: Fighting*/

        var fightingOneV1 = new game("Dragon Ball FighterZ (Nintendo Switch)", "Arc System Works", "September 28, 2018", "Dragon Ball FighterZ involves the player picking a team of 3 playable characters and a unique assist for each, then fighting an AI or human opponent with their own team of 3 characters", 16.99, "Fighting", 4, "Nintendo Switch", "images3/dbfz.jpg");
        var fightingOneV2 = new game("Dragon Ball FighterZ (PC)", "Arc System Works", "January 26, 2018", "Dragon Ball FighterZ involves the player picking a team of 3 playable characters and a unique assist for each, then fighting an AI or human opponent with their own team of 3 characters", 16.99, "Fighting", 4, "PC", "images3/dbfz.jpg");
        var fightingOneV3 = new game("Dragon Ball FighterZ (Xbox One)", "Arc System Works", "January 26, 2018", "Dragon Ball FighterZ involves the player picking a team of 3 playable characters and a unique assist for each, then fighting an AI or human opponent with their own team of 3 characters", 16.99, "Fighting", 4, "Xbox One", "images3/dbfz.jpg");
        var fightingOneV4 = new game("Dragon Ball FighterZ (PS4)", "Arc System Works", "January 26, 2018", "Dragon Ball FighterZ involves the player picking a team of 3 playable characters and a unique assist for each, then fighting an AI or human opponent with their own team of 3 characters", 16.99, "Fighting", 4, "PS4", "images3/dbfz.jpg");
        var fightingTwoV1 = new game("Mortal Kombat 11 (PS4)", "NetherRealm Studios", "April 23, 2019", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4, "PS4", "images3/mortal.jpg");
        var fightingTwoV2 = new game("Mortal Kombat 11 (Xbox One)", "NetherRealm Studios", "April 23, 2019", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4, "Xbox One", "images3/mortal.jpg");
        var fightingTwoV3 = new game("Mortal Kombat 11 (PC)", "NetherRealm Studios", "April 23, 2019", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4, "PC", "images3/mortal.jpg");
        var fightingTwoV4 = new game("Mortal Kombat 11 (Nintendo Switch)", "NetherRealm Studios", "April 23, 2019", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4, "Nintendo Switch", "images3/mortal.jpg");
        var fightingTwoV5 = new game("Mortal Kombat 11 (Stadia)", "NetherRealm Studios", "November 19, 2019", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4, "Stadia", "images3/mortal.jpg");
        var fightingTwoV6 = new game("Mortal Kombat 11 (Xbox Series X/S)", "NetherRealm Studios", "November 17, 2020", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4,"Xbox Series X/S", "images3/mortal.jpg");
        var fightingTwoV7 = new game("Mortal Kombat 11 (PS5)", "NetherRealm Studios", "November 17, 2020", "Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.", 49.99, "Fighting", 4,"PS5", "images3/mortal.jpg");
        var fightingThreeV1 = new game("Super Smash Bros. Ultimate (Nintendo Switch)", "Bandai Namco Studios and Sora Ltd.", "December 7, 2018", "Super Smash Bros. Ultimate is a fighting game for up to eight players in which characters from Nintendo games and other third-party franchises must try to knock each other out of an arena.", 44.99, "Fighting", 5, "Nintendo Switch", "images3/ultimate.jpg");
        var fightingFourV1 = new game("Marvel vs. Capcom: Infinite (PS4)", "Capcom", "September 19, 2017", "Marvel vs. Capcom: Infinite is a 2D fighting game in which players compete against each other in tag team combat using characters from both the Marvel Comics and Capcom universes. Players must knock out the opposing team by repeatedly attacking the opponent and draining their health bar.", 24.99, "Fighting", 4,"PS4", "images3/marvscap.png");
        var fightingFourV2 = new game("Marvel vs. Capcom: Infinite (Xbox One)", "Capcom", "September 19, 2017", "Marvel vs. Capcom: Infinite is a 2D fighting game in which players compete against each other in tag team combat using characters from both the Marvel Comics and Capcom universes. Players must knock out the opposing team by repeatedly attacking the opponent and draining their health bar.", 24.99, "Fighting", 4,"Xbox One", "images3/marvscap.png");
        var fightingFourV3 = new game("Marvel vs. Capcom: Infinite (PC)", "Capcom", "September 19, 2017", "Marvel vs. Capcom: Infinite is a 2D fighting game in which players compete against each other in tag team combat using characters from both the Marvel Comics and Capcom universes. Players must knock out the opposing team by repeatedly attacking the opponent and draining their health bar.", 24.99, "Fighting", 4,"PC", "images3/marvscap.png");
        var fightingFiveV1 = new game("Soulcalibur VI (PS4)", "Bandai Namco Studios and Dimps Corporation", "October 19, 2018", "Soulcalibur VI serves as a sequel and a reboot to the series, taking place during the 16th century to revisit the events of the first Soulcalibur game/second Soul series game entry to uncover hidden truths. It takes place after the events of Soulcalibur V", 22.99, "Fighting", 4,"PS4", "images3/soul.jpg");
        var fightingFiveV2 = new game("Soulcalibur VI (Xbox One)", "Bandai Namco Studios and Dimps Corporation", "October 19, 2018", "Soulcalibur VI serves as a sequel and a reboot to the series, taking place during the 16th century to revisit the events of the first Soulcalibur game/second Soul series game entry to uncover hidden truths. It takes place after the events of Soulcalibur V", 22.99, "Fighting", 4,"Xbox One", "images3/soul.jpg");
        var fightingFiveV3 = new game("Soulcalibur VI (PC)", "Bandai Namco Studios and Dimps Corporation", "October 19, 2018", "Soulcalibur VI serves as a sequel and a reboot to the series, taking place during the 16th century to revisit the events of the first Soulcalibur game/second Soul series game entry to uncover hidden truths. It takes place after the events of Soulcalibur V", 22.99, "Fighting", 4,"PC", "images3/soul.jpg");

        var fightingArr = [fightingOneV1, fightingOneV2, fightingOneV3, fightingOneV4, fightingTwoV1, fightingTwoV2, fightingTwoV3, fightingTwoV4, fightingTwoV5, fightingTwoV6, fightingTwoV7, fightingThreeV1, fightingFourV1, fightingFourV2, fightingFourV3, fightingFiveV1, fightingFiveV2, fightingFiveV3];
        /* Genre 5: first-person shooter*/

        var shooterOneV1 = new game("Battlefield 1 (PC)", "DICE", "October 21, 2016", "Battlefield 1 is a first-person shooter game that emphasizes teamwork. It is set in the period of World War I, and is inspired by historical events.", 9.99, "First-Person Shooter", 4.4, "PC", "images3/battle.jpg");
        var shooterOneV2 = new game("Battlefield 1 (PS4)", "DICE", "October 21, 2016", "Battlefield 1 is a first-person shooter game that emphasizes teamwork. It is set in the period of World War I, and is inspired by historical events.", 9.99, "First-Person Shooter", 4.4, "PS4", "images3/battle.jpg");
        var shooterOneV3 = new game("Battlefield 1 (Xbox One)", "DICE", "October 21, 2016", "Battlefield 1 is a first-person shooter game that emphasizes teamwork. It is set in the period of World War I, and is inspired by historical events.", 9.99, "First-Person Shooter", 4.4, "Xbox One", "images3/battle.jpg");
        var shooterTwoV1 = new game("Call of Duty: Infinite Warfare (Xbox One)", "Infinity Ward", "November 4, 2016", "the game introduces a new setting, outer space, new gameplay mechanics, such as zero-gravity environments, are included. Players are equipped with a boost pack, and a grappling hook, which allow players to move in these zero-gravity environments easily.", 12.99, "First-Person Shooter", 4,"Xbox One", "images3/duty.jpg");
        var shooterTwoV2 = new game("Call of Duty: Infinite Warfare (PS4)", "Infinity Ward", "November 4, 2016", "the game introduces a new setting, outer space, new gameplay mechanics, such as zero-gravity environments, are included. Players are equipped with a boost pack, and a grappling hook, which allow players to move in these zero-gravity environments easily.", 12.99, "First-Person Shooter", 4,"PS4", "images3/duty.jpg");
        var shooterTwoV3 = new game("Call of Duty: Infinite Warfare (PC)", "Infinity Ward", "November 4, 2016", "the game introduces a new setting, outer space, new gameplay mechanics, such as zero-gravity environments, are included. Players are equipped with a boost pack, and a grappling hook, which allow players to move in these zero-gravity environments easily.", 12.99, "First-Person Shooter", 4, "PC", "images3/duty.jpg");
        var shooterThreeV1 = new game("Call of Duty: Modern Warfare Remastered (Xbox One)", "Raven Software", "November 4,2016", "In thi game the player controls several characters during the single-player campaign, alternating from one to another between missions. It includes some modifications consisting of adjusted timing to existing gameplay animations, while remaining nearly identical to their original counterparts.", 14.99, "First-Person Shooter", 4, "Xbox One", "images3/duty2.jpg");
        var shooterThreeV2 = new game("Call of Duty: Modern Warfare Remastered (PS4)", "Raven Software", "November 4,2016", "In thi game the player controls several characters during the single-player campaign, alternating from one to another between missions. It includes some modifications consisting of adjusted timing to existing gameplay animations, while remaining nearly identical to their original counterparts.", 14.99, "First-Person Shooter", 4, "PS4", "images3/duty2.jpg");
        var shooterThreeV3 = new game("Call of Duty: Modern Warfare Remastered (PC)", "Raven Software", "November 4,2016", "In thi game the player controls several characters during the single-player campaign, alternating from one to another between missions. It includes some modifications consisting of adjusted timing to existing gameplay animations, while remaining nearly identical to their original counterparts.", 14.99, "First-Person Shooter", 4, "PC", "images3/duty2.jpg");
        var shooterFourV1 = new game("Call of Duty: Black Ops Cold War (Xbox One)", "Raven Software and Treyarch", "November 13,2020", "Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ", 24.99, "First-Person Shooter", 2,"Xbox One", "images3/duty3.jpg");
        var shooterFourV2 = new game("Call of Duty: Black Ops Cold War (Xbox Series X/S)", "Raven Software and Treyarch", "November 13,2020", "Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ", 24.99, "First-Person Shooter", 2,"Xbox Series X/S", "images3/duty3.jpg");
        var shooterFourV3 = new game("Call of Duty: Black Ops Cold War (PS4)", "Raven Software and Treyarch", "November 13,2020", "Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ", 24.99, "First-Person Shooter", 2,"PS4", "images3/duty3.jpg");
        var shooterFourV4 = new game("Call of Duty: Black Ops Cold War (PS5)", "Raven Software and Treyarch", "November 13,2020", "Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ", 24.99, "First-Person Shooter", 2,"PS5", "images3/duty3.jpg");
        var shooterFourV5 = new game("Call of Duty: Black Ops Cold War (PC)", "Raven Software and Treyarch", "November 13,2020", "Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ", 24.99, "First-Person Shooter", 2,"PC", "images3/duty3.jpg");
        var shooterFiveV1 = new game("Call of Duty: WWII (Xbox One)", "Sledgehammer Games", "November 3,2017", "The game's campaign is set in the European theatre and is centered around a squad in the 1st Infantry Division following their battles on the Western Front and set mainly in the historical events of Operation Overlord.", 19.99, "First-Person Shooter", 4,"Xbox One", "images3/duty4.jpg");
        var shooterFiveV2 = new game("Call of Duty: WWII (PC)", "Sledgehammer Games", "November 3,2017", "The game's campaign is set in the European theatre and is centered around a squad in the 1st Infantry Division following their battles on the Western Front and set mainly in the historical events of Operation Overlord.", 19.99, "First-Person Shooter", 4,"PC", "images3/duty4.jpg");
        var shooterFiveV3 = new game("Call of Duty: WWII (PS4)", "Sledgehammer Games", "November 3,2017", "The game's campaign is set in the European theatre and is centered around a squad in the 1st Infantry Division following their battles on the Western Front and set mainly in the historical events of Operation Overlord.", 19.99, "First-Person Shooter", 4,"PS4", "images3/duty4.jpg");

        var shooterArr = [shooterOneV1, shooterOneV2, shooterOneV3, shooterTwoV1, shooterTwoV2, shooterTwoV3, shooterThreeV1, shooterThreeV2, shooterThreeV3, shooterFourV1, shooterFourV2, shooterFourV3, shooterFourV4, shooterFourV5, shooterFiveV1, shooterFiveV2, shooterFiveV3];

        var games = actionAdArr.concat(racingArr.concat(sportsArr.concat(fightingArr.concat(shooterArr))));
        console.log(games);
        var newWindow;
        
        
        
        var platformChange = function () {
                    // Get the professor selected from the drop-down list
            var platform = document.getElementById("devices").value;
            
            // Create an img element dynamically
            var display = document.getElementById("displayContainer");
            
            display.innerHTML = "";
            
            // clear the contents of the div
            for (var i = 0; i < games.length; i++) {
                if (platform == games[i].platform) {
                    var title = document.createElement("h3");
                    title.innerHTML = games[i].title + "<br>Price: $" + games[i].price;
                    var newLine = document.createElement("br");
                    var moreDetails = document.createElement("button");
                    moreDetails.setAttribute("id", "btn" + i);
                    moreDetails.setAttribute("name", "btn" + i);
                    moreDetails.setAttribute("type", "button");

                    moreDetails.innerHTML = "Click for more details";

                    var closeBtn = document.createElement("button");
                    closeBtn.setAttribute("id", "closeBtn" + i);
                    closeBtn.setAttribute("name", "closeBtn" + i);
                    closeBtn.setAttribute("type", "button");
                    closeBtn.innerHTML = "Back to Search Results";
                    closeBtn.addEventListener("click", closeWindow);

                    var gameDiv = document.createElement("div");
                    var imageFile = games[i].image_URL;
                    var image = createImage(imageFile, "300px", "300px");
                    
                    
                   
                    
                    
                    var ratingDiv = document.createElement("div");
                    ratingDiv.setAttribute("class","ratDiv");
                    
                    var rate = games[i].game_rating;
                    var k = 0;
                    while(k < 5)
                    {
                        
                        var icon = document.createElement("img");
                        icon.setAttribute("id", "rat");
                        if (k < rate) {
                            icon.src = "images3/colRatingIcon.png";
                        }
                        else {
                            icon.src = "images3/ratingIcon.png";
                        }
                        k++;
                        ratingDiv.appendChild(icon);
                    }
                   
                    moreDetails.addEventListener("click", openWindow);
                    gameDiv.id = "gameContainer";
                    gameDiv.appendChild(title);
                    gameDiv.appendChild(image);
                    gameDiv.appendChild(ratingDiv);
                    gameDiv.appendChild(moreDetails);
                    gameDiv.appendChild(closeBtn);
                    gameDiv.appendChild(newLine);
                    display.appendChild(gameDiv);
                   
                }           
            }       
        };

        var genreChange = function () {
            //var platform = document.getElementById("devices").value;
            var genres = document.getElementById("genres").value;
            // Create an img element dynamically
            var display = document.getElementById("displayContainer");

            display.innerHTML = "";

            // clear the contents of the div
            for (var i = 0; i < games.length; i++) {
                if (genres == games[i].genre) {
                    var title = document.createElement("h3");
                    title.innerHTML = games[i].title + "<br>Price: $" + games[i].price;
                    var newLine = document.createElement("br");
                    var moreDetails = document.createElement("button");
                    moreDetails.setAttribute("id", "btn" + i);
                    moreDetails.setAttribute("class", "moreDetailsBtn");
                    moreDetails.setAttribute("name", "btn" + i);
                    moreDetails.setAttribute("type", "button");
                    
                    moreDetails.innerHTML = "Click for more details";

                    var closeBtn = document.createElement("button");
                    closeBtn.setAttribute("id", "closeBtn" + i);
                    closeBtn.setAttribute("class", "closeBtn");
                    closeBtn.setAttribute("name", "closeBtn" + i);
                    closeBtn.setAttribute("type", "button");
                    closeBtn.innerHTML = "Back to Search Results";
                    closeBtn.addEventListener("click", closeWindow);

                    var gameDiv = document.createElement("div");
                    var imageFile = games[i].image_URL;
                    var image = createImage(imageFile, "300px", "300px");





                    var ratingDiv = document.createElement("div");
                    ratingDiv.setAttribute("class", "ratDiv");

                    var rate = games[i].game_rating;
                    var k = 0;
                    while (k < 5) {

                        var icon = document.createElement("img");
                        icon.setAttribute("id", "rat");
                        if (k < rate) {
                            icon.src = "images3/colRatingIcon.png";
                        }
                        else {
                            icon.src = "images3/ratingIcon.png";
                        }
                        k++;
                        ratingDiv.appendChild(icon);
                    }

                    moreDetails.addEventListener("click", openWindow);
                    gameDiv.id = "gameContainer";
                    gameDiv.appendChild(title);
                    gameDiv.appendChild(image);
                    gameDiv.appendChild(ratingDiv);
                    gameDiv.appendChild(moreDetails);
                    gameDiv.appendChild(closeBtn);
                    gameDiv.appendChild(newLine);
                    display.appendChild(gameDiv);

                }
            }
            
        };

        function validatePrice() {
            //var mPrice = document.forms["numForm"]["Max_Price"].value;
            var m = document.getElementById("Max_Price").value;
          
            if (m == "") {
                alert("No price was entered. Please enter a price");
                return false;
            }
            
            if (isNaN(m) == true) {
                alert("Enter numerical values only without any spaces in between")
                return true;
            }
            m = parseFloat(m);
            return m;
        }
        
        

        var maxPrice = function () {
            //var platform = document.getElementById("devices").value;
            //var genres = document.getElementById("genres").value;
            
            

            var maxP = validatePrice();
            
            
            // Create an img element dynamically
            var display = document.getElementById("displayContainer");

            display.innerHTML = "";

            // clear the contents of the div
            for (var i = 0; i < games.length; i++) {
                if (Math.round(games[i].price) < maxP) {
                    var title = document.createElement("h3");
                    title.innerHTML = games[i].title + "<br>Price: $" + games[i].price;
                    var newLine = document.createElement("br");
                    var moreDetails = document.createElement("button");
                    moreDetails.setAttribute("id", "btn" + i);
                    moreDetails.setAttribute("name", "btn" + i);
                    moreDetails.setAttribute("type", "button");

                    moreDetails.innerHTML = "Click for more details";

                    var closeBtn = document.createElement("button");
                    closeBtn.setAttribute("id", "closeBtn" + i);
                    closeBtn.setAttribute("name", "closeBtn" + i);
                    closeBtn.setAttribute("type", "button");
                    closeBtn.innerHTML = "Back to Search Results";
                    closeBtn.addEventListener("click", closeWindow);

                    var gameDiv = document.createElement("div");
                    var imageFile = games[i].image_URL;
                    var image = createImage(imageFile, "300px", "300px");





                    var ratingDiv = document.createElement("div");
                    ratingDiv.setAttribute("class", "ratDiv");

                    var rate = games[i].game_rating;
                    var k = 0;
                    while (k < 5) {

                        var icon = document.createElement("img");
                        icon.setAttribute("id", "rat");
                        if (k < rate) {
                            icon.src = "images3/colRatingIcon.png";
                        }
                        else {
                            icon.src = "images3/ratingIcon.png";
                        }
                        k++;
                        ratingDiv.appendChild(icon);
                    }

                    moreDetails.addEventListener("click", openWindow);
                    gameDiv.id = "gameContainer";
                    gameDiv.appendChild(title);
                    gameDiv.appendChild(image);
                    gameDiv.appendChild(ratingDiv);
                    gameDiv.appendChild(moreDetails);
                    gameDiv.appendChild(closeBtn);
                    gameDiv.appendChild(newLine);
                    display.appendChild(gameDiv);

                }
            }

        };
        

        
        var openWindow = function () {
            //var oneDiv = document.getElementById("container");
            // oneDiv.innerHTML = "";
            //var gDiv = document.createElement("div");
            var index = this.id.replace("btn", "");
            


            var image = document.createElement("img");
            image.src = games[index].image_URL;
            image.style.display = 'block';
            image.style.width = 300 + "px";
            image.style.height = 300 + "px";
            newWindow = open("", "_blank", "width=800,height=1000");
            newWindow.document.write(games[index].title);
            newWindow.document.write("<br>");
            
            newWindow.document.write("Price: " + games[index].price + "<br>");
            newWindow.document.write(image.outerHTML + "<br>");

            var ratingDiv = document.createElement("div");
            ratingDiv.setAttribute("class", "ratDiv");

            var rate = games[index].game_rating;
            var k = 0;
            while (k < 5) {

                var icon = document.createElement("img");
                icon.setAttribute("id", "rat");
                icon.style.width = 3 + "%";
                icon.style.height = 3 + "%";
                if (k < rate) {
                    icon.src = "images3/colRatingIcon.png";
                }
                else {
                    icon.src = "images3/ratingIcon.png";
                }
                k++;
                ratingDiv.appendChild(icon);
            }
            newWindow.document.write(ratingDiv.outerHTML);
            newWindow.document.write("Platform: " + games[index].platform +"<br>");
            newWindow.document.write("Genre: " + games[index].genre + "<br>");
            newWindow.document.write("Developer: " + games[index].developer + "<br>");
            newWindow.document.write("Release Date: " + games[index].release_date + "<br>");
            newWindow.document.write("Decription: " + games[index].game_description);
            


           

        };

        var closeWindow = function () {

            //When the message box window exists and it's open, close the message box window.
            if (newWindow && !newWindow.closed)
                newWindow.close();
        };

        function createImage(file, width, height) {
            var image = document.createElement("img");
            var imageFile = file;

            if (image != null && image != undefined) {
                image.src = imageFile;
                image.style.width = width;
                image.style.height = height;
               
            }
            return image;           
        }
        var Display_Game = function () {
          
            //closeBtn.addEventListener("click", closeWindow)
            var form = open("https://localhost:44380/Lab3/Game.html","_self");
            
            
        };
       
        function validateTitle() {
           // var gTitle = document.forms["gameEntryForm"]["gameTitle"].value;
            var gTitle = document.getElementById("gameTitle").value;

            if (gTitle == "") {
                alert("No title was entered. Please enter a game title");
                return false;
            }
            return gTitle;
        }
        function validateDev() {
            //var gDev = document.forms["gameEntryForm"]["gameDev"].value;
            var gDev = document.getElementById("gameDev").value;

            if (gDev == "") {
                alert("No developer was entered. Please enter a developer");
                return false;
            }
            return gDev;
        }
       
        function validateDate() {
            //var gRel = document.forms["gameEntryForm"]["relDate"].value;
           var gRel = document.getElementById("relDate").value;

            if (gRel == "") {
                alert("No date was entered. Plead enter a date");
                return false;
            }
            return gRel;
        }
        function validateDesc() {
           // var gDesc = document.forms["gameEntryForm"]["gameDescrip"].value;
            var gDesc = document.getElementById("gameDescrip").value;

            if (gDesc.trim() == "") {
                alert("No description was entered. Please type a description");
                return false;
            }
            return gDesc;
        }
        function validatePrice2() {
            //var mPrice = document.forms["numForm"]["Max_Price"].value;
            var m = document.getElementById("gamePrice").value;

            if (m == "") {
                alert("No price was entered. Please enter a price");
                return false;
            }

            if (isNaN(m) == true) {
                alert("Enter numerical values only without any spaces in between")
                return true;
            }
            m = parseFloat(m);
            return m;
        }
        function validateGenre() {
            //var gGenre = document.forms["gameEntryForm"]["gameGenre"].value;
            var gGenre = document.getElementById("gameGenre").value;

            if (gGenre == "") {
                alert("No genre was selected. Please select a genre");
               
                return false;
            }
            return gGenre
        }
        
        function validateRating() {
            
           
            //var gRel = document.forms["gameEntryForm"]["relDate"].value;
           /* var gRating = document.getElementsByName("rating")
                .forEach(radio => {
                    if (radio.checked) {
                        return radio.value;
                    }
                    else {
                        alert("Select a rating")
                        return false;
                    }
                });*/

            var gRating = document.getElementsByName("rating");
            for (var i = 0; i < gRating.length; i++) {
                if (gRating[i].checked) {
                     return gRating[i].value;
                    
                }

            }
            alert("Select a rating");
            return false;
        }
        
        function validatePlat() {
            //var gPlat = document.forms["gameEntryForm"]["gPlats"].value;
            var gPlat = document.getElementById("gamePlatform").value;

            if (gPlat == "") {
                alert("No platform was selected. Please select a platform");
                return false;
            }
            return gPlat;
        }
        function validateURL() {
            //gURL = document.forms["gameEntryForm"]["gameURL"].value;
            var gURL = document.getElementById("gameURL").value;

            if (gURL == "") {
                alert("No URL was enter. Please enter a URL");
                return false;
            }
            if (gURL.endsWith("jpg") || gURL.endsWith("png")) {
                return gURL;
            }
            else {
                alert("Not a valid image address");
            }
        }
        
        var submitGame = function () {
           // alert("Submit button was clicked.")
            // var sub = document.getElementById("newG").value;
            var gTitle = validateTitle();
            var gDev = validateDev();
            var gRel = validateDate();
            var gDesc = validateDesc();
            var gPrice = validatePrice2();
            var gGenre = validateGenre();
            var gRating = validateRating();
            var gPlat = validatePlat();
            var gURL = validateURL();
            
            if (gTitle != false && gDev != false && gRel != false && gDesc != false && gPrice != false && gGenre != false && gRating != false && gPlat != false && gURL != false) {
                var newGame = new game(gTitle, gDev, gRel, gDesc, gPrice, gGenre, gRating, gPlat, gURL);

                games.push(newGame);

                alert("You successfully added " + gTitle + " to the website")
                document.getElementById("gameTitle").value = "";
                document.getElementById("gameDev").value = "";
                document.getElementById("relDate").value = "";
                document.getElementById("gameDescrip").value = "";
                document.getElementById("gamePrice").value = "";
                document.getElementById("gameGenre").value = "Racing"; //Default genre
                document.getElementsByName("rating").value = "3"; //Default rating
                document.getElementById("gamePlatform").value = "PC"; //Default platform
                document.getElementById("gameURL").value = "";
            }
            
            
            //window.location.href ="/Lab3/Game.html";
           
        };
        

      

        document.getElementById("devices").onchange = platformChange;
        document.getElementById("genres").onchange = genreChange;
        document.getElementById("enter").onclick = maxPrice;
        document.getElementById("addNewGameBtn").onclick = Display_Game;
        document.getElementById("subFormBtn").onclick = submitGame;

    };
