window.onload = function() {
    lax.setup();
    const updateLax = () => {
        lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax);
    }
    window.requestAnimationFrame(updateLax);
}

var counter = 0;

function onMenuClick() {
    document.getElementById("m_nav").classList.toggle("change");
    document.getElementById("m_nav_2").classList.toggle("change");
    $("#menu-bg").toggleClass("change-bg");
    if(counter === 0){
        document.getElementById("mobile_navigation").classList.toggle("hidden");
        counter++;
    }
    document.getElementById("mobile_navigation").classList.toggle("slideOutUp");
    document.getElementById("mobile_navigation").classList.toggle("slideInDown");
}

function onLeftClick() {
    var navList = [];
    navList = document.getElementsByClassName("m_nav_li");
    for(var i = 0; i < navList.length; i++){
        navList[i].classList.add("left_handed_css");
    }
    document.getElementById("m_nav").classList.add("m_nav_hide");
    document.getElementById("m_nav").classList.remove("m_nav_show");
    document.getElementById("m_nav_2").classList.add("m_nav_show");
    document.getElementById("m_nav_2").classList.remove("m_nav_hide");
    document.getElementById("right_side").classList.remove("active_hand");
    document.getElementById("left_side").classList.add("active_hand");
}

function onRightClick() {
    var navList = [];
    navList = document.getElementsByClassName("m_nav_li");
    for(var i = 0; i < navList.length; i++){
        navList[i].classList.remove("left_handed_css");
    }
    document.getElementById("m_nav").classList.add("m_nav_show");
    document.getElementById("m_nav").classList.remove("m_nav_hide");
    document.getElementById("m_nav_2").classList.add("m_nav_hide");
    document.getElementById("m_nav_2").classList.remove("m_nav_show");
    document.getElementById("left_side").classList.remove("active_hand");
    document.getElementById("right_side").classList.add("active_hand");
}

var desktopNavs = [["nav_li home", "#about_container", ".nav_li.home"],["nav_li about", "#about_me_container", ".nav_li.about"], ["nav_li works", "#work_container", "nav_li.works"], ["nav_li contact", "#contact_container", "nav_li.contact"]];

function check_me(ev) {
    ev.preventDefault();
    console.log(ev);
    for(var i = 0; i < desktopNavs.length; i++){
        if(ev.path[0].className == desktopNavs[i][0]){
            var target = $(desktopNavs[i][1]);
            console.log(target);
            if (target.length) {
                var top = target.offset().top;
                if(ev.path[0].className != desktopNavs[0][0]){
                    top-=100;
                }
                $('html,body').animate({scrollTop: top}, 700);
                return false;
            }
        }
    }
}

var mobileNavs = [["m_nav_li home", "#about_container", "m_nav_li home left_handed_css"],["m_nav_li about", "#about_me_container", "m_nav_li about left_handed_css"], ["m_nav_li works", "#work_container", "m_nav_li works left_handed_css"], ["m_nav_li contact", "#contact_container", "m_nav_li contact left_handed_css"]];

function check_me(ev) {
    ev.preventDefault();
    console.log(ev);
    for(var i = 0; i < mobileNavs.length; i++){
        if(ev.path[0].className == mobileNavs[i][0] || ev.path[0].className == mobileNavs[i][2]){
            var target = $(mobileNavs[i][1]);
            console.log(target);
            if (target.length) {
                var top = target.offset().top;
                if(ev.path[0].className != mobileNavs[0][0]){
                    top-=100;
                }
                $('html,body').animate({scrollTop: top}, 700);
                return false;
            }
        }
    }
}

//RugsUsa

$(".view_buttons.vl_rugsusa").mouseover(function(){
    $(".vl_rugsusa .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vl_rugsusa").mouseout(function(){
    $(".vl_rugsusa .cross_button").stop().animate({
        left:"-100%"
    },500);
});

//MixHour

$(".view_buttons.vl_mixhour").mouseover(function(){
    $(".vl_mixhour .cross_button_right").stop().animate({
        right:0
    },500);
});

$(".view_buttons.vl_mixhour").mouseout(function(){
    $(".vl_mixhour .cross_button_right").stop().animate({
        right:"-100%"
    },500);
});

$(".view_buttons.vc_mixhour").mouseover(function(){
    $(".vc_mixhour .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vc_mixhour").mouseout(function(){
    $(".vc_mixhour .cross_button").stop().animate({
        left:"-100%"
    },500);
});

//Konditori

$(".view_buttons.vl_konditori").mouseover(function(){
    $(".vl_konditori .cross_button_right").stop().animate({
        right:0
    },500);
});

$(".view_buttons.vl_konditori").mouseout(function(){
    $(".vl_konditori .cross_button_right").stop().animate({
        right:"-100%"
    },500);
});

$(".view_buttons.vc_konditori").mouseover(function(){
    $(".vc_konditori .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vc_konditori").mouseout(function(){
    $(".vc_konditori .cross_button").stop().animate({
        left:"-100%"
    },500);
});

//Fuyu Ramen

$(".view_buttons.vl_fuyuramen").mouseover(function(){
    $(".vl_fuyuramen .cross_button_right").stop().animate({
        right:0
    },500);
});

$(".view_buttons.vl_fuyuramen").mouseout(function(){
    $(".vl_fuyuramen .cross_button_right").stop().animate({
        right:"-100%"
    },500);
});

$(".view_buttons.vc_fuyuramen").mouseover(function(){
    $(".vc_fuyuramen .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vc_fuyuramen").mouseout(function(){
    $(".vc_fuyuramen .cross_button").stop().animate({
        left:"-100%"
    },500);
});

//ZombieDice

$(".view_buttons.vl_zombiedice").mouseover(function(){
    $(".vl_zombiedice .cross_button_right").stop().animate({
        right:0
    },500);
});

$(".view_buttons.vl_zombiedice").mouseout(function(){
    $(".vl_zombiedice .cross_button_right").stop().animate({
        right:"-100%"
    },500);
});

$(".view_buttons.vc_zombiedice").mouseover(function(){
    $(".vc_zombiedice .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vc_zombiedice").mouseout(function(){
    $(".vc_zombiedice .cross_button").stop().animate({
        left:"-100%"
    },500);
});