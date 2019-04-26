var $pageContent = $("#Content1");
var $pageTitle = $("#titleContent1");
var $titleBanner = $("#titleBanner");

//click action map
var clickActions = {};
//catch all click events
$(document.body).on("click", "*", function (elem) {
    var $this = $(this);

    var actionName = $this.data("click") || false;

    if (typeof clickActions[actionName] === 'function') {
        clickActions[actionName].call(this, elem);
    }
});

//document.onload = function()
window.onload = function () {

    $pageTitle.text("Website is under development!");
    $pageContent.html("<p>Please check back later!</p>");

};

clickActions["nav-home"] = function (e) {
    //Should actually make a separate page and load that up? ehh
    //window.location.href = "index.html";
    $pageTitle.text("Website is under development!");
    $pageContent.html("<p>Please check back later!</p>");
    toggleBannerImg(1);

};

clickActions["nav-team"] = function (e) {

    $pageContent.load("pages/TeamMember.html", replaceTitle("Team Members"));
    toggleBannerImg(1);

};

clickActions["nav-media"] = function (e) {
    $pageContent.load("pages/Media.html", function () {
        replaceTitle("Media");
        toggleBannerImg();
    });

};

clickActions["nav-contact"] = function (e) {

    $pageContent.load("pages/Contact.html", replaceTitle("Contact Us"));
    toggleBannerImg();

};

function replaceTitle(newTitle) {
    $pageTitle.text(newTitle);
}

function toggleBannerImg(show) {
    if (show !== null) {
        if (show == true) {
            $titleBanner.slideDown("fast");
        } else {
            $titleBanner.slideUp("fast");
        }
    }
}
