var indexPageContent = document.querySelector("#Content1");

//document.onload = function()
window.onload = function()
{
    
//    indexPageContent.remove();
    while (indexPageContent.firstChild) 
    {
        indexPageContent.removeChild(indexPageContent.firstChild);
    }
    
    indexPageContent.innerHTML = "<p>Website is under development! Please check back later!</p>";

    
    //$("#Content1").load("TeamMember.html");
};

