$(document).ready(function () {
  $(".container-movie").hide();
  $(window).on("load", function () {
    setTimeout(() => {
      $(".loader").show();
    }, 500);
    setTimeout(() => {
      $(".container-movie").show();
      $(".loader").hide();
    }, 1000);
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 5,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 6,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 7,
      spaceBetween: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 6,
      spaceBetween: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    /**
     * Phim Bộ
     */
    const series_movie = document.querySelector(".series-movie");
    series_movie.addEventListener("click", function (event) {
      event.preventDefault();
      const targetScrollY = 2400;
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    });
    /**
     * Tvshow
     */
    const series_tvShow = document.querySelector(".series-tvShow");
    series_tvShow.addEventListener("click", function (event) {
      event.preventDefault();
      const targetScrollY = 4872;
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    });
    /**
     * Search
     */
    const input = document.querySelector(".navrbar-form-search");
    const items = document.querySelectorAll(".dropdown-item");
    const dropdown = document.querySelector(".dropdown-list");
    const searchwrapper = document.querySelector(".search-wrapper");
    searchwrapper.addEventListener("click", () => {
      dropdown.classList.add("is-valid-dr");
    });
    window.addEventListener("click", () => {
      dropdown.classList.remove("is-valid-dr");
    });
    input.addEventListener("input", handleHighlight);
    // input nó sẽ lấy value(Giá trị) mỗi khi chúng ta gõ
    function handleHighlight(e) {
      let filter = e.target.value;
      // console.log(filter);
      dropdown.classList.add("is-valid-dr");
      filter = filter.toLowerCase();
      [...items].forEach((item) => {
        const text = item.textContent;
        const index = text.toLowerCase().indexOf(filter);
        if (index >= 0 && text.toLowerCase().includes(filter)) {
          item.innerHTML = `${text.substring(
            0,
            index
          )}<span class="primary">${text.substring(
            index,
            index + filter.length
          )}</span>${text.substring(
            index + filter.length
          )} <i class="fa fa-solid fa-fire"></i> `;
        } else {
          item.innerHTML = text;
        }
      });
    }

    // VIP
    const btn_vip = document.querySelector(".btn-vip");
    const purchase_vip = document.querySelector(".purchase-vip");
    const btn_close_vip = document.querySelector(".purchase-vip-close");
    var swiper5 = new Swiper(".mySwiper5", {
      spaceBetween: 10,
      slidesPerView: 3,
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    btn_vip.addEventListener("click", function (e) {
      e.preventDefault();
      purchase_vip.classList.add("valid-vip");
    });
    btn_close_vip.addEventListener("click", function (e) {
      e.preventDefault();
      purchase_vip.classList.remove("valid-vip");
    });

    /**
     * go top
     */

    const goTopBtn = document.querySelector(".go-top");

    window.addEventListener("scroll", function () {
      window.scrollY >= 300
        ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
    });
    // Notification

    function createNotification(title = "Mua Ngay Khóa VIP") {
      const template = ` <div class="noti">
      <img src="../Image/Notification/intl_lang_56f29a13407a9f35ff0afb591604_default copy 2.png" alt="" class="noti-image" id ="randomImage" />
      <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
          Xem phim không quảng cáo, full HD.
        </p>
        <i class="fa fa-times modal-close"></i>
      </div>
    </div>`;
      // insertAdjacentHTML để chèn vào body
      document.body.insertAdjacentHTML("afterbegin", template);
    }
    const randomData = ["VIP Đang Giảm Giá", "Chỉ với 19.000 "];
    let lastTitle;

    function timer() {
      const item = document.querySelector(".noti");
      if (item) item.parentNode.removeChild(item);
      // Lấy random title từ mảng randomData
      // Công thức random trong mảng bất kỳ: array[Math.floor(Math.random() * array.length)]
      const title = randomData[Math.floor(Math.random() * randomData.length)];
      if (lastTitle !== title) {
        createNotification(title);
      }
      lastTitle = title;
    }
    setTimeout(() => {
      timer();
    }, 5000);
  });
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".modal-close")) {
      const item = event.target.parentNode.parentNode;
      item.parentNode.removeChild(item);
    } else if (event.target.matches(".noti")) {
      event.target.parentNode.removeChild(event.target);
    }
  });
});
