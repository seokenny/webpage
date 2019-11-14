window.onload = function() {
    lax.setup();
    const updateLax = () => {
        lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax);
    }
    window.requestAnimationFrame(updateLax);
    
}

$(document).scroll(function(){
    if($(this).scrollTop() >= $('#about_me_container').offset().top - 150) {
        
        setTimeout(function(){
            $(".html").addClass("fadeInDown");
            setTimeout(function(){
                $(".css").addClass("fadeInDown");
            },150);
            setTimeout(function(){
                $(".sass").addClass("fadeInDown");
            },300);
            setTimeout(function(){
                $(".javascript").addClass("fadeInDown");
            },450);
            setTimeout(function(){
                $(".jquery").addClass("fadeInDown");
            },600);
            setTimeout(function(){
                $(".react").addClass("fadeInDown");
            },750);
            setTimeout(function(){
                $(".photoshop").addClass("fadeInDown");
            },900);
            setTimeout(function(){
                $(".figma").addClass("fadeInDown");
            },1050);
        },100);
        $("#rugsusa").removeClass("gone");
        $("#rugsusa").addClass("zoomInRight");
        $("#mixhour").removeClass("gone");
        $("#mixhour").addClass("zoomInLeft");
        $("#konditori").removeClass("gone");
        $("#konditori").addClass("zoomInRight");
        $("#fuyuramen").removeClass("gone");
        $("#fuyuramen").addClass("zoomInLeft");
        $("#weatherds").removeClass("gone");
        $("#weatherds").addClass("zoomInRight");
        $("#oldportfolio").removeClass("gone");
        $("#oldportfolio").addClass("zoomInRight");
    }
});

$(document).scroll(function(){
    if(document.body.scrollTop === 0){
        $(".kenny").removeClass("animated");
        $(".kenny").removeClass("jackInTheBox");
    }
});

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

function downArrow() {
    var goTo = $("#about_me_container");
        var top = goTo.offset().top;
        top-=100;
        $('html,body').animate({scrollTop: top}, 700);
        return false;
}

var mobileNavs = [["m_nav_li home", "#about_container", "m_nav_li home left_handed_css"],["m_nav_li about", "#about_me_container", "m_nav_li about left_handed_css"], ["m_nav_li works", "#work_container", "m_nav_li works left_handed_css"], ["m_nav_li contact", "#contact_container", "m_nav_li contact left_handed_css"]];

function check_me_2(ev) {
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

//weatherds

$(".view_buttons.vl_weatherds").mouseover(function(){
    $(".vl_weatherds .cross_button_right").stop().animate({
        right:0
    },500);
});

$(".view_buttons.vl_weatherds").mouseout(function(){
    $(".vl_weatherds .cross_button_right").stop().animate({
        right:"-100%"
    },500);
});

$(".view_buttons.vc_weatherds").mouseover(function(){
    $(".vc_weatherds .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vc_weatherds").mouseout(function(){
    $(".vc_weatherds .cross_button").stop().animate({
        left:"-100%"
    },500);
});

//Old Portfolio

$(".view_buttons.vl_oldportfolio").mouseover(function(){
    $(".vl_oldportfolio .cross_button_right").stop().animate({
        right:0
    },500);
});

$(".view_buttons.vl_oldportfolio").mouseout(function(){
    $(".vl_oldportfolio .cross_button_right").stop().animate({
        right:"-100%"
    },500);
});

$(".view_buttons.vc_oldportfolio").mouseover(function(){
    $(".vc_oldportfolio .cross_button").stop().animate({
        left:0
    },500);
});

$(".view_buttons.vc_oldportfolio").mouseout(function(){
    $(".vc_oldportfolio .cross_button").stop().animate({
        left:"-100%"
    },500);
});


//Rugs Usa Banner
$("#rugsusa_banner").mouseover(function(){
    $("#rugsusa_banner").removeClass("reg");
});

$("#rugsusa_banner").mouseout(function(){
    $("#rugsusa_banner").addClass("reg");
});

//Mix Hour Banner

$("#mixhour_banner").mouseover(function(){
    $("#mixhour_banner").removeClass("reg");
});

$("#mixhour_banner").mouseout(function(){
    $("#mixhour_banner").addClass("reg");
});

//Konditori Banner
$("#konditori_banner").mouseover(function(){
    $("#konditori_banner").removeClass("reg");
});

$("#konditori_banner").mouseout(function(){
    $("#konditori_banner").addClass("reg");
});

//Fuyu Ramen Banner

$("#fuyuramen_banner").mouseover(function(){
    $("#fuyuramen_banner").removeClass("reg");
});

$("#fuyuramen_banner").mouseout(function(){
    $("#fuyuramen_banner").addClass("reg");
});

//Zombie Dice Banner
$("#weatherds_banner").mouseover(function(){
    $("#weatherds_banner").removeClass("reg");
});

$("#weatherds_banner").mouseout(function(){
    $("#weatherds_banner").addClass("reg");
});

//OLd Portfolio Banner

$("#oldportfolio_banner").mouseover(function(){
    $("#oldportfolio_banner").removeClass("reg");
});

$("#oldportfolio_banner").mouseout(function(){
    $("#oldportfolio_banner").addClass("reg");
});