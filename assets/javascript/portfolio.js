
$(document).ready(function () {
    var projects = [
        {
            title: "ClickyFruit!",
            description: "A React application game that reshuffles cards and tracks cards the users has clicked on, adding points each time a user clicks a card that hasn't been clicked before.",
            uses: "React.js, Bootstrap",
            github: "https://github.com/lmcguigan/clicky-game",
            live: "https://lmcguigan.github.io/clicky-game/",
            thumb: "assets/images/clicky.png"
        },
        {
            title: "ArtNews Scraper",
            description: "An application that scrapes the ArtNews website for articles and allows users to save articles and notes.",
            uses: "Mongoose, MongoDB, Request, Cheerio, Express.js, Handlebars",
            github: "https://github.com/lmcguigan/mongo-scraper",
            live: "https://secure-river-70647.herokuapp.com/",
            thumb: "assets/images/scraper.png"
        },
        {
            title: "SitterFinder (Collaborative Project)",
            description: "An application that allows users to search available pet sitters in their area by location and service offered, and provides an interface for viewing and deleting upcoming reservations. Role: Front-End Developer, Search Functionality Developer.",
            uses: "Sequelize, MySQL, Express.js, Handlebars",
            github: "https://github.com/lmcguigan/sitter-finder",
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
            title: "New York Times Search",
            description: "A React application game that searches the NYT API for articles, allows users to save/delete articles in the database and add/delete notes.",
            uses: "React.js, MongoDB, Axios, Bootstrap",
            github: "https://github.com/lmcguigan/nyt-search",
            live: "https://blooming-atoll-67872.herokuapp.com/",
            thumb: "assets/images/nyt.png"
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
        var itemTitle = $("<div>");
        itemTitle.attr("class", "row")
        itemTitle.attr("id", "titleRow")
        var titleCol = $("<div>");
        titleCol.attr("class", "col-6");
        var titleText = $("<h3>")
        titleText.attr("class", "title-text");
        titleText.text(item.title);
        titleCol.append(titleText);
        itemTitle.append(titleCol);
        var links = $("<div>")
        links.attr("class", "col-6 text-align-right");
        if (item.live === "") {
            var gitLink = $("<a>");
            gitLink.attr("class", "project-link");
            gitLink.attr("href", item.github);
            gitLink.text("Github");
            links.append(gitLink);
            itemTitle.append(links);
        }
        else {
            var liveLink = $("<a>");
            liveLink.attr("href", item.live);
            liveLink.attr("class", "project-link");
            liveLink.text("Live");
            links.append(liveLink);
            var breaker = $("<span>");
            breaker.addClass("grey");
            breaker.text(" | ");
            links.append(breaker);
            var gitLink = $("<a>");
            gitLink.attr("class", "project-link");
            gitLink.attr("href", item.github);
            gitLink.text("Github");
            links.append(gitLink);
            itemTitle.append(links);
        }
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
});