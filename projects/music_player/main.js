function play_pause(){
    console.log("paused");
    var play_button = document.getElementById("play-button");
    if (play_button.classList.contains("fa-play")){
        play_button.classList.remove("fa-play");
        play_button.classList.add("fa-pause");
    } else {
        play_button.classList.remove("fa-pause");
        play_button.classList.add("fa-play");
    }
}
function previous_song(){
    console.log("previous song");
}
function next_song() {
    console.log("next song");
}
function update_progress() {

}
