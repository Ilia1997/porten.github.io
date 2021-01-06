function ibg(className) {
  let ibj = document.querySelectorAll(className);

  for (var i = 0; i < ibj.length; i++) {
    let elem = ibj[i];

    if (elem.querySelector("img")) {
      elem.style.backgroundImage =
        "url(" + elem.querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg(".main_info_wrap");
ibg(".item_img");
ibg(".main_catalog_colection");
ibg(".main_colection_img");
ibg(".footer_info");
const data_val = document
  .querySelector("input[data-value]")
  .getAttribute("data-value");
function setInput() {
  document.querySelector("input[data-value]").value = data_val;
}
setInput();
document.querySelector("input").addEventListener("mousemove", (e) => {
  if (e.target.value == data_val) {
    e.target.value = "";
  }
});
document.querySelector("input").addEventListener("mouseout", (e) => {
  if (e.target.value == "") {
    document.querySelector("input[data-value]").value = data_val;
  }
});
//   ibg(".get_in_touch_wrap");
//   ibg(".photo_1");
//   ibg(".photo_2");
//   ibg(".photo_3");
//   $(document).ready(function () {
//     $(".head_burger").click(function (e) {
//       $(".head_burger, .nav_menu_links_ws").toggleClass("active");
//       $("body").toggleClass("lock");
//     });
//   });
