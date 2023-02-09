window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsDescr = document.querySelectorAll('.tabcontent__descr'),
    tabsParets = document.querySelector('.tabheader__items');

  function hiderTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active', 'b', 'color', 'c');
    });
  }


  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheder__item_active', 'b', 'color', 'c');
    // tabsDescr[i].classList.add('b');
  }

  hiderTabContent();
  showTabContent();

  tabsParets.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
            
            hiderTabContent();
            showTabContent(i);
        }
      });
    }
  });
});
