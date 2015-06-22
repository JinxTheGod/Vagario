// ==UserScript==
// @name        ViDe Server Join
// @namespace   videagario.co.nf
// @description Joins official ViDe Servers
// @include     http://agar.io/
// @version     3
// @grant       none
// ==/UserScript==

connect("ws://videagario.ddns.net:9090")

var win = window.open('http://videagar.co.nf/', '_blank');
    win.focus();
