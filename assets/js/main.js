countries = Array.from(document.getElementsByClassName("map__items"));
tooltip = document.getElementById("tool_tip");
tooltipModal = document.getElementById("tool_tip_modal");
state_rank_span = document.getElementById("state_rank");
tooltipModal.style.display = "none";

countries.forEach(element => {
    element.addEventListener("mousemove", (e)=>{
        tooltipModal.style.display = "";

        tooltip.innerHTML = (e.target.id).toUpperCase();
        state_rank_span.innerHTML = filter_rank(e.target.id);

        tooltipModal.style.top = `${e.clientY + e.offsetY - e.clientY}px`; // `${e.screenY}`;
        tooltipModal.style.left = `${e.clientX - 30}px`;
    });

    element.addEventListener("mouseleave", (e)=>{
        tooltipModal.style.display = "none";
    })
});

var filter_rank = (state_name)=>{
    target_state_ranking = 0
    state_ratings.forEach(state =>{
        if (state_name == state.name) {
            target_state_ranking = state.rank;
        }
    })
    return target_state_ranking;
}

var state_ratings = [
    {"name":"lagos", "rank":12},
    {"name":"borno", "rank":1},
    {"name":"fct", "rank":36},
    {"name":"kaduna", "rank":16},
    {"name":"cross river", "rank":10},
    {"name":"benue", "rank":15},
    {"name":"adamawa", "rank":11},
    {"name":"abia", "rank":5},
]