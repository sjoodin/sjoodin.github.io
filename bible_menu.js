var content = document.getElementById("content");

var overlay = document.createElement("div");
overlay.classList.add("overlay");
content.appendChild(overlay);


var plus = document.createElement("div");
plus.innerHTML = "GB";
plus.classList.add("fab");

    var dragItem = plus;

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    window.addEventListener("touchstart", dragStart, false);
    window.addEventListener("touchend", dragEnd, false);
    window.addEventListener("touchmove", drag, true);

    window.addEventListener("mousedown", dragStart, false);
    window.addEventListener("mouseup", dragEnd, false);
    window.addEventListener("mousemove", drag, true);

    function dragStart(e) {
      
      if (e.target === dragItem) {
            active = true;

          if (e.type === "touchstart") {
            initialX = e.touches[0].clientX;
            initialY = e.touches[0].clientY;
          } else {
            initialX = e.clientX;
            initialY = e.clientY;
          }


          plus.classList.remove("back");
          plus.classList.add("clicked");
          overlay.classList.add("visible");
          menu.classList.add("visible");
      
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      
      var xOffset = 0;
      var yOffset = 0;
      

      active = false;
      setTranslate(0, 0, dragItem);
      plus.classList.add("back");
      plus.classList.remove("clicked");
      overlay.classList.remove("visible");
      menu.classList.remove("visible");

    }

    function drag(e) {
      if (active) {
        
        if(!e.targetTouches){
            e.preventDefault(); 
        }
        
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(xOffset, yOffset, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }



var menu = document.createElement("div");
menu.classList.add("menu");
content.appendChild(menu);
menu.classList.add("visible");

content.appendChild(plus);

var sectionsContainer = document.createElement("div");
sectionsContainer.classList.add("sections");
menu.appendChild(sectionsContainer);
sectionsContainer.classList.add("visible");
var sectionsWidth = 50;
sectionsContainer.style.width = sectionsWidth+"px";

var chaptersContainer = document.createElement("div");
chaptersContainer.classList.add("chapters");
menu.appendChild(chaptersContainer);
chaptersContainer.classList.add("visible");
var chaptersWidth = window.innerWidth - sectionsWidth;
chaptersContainer.style.width = chaptersWidth+"px";

var bright = true;

function showChapters(e){
    this;
}

function makeMenuSection(parent,cls,books,books_str){
    var section = document.createElement("div");
    
    //create chapters
    for (i = 0; i < books.length; i++) {
      var book = books[i];
      
    }

    section.classList.add(cls);
    section.classList.add(bright?"bright":"dark");
    bright = !bright;
    section.innerHTML=books_str;
    parent.appendChild(section);

    section.addEventListener("mousemove", showChapters, true);
    section.addEventListener("touchmove", showChapters, true);

    return section;
}


s1 = [
    {
        "label":"Matteusevangeliet",
        "short":"Matt",
        "chapters":28,
        "url-start":"https://grundbibeln.se/matt-",
        "url-end":"/"
    },
    {
        "label":"Markusevangeliet",
        "short":"Mark",
        "chapters":16,
        "url-start":"https://grundbibeln.se/mark-",
        "url-end":"/"
    }
]

var section1 = makeMenuSection(sectionsContainer,"section",s1,"<br>Matt<br>Mark");
var section2 = makeMenuSection(sectionsContainer,"section",s1,"<br>Luk<br>Joh");
var section3 = makeMenuSection(sectionsContainer,"section",s1,"<br><br>Apg");
var section4 = makeMenuSection(sectionsContainer,"section",s1,"<br>Rom<br>1-2 Kor");
var section5 = makeMenuSection(sectionsContainer,"section",s1,"Gal<br>Ef<br>Fil<br>Kol");
var section6 = makeMenuSection(sectionsContainer,"section",s1,"1-2 Thess<br>1-2 Tim<br>Tit<br>Filem");
var section7 = makeMenuSection(sectionsContainer,"section",s1,"Heb<br>Jak<br>1-2 Pet<br>1-3 Joh<br>Jud");
var section8 = makeMenuSection(sectionsContainer,"section",s1,"<br><br>Upp");