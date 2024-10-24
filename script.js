/*
document.getElementById('addbutton').addEventListener('click', function() {
    const missionname = prompt("Mission Name:");

    if (missionname) {
        const missionlist = document.getElementById('missionname');

        const newmission = document.createElement('li');
        newmission.classList.add('missionname');

        const icon = document.createElement('img');
        icon.src = 'img/missionicon.png'; 
        icon.alt = 'Mission Icon'; 
        icon.classList.add('mission-icon'); 

        const missionText = document.createTextNode(missionname);

        newmission.appendChild(icon); 
        newmission.appendChild(missionText);

        missionlist.appendChild(newmission);

        const missionline = document.createElement('div');
        missionline.classList.add('missionline');
        missionlist.appendChild(missionline);
    }
});
*/