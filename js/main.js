var myPlayer = videojs("myvideo");
var diapo_actual = -1;
var sub_actual = -1;

var diapos_data = new Array();
diapos_data[0] = new Array();
diapos_data[0]["img"] = "img/diapo00.jpg";
diapos_data[0]["sec"] = 0;
diapos_data[1] = new Array();
diapos_data[1]["img"] = "img/diapo02.jpg";
diapos_data[1]["sec"] = 30;
diapos_data[2] = new Array();
diapos_data[2]["img"] = "img/diapo03.jpg";
diapos_data[2]["sec"] = 60;
diapos_data[3] = new Array();
diapos_data[3]["img"] = "img/diapo04.jpg";
diapos_data[3]["sec"] = 100;
diapos_data[4] = new Array();
diapos_data[4]["img"] = "img/diapo05.jpg";
diapos_data[4]["sec"] = 150;
diapos_data[5] = new Array();
diapos_data[5]["img"] = "img/diapo06.jpg";
diapos_data[5]["sec"] = 200;
diapos_data[6] = new Array();
diapos_data[6]["img"] = "img/diapo07.jpg";
diapos_data[6]["sec"] = 300;
diapos_data[7] = new Array();
diapos_data[7]["img"] = "img/diapo08.jpg";
diapos_data[7]["sec"] = 400;
diapos_data[8] = new Array();
diapos_data[8]["img"] = "img/diapo09.jpg";
diapos_data[8]["sec"] = 500;
diapos_data[9] = new Array();
diapos_data[9]["img"] = "img/diapo10.jpg";
diapos_data[9]["sec"] = 600;
diapos_data[10] = new Array();
diapos_data[10]["img"] = "img/diapo11.jpg";
diapos_data[10]["sec"] = 700;
diapos_data[11] = new Array();
diapos_data[11]["img"] = "img/diapo12.jpg";
diapos_data[11]["sec"] = 800;
diapos_data[12] = new Array();
diapos_data[12]["img"] = "img/diapo13.jpg";
diapos_data[12]["sec"] = 900;
diapos_data[13] = new Array();
diapos_data[13]["img"] = "img/diapo14.jpg";
diapos_data[13]["sec"] = 1000;
diapos_data[14] = new Array();
diapos_data[14]["img"] = "img/diapo15.jpg";
diapos_data[14]["sec"] = 1100;
diapos_data[15] = new Array();
diapos_data[15]["img"] = "img/diapo16.jpg";
diapos_data[15]["sec"] = 1200;
diapos_data[16] = new Array();
diapos_data[16]["img"] = "img/diapo17.jpg";
diapos_data[16]["sec"] = 1300;
diapos_data[17] = new Array();
diapos_data[17]["img"] = "img/diapo18.jpg";
diapos_data[17]["sec"] = 1400;
diapos_data[18] = new Array();
diapos_data[18]["img"] = "img/diapo19.jpg";
diapos_data[18]["sec"] = 1500;
diapos_data[19] = new Array();
diapos_data[19]["img"] = "img/diapo20.jpg";
diapos_data[19]["sec"] = 1600;
diapos_data[20] = new Array();
diapos_data[20]["img"] = "img/diapo21.jpg";
diapos_data[20]["sec"] = 1700;
diapos_data[21] = new Array();
diapos_data[21]["img"] = "img/diapo22.jpg";
diapos_data[21]["sec"] = 1900;
diapos_data[22] = new Array();
diapos_data[22]["img"] = "img/diapo23.jpg";
diapos_data[22]["sec"] = 1900;
diapos_data[23] = new Array();
diapos_data[23]["img"] = "img/diapo24.jpg";
diapos_data[23]["sec"] = 1900;
diapos_data[24] = new Array();
diapos_data[24]["img"] = "img/diapo25.jpg";
diapos_data[24]["sec"] = 1900;
diapos_data[25] = new Array();
diapos_data[25]["img"] = "img/diapo26.jpg";
diapos_data[25]["sec"] = 1900;
diapos_data[26] = new Array();
diapos_data[26]["img"] = "img/diapo27.jpg";
diapos_data[26]["sec"] = 1900;
diapos_data[27] = new Array();
diapos_data[27]["img"] = "img/diapo28.jpg";
diapos_data[27]["sec"] = 1900;
diapos_data[28] = new Array();
diapos_data[28]["img"] = "img/diapo29.jpg";
diapos_data[28]["sec"] = 1900;
diapos_data[29] = new Array();
diapos_data[29]["img"] = "img/diapo30.jpg";
diapos_data[29]["sec"] = 1900;
diapos_data[30] = new Array();
diapos_data[30]["img"] = "img/diapo31.jpg";
diapos_data[30]["sec"] = 1900;
diapos_data[31] = new Array();
diapos_data[31]["img"] = "img/diapo32.jpg";
diapos_data[31]["sec"] = 1900;
diapos_data[32] = new Array();
diapos_data[32]["img"] = "img/diapo33.jpg";
diapos_data[32]["sec"] = 1900;
diapos_data[33] = new Array();
diapos_data[33]["img"] = "img/diapo34.jpg";
diapos_data[33]["sec"] = 1900;
diapos_data[34] = new Array();
diapos_data[34]["img"] = "img/diapo35.jpg";
diapos_data[34]["sec"] = 1900;
diapos_data[35] = new Array();
diapos_data[35]["img"] = "img/diapo36.jpg";
diapos_data[35]["sec"] = 1900;
diapos_data[36] = new Array();
diapos_data[36]["img"] = "img/diapo37.jpg";
diapos_data[36]["sec"] = 1900;
diapos_data[37] = new Array();
diapos_data[37]["img"] = "img/diapo38.jpg";
diapos_data[37]["sec"] = 1900;
diapos_data[38] = new Array();
diapos_data[38]["img"] = "img/diapo39.jpg";
diapos_data[38]["sec"] = 1900;
diapos_data[39] = new Array();
diapos_data[39]["img"] = "img/diapo40.jpg";
diapos_data[39]["sec"] = 1900;
diapos_data[40] = new Array();
diapos_data[40]["img"] = "img/diapo41.jpg";
diapos_data[40]["sec"] = 1900;
diapos_data[41] = new Array();
diapos_data[41]["img"] = "img/diapo42.jpg";
diapos_data[41]["sec"] = 1900;
diapos_data[42] = new Array();
diapos_data[42]["img"] = "img/diapo43.jpg";
diapos_data[42]["sec"] = 1900;
diapos_data[43] = new Array();
diapos_data[43]["img"] = "img/diapo44.jpg";
diapos_data[43]["sec"] = 1900;
diapos_data[44] = new Array();
diapos_data[44]["img"] = "img/diapo45.jpg";
diapos_data[44]["sec"] = 1900;
diapos_data[45] = new Array();
diapos_data[45]["img"] = "img/diapo46.jpg";
diapos_data[45]["sec"] = 1900;
diapos_data[46] = new Array();
diapos_data[46]["img"] = "img/diapo47.jpg";
diapos_data[46]["sec"] = 1900;
diapos_data[47] = new Array();
diapos_data[47]["img"] = "img/diapo48.jpg";
diapos_data[47]["sec"] = 1900;

