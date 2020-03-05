var blocTwoTrials = [[1, 1, 1, 2, 1], [1, 1, 1, 2, 2], [1, 1, 1, 2, 3], [1, 1, 2, 2, 1], [1, 1, 2, 2, 2], [1, 1, 2, 2, 3], [1, 2, 1, 2, 1], [1, 2, 1, 2, 2],
    [1, 2, 1, 2, 3], [1, 2, 2, 2, 1], [1, 2, 2, 2, 2], [1, 2, 2, 2, 3], [1, 3, 1, 2, 1], [1, 3, 1, 2, 2], [1, 3, 1, 2, 3], [1, 3, 2, 2, 1], [1, 3, 2, 2, 2],
    [1, 3, 2, 2, 3], [2, 1, 1, 2, 1], [2, 1, 1, 2, 2], [2, 1, 1, 2, 3], [2, 1, 2, 2, 1], [2, 1, 2, 2, 2], [2, 1, 2, 2, 3], [2, 2, 1, 2, 1], [2, 2, 1, 2, 2],
    [2, 2, 1, 2, 3], [2, 2, 2, 2, 1], [2, 2, 2, 2, 2], [2, 2, 2, 2, 3], [2, 3, 1, 2, 1], [2, 3, 1, 2, 2], [2, 3, 1, 2, 3], [2, 3, 2, 2, 1], [2, 3, 2, 2, 2],
    [2, 3, 2, 2, 3], [3, 1, 1, 2, 1], [3, 1, 1, 2, 2], [3, 1, 1, 2, 3], [3, 1, 2, 2, 1], [3, 1, 2, 2, 2], [3, 1, 2, 2, 3], [3, 2, 1, 2, 1], [3, 2, 1, 2, 2],
    [3, 2, 1, 2, 3], [3, 2, 2, 2, 1], [3, 2, 2, 2, 2], [3, 2, 2, 2, 3], [3, 3, 1, 2, 1], [3, 3, 1, 2, 2], [3, 3, 1, 2, 3], [3, 3, 2, 2, 1], [3, 3, 2, 2, 2],
    [3, 3, 2, 2, 3]];
var blocOneTrials = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 2], [1, 1, 1, 1, 3], [1, 1, 2, 1, 1], [1, 1, 2, 1, 2], [1, 1, 2, 1, 3], [1, 2, 1, 1, 1], [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 3], [1, 2, 2, 1, 1], [1, 2, 2, 1, 2], [1, 2, 2, 1, 3], [1, 3, 1, 1, 1], [1, 3, 1, 1, 2], [1, 3, 1, 1, 3], [1, 3, 2, 1, 1], [1, 3, 2, 1, 2],
    [1, 3, 2, 1, 3], [2, 1, 1, 1, 1], [2, 1, 1, 1, 2], [2, 1, 1, 1, 3], [2, 1, 2, 1, 1], [2, 1, 2, 1, 2], [2, 1, 2, 1, 3], [2, 2, 1, 1, 1], [2, 2, 1, 1, 2],
    [2, 2, 1, 1, 3], [2, 2, 2, 1, 1], [2, 2, 2, 1, 2], [2, 2, 2, 1, 3], [2, 3, 1, 1, 1], [2, 3, 1, 1, 2], [2, 3, 1, 1, 3], [2, 3, 2, 1, 1], [2, 3, 2, 1, 2],
    [2, 3, 2, 1, 3], [3, 1, 1, 1, 1], [3, 1, 1, 1, 2], [3, 1, 1, 1, 3], [3, 1, 2, 1, 1], [3, 1, 2, 1, 2], [3, 1, 2, 1, 3], [3, 2, 1, 1, 1], [3, 2, 1, 1, 2],
    [3, 2, 1, 1, 3], [3, 2, 2, 1, 1], [3, 2, 2, 1, 2], [3, 2, 2, 1, 3], [3, 3, 1, 1, 1], [3, 3, 1, 1, 2], [3, 3, 1, 1, 3], [3, 3, 2, 1, 1], [3, 3, 2, 1, 2],
    [3, 3, 2, 1, 3]];
var bugout = new debugout();
var enableConsoleLogging = true;
bugout.autoTrim = false;
bugout.realTimeLoggingOn = enableConsoleLogging;

$(document).ready(function () {

    // document.querySelector('html').className += ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch ? ' touch' : ' no-touch';

    var knob = $(".rotarySwitch").rotaryswitch({
        minimum: 1,
        maximum: 7,
        beginDeg: 225,
        lengthDeg: 270,
        showMarks: true
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
            bugout.logFilename = 'log_' + pnum.val() + '_' + code.val() + '_b' + blockNum.val() + '_' + vertical + '.txt';;
            bugout.downloadLog();
            // uploadToAWS();
            alert("Your response has been submitted.\nThank You!");
            $(e.target).unbind("click")
        }
        else
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

    $('#enableDebug').on('click', function () {
        blocOneTrials = [[3, 1, 1, 1, 4]];
        blocTwoTrials = [[1, 2, 1, 2, 20]];
    })
});