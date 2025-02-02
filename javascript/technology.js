
/* jshint esversion: 6 */ 

const technologyBlock = document.querySelector(".technology");

fetch("data.json")
.then(response => response.json())
.then(data => {
    const divElement = document.createElement("div");
    divElement.innerHTML = `

     <div class="technology-headline">
      <h1 class="technology-headline-title"><span class="technology-headline-highlight">03</span> Space launch 101</h1>
  </div>

       <div class="technology-images-landscape">
       ${data.technology.map(item => `<img src="${item.images.landscape}" alt="${item.name}" class="technology-image-landscape" />`).join('')}
       </div>

 <div class="technology-content">

  <ul class="technology-list">
        <li class = "technology-list-item">1</li>
        <li class = "technology-list-item">2</li>
        <li class = "technology-list-item">3</li>
      </ul>
      
      <div class="technology-item">
      
        <div class="terminology">
        <h2>the terminology...</h2>
        </div>

        <div class="technology-names">
        ${data.technology.map(item => `<h2 class="technology-name">${item.name}</h2>`).join('')}
        </div>

        <div class="technology-descriptions">
        ${data.technology.map(item => `<p class="technology-description-text">${item.description}</p>`).join('')}
        </div>

     </div>

    <div class="technology-images-portrait">
      ${data.technology.map(item => `<img src="${item.images.portrait}" alt="${item.name}" class="technology-image-portrait" />`).join('')}
    </div>
</div>

    `;
  
    technologyBlock.appendChild(divElement);

const listItem = document.querySelectorAll(".technology-list-item");
const technologyName = document.querySelectorAll(".technology-name");
const descriptionText = document.querySelectorAll(".technology-description-text");
const imagePortrait = document.querySelectorAll(".technology-image-portrait");
const imageLandscape = document.querySelectorAll(".technology-image-landscape");

let currentIndex = 0;

// Устанавливаем класс 'technology-selected' для первого элемента по умолчанию
listItem[currentIndex].classList.add("technology-selected");

const showContent = (index) => {
    technologyName.forEach(name => name.style.display = "none");
    descriptionText.forEach(text => text.style.display = "none");
    imagePortrait.forEach(portrait => portrait.style.display = "none");
    imageLandscape.forEach(landscape => landscape.style.display = "none");

    if(window.innerWidth > 1150){
      imagePortrait[index].style.display = "block";
    }
    else{
      imageLandscape[index].style.display = "block";
    }

    technologyName[index].style.display = "block";
    descriptionText[index].style.display = "block";
};

showContent(currentIndex);

listItem.forEach((elem, index) => {
    elem.addEventListener("click", ()=> {
        currentIndex = index; // Обновляем текущий индекс
        showContent(currentIndex); // Показываем соответствующий контент
        listItem.forEach(item => item.classList.remove("technology-selected"));
        elem.classList.add("technology-selected");
    });
});

window.addEventListener("resize", ()=> {
  showContent(currentIndex);
});

})
.catch(()=>{
/*Библиотека  SweetAlert2 для всплывающего окна*/
Swal.fire({
  title:"Error!",
  text:"The data cannot be uploaded. Please try again later.",
  position:'top',
  customClass: {
    popup: "my-popup-class",
    title: "my-title-class",
    confirmButton: "my-confirm-button-class"
  }
});
}
);