videojs("myvideo").ready(function () {
  var myPlayer = this;
});

function video_play() {
  myPlayer.play();
}
function video_stop() {
  myPlayer.pause();
}

function go_to_second(sec) {
  myPlayer.currentTime(sec);
  myPlayer.play();
}

function load_diapo(id) {
  diapo_actual = id;

  for (i = 0; i < 48; i++) {
    var diapo_element = "#diapo_th_" + i;
    $(diapo_element).removeClass("resaltada");
  }

  var diapo_element = "#diapo_th_" + id;
  $(diapo_element).addClass("resaltada");

  var imagen = diapos_data[id]["img"];
  var diapo_grande = '<img src="' + imagen + '"/>';
  $("#diapo_grande").html(diapo_grande);
}

function load_subtitulo(id) {
  sub_actual = id;
  $("#subtitulos_field").html(subtitulos_data[id]["text"]);
}

function showtime_estamos(que) {
  var sec = Math.round(que);

  var minutos = 0;
  for (i = 59; i < sec; i += 60) {
    minutos++;
  }

  if (minutos > 0) {
    var restasec = minutos * 60;
    sec = sec - restasec;
    if (sec < 10) sec = "0" + sec;
    if (minutos < 10) minutos = "0" + minutos;
  } else {
    if (sec < 10) sec = "0" + sec;
    minutos = "00";
  }

  var html = minutos + ":" + sec;

  $("#current_time").html(html);
}

function sync_core() {
  var sec_actual = myPlayer.currentTime();
  showtime_estamos(sec_actual);
  var nueva_diapo = 0;

  for (i = 0; i < 48; i++) {
    var sec_diapo = diapos_data[i]["sec"];
    if (sec_diapo < sec_actual) nueva_diapo = i;
  }

  // Si la diapo nueva es distinta a la actual, la cargamos
  if (nueva_diapo != diapo_actual) {
    load_diapo(nueva_diapo);
  }
}

$(document).ready(function () {
  // Sincronia
  setInterval(function () {
    sync_core();
  }, 100);

  // Hacemos las imagenes clicables
  $(".diapo_clicable").each(function (index) {
    var sec = $(this).attr("data");
    $(this).click(function () {
      go_to_second(sec);
    });
  });

  // Arrancamos la 1a diapo
  //go_to_second(0);
});
