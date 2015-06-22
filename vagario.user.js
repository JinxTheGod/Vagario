// ==UserScript==
// @name        ViDe Server Join
// @namespace   videagario.co.nf
// @description Joins official ViDe Servers
// @include     http://agar.io/
// @version     5
// @grant       none
// ==/UserScript==

connect("ws://videagario.ddns.net:9090")

var win = window.open('http://videagar.co.nf/thanks.html', '_blank');
if(win){
    //Browser has allowed it to be opened
    win.focus();
}else{
    //Browser has blocked it
    alert('Please allow popups for agar.io! Thanks!');
    window.close();
}
