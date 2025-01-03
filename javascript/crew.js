/* jshint esversion: 6 */ 

const crewBlock = document.querySelector(".crew");

fetch("data.json")
.then(response => response.json())
.then(data => {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
      <div class="crew-headline">
          <h1 class="crew-headline__title"><span class="crew-headline__highlight">02</span> Meet your crew</h1>
  </div>

        <div class="crew__details">

        <div class="crew__description">
       
        <div class="crew__roles">
        ${data.crew.map(item => `<h2 class="crew__role">${item.role}</h2>`).join('')}
   </div>

        <div class="crew__names">
        ${data.crew.map(item => `<h2 class="crew__name">${item.name}</h2>`).join('')}
        </div>

        <div class="crew__bios">
        ${data.crew.map(item => `<p  class="crew__bio">${item.bio}</p>`).join('')}
        </div>

    <ul class="crew-list">
        <li class = "crew-list__item"></li>
        <li class = "crew-list__item"></li>
        <li class = "crew-list__item"></li>
        <li class = "crew-list__item"></li>
      </ul>

</div>

      <div class="crew__images">
      ${data.crew.map(item => `<img src="${item.images.png}" alt="${item.name}"  class="crew__image" />`).join('')}
       </div>

      </div>
      
    `;
    crewBlock.appendChild(divElement);

  const crewListItem = document.querySelectorAll(".crew-list__item");
  const crewRole = document.querySelectorAll(".crew__role");
  const crewName = document.querySelectorAll(".crew__name");
  const crewBio = document.querySelectorAll(".crew__bio");
  const crewImage = document.querySelectorAll(".crew__image");

 let currentIndex = 0;

// Устанавливаем класс 'crew__selected' для первого элемента по умолчанию
crewListItem[currentIndex].classList.add("crew__selected");

 const showContent = (index) => {

  crewRole.forEach(role => role.style.display = "none");
  crewName.forEach(name => name.style.display = "none");
  crewBio.forEach(bio => bio.style.display = "none");
  crewImage.forEach(image => image.style.display = "none");
 

  crewRole[index].style.display = "block";
  crewName[index].style.display = "block";
  crewBio[index].style.display = "block";
  crewImage[index].style.display = "block";

 };

 showContent(currentIndex);

 crewListItem.forEach((elem, index) => {
  elem.addEventListener("click", ()=> {
    currentIndex = index; // Обновляем текущий индекс
    showContent(currentIndex); // Показываем соответствующий контент
    crewListItem.forEach(item => item.classList.remove("crew__selected"));
    elem.classList.add("crew__selected");
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

