countries = Array.from(document.getElementsByClassName("map__items"));
tooltip = document.getElementById("tool_tip");
tooltipModal = document.getElementById("tool_tip_modal");
tooltipModal.style.display = "none";

countries.forEach(element => {
    element.addEventListener("mousemove", (e)=>{
        tooltipModal.style.display = "";
        tooltip.innerHTML = e.target.id;
        tooltipModal.style.position = "relative";
        tooltipModal.style.top = `${e.clientY + e.offsetY - e.clientY}px`; // `${e.screenY}`;
        tooltipModal.style.left = `${e.clientX - 30}px`;
    });

    element.addEventListener("mouseleave", (e)=>{
        tooltipModal.style.display = "none";
    })
});

