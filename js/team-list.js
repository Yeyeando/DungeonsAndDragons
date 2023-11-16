let team = [
];

function initialize() {
    const TEAM_FORM = document.getElementById("team-form");
    TEAM_FORM.addEventListener("submit", addAdventurous);

    showTeam();
}

function addAdventurous(event) {
    event.preventDefault();

    const ADVENTUROUS = event.target.adventurous.value;
    const STORE = true;
    for (let i = 0; i < team.length; i++) {
        if(team[i]== ADVENTUROUS){
            STORE = false;
        }
    }

    if(!STORE){
        let ADVENTUROUS_ERROR1 = document.getElementById("adventurous-error1");
        ADVENTUROUS_ERROR1.style.visibility = "visible";
    }
    
    else if (team.length > 3) {
        let ADVENTUROUS_ERROR2 = document.getElementById("adventurous-error2");
        ADVENTUROUS_ERROR2.style.visibility = "visible";
    }
    else {
        team.push({
            adventurous: ADVENTUROUS,
        });
        let ADVENTUROUS_ERROR = document.getElementById("adventurous-error");
        ADVENTUROUS_ERROR.style.visibility = "hidden";
    }


    showTeam();
}


function showTeam() {
    const TEAM_LIST = document.getElementById("team-list");

    let alladventurers = "";
    for (let i = 0; i < team.length; i++) {
        alladventurers = alladventurers + `<li>${team[i].adventurous} <button onclick="deleteBicycle(${i})">Delete</button></li>`;
    }
    TEAM_LIST.innerHTML = alladventurers;
    const ADVENTUROUS = target.adventurous.value;
    ADVENTUROUS = "";
}

function deleteBicycle(bicycleid) {
    team.splice(bicycleid, 1);
    let ADVENTUROUS_ERROR2 = document.getElementById("adventurous-error2");
    ADVENTUROUS_ERROR2.style.visibility = "hidden";
    showTeam();
}



initialize();