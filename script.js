
// navbar sticky begin

window.onscroll = function () { fixedNavbar() }

const navMenu = document.querySelector('.nav-menu')
let sticky = navMenu.offsetTop;

function fixedNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navMenu.classList.add("sticky");
  } else {
    navMenu.classList.remove("sticky");
  }
}

// navbar sticky end

// burger-menu begin

// $(() => {
//   $('.openMenu').click(function () {
//     $('.mainMenu').slideToggle('slow');
//   });
//   $('.closeMenu').click(function () {
//     $('.mainMenu').slideToggle('slow');
//   });
// });

$(() => {
  $(".openMenu").click(function () {
    $(".mainMenu").animate({   // right to left
      width: "toggle"
    });

  });
  $(".closeMenu").click(function () {
    $(".mainMenu").animate({  // left to right
      width: "toggle"
    });
  });
});

// burger-menu end

//tab menu begin

function openMenu(evt, eatingTime) {
  let i, tabcontent, tab;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }
  document.getElementById(eatingTime).style.display = "flex";
  evt.currentTarget.className += " active";
}

//tab menu end
