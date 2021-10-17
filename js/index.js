/* -------------------------------------------------------------------------- */
/*                             Change class active                            */
/* -------------------------------------------------------------------------- */
let liActive = 0;
let liMenu = document.querySelectorAll(".gtr-menu__li");

liMenu.forEach((element, index) => {
  element.addEventListener("click", function () {
    changeActive(index);
  });
});

function changeActive(index) {
  liMenu[liActive].classList.remove("active");
  liMenu[index].classList.add("active");
  liActive = index;
}
/* -------------------------------------------------------------------------- */
/*                                  dark mode                                 */
/* -------------------------------------------------------------------------- */
const chk = document.getElementById("chk");
const body = document.querySelector("body");
chk.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});
