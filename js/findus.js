setOpenImage();
function setOpenImage(){
    var findusSubtitleLeft=document.getElementById("findusSubtitle-left");
    if(!findusSubtitleLeft)return;
    if(isOpen())findusSubtitleLeft.innerHTML="On est OUVERT!";
    else findusSubtitleLeft.innerHTML="Actualement FERMÉ :( ";
};
function isOpen(){
    var openHours = getOpenHours(new Date().getDay());
    if(openHours && isTimeOpen(openHours)) return true;
    return false;
};


function getOpenHours(day){
    var ele =  document.getElementById("findus-"+day);
    var dayEle = ele.getElementsByClassName("day");
    var timeEle = ele.getElementsByClassName("timeplace");
    setdateColor(dayEle,timeEle);
    //Change color

    return timeEle[0].getInnerHTML().split("<")[0]
}
function setdateColor(dayEle,timeEl){
    var element = document.getElementById("findusSubtitle-right");
    if(!element)return;
    var color = getComputedStyle(element).color;
    dayEle[0].style.color = color;
    timeEl[0].style.color = color;
    dayEle[0].style["font-weight"] = "700";
    timeEl[0].style["font-weight"] = "700";
};
function isTimeOpen(openHours){
    if(!isInteger(openHours[0]))return false;
    var hoursArray = hoursToArray(openHours);
    

    currentDate = new Date();   

    startDate = new Date(currentDate.getTime());
    startDate.setHours(hoursArray[0][0]);
    startDate.setMinutes(hoursArray[0][1]);

    endDate = new Date(currentDate.getTime());
    endDate.setHours(hoursArray[1][0]);
    endDate.setMinutes(hoursArray[1][1]);


    if(startDate < currentDate && endDate > currentDate) return true;
    return false;

}

function hoursToArray(openHours){
    var out=[];
    var arr = openHours.split("-");
    for (let i = 0; i < arr.length; i++) {
        out.push(arr[i].split("h"))
    }
    return out;
}

function isInteger(str) {
    if (typeof str !== 'string') {
      return false;
    }
    const num = Number(str);
    if (Number.isInteger(num) ) {
      return true;
    }
    return false;
  }

