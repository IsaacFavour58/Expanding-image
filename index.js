const panelEl = document.querySelectorAll(".panel")
panelEl.forEach((panelIndex) => {
    panelIndex.addEventListener("click", () => {
       console.log("clicked")
       removeActiveClasses()
       panelIndex.classList.add("active")
    });
});

function removeActiveClasses(){
    panelEl.forEach((panelIndex) => {
        panelIndex.classList.remove("active")
    })
}