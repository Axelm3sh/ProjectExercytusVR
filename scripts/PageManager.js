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
window.onload = function()
{
    
    $pageTitle.text("Website is under development!");
    $pageContent.html("<p>Please check back later!</p>");

};

clickActions["nav-home"] = function (e) {
    //Should actually make a separate page and load that up? ehh
    //window.location.href = "index.html";
    $pageTitle.text("Website is under development!");
    $pageContent.html("<p>Please check back later!</p>");
    
}

clickActions["nav-team"] = function (e) {
    
    $("#Content1").load("pages/TeamMember.html", replaceTitle("Team Members"));
    
}

function replaceTitle(newTitle)
{
    $pageTitle.text(newTitle);
}