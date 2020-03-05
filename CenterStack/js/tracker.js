var bugout = new debugout();
var enableConsoleLogging = true;
bugout.autoTrim = false;
bugout.realTimeLoggingOn = enableConsoleLogging;
var startTime;
var timeBeforePause = 0;
var timeInterval;
var knobValue = $("#knob-value");
var clock = $("#time-lapse");
var timeLog;
var paused = false;
var pnum, blockNum, initial, condition;
var playButt, pauseButt, stopButt;
var diffTimeLog, now;
var blackDot;

$(document).ready(function () {
    // document.querySelector('html').className += ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch ? ' touch' : ' no-touch';
    playButt = $("#play");
    pauseButt = $("#pause");
    stopButt = $("#stop");
    blackDot = $("#black-dot img");

    var knob = $(".rotarySwitch").rotaryswitch({
        minimum: 1,
        maximum: 7,
        beginDeg: 225,
        lengthDeg: 270,
        showMarks: true
    });

    knob.on('change', function () {
        $(knobValue).html(this.value);
        // console.log(this.value);
    });

    $("#analog-button").on('click', function () {
        now = new Date();
        diffTimeLog = (now - startTime) + timeBeforePause;
        bugout.log(diffTimeLog + "," + $(knobValue).html().toString() + ",1");
        $(blackDot).removeClass("hide");
        setTimeout(function () {
            $(blackDot).addClass("hide");
        }, 200)
    });

    $(playButt).one('click', function () {
        pnum = $("input[name='pNum']");
        blockNum = $("input[name='blockNum']");
        initial = $("input[name='initial']");
        condition = $("input[name='condition']");
        bugout.log(pnum.val() + "," + blockNum.val() + "," + condition.val());
    }).on('click', '.enabled', function () {
        $(pauseButt).find("img").addClass("enabled");
        $(stopButt).find("img").addClass("enabled");
        $(playButt).find("img").removeClass("enabled");
        startTime = new Date();
        if (!paused) {
            bugout.log("0,0,77");
            timeLog = 0;
        } else {
            now = new Date();
            diffTimeLog = (now - startTime) + timeBeforePause;
            bugout.log(diffTimeLog + "," + $(knobValue).html().toString() + ",89");
        }

        timeInterval = setInterval(startOresumeTime, 10); // poll every 10ms
    });

    var startOresumeTime = function () {
        timeLog++;
        now = new Date();
        diffTimeLog = (now - startTime) + timeBeforePause;
        var timeLapsed = new Date(diffTimeLog);
        var hours = Math.floor((timeLapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var timeLapseString = "";
        if (hours > 0)
            timeLapseString = timeLapsed.toISOString().substr(11, 8);
        else
            timeLapseString = timeLapsed.toISOString().substr(14, 5);
        $(clock).html(timeLapseString);
        bugout.log(diffTimeLog + "," + $(knobValue).html().toString() + ",0");
    };

    $(pauseButt).on('click', function () {
        paused = true;
        $(pauseButt).find("img").removeClass("enabled");
        $(playButt).find("img").addClass("enabled");
        var now = new Date();
        clearInterval(timeInterval);
        now = new Date();
        diffTimeLog = (now - startTime) + timeBeforePause;
        timeBeforePause += now - startTime;
        bugout.log(diffTimeLog + "," + $(knobValue).html().toString() + ",88");
    });

    $(stopButt).on('click', function () {
        $(pauseButt).find("img").removeClass("enabled");
        $(stopButt).find("img").removeClass("enabled");
        $(playButt).find("img").addClass("enabled");
        clearInterval(timeInterval);
        now = new Date();
        diffTimeLog = (now - startTime) + timeBeforePause;
        bugout.log(diffTimeLog + "," + $(knobValue).html().toString() + ",99");
        timeLog = 0;
        // save and download the data below
        uploadToAWS();
    });

    function uploadToAWS() {
        var fd = new FormData();
        var file = new Blob([bugout.output], {type: 'plain/text'});
        fd.append('key', 'centrestack/${filename}');
        var now = new Date();
        now = now.toISOString().substring(0, 10).split("-").join("");
        var filename = 'P' + pnum.val() + '_' + initial.val() + '_' + blockNum.val() + '_' + condition.val() + "_" + now + '.txt';
        fd.append('file', file, filename);
        $.ajax({
            url: 'https://gameexperiencesurvey.s3.amazonaws.com/',
            method: 'post',
            data: fd,
            processData: false,        //this...
            contentType: false         //and this is for formData type
        });
    }

    $('#enableConsoleLog').on('click', function () {
        enableConsoleLogging = !enableConsoleLogging;
        bugout.realTimeLoggingOn = enableConsoleLogging;
        if (enableConsoleLogging)
            $(this).html("Disable logging to console");
        else
            $(this).html("Enable logging to console")
    })
});