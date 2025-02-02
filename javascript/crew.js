/* jshint esversion: 6 */ 

const crewBlock = document.querySelector(".crew");

fetch("data.json")
.then(response => response.json())
.then(data => {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
      <div class="crew-headline">
          <h1 class="crew-headline-title"><span class="crew-headline-highlight">02</span> Meet your crew</h1>
  </div>

        <div class="crew-details">

        <div class="crew-description">
       
        <div class="crew-roles">
        ${data.crew.map(item => `<h2 class="crew-role">${item.role}</h2>`).join('')}
   </div>

        <div class="crew-names">
        ${data.crew.map(item => `<h2 class="crew-name">${item.name}</h2>`).join('')}
        </div>

        <div class="crew-bios">
        ${data.crew.map(item => `<p  class="crew-bio">${item.bio}</p>`).join('')}
        </div>

    <ul class="crew-list">
        <li class = "crew-list-item"></li>
        <li class = "crew-list-item"></li>
        <li class = "crew-list-item"></li>
        <li class = "crew-list-item"></li>
      </ul>

</div>

      <div class="crew-images">
      ${data.crew.map(item => `<img src="${item.images.png}" alt="${item.name}"  class="crew-image" />`).join('')}
       </div>

      </div>
      
    `;
    crewBlock.appendChild(divElement);

  const crewListItem = document.querySelectorAll(".crew-list-item");
  const crewRole = document.querySelectorAll(".crew-role");
  const crewName = document.querySelectorAll(".crew-name");
  const crewBio = document.querySelectorAll(".crew-bio");
  const crewImage = document.querySelectorAll(".crew-image");

 let currentIndex = 0;

// Устанавливаем класс 'crew-selected' для первого элемента по умолчанию
crewListItem[currentIndex].classList.add("crew-selected");

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
    crewListItem.forEach(item => item.classList.remove("crew-selected"));
    elem.classList.add("crew-selected");
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

