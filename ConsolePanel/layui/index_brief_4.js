var tabs = document.querySelectorAll("nav ul li");
var tabContents = document.querySelectorAll("section div");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    var tabId = this.querySelector("a").getAttribute("href").substring(1);

    for (var j = 0; j < tabContents.length; j++) {
      if (tabContents[j].getAttribute("id") == tabId) {
        tabContents[j].classList.add("active");
      } else {
        tabContents[j].classList.remove("active");
      }
    }

    for (var k = 0; k < tabs.length; k++) {
      tabs[k].classList.remove("active");
    }

    this.classList.add("active");
  });
}