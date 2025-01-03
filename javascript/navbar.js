/* jshint esversion: 6 */ 
       
    const loadNavbar = () => {
        const navHeader = document.querySelector('.header');

        navHeader.innerHTML = `
        
    <div class="header__logo">
   <svg  class="logo__svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
 </div>
 
    <svg class = 'header__divider' height="10" width="560">
   <line x1="0" y1='10' x2="560" y2="10" />
   </svg>
  
  <nav class="navigation">
   <svg class = 'navigation__divider' height="10" width="40">
     <line x1="0" y1='10' x2="40" y2="10" />
     </svg>
     
     <svg class="navigation__icon-close" xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>

     <ul class="navigation__list">
      <li class="navigation__item"><a href="/index.html" class="navigation__link"><span class="navigation__number">00</span> Home</a></li>
      <li class="navigation__item"><a href="/destination.html" class="navigation__link"><span class="navigation__number">01</span> Destination</a></li>
      <li class="navigation__item"><a href="/crew.html" class="navigation__link"><span class="navigation__number">02</span> Crew</a></li>
      <li class="navigation__item"><a href="/technology.html" class="navigation__link"><span class="navigation__number">03</span> Technology</a></li>
     </ul>

  </nav>
 
   <svg  class="header__icon-hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg> 

   `;

    const navItems = document.querySelectorAll('.navigation__item');
    const navLinks = document.querySelectorAll('.navigation__link');

   // Получаем текущий URL
   const currentUrl = window.location.pathname;

// Выделяем активный элемент на основе URL
navItems.forEach((item) => {
    const link = item.querySelector('.navigation__link');
    if (link.getAttribute('href') === currentUrl) {
        item.classList.add('selected__nav');
        item.classList.add("selected__nav-right");
}   
});

navLinks.forEach((link, index) => {
       link.addEventListener("click", () => {
           // Удаляем класс selected__nav у всех элементов
           navItems.forEach(item => item.classList.remove('selected__nav'));
           navLinks.forEach(item => item.classList.remove("selected__nav-right"));

           // Добавляем класс к текущему элементу
           navItems[index].classList.add('selected__nav');
       });
   });

            const iconHamburger = document.querySelector('.header__icon-hamburger');
            const navigationElem = document.querySelector('.navigation');
            const navigationList = document.querySelector('.navigation__list');
            const iconClose = document.querySelector('.navigation__icon-close');

            iconHamburger.addEventListener('click', ()=> {
                navigationList.style.display = "block";
                iconHamburger.style.display = 'none';
                iconClose.style.display = 'block';
                navigationElem.style.display = 'block';
            });
     
            iconClose.addEventListener('click', ()=> {
                    if(window.innerWidth < 700){
                        iconHamburger.style.display = 'block';
                        iconClose.style.display = 'none';
                        navigationList.style.display = "none"; 
                        navigationElem.style.display = 'none';
                    }
                    else{
                        navigationElem.style.display = 'flex';  
                    }
                });

                window.addEventListener('resize', ()=> {
                    if(window.innerWidth > 700){
                        iconHamburger.style.display = 'none';
                        iconClose.style.display = 'none';
                        navigationList.style.display = 'flex';
                        navigationElem.style.display = 'flex';
                    }
                  else{
                        iconHamburger.style.display = 'block';
                        iconClose.style.display = 'block';
                        navigationList.style.display = 'none';
                        iconClose.style.display = 'none';
                    }

                });
    };

    loadNavbar();
  
 /* Если нужно сохранить состояние выделенной ссылки в навигации при переходах между страницами необходимо использовать один из следующих методов:
   localStorage: Позволяет сохранять данные в браузере, которые будут доступны даже после закрытия вкладки или перезагрузки страницы.
   sessionStorage: Сохраняет данные только на время текущей сессии. Данные будут потеряны при закрытии вкладки, но сохранятся при обновлении страницы.
   Параметры URL: Позволяют передавать информацию о состоянии через адресную строку (например, ?active=home), что позволяет выделять соответствующий элемент навигации при загрузке страницы.
   Сохранение состояния между переходами означает, что информация о текущем состоянии пользовательского интерфейса (например, выделенная ссылка в навигации, выбранные фильтры или введённые данные) сохраняется и восстанавливается при переходе между страницами или обновлении страницы. 
   Примеры использования:
    - Сохранение выбранных фильтров на странице с товарами.
    - Запоминание активного элемента навигации при переходах между страницами.
    - Восстановление введённых данных в формах после обновления страницы.
   */


