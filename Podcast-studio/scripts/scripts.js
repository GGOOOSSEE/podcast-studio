window.onload = function () {

    /*скроллы по ссылкам */
    let links = document.querySelectorAll(".list-item > a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
        }
    }


    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      if( window.innerWidth <= 768 ){
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        }

    if( window.innerWidth <= 480 ){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });
   }

   let point = document.querySelectorAll('.point');
   let item = document.querySelectorAll('.select-items')

   for (let i = 0; i < item.length; i++) {
    item[i].onclick = function() {
      item.classList.add('.open');
      point.classList.add('open-point');
    }
   }

   let swiper_2 = new Swiper(".video-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  if( window.innerWidth <= 1024 ){
    let swiper_2 = new Swiper(".video-slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    let close = document.querySelector('#close');
      close.onclick = function () {
        popUP.classList.remove('open-popUp');
      }

    
    

    let label = document.querySelectorAll('.popUp-label');
    let check_box = document.querySelectorAll('.check-box-popUp')

    for (let i = 0; i < label.length; i++) {
      label[i].onclick = function () {
        for (let i = 0; i < check_box.length; i++) {
          check_box[i].classList.add('open-popUp');
        }
      }
    }
    

    let button_test = document.querySelectorAll('#test-drive-button');
    let popUP = document.querySelector('.popUp');

    for (let i = 0; i < button_test.length; i++) {
      button_test[i].onclick = function () {
        popUP.classList.add('open-popUp');
      }
    }

    let button_reservation = document.querySelectorAll('#reservation-button');
    let popUP_reservation = document.querySelector('.popUp-2')

    for (let i = 0; i < button_reservation.length; i++) {
      button_reservation[i].onclick = function () {
        popUP_reservation.classList.add('open-popUp');
      }
    }

    let close_2 = document.querySelector('#close_2');
      close_2.onclick = function () {
      popUP_reservation.classList.remove('open-popUp');
    }


}
