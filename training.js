
function generateStrength (){
    var unit = "";
    if($("#kilos").is(':active')){
      unit = "kg";
    } else {
      unit = "lb";
    }
    $("#trainingWeek").removeClass("d-none");
    var squat = parseInt($("#squat").val());
    var frontSquat = parseInt($("#frontSquat").val());
    var cleanDL = parseInt($("#cleanDL").val());

    $("#tuesFS").text("Pause front squat (3s/1s): 3-4x1 at " + Math.round(.8*frontSquat) + "-" + Math.round(.9*frontSquat) + unit);
    $("#tuesBS").text("Tempo squat to slightly above bottom position (3s/0s): 3-4x5 at " + Math.round(.6*squat) + "-" + Math.round(.7*squat) + unit);
    $("#satFS").text("Front squat (3s/0s): 3-4x5 at " + Math.round(.6*frontSquat) + "-" + Math.round(.7*frontSquat) + unit);
    if(cleanDL>squat){
      $("#satStr1").text("Pause squat (3s/1s): 3-4x1 at " + Math.round(.8*squat) + "-" + Math.round(.9*squat) + unit);
    } else {
      $("#satStr1").text("Tempo clean DL (3s up, 3s down): 32111 to around " + Math.round(.8*cleanDL) + "-" + Math.round(.9*cleanDL) + unit);
    }
}

function generateClassics (){

  var unit = "";
  if($("#kilos").is(':active')){
    unit = "kg";
  } else {
    unit = "lb";
  }

    var snatch = parseInt($("#snatch").val());
    var cleanJerk = parseInt($("#clean").val());
    var snatchDL = parseInt($("#snatchDL").val());
    var cleanDL = parseInt($("#cleanDL").val());

    $("#monCJ").text("Pause at knee clean + clean + jerk: 4-5 sets of 1+1+1 reps at " + Math.round(.7*cleanJerk) + "-" + Math.round(.8*cleanJerk) + unit);
    $("#wedSn").text("Pause at knee snatch + snatch + OHS: 5-6x1+1+1 at " + Math.round(.7*snatch) + "-" + Math.round(.8*snatch) + unit);
    $("#friSn").text("Slow pull snatch: 8-12x1 at " + Math.round(.75*snatch) + "-" + Math.round(.85*snatch) + unit);
    $("#friCJ").text("Slow pull clean and jerk: 6-8x1+1 at " + Math.round(.75*cleanJerk) + "-" + Math.round(.85*cleanJerk) + unit);

    if(cleanDL>1.25*cleanJerk){
      $("#monPull").text("Pause at knee clean high pull: 3-4x3 at " + Math.round(.8*cleanJerk) + "-" + Math.round(.9*cleanJerk) + unit);
    } else {
      $("#monPull").text("Tempo clean DL (3s up, 3s down): 3-4x3 at " + Math.round(.6*cleanDL) + "-" + Math.round(.7*cleanDL) + unit);
    }
    if(snatchDL>1.25*snatch){
      $("#wedPull").text("Pause at knee snatch high pull: 3-4x3 at " + Math.round(.8*snatch) + "-" + Math.round(.9*snatch) + unit);
    } else {
      $("#wedPull").text("Tempo clean DL (3s up, 3s down): 3-4x3 at " + Math.round(.65*snatchDL) + "-" + Math.round(.75*snatchDL) + unit);
    }

}
