/*

--------------------- Greet Script JS ---------------------
This script is licensed under the open-source MIT License.
made by @cybrneon
Last updated 20th Oct. 2022
Version 1.0.2

*/

var today = new Date();
var time = today.getHours();
var greet;

if (time == 1) // If the user's time is 1AM, output this text ->
    {
        greet = "It's 1AM, what are you doing?";
    }
    else if (time == 2)
    {
        greet = "2PM... did the cat wake you up?";
    }
    else if (time == 3)
    {
        greet = "You probably have to go sleep...";
    }
    else if (time == 4)
    {
        greet = "zzzzzzzz...";
    }
    else if (time == 5)
    {
        greet = "...Almost daylight...zzzzz...";
    }
    else if (time == 6)
    {
        greet = "It's probably a bit early to be on the internet but, hi!";
    }
    else if ((time == 6) || (time == 7) || (time == 8) || (time == 9) || (time == 10))
    {
        greet = "Good Morning,";
    }
    else if (time == 11)
    {
        greet = "...is it time for launch yet?";
    }
    else if (time == 12)
    {
        greet = "Bon appétit!";
    }
    else if (time == 13)
    {
        greet = "Bon appétit!";
    }
    else if (time == 14)
    {
        greet = "A great afternoon awaits,";
    }
    else if((time == 15) || (time == 16))
    {
        greet = "Good Afternoon,";
    }
    else if ((time == 17) || (time == 18) || (time == 19) || (time == 20) || (time == 21) || (time == 22))
    {
        greet = "Good Evening,";
    }
    else if (time == 23)
    {
        greet = "Almost midnight,";
    }
    else if (time == 0)
    {
        greet = "Aren't you supposed to be sleeping?";
    }
    else
    {
        greet = "ERROR 0x0833 /An error occured. Check GreetScriptJS on GitHub for help.";
    }

window.onload = function () //The target text on your HTML
{
    var show = document.getElementById('greetings-text');
    show.textContent = greet;
};