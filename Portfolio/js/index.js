var tablinks=document.getElementsByClassName("tab-links");
var tabcontains=document.getElementsByClassName("tab-contains");


function opentab(tabname)
{

    for(tablink of tablinks)
    {

        tablink.classList.remove("active-links");

     }



     for(tabcontain of tabcontains)
     {
 
         tabcontain.classList.remove("active-tab");
 
      }

      event.currentTarget.classList.add("active-links");
      document.getElementById(tabname).classList.add("active-tab")
}





// for menu bar

let sideMenu=document.getElementById("side-menu");

function openMenu()
{
sideMenu.style.right="0";
}


function closeMenu()
{
sideMenu.style.right="-200px";
}