$(document).ready(function () {
    var illustrations = [
        {
            title: "Burger",
            collection: "Eat-da-Burger",
            image: "assets/images/burger/burger_burger.png"
        },
        {
            title: "Glamour Girl",
            collection: "Old Hollywood Glamour",
            image: "assets/images/oldhollywood/glamourgirl.png"
        },
        {
            title: "Train",
            collection: "Train Scheduler",
            image: "assets/images/train/train-01.png"
        },
        {
            title: "Dog",
            collection: "SitterFinder",
            image: "assets/images/sitterfinder/dog-01.png"
        },
        {
            title: "Search Icon",
            collection: "SitterFinder",
            image: "assets/images/sitterfinder/dog-04.png"
        },
        {
            title: "Calendar Icon",
            collection: "SitterFinder",
            image: "assets/images/sitterfinder/dog-05.png"
        },
        {
            title: "Apple",
            collection: "ClickyFruit!",
            image: "assets/images/fruits/cutefruits-08.png"
        },
        {
            title: "Pear",
            collection: "ClickyFruit!",
            image: "assets/images/fruits/cutefruits-06.png"
        },
        {
            title: "Orange",
            collection: "ClickyFruit!",
            image: "assets/images/fruits/cutefruits-07.png"
        },
        {
            title: "Banana",
            collection: "ClickyFruit!",
            image: "assets/images/fruits/cutefruits-01.png"
        },
        {
            title: "Lemon",
            collection: "ClickyFruit!",
            image: "assets/images/fruits/cutefruits-03.png"
        },
        {
            title: "Cherry",
            collection: "ClickyFruit!",
            image: "assets/images/fruits/cutefruits-04.png"
        },
    ];

    illustrations.forEach(function (item) {
        var newCol = $("<div>");
        newCol.addClass("col-6 col-sm-4 col-md-3 col-lg-2 imgCol");
        newCol.attr("data-url", item.image);
        var newInnerDiv = $("<div>");
        newInnerDiv.addClass("inner-div");
        var newLink = $("<a>");
        newLink.addClass("example-image-link");
        newLink.attr("href", item.image);
        newLink.attr("data-lightbox", "example-set");
        newLink.attr("data-title", item.title);
        var newImg = $("<img>")
        newImg.addClass("example-image photo-thumb img-fluid");
        newImg.attr("src", item.image);
        newImg.attr("alt", item.title);
        newLink.append(newImg);
        newInnerDiv.append(newLink);
        newCol.append(newInnerDiv);
        $("#row-ill").append(newCol);
    })
})