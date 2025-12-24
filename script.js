(function(){function r(a){gsap.killTweensOf(a,{opacity:!0});gsap.fromTo(a,{opacity:1},{duration:.07,opacity:Math.random(),repeat:-1})}function t(a){e&&(a=l[d],gsap.set(a,{x:gsap.getProperty(".pContainer","x"),y:gsap.getProperty(".pContainer","y"),scale:m()}),gsap.timeline().to(a,{duration:gsap.utils.random(.61,6),physics2D:{velocity:gsap.utils.random(-23,23),angle:gsap.utils.random(-180,180),gravity:gsap.utils.random(-6,50)},scale:0,rotation:gsap.utils.random(-123,360),ease:"power1",onStart:r,onStartParams:[a],
onRepeat:function(b){gsap.set(b,{scale:m()})},onRepeatParams:[a]}),d++,d=201<=d?0:d)}MorphSVGPlugin.convertToPath("polygon");document.querySelector(".pContainer");var u=document.querySelector(".mainSVG");document.querySelector("#star");var c=document.querySelector(".sparkle");document.querySelector("#tree");var e=!0,n="#E8F6F8 #ACE8F8 #F6FBFE #A2CBDC #B74551 #5DBA72 #910B28 #910B28 #446D39".split(" "),p=["#star","#circ","#cross","#heart"],l=[],d=0;gsap.set("svg",{visibility:"visible"});gsap.set(c,
{transformOrigin:"50% 50%",y:-100});c=function(a){var b=[],f=MotionPathPlugin.getRawPath(a)[0];f.forEach(function(v,g){var h={};h.x=f[2*g];h.y=f[2*g+1];g%2&&b.push(h)});return b};c(".treePath");var q=c(".treeBottomPath");c=gsap.timeline({delay:0,repeat:0});var k,m=gsap.utils.random(.5,3,.001,!0);(function(){for(var a=201,b;-1<--a;)b=document.querySelector(p[a%p.length]).cloneNode(!0),u.appendChild(b),b.setAttribute("fill",n[a%n.length]),b.setAttribute("class","particle"),l.push(b),gsap.set(b,{x:-100,
y:-100,transformOrigin:"50% 50%"})})();(function(){k=gsap.timeline({onUpdate:t});k.to(".pContainer, .sparkle",{duration:6,motionPath:{path:".treePath",autoRotate:!1},ease:"linear"}).to(".pContainer, .sparkle",{duration:1,onStart:function(){e=!1},x:q[0].x,y:q[0].y}).to(".pContainer, .sparkle",{duration:2,onStart:function(){e=!0},motionPath:{path:".treeBottomPath",autoRotate:!1},ease:"linear"},"-=0").from(".treeBottomMask",{duration:2,drawSVG:"0% 0%",stroke:"#FFF",ease:"linear"},"-=2")})();c.from([".treePathMask",
".treePotMask"],{drawSVG:"0% 0%",stroke:"#FFF",stagger:{each:6},duration:gsap.utils.wrap([6,1,2]),ease:"linear"}).from(".treeStar",{duration:3,scaleY:0,scaleX:.15,transformOrigin:"50% 50%",ease:"elastic(1,0.5)"},"-=4").to(".sparkle",{duration:3,opacity:0,ease:"rough({strength: 2, points: 100, template: linear, taper: both, randomize: true, clamp: false})"},"-=0").to(".treeStarOutline",{duration:1,opacity:1,ease:"rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})"},
"+=1");c.add(k,0);gsap.globalTimeline.timeScale(1.5); k.vars.onComplete = function() { gsap.to('foreignObject', { opacity: 1 }) } })();







var snowmax = 100;

// Set the colors for the snow. Add as many colors as you like
var snowcolor = new Array(
    "#b9dff5",
    "#b9dff5",
    "#b9dff5",
    "#b9dff5",
    "#b9dff5"
);

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype = new Array("Times");

// Set the letter that creates your snowflake (recommended: * )
var snowletter = "*";

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed = 0.6;

// Set the maximum-size of your snowflakes
var snowmaxsize = 35;

// Set the minimal-size of your snowflakes
var snowminsize = 8;

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone = 1;

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////

// Do not edit below this line
var snow = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent;
var ie5 =
    document.all && document.getElementById && !browserinfos.match(/Opera/);
var ns6 = document.getElementById && !document.all;
var opera = browserinfos.match(/Opera/);
var browserok = ie5 || ns6 || opera;

function randommaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

function initsnow() {
    if (ie5 || opera) {
        marginbottom = document.body.scrollHeight;
        marginright = document.body.clientWidth - 15;
    } else if (ns6) {
        marginbottom = document.body.scrollHeight;
        marginright = window.innerWidth - 15;
    }
    var snowsizerange = snowmaxsize - snowminsize;
    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i);
        snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
        snow[i].size = randommaker(snowsizerange) + snowminsize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
        snow[i].style.zIndex = 0;
        snow[i].sink = (sinkspeed * snow[i].size) / 5;
        if (snowingzone == 1) {
            snow[i].posx = randommaker(marginright - snow[i].size);
        }
        if (snowingzone == 2) {
            snow[i].posx = randommaker(marginright / 2 - snow[i].size);
        }
        if (snowingzone == 3) {
            snow[i].posx =
                randommaker(marginright / 2 - snow[i].size) + marginright / 4;
        }
        if (snowingzone == 4) {
            snow[i].posx =
                randommaker(marginright / 2 - snow[i].size) + marginright / 2;
        }
        snow[i].posy = randommaker(
            2 * marginbottom - marginbottom - 2 * snow[i].size
        );
        snow[i].style.left = snow[i].posx + "px";
        snow[i].style.top = snow[i].posy + "px";
    }
    movesnow();
}

function movesnow() {
    for (i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
        snow[i].style.top = snow[i].posy + "px";

        if (
            snow[i].posy >= marginbottom - 2 * snow[i].size ||
            parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
        ) {
            if (snowingzone == 1) {
                snow[i].posx = randommaker(marginright - snow[i].size);
            }
            if (snowingzone == 2) {
                snow[i].posx = randommaker(marginright / 2 - snow[i].size);
            }
            if (snowingzone == 3) {
                snow[i].posx =
                    randommaker(marginright / 2 - snow[i].size) + marginright / 4;
            }
            if (snowingzone == 4) {
                snow[i].posx =
                    randommaker(marginright / 2 - snow[i].size) + marginright / 2;
            }
            snow[i].posy = 0;
        }
    }
    var timer = setTimeout("movesnow()", 50);
}

for (i = 0; i <= snowmax; i++) {
    document.write(
        "<span id='s" +
        i +
        "' style='position:absolute;top:-" +
        snowmaxsize +
        "'>" +
        snowletter +
        "</span>"
    );
}
if (browserok) {
    window.onload = initsnow;
}


