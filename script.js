var menu = document.querySelector(".menu");
var side = document.querySelector(".sidebar");
var aler = document.querySelector(".alert");
var close = document.querySelector(".close");
var junebox = document.querySelector(".junebox");
var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var body = document.querySelector("body");

const games = [
    {
        gameName: "Prince of Persia: The Sands of Time",
        imageName: "https://store-images.s-microsoft.com/image/apps.36470.69055455676545154.bb0c2527-3a89-4cd5-817e-fcda3c97dad7.7476c4a1-cc7b-4058-9bb7-45e483d7b9ad?q=90&w=480&h=270",
        rating: 4.5,
        release: "Old",
        about: "A time-bending adventure with parkour and combat in ancient Persia."
    },
    {
        gameName: "God of War",
        imageName: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6n0sRFkbqKx57T1sQaOrG5-AbgmNtnbIy4A&s",
        rating: 4.8,
        release: "New",
        about: "A mythological action-adventure with Kratos and his son, Atreus."
    },
    {
        gameName: "Red Dead Redemption 2",
        imageName: "https://w0.peakpx.com/wallpaper/742/110/HD-wallpaper-red-dead-redemption-clin-gaming-game-gamers-gaming-rdr-2-rdr2-rdr2-game-red-dead-game-red-dead-redemption-2.jpg",
        rating: 4.9,
        release: "New",
        about: "An open-world Western epic with deep storytelling and immersive gameplay."
    },
    {
        gameName: "The Legend of Zelda: Breath of the Wild",
        imageName: "https://media.wired.com/photos/633c95ef85e7a4cc2f802256/16:9/w_2400,h_1350,c_limit/Breath-of-the-Wild-Casual-Gamer-Culture.jpg",
        rating: 4.9,
        release: "Old",
        about: "A groundbreaking open-world adventure with exploration and puzzle-solving."
    }
];

var flag = 0

menu.addEventListener("click",function(){
    if(flag == 0){
        side.style.right = 0;
        menu.innerHTML = `<i class="ri-close-large-line"></i>`;
        flag = 1;
    }else{
        side.style.right = "-100%";
        menu.innerHTML = `<i class="ri-menu-fold-line text-2xl"></i>`;
        flag = 0;
    }
})

close.addEventListener("click",function(){
    aler.classList.add("hidden")
})

var container = ""

games.forEach(function(e){
    container += `<div class="card1 h-[450px] w-[23%] p-4">
                    <img src="${e.imageName}" class="rounded-xl">
                    <h1 class="text-white text-2xl my-4">${e.gameName}</h1>
                    <h1 class="text-white text-2xl mb-4">Release: ${e.release}</h1>
                    <h1 class="text-white text-2xl mb-4">Rating : ${e.rating}</h1>
                    <p class="text-white">${e.about}</p>
                </div>`
})

junebox.innerHTML = container;

var tl = gsap.timeline()

tl.from(".logos",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
})

tl.from(".part1",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger: 0.2
})

tl.from(".part2 h1,.part2 img",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger: 0.2
})

gsap.to(".Product-b  .Product",{
    x:"-140%",
    scrollTrigger:{
        trigger:".Product-b",
        scroller:"body",
        start:"top -5%",
        end:"top -280%",
        scrub:3,
        pin:true,
        duration:2
    }
})

body.addEventListener("mousemove",function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})

var game_pass = document.querySelector(".Game-Pass");
var gp = document.querySelector(".GP");
var game = document.querySelector(".Games");
var gameD = document.querySelector(".GameD");
var Support = document.querySelector(".Support");
var SupportD = document.querySelector(".SupportD");
var Store = document.querySelector(".Store");
var StoreD = document.querySelector(".StoreD");
var Devices = document.querySelector(".Devices");
var DevicesD = document.querySelector(".DevicesD");

function showElement(element) {
    element.classList.remove("hidden");
}

function hideElement(element) {
    element.classList.add("hidden");
}

function setupHover(trigger, target) {
    let timer;
    
    trigger.addEventListener('mouseenter', function() {
        clearTimeout(timer);
        showElement(target);
    });

    trigger.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
            hideElement(target);
        }, 100); // Short delay to allow mouse to move between elements
    });

    target.addEventListener('mouseenter', function() {
        clearTimeout(timer);
        showElement(target);
    });

    target.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
            hideElement(target);
        }, 100); // Short delay to allow mouse to move between elements
    });
}

setupHover(gp, game_pass);
setupHover(gameD, game);
setupHover(StoreD, Store);
setupHover(SupportD, Support);
setupHover(DevicesD, Devices);