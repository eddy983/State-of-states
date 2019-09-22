countries = Array.from(document.getElementsByClassName("map__items"));
tooltip = document.getElementById("tool_tip");
tooltipModal = document.getElementById("tool_tip_modal");
tooltipText = document.getElementsByClassName("tooltiptext");
stateRank = document.getElementById("state_rank");
state_rank_span = document.getElementById("state_rank");

tooltipModal.style.display = "none";

countries.forEach(element => {
    element.addEventListener("mousemove", (e)=>{

        tooltipModal.style.display = "";

        tooltip.innerHTML = (e.target.id).toUpperCase();
        state_rank_span.innerHTML = filter_rank(e.target.id);

        tooltipModal.style.top = `${e.clientY - 40}px`;
        tooltipModal.style.left = `${e.clientX - 30}px`;
        stateRank.style.color = getColor(e);
        // tooltipText[0].style.color = getColor(e);
        
    });

    element.addEventListener("mouseleave", (e)=>{
        tooltipModal.style.display = "none";
    })
});

var getColor = (e)=>{
    var theCSSprop = window.getComputedStyle(e.srcElement, null).getPropertyValue("fill");
    return theCSSprop;
};

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
  { name: "rivers", rank: 1 },
  { name: "delta", rank: 2 },
  { name: "bayelsa", rank: 3 },
  { name: "lagos", rank: 4 },
  { name: "akwa ibom", rank: 5 },
  { name: "edo", rank: 6 },
  { name: "kano", rank: 7 },
  { name: "ogun", rank: 8 },
  { name: "ondo", rank: 9 },
  { name: "enugu", rank: 10 },
  { name: "anambra", rank: 11 },
  { name: "abia", rank: 12 },
  { name: "katsina", rank: 13 },
  { name: "kaduna", rank: 14 },
  { name: "imo", rank: 15 },
  { name: "kebbi", rank: 16 },
  { name: "niger", rank: 17 },
  { name: "ebonyi", rank: 18 },
  { name: "zamfara", rank: 19 },
  { name: "kwara", rank: 20 },
  { name: "kogi", rank: 21 },
  { name: "yobe", rank: 22 },
  { name: "sokoto", rank: 23 },
  { name: "taraba", rank: 24 },
  { name: "gombe", rank: 25 },
  { name: "benue", rank: 26 },
  { name: "nasarawa", rank: 27 },
  { name: "borno", rank: 28 },
  { name: "jigawa", rank: 29 },
  { name: "oyo", rank: 30 },
  { name: "plateau", rank: 31 },
  { name: "bauchi", rank: 32 },
  { name: "adamawa", rank: 33 },
  { name: "ekiti", rank: 34 },
  { name: "osun", rank: 35 },
  { name: "cross river", rank: 36 }
];