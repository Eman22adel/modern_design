let nav = document.querySelector('.navbar');
let sectionAll = document.querySelectorAll('section');




function scrolling(){
    window.onscroll = function(){
        if(window.scrollY > 180){
            nav.style.background = "grey";
        }
        else {
            nav.style.background = "transparent";
        }
    }
}
scrolling();

const navs = document.getElementById('navbar__list');
const lists = Array.from(document.querySelectorAll('li'));

navs.addEventListener('click', function(evt){
    navs.querySelectorAll( ".active" ).forEach( e =>
    e.classList.remove( "active" ) );
    if(evt.target.id !== "navbar__list")
    { 
        evt.target.classList.add("active");
    }
});



for(list of lists){ 
    list.addEventListener('click', ()=>{list.style.color= 'red';}
)};

        
