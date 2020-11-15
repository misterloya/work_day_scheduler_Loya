$(document).ready(function(){
    $("p#currentDay").append(moment().format('dddd,MMM Do'))    
    var currentHour = moment().format("ha");    
 var timeArr  = $("input");
 for (i=0; i<timeArr.length; i++) {
    var hour = $(timeArr[i]).attr("id")
    var task = localStorage.getItem("item" + hour);
  
    $(timeArr[i]).val(task)
    
    
    var difference = moment(hour, "ha").diff(moment(currentHour, "ha"), "hours");
    if (difference <0){
        $(timeArr[i]).css("background", "#d3d3d3");
    }
  
    else if (difference === 0){
        $(timeArr[i]).css("background", "red")
        }
    else {
        $(timeArr[i]).css("background", "green")
    }
 }
 // 9AM
 $("#saveBtn9am").on("click", function(){
    $("input9am").css("background" , "green");
    // local storage
    var itemInput = $("#9AM").val();
    localStorage.setItem("item9AM", (itemInput));
    $("#saveBtn9AM").on("click", function() {
        $("input#9AM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item9AM");
    })  
    // remove text from input
    $("saveBtn9AM").on("click", function(){
        $("#9AM").val() = "";  
    })
 });  
 // 10am
 $("#saveBtn10am").on("click", function(){
    $("input10am").css("background" , "green");
    // local storage
    var itemInput = $("#10AM").val();
    localStorage.setItem("item10AM", (itemInput));
    $("#saveBtn10AM").on("click", function() {
        $("input#10AM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item10AM");
    })  
    // remove text from input
    $("saveBtn10AM").on("click", function(){
        $("#10AM").val() = "";  
    })
 });  
 // 11am
 $("#saveBtn11AM").on("click", function(){
    $("input11AM").css("background" , "green");
    // local storage
    var itemInput = $("#11AM").val();
    localStorage.setItem("item9AM", (itemInput));
    $("#saveBtn11AM").on("click", function() {
        $("input#11AM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item11AM");
    })  
    // remove text from input
    $("saveBtn11AM").on("click", function(){
        $("#11AM").val() = "";  
    })
 });  
 // 12pm
 $("#saveBtn12PM").on("click", function(){
    $("input12PM").css("background" , "green");
    // local storage
    var itemInput = $("#12PM").val();
    localStorage.setItem("item12PM", (itemInput));
    $("#saveBtn12PM").on("click", function() {
        $("input#12PM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item12PM");
    })  
    // remove text from input
    $("saveBtn12PM").on("click", function(){
        $("#12PM").val() = "";  
    })
 });  
 // 1pm
 $("#saveBtn1PM").on("click", function(){
    $("input1PM").css("background" , "green");
    // local storage
    var itemInput = $("#1PM").val();
    localStorage.setItem("item1PM", (itemInput));
    $("#saveBtn1PM").on("click", function() {
        $("input#1PM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item1PM");
    })  
    // remove text from input
    $("saveBtn1PM").on("click", function(){
        $("#1PM").val() = "";  
    })
 });
    
 // 2pm
 $("#saveBtn2PM").on("click", function(){
    $("input2PM").css("background" , "green");
    // local storage
    var itemInput = $("#2PM").val();
    localStorage.setItem("item2PM", (itemInput));
    $("#saveBtn2PM").on("click", function() {
        $("input#2PM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item2PM");
    })  
    // remove text from input
    $("saveBtn2PM").on("click", function(){
        $("#2PM").val() = "";  
    })
 });  
 // 3pm
 $("#saveBtn3PM").on("click", function(){
    $("input3PM").css("background" , "green");
    // local storage
    var itemInput = $("#3PM").val();
    localStorage.setItem("item3PM", (itemInput));
    $("#saveBtn3PM").on("click", function() {
 8:27
 $("input#3PM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item3PM");
    })  
    // remove text from input
    $("saveBtn3PM").on("click", function(){
        $("#3PM").val() = "";  
    })
 });  
 // 4pm
 $("#saveBtn4PM").on("click", function(){
    $("input4PM").css("background" , "green");
    // local storage
    var itemInput = $("#4PM").val();
    localStorage.setItem("item4PM", (itemInput));
    $("#saveBtn4PM").on("click", function() {
        $("input#4PM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item4PM");
    })  
    // remove text from input
    $("saveBtn4PM").on("click", function(){
        $("#4PM").val() = "";  
    })
 });
    
 // 5pm
 $("#saveBtn5PM").on("click", function(){
    $("input5PM").css("background" , "green");
    // local storage
    var itemInput = $("#5PM").val();
    localStorage.setItem("item5PM", (itemInput));
    $("#saveBtn5PM").on("click", function() {
        $("input#5PM").css("opacity", "0.5");
        // remove from LS
        localStorage.removeItem("item5PM");
    })  
    // remove text from input
    $("saveBtn5PM").on("click", function(){
        $("#5PM").val() = "";  
    })
    console.log(moment());
 });
 });