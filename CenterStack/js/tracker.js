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

$(document).ready(function () {
    // document.querySelector('html').className += ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch ? ' touch' : ' no-touch';
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
        bugout.log(timeLog + "," + $(knobValue).html().toString() + ",1");
    });

    $("#play").on('click', function () {
        startTime = new Date();
        if (!paused) {
            bugout.log("0,0,77");
            timeLog = 0;
        } else {
            bugout.log(timeLog + "," + $(knobValue).html().toString() + ",89");
        }

        timeInterval = setInterval(startOresumeTime, 1000);
    });

    var startOresumeTime = function () {
        timeLog++;
        var now = new Date();
        var diff = (now - startTime) + timeBeforePause;
        var timeLapsed = new Date(diff);
        var hours = Math.floor((timeLapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var timeLapseString = "";
        if (hours > 0)
            timeLapseString = timeLapsed.toISOString().substr(11, 8);
        else
            timeLapseString = timeLapsed.toISOString().substr(14, 5);
        $(clock).html(timeLapseString);
        bugout.log(timeLog + "," + $(knobValue).html().toString() + ",0");
    };

    $("#pause").on('click', function () {
        paused = true;
        var now = new Date();
        timeBeforePause += now - startTime;
        clearInterval(timeInterval);
        bugout.log(timeLog + "," + $(knobValue).html().toString() + ",88");
    });

    $("#stop").on('click', function () {
        clearInterval(timeInterval);
        bugout.log(timeLog + "," + $(knobValue).html().toString() + ",99");
        timeLog = 0;
        // save and download the data below
    });

    function uploadToAWS() {
        var fd = new FormData();
        var file = new Blob([bugout.output], {type: 'plain/text'});
        fd.append('key', 'mousetracker/${filename}');
        var filename = 'log_' + pnum.val() + '_' + code.val() + '_b' + blockNum.val() + '_' + vertical + '.txt';
        fd.append('file', file, filename);
        $.ajax({
            url: 'https://hansoltracker.s3.amazonaws.com/',
            method: 'post',
            data: fd,
            processData: false,        //this...
            contentType: false         //and this is for formData type
        });
    }

    $("#submitToAWS").on("click", function (e) {
        e.preventDefault();
        var scaleRes = $(".js-input").val();
        if (scaleRes > 0 && scaleRes < 10) {
            bugout.log("55,0,0,0," + scaleRes);
            bugout.logFilename = 'log_' + pnum.val() + '_' + code.val() + '_b' + blockNum.val() + '_' + vertical + '.txt';
            ;
            bugout.downloadLog();
            // uploadToAWS();
            alert("Your response has been submitted.\nThank You!");
            $(e.target).unbind("click")
        } else
            alert("Please choose a response in the range 1-9");
    });

    $('#enableConsoleLog').on('click', function () {
        enableConsoleLogging = !enableConsoleLogging;
        bugout.realTimeLoggingOn = enableConsoleLogging;
        if (enableConsoleLogging)
            $(this).html("Disable logging to console");
        else
            $(this).html("Enable logging to console")
    })
});