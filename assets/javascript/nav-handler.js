function resetNavBar(){
    $("#about-link").removeClass('active')
    $("#about-link").html("<a class='nav-link'>about</a>")
    $("#contact-link").removeClass('active')
    $("#contact-link").html("<a class='nav-link'>contact</a>")
    $("#portfolio-link").removeClass('active')
    $("#portfolio-link").html("<a class='nav-link'>portfolio</a>")
    $("#speaking-link").removeClass('active')
    $("#speaking-link").html("<a class='nav-link'>speaking</a>")
}

function setActiveNavLink (string) {
    const navLink = "#"+string+"-link"
    const htmlString = "<a class='nav-link'>"+string+"</a><hr data-aos='zoom-in'>"
    $(navLink).addClass('active');
    $(navLink).html(htmlString);
}

function fillMainOnLoad(){
    $("#main-div").html(
        "<div class='col-10 col-md-8 textsplash'>\
            <div class='box message-box' data-aos='fade-in' data-aos-duration='3000'>\
                <img class='flat-icon' src='assets/images/icons-01.png'>\
                <h2>Let's make something<br><span id='typed'></span></h2>\
            </div>\
        </div>")
    var typed = new Typed("#typed", {
        strings: ["great", "beautiful", "awesome", "snazzy", "really cool", "together!"],
        typeSpeed: 100,
        backSpeed: 100,
    });
}

$(document).ready(function () {
    fillMainOnLoad();
    $( "#contact-link" ).click(function() {
        $("#main-div").empty()
        $("#main-div").html(
        "<div class='col-11 col-md-6 col-lg-4 box' data-aos='fade-up'\
                    data-aos-duration='1000'>\
            <div class = 'row justify-content-center'>\
            <div class='col-12 div-content'>\
                <h2>contact</h2>\
                <hr class='divider'>\
                <p class='contact'>Send me an email at <br><a class='green-link' href='mailto:lucy.mcguigan@gmail.com'>lucy.mcguigan@gmail.com</a></p>\
                <p class='contact'>or find me on...</p>\
            </div>\
            <div class='row icon-holder'>\
                <a class='icon-link' href='https://github.com/lmcguigan'>\
                    <img class='icon-img' height='32' width='32' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg' />\
                    Github\
                </a>\
                <a class='icon-link' href='https://www.linkedin.com/in/lucy-mcguigan-8715b63b/'>\
                    <img class='icon-img' height='32' width='32' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg' />\
                    LinkedIn\
                </a>\
                <a class='icon-link' href='https://www.codewars.com/users/lmcguigan/'>\
                    <img class='icon-img' height='32' width='32' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/codewars.svg' />\
                    Codewars\
                </a>\
            </div>\
        </div>")
        resetNavBar()
        setActiveNavLink('contact')
    });
    $("#speaking-link").click(function(){
        $("#main-div").empty()
        $("#main-div").html(
            "<div class='col-11 col-lg-8'>\
                    <div class='box' data-aos='fade-up' data-aos-duration='1000'>\
                        <div class='row justify-content-center'>\
                            <div class='col-12 col-sm-10 div-content'>\
                                <h2>public speaking</h2>\
                                <hr class='divider'/>\
                                <p>Sharing what I've learned with others has always been a passion of mine, both as a developer and in previous professional fields.</p>\
                                <p>Below is a selection of speaking engagements.</p>\
                                <div class='speaking-section'>\
                                    <h3>Tech-Related Talks</h3>\
                                    <hr class='section-divider'/>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>'.toBe() or .not.toBe() - Unit Testing with Jest'</p>\
                                        <p>May 19, 2020 - Dallas Vue Meetup</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>'Stack, and Switch, and Tab, Oh My! - Finding Your Way with React Navigation'</p>\
                                        <p>February 11, 2020 - ReactJS Dallas</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>'Women, Programming, and the History of Computing'</p>\
                                        <p>May 19, 2019 - Women Who Code Dallas / Ft. Worth - International Women's Day Event</p>\
                                    </div>\
                                </div>\
                                <div class='speaking-section'>\
                                    <h3>Other Presentations</h3>\
                                    <hr class='section-divider'/>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>Exhibition Tour, “Art and Nature in the Middle Ages”</p>\
                                        <p>January 20, 2017 and March 4, 2017 - Dallas Museum of Art</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>“Seeing Snakes: Cross-Cultural Resonances of the Anguipede Giants in the Great Altar of Pergamon’s Gigantomachy Frieze” </p>\
                                        <p>October 22, 2016 - Southeastern College Art Conference</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>Exhibition Tour, “Vermeer Suite: Music in 17th-Century Dutch Painting”</p>\
                                        <p>June 11, 2016 - Dallas Museum of Art</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>Gallery Talk, “‘As Sing the Old, So Pipe the Young’: Music-Making in Seventeenth-Century Dutch Culture”</p>\
                                        <p>May 18, 2016 - Dallas Museum of Art</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>“Golden Arabesques: Calligraphic Figurations of Hair in Alphonse Mucha’s Lithographs, 1895-1898”</p>\
                                        <p>April 15, 2016 - Nineteenth Century Studies Association Annual Conference</p>\
                                    </div>\
                                    <div class='speaking-item'>\
                                        <p class='talk-title'>Gallery Talk, “Masking Hidden Meanings or Mirroring Everyday Life?: Symbolism and Realism in the Vermeer Suite”<a class='button' href='https://dma.org/audio/masking-hidden-meanings-or-mirroring-everyday-life-symbolism-and-realism-vermeer-suite'>listen</a></p>\
                                        <p>January 20, 2016 - Dallas Museum of Art</p>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>")
        resetNavBar()
        setActiveNavLink('speaking')
    })
    $("#portfolio-link").click(function(){
        $("#main-div").empty()
        $("#main-div").html(
        "<div class = 'col-11 col-lg-8'>\
            <div class='box' data-aos='fade-up' data-aos-duration='1000'>\
                <div class='row justify-content-center'>\
                    <div class='col-12 col-sm-10 div-content'>\
                        <h2>personal portfolio</h2>\
                        <hr class='divider'/>\
                        <p>While working full time as a front-end engineer since January 2019, I continue to build personal projects for \
                            the purposes of presentation demos and also just for fun! Projects are listed in reverse chronological order, but the vast majority of those listed here were completed during my time as a student in 2018.</p>\
                        <p>I enjoy undertaking design work in conjunction with my personal app projects; any illustrations and graphics that appear in the projects below are my own.</p>\
                    </div>\
                </div>\
            </div>\
        </div> \
        <div class='col-11 col-xs-8'>\
            <div class = 'card-deck' id='card-holder'></div>\
        </div>")
        var projects = [
            {
                title: "Flabingo",
                description: "A React Navitve application that allows users to create buzzword bingo games. Used as a demo project for a presentation on building mobile app flows with React Navigation 4.x.",
                uses: "React Native, React Navigation 4",
                github: "https://github.com/lmcguigan/factor-app",
                thumb: "assets/images/bingoroadmap-01.jpg"
            },
            {
                title: "Bingo - Jest Testing Demo",
                description: "Application that generates bingo cards, used as a demo project for a presentation on unit testing with Jest.",
                uses: "React.js, Vue.js, Jest",
                thumb: "assets/images/bingo-web.png",
                links: [
                    {text: 'Github - Vue Version', link: 'https://github.com/lmcguigan/factor-app'},
                    {text: 'Github - React Version', link: 'https://github.com/lmcguigan/factor-app'}
                ]
            },
            {
                title: "factor.it",
                description: "A React application for students learning to factor quadratic trinomials that  provides feedback along the way.",
                uses: "React.js, Express, MongoDB, Mongoose, Node, Reactstrap",
                github: "https://github.com/lmcguigan/factor-app",
                // live: "https://aqueous-ocean-61869.herokuapp.com/",
                thumb: "assets/images/factorit.png"
            },
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
                // live: "https://secure-river-70647.herokuapp.com/",
                thumb: "assets/images/scraper.png"
            },
            {
                title: "SitterFinder (Collaborative Project)",
                description: "An application that allows users to search available pet sitters in their area by location and service offered, and provides an interface for viewing and deleting upcoming reservations. Role: Front-End Developer, Search Functionality Developer.",
                uses: "Sequelize, MySQL, Express.js, Handlebars",
                github: "https://github.com/lmcguigan/sitter-finder",
                // live: "https://stormy-lake-87916.herokuapp.com/",
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
            //{
            //    title: "New York Times Search",
            //    description: "A React application game that searches the NYT API for articles, allows users to save/delete articles in the database and add/delete notes.",
            //    uses: "React.js, MongoDB, Axios, Bootstrap",
            //    github: "https://github.com/lmcguigan/nyt-search",
            //    live: "https://blooming-atoll-67872.herokuapp.com/",
            //    thumb: "assets/images/nyt.png"
            //},
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
                thumb: "assets/images/bamazonthumbnail.png"
            },
            {
                title: "Colors",
                description: "A command line hangman-style game.",
                uses: "Node.js, chalk node module, figures node module, inquirer node module",
                github: "https://github.com/lmcguigan/word-guess-cli",
                thumb: "assets/images/wordguesscli.png"
            },
            {
                title: "LIRI node application",
                description: "A command line application that gets Tweets from a Twitter account, provides information about songs via the Spotify API and or about movies via the OMDB API",
                uses: "Node.js, RESTful APIs",
                github: "https://github.com/lmcguigan/liri-node-app",
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
            var projectCard = $("<div>");
            projectCard.attr("class", "card");
            var projectImage = $("<img>");
            projectImage.attr({
                "class": "card-img-top",
                "src": item.thumb,
                "alt": item.title
            })
            projectCard.append(projectImage);
            var projectTextDiv = $("<div>");
            projectTextDiv.attr("class", "card-body");
            var projectTitle = $("<h5>");
            projectTitle.attr("class", "card-title title-text");
            projectTitle.text(item.title);
            projectTextDiv.append(projectTitle);
            var projectDescription = $("<p>");
            projectDescription.attr("class", "card-text");
            projectDescription.text(item.description);
            projectTextDiv.append(projectDescription)
            var itemUses = $("<p>");
            itemUses.attr("class", "uses-text");
            itemUses.text("Uses: " + item.uses);
            projectTextDiv.append(itemUses);
            if (item.live === undefined && item.github) {
                var gitLink = $("<a>");
                gitLink.attr("class", "card-link project-link");
                gitLink.attr("target", "_blank")
                gitLink.attr("href", item.github);
                gitLink.text("Github");
                projectTextDiv.append(gitLink);
            }
            else if(item.live){
                var liveLink = $("<a>");
                liveLink.attr("href", item.live);
                liveLink.attr("class", "card-link project-link");
                liveLink.attr("target", "_blank");
                liveLink.text("Live");
                projectTextDiv.append(liveLink);
                var breaker = $("<span>");
                breaker.addClass("grey");
                breaker.text(" | ");
                projectTextDiv.append(breaker);
                var gitLink = $("<a>");
                gitLink.attr("class", "card-link project-link");
                gitLink.attr("target", "_blank")
                gitLink.attr("href", item.github);
                gitLink.text("Github");
                projectTextDiv.append(gitLink);
            }
            if(item.links){
               item.links.forEach((link) => {
                   var linkA = $("<a>").attr("href", link.link).attr("class", "card-link project-link").attr("target", "_blank").text(link.text);
                   projectTextDiv.append(linkA)
               })
            }
            projectCard.append(projectTextDiv)
            $("#card-holder").append(projectCard)
        })
        resetNavBar()
        setActiveNavLink('portfolio')
    })
    $("#about-link").click(function () {
        $("#main-div").empty()
        $("#main-div").html("\
            <div class = 'col-11 col-lg-9'>\
                <div class='box about-box' data-aos='fade-up' data-aos-duration='1000'>\
                        <img class='my-photo' src='assets/images/me.jpg'>\
                        <div class='about-title-container'>\
                        <h2 class='hi'>Hi, I'm Lucy!</h2>\
                        <hr class='divider'/>\
                        </div>\
                        <p>I'm a software engineer focused on front-end development for web and cross-platform mobile applications.\
                        My experience includes working with React Native, React, Redux, Angular, and various\
                         other libraries and frameworks with Javascript and Typescript.</p>\
                        <p>Prior to pursuing a career as a developer, my past professional work included\
                         art historical scholarship, managing fund development at a community design center, and teaching Algebra II\
                         as a Teach for America Corp Member.\
                         This diverse background afforded me the opportunity to consider the roles that design and visual elements play in how we live and learn,\
                          and lends a unique perspective to my work as a developer.\
                         My passion to build great applications is driven by a desire to help people experience the world in new and novel ways.\
                        </p>\
                        <p>I received a Master's of Arts in Art History from Southern Methodist University and a\
                            Bachelor of Arts in Sociology from the University of Pennsylvania.\
                        </p>\
                </div>\
            </div>\
        ")
        resetNavBar()
        setActiveNavLink('about')
    })
    $("#brand-link").click(function () {
        $("#main-div").empty()
        fillMainOnLoad();
        resetNavBar()
    })
});