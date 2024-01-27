function includeHTML(filename, containerId) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(containerId).innerHTML = this.responseText;
      }
    };
    xhr.open("GET", filename, true);
    xhr.send();
  }
  includeHTML("navbar.html", "navbar-container");
  
  
    function includeJS(filename, containerId) {
      const script = document.createElement('script');
      script.src = "dist/navbarbundle.js";
      document.getElementById(containerId).appendChild(script);
    }
    includeJS("navbar.js", "navbar-js-container");
  

let indCount = -1;
let slider = document.getElementById('slide')
        
  let arr=["https://assets-in.bmscdn.com/promotions/cms/creatives/1703930188975_web.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1705400922603_weekdesk.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1704958137348_desklolla.jpg"];

divis= (value)=>{
  let slimage = document.createElement('img');
  slimage.src = arr[value];
 slimage.style.borderRadius = "8px";
 slimage.style.zIndex = "0";
 slider.append(slimage);
}

  let timer;
timer = setInterval(()=>{
  slider.innerHTML = null;
        indCount++;
        
        if(indCount >= arr.length){
          indCount=0;
        }
        divis(indCount);
}, 2000);

document.getElementById('prev').addEventListener('click',()=>{
    clearInterval(timer);
    slider.innerHTML = null;
    indCount--;
    if(indCount < 0){
      indCount = arr.length - 1;
    }
    divis(indCount);
})

document.getElementById('next').addEventListener('click',()=>{
    clearInterval(timer);
    slider.innerHTML = null;
    indCount++;
        
    if(indCount >= arr.length){
      indCount=0;
    }
    divis(indCount);

})


function create(var1,var2,var3,var4){
  document.getElementById(var1).addEventListener('click',()=>{
    document.getElementById(var4).style.display = "flex";
    document.getElementById(var3).style.display = "none";
  })

  document.getElementById(var2).addEventListener('click',()=>{
    document.getElementById(var3).style.display = "flex";
    document.getElementById(var4).style.display = "none";
  })
}

create('next2','prev2','mov','mov2');
create('next3','prev3','mov3a','mov3b');
create('next4','prev4','mov4a','mov4b');
create('next5','prev5','mov5a','mov5b');
create('next6','prev6','mov6a','mov6b');
create('next7','prev7','mov7a','mov7b');
create('next8','prev8','mov8a','mov8b');
create('next9','prev9','mov9a','mov9b');
create('next10','prev10','mov10a','mov10b');

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("#seclast p");
    
    sections.forEach(section => {
        const text = section.textContent.trim();
        const items = text.split(" | ");
        section.innerHTML = ""; // Clear existing content

        items.forEach((item, index) => {
            const span = document.createElement("span");
            span.textContent = item.trim();
            span.classList.add("cursor-pointer", "hover:text-white");

            section.appendChild(span);
            // Add "|" separator after each item except the last one
            
            if (index !== items.length - 1) {
                section.appendChild(document.createTextNode(" | "));
            }

            
        });
    });
});
