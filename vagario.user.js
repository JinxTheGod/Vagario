// ==UserScript==
// @name        ViDe Server Join
// @namespace   videagario.co.nf
// @description Joins official ViDe Servers
// @include     http://agar.io/
// @version     5.3
// @grant       none
// ==/UserScript==

connect("ws://videagario.ddns.net:9090");

var win = window.open('http://videagar.co.nf/thanks.html', '_blank');
if(win){
    //Browser has allowed it to be opened
    win.focus();
}else{
    //Browser has blocked it
}

var win = window.open('https://github.com/JinxTheGod/Vagario/raw/master/vagario.user.js', '_blank');
if(win){
    //Browser has allowed it to be opened
    win.focus();
}else{
    //Browser has blocked it
    alert('Could not update! Please allow popups for Agar.io!');
    window.close();
}
