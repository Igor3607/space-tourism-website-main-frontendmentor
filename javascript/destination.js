/* jshint esversion: 6 */ 

const destinationBlock = document.querySelector('.destination');

fetch("data.json")
.then(response => response.json())
.then(data => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
       <div class="destination-headline">
      <h1 class="destination-headline__title"><span class="destination-headline__highlight">01</span> Pick your destination</h1>
 </div>

  <div class="destination__content">

  <div class="destination__images">
      ${data.destinations.map(item => `<img src="${item.images.png}" alt="${item.name}"  class="destination__image" />`).join('')}       
      </div>

      <div class="destination__description">
      
       <ul class="destination-list">
      ${data.destinations.map(item => `<li class="destination-list__item">${item.name}</li>`).join('')}
      </ul>
        ${data.destinations.map(item => `<h2 class="destination__name">${item.name}</h2> `).join('')}
        ${data.destinations.map(item => `<p class="destination__item">${item.description}</p>`).join('')}
        
        <div class="destination__line"></div>
        
        <div class="destination__information">
        
        <div>
        <p class="destination__information-paragraph">avr. distance</p>
        ${data.destinations.map(item => `<h4 class="destination__information-distance">${item.distance}</h4>`).join('')}
        </div>

          <div>
        <p class="destination__information-paragraph">est. travel time</p>
        ${data.destinations.map(item => `<h4 class="destination__information-travel">${item.travel}</h4>`).join('')}
        </div>

        <div>

   

  `;
  destinationBlock.appendChild(divElement);

  const listItem = document.querySelectorAll(".destination-list__item");
  const destinationImage = document.querySelectorAll(".destination__image");
  const destinationName = document.querySelectorAll(".destination__name");
  const destinationItem = document.querySelectorAll(".destination__item");
  const destinationInformationDistance = document.querySelectorAll(".destination__information-distance");
  const destinationInformationTravel = document.querySelectorAll(".destination__information-travel");

  let currentIndex = 0;

   // Устанавливаем класс 'destination__selected' для первого элемента по умолчанию
   listItem[currentIndex].classList.add("destination__selected");

  const showContent = (index) => {
    
    destinationImage.forEach(image => image.style.display = "none");
    destinationName.forEach(name => name.style.display = "none");
    destinationItem.forEach(description => description.style.display = "none");
    destinationInformationDistance.forEach(distance => distance.style.display = "none");
    destinationInformationTravel.forEach(distance => distance.style.display = "none");

    destinationImage[index].style.display = "block";
    destinationName[index].style.display = "block";
    destinationItem[index].style.display = "block";
    destinationInformationDistance[index].style.display = "block";
    destinationInformationTravel[index].style.display = "block";
  };

// Показать контент по умолчанию
 showContent(currentIndex);

// Добавляем обработчики событий для элементов планет
listItem.forEach((elem, index) => {
  elem.addEventListener("click", ()=> {
    currentIndex = index; // Обновляем текущий индекс
    showContent(currentIndex); // Показываем соответствующий контент
    listItem.forEach(item => item.classList.remove("destination__selected"));
    elem.classList.add("destination__selected");
  });
});

window.addEventListener('resize', ()=> {
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
