// Get The API And Handle It 
const displayData = document.getElementById("displayData");
let imageSrc = "https://image.tmdb.org/t/p/w500/";
const request = fetch("https://api.themoviedb.org/3/trending/all/day?api_key=7d8600841d0744c2900bb53e135fa788").then(function(res){
    return res.json();
}).then(function(data){
    let item = "";
    for(let i=0 ; i < data.results.length ; i++ ){
        item += `<div class="item col-lg-3 col-sm-6 my-4">
                <img src="${imageSrc}${data.results[i].poster_path}" alt="">
                <span>${data.results[i].vote_average}</span>
                </div>
            `;
    }
    displayData.innerHTML = item;
}).catch(function(error){
    alert(error.message);
});


// Handle Toggle Menu 
let toggleButton = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleButton.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menu-active"); 

    tLinks.classList.toggle("open");
};

// Concatenate The Username With The Text
document.getElementById("welcome").innerHTML = "Hi " + localStorage.getItem("userName");

// Remove Data From LocalStorage
function removeData(){
    localStorage.clear();
    window.location.href = "index.html";
    document.getElementById("welcome").innerHTML = "Hi ";
}

// Select all links
let allLinks = document.querySelectorAll(".links a");

// Navbar Links Behavior
function scrollToSections(elements){
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            if(e.target.dataset.section ===".movies"){
                location.replace("/movies.html");
            }else{
                location.replace("/home.html");
            }
        });
    });
}

scrollToSections(allLinks);

// Handle Up Span
let span = document.querySelector(".up");
window.onscroll = function(){
    this.scrollY >= 100 ? span.classList.add("show") : span.classList.remove("show"); 
};

span.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Handle Fixed Navbar
let nav = document.querySelector(".navbar");
window.addEventListener("scroll",fixNav)
function fixNav(){
    if(window.scrollY > nav.offsetHeight){
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
}