const iconPaths = {
    "GPS-icon": {
        default: "img/GPS.png",
        clicked: "img/GPS.png"
    },
    "cam-icon": {
        default: "img/videocam-on.png",
        clicked: "img/videocam-off.png"
    },
    "sig-icon": {
        default: "img/signal_full.png",
        clicked: "img/signal_no.png"
    },
    "bat-icon": {
        default: "img/battery_full.png",
        clicked: "img/battery_low.png"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll(".state-icon").forEach(icon => {
        icon.addEventListener("click", function() {
            
            const iconId = icon.id; 
            const currentSrc = icon.src.split("/").pop();

            if (currentSrc === iconPaths[iconId].default.split("/").pop()) {
                icon.src = iconPaths[iconId].clicked;
            } else {
                icon.src = iconPaths[iconId].default;
            }
        });
    });
});

//Add Mission
document.getElementById('add-mission-button').addEventListener('click', function() {
    const missionName = prompt("Mission Name：");

    if (missionName) {
        const missionList = document.getElementById('mission-list');
        const newMission = document.createElement('li');
        newMission.textContent = missionName;

        missionList.appendChild(newMission);
    }
});