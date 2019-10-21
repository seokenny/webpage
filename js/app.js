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
}