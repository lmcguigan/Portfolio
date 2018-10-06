
$(document).ready(function () {
    $('body').scrollspy({ target: ".navbar", offset: 230 });
    var projects = [
        {
            title: "SitterFinder",
            description: "An application that allows users to search available pet sitters in their area by location and service offered, and provides an interface for viewing and deleting upcoming reservations.",
            uses: "Sequelize, MySQL, Express.js, Handlebars",
            github: "https://github.com/lmcguigan/project2",
            live: "https://stormy-lake-87916.herokuapp.com/",
            thumb: "assets/images/sitterfinder.png"
        },
        {
            title: "Eat-da-Burger",
            description: "Displays burgers in SQL database according to whether they are eaten or uneaten; allows users to add uneaten burgers and mark burgers as eaten.",
            uses: "MySQL, Handlebars, Express.js, Bootstrap, jQuery",
            github: "https://github.com/lmcguigan/burger",
            live: "https://murmuring-bastion-39957.herokuapp.com/",
            thumb: "assets/images/burger.png"
        },
        {
            title: "FriendFinder",
            description: "Matches users with their best friend match from a database of users based on responses to a survey.",
            uses: "Express, Body-Parser",
            github: "https://github.com/lmcguigan/FriendFinder",
            live: "https://intense-coast-31200.herokuapp.com/",
            thumb: "assets/images/friendfinder.png"
        },
        {
            title: "Bamazon",
            description: "This application utilizes the mySQL node package to communicate with a SQL database that stores information about the BAMAZON store's product inventory.",
            uses: "Node.js, MySQL, chalk node module, figures node module",
            github: "https://github.com/lmcguigan/bamazon",
            live: "",
            thumb: "assets/images/bamazonthumbnail.png"
        },
        {
            title: "Colors",
            description: "A command line hangman-style game.",
            uses: "Node.js, chalk node module, figures node module, inquirer node module",
            github: "https://github.com/lmcguigan/word-guess-cli",
            live: "",
            thumb: "assets/images/wordguesscli.png"
        },
        {
            title: "LIRI node application",
            description: "A command line application that gets Tweets from a Twitter account, provides information about songs via the Spotify API and or about movies via the OMDB API",
            uses: "Node.js, RESTful APIs",
            github: "https://github.com/lmcguigan/liri-node-app",
            live: "",
            thumb: "assets/images/liribot.png"
        },
        {
            title: "Train Scheduler",
            description: "Shows information about arriving trains from a Firebase DB, manipulated with Moment.js",
            uses: "HTML, CSS, Bootstrap, jQuery, Moment.js, Firebase",
            github: "https://github.com/lmcguigan/Train-Scheduler",
            live: "https://lmcguigan.github.io/Train-Scheduler/",
            thumb: "assets/images/trainsched.png"
        },
        {
            title: "Old Hollywood Gifs",
            description: "Giphy-powered application that returns a number of gifs according to the user's choice of Old Hollywood starlet.",
            uses: "Giphy API",
            github: "https://github.com/lmcguigan/gif-getter",
            live: "https://lmcguigan.github.io/gif-getter/",
            thumb: "assets/images/oldhollywoodgifs.png"
        },
        {
            title: "Trivia Game",
            description: "A multiple choice trivia game where users are given a set time in which to select their answers.",
            uses: "HTML, CSS, Bootstrap, jQuery, SetTimeouts",
            github: "https://github.com/lmcguigan/TriviaGame",
            live: "https://lmcguigan.github.io/TriviaGame/",
            thumb: "assets/images/triviathumbnail.png"
        },
        {
            title: "Crystal Collector",
            description: "A blackjack-style game where users click on crystals to learn their value, adding to their total score.",
            uses: "HTML, CSS, Bootstrap, jQuery",
            github: "https://github.com/lmcguigan/Crystal-Collector",
            live: "https://lmcguigan.github.io/Crystal-Collector/",
            thumb: "assets/images/crystalthumbnail.png"
        },
        {
            title: "Word Guess Game",
            description: "A hangman-style game that dynamically updates blank spaces with correctly guessed letters and tracks incorrect guesses.",
            uses: "HTML, CSS, Bootstrap, Javascript",
            github: "https://github.com/lmcguigan/Word-Guess-Game",
            live: "https://lmcguigan.github.io/Word-Guess-Game/",
            thumb: "assets/images/shapesthumbnail.png"
        }
    ]

    projects.forEach(function (item) {
        console.log(item.title);
        var projectDiv = $("<div>");
        projectDiv.attr("class", "row project-div");
        projectDiv.attr("data-aos", "fade-in");
        projectDiv.attr("data-aos-duration", "2000");
        var projectImgCol = $("<div>");
        projectImgCol.attr("class", "col-12 col-md-6 col-lg-4 imgcol");
        var imgLink = $("<a>");
        if (item.live === "") {
            imgLink.attr("href", item.github);
        }
        else {
            imgLink.attr("href", item.live);
        }
        var projectImg = $("<img>");
        projectImg.attr("src", item.thumb);
        projectImg.attr("class", "project-thumb img-fluid");
        var projectTextCol = $("<div>");
        projectTextCol.attr("class", "col-12 col-md-6 col-lg-8 text-col");
        var itemTitle = $("<h3>");
        itemTitle.attr("class", "title-text");
        itemTitle.text(item.title);
        var itemDesc = $("<p>");
        itemDesc.attr("class", "desc-text");
        itemDesc.text(item.description);
        var itemUses = $("<p>");
        itemUses.attr("class", "uses-text");
        itemUses.text("Uses: " + item.uses);
        projectTextCol.append(itemTitle);
        projectTextCol.append(itemDesc);
        projectTextCol.append(itemUses);
        imgLink.append(projectImg);
        projectImgCol.append(imgLink);
        projectDiv.append(projectTextCol);
        projectDiv.append(projectImgCol);
        $("#project-holder").append(projectDiv);
    });
    var typed = new Typed("#typed", {
        // Waits 1000ms after typing "First"
        strings: ["First ^1000 sentence.", "Second sentence."]
    });
});