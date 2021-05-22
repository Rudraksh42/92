function add_user(){

    var playername1;
    var playername2;
    playername1=document.getElementById("player_name_input1").value;
    playername2=document.getElementById("player_name_input2").value;
    localStorage.setItem("player_name_input1",playername1);
    localStorage.setItem("player_name_input2",playername2);
    window.location="game_page.html";
}


