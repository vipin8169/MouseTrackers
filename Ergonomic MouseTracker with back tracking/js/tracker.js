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
var activeTrial = []; // stores the current active trial in progress
var bugout = new debugout();
var beginOtherBlock = false;
var enableConsoleLogging = false;
var blockCount = 1;
bugout.autoTrim = false;
bugout.realTimeLoggingOn = enableConsoleLogging;
// blocOneTrials = [[1, 2, 2, 1, 1], [2, 1, 1, 1, 2], [1, 3, 2, 1, 3], [3, 1, 1, 1, 4]];
// blocTwoTrials = [[1, 3, 2, 2, 1], [2, 3, 1, 2, 1], [1, 2, 2, 2, 2], [3, 3, 1, 2, 20]];
var completeList;
var redImgPrefix = 'img/red/'; // location of red dots
var blackImgPrefix = 'img/black/'; // location of black dots
var initTime; // to store the initial time for every trial
var timesToRepeat; // repeat the block 10 times
var elementToBeTracked;
var panelOffsetHeight = $('#toBeTracked .panel').height();
var panelOffsetLeft = $('#toBeTracked .panel').offset().left;
var panelOffsetTop = $('#toBeTracked .panel').offset().top;
var blockTrialsNum;
var currentBlock;
var startDot;
var endDot;
$(document).ready(function () {

    function trackMouseMovement(event) {
        var eventDoc, doc, body;
        var areaHeight = panelOffsetHeight;
        event = event || window.event; // IE-ism
        // If pageX/Y aren't available and clientX/Y are, calculate pageX/Y - logic taken from jQuery, Calculate pageX/Y if missing and clientX/Y available
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0 );
        }
        var userX = event.pageX - panelOffsetLeft;                   // get the x-coordinate of the user
        var userY = event.pageY - (panelOffsetTop + areaHeight);     // get the y coordinate of the user
        userY *= -1;
        var timeSpent = new Date() - initTime;                                              // find the milli-seconds spent to reach this coordinate position
        bugout.log(userX + "," + userY + "," + timeSpent + ",0,0");            // log it in the firebug console
    }

    function startBackTracking() {
        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        var ele = $('#horizontal .startDot');
        if (currentBlock == 2)
            ele = $('#vertical .startDot');
        $(ele).one('mousemove', function () {
            startDot = blackImgPrefix + activeTrial[0] + '.png';
            $(ele).attr('src', startDot);
            hideStimuli();
            $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
            $(".trialText").show();
            if (timesToRepeat == blockTrialsNum / 2) {
                bugout.downloadLog();
                bugout = new debugout();
                bugout.realTimeLoggingOn = enableConsoleLogging;
                bugout.autoTrim = false;
            }
            if (timesToRepeat <= 0) {
                if (beginOtherBlock && blockCount < 2) {
                    blockCount++;
                    $('#welcomeMessage').removeClass('hide');
                    $("#toBeTracked").addClass('hide');
                    $('#purpose').addClass('hide');
                    $('#instructions').html("You just finished block one! Now, take as much rest as you want. In next experiment, your task is to move the cursor to the image of a MALE face if the cursor is a FLOWER and move the cursor to the image of a FEMALE face if the cursor is a SPIDER. You may start when you are ready.");
                    activateBlock(currentBlock != 1);
                    $('#blockPrompt').removeClass("hide");
                    bugout.downloadLog();
                    bugout = new debugout();
                    bugout.autoTrim = false;
                    // blockTrialsNum = blocTwoTrials.length;
                    bugout.realTimeLoggingOn = enableConsoleLogging;
                }
                else {
                    bugout.downloadLog();
                    $('#startTrial').text('End of Trials!').removeClass('white');    // say that the trials are ended
                }
            }
        });
        enableTrialButton();
    };

    function stopTracking() {
        bugout.log("88,0,0,0,0");
        // console.log("----------------uptracking finished----------------");;
        bugout.log(activeTrial + " ");
        bugout.log("99,0,0,0,0");
        // console.log("----------------downtracking started----------------");
        $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
        startBackTracking();
    };

    var showImgAndStopTracking = function (ele) {
        $(".trialText").hide();
        $(ele).attr('src', endDot);
        $(ele).one('mouseenter', function () {
            startDot = redImgPrefix + activeTrial[0] + '.png';
            endDot = blackImgPrefix + activeTrial[1] + '.png';
            $(ele).attr('src', endDot);
            $(".startDot").attr('src', startDot);
            stopTracking();
        });            // stop the tracking once one of the stimuli is selected
    };

    function hideStimuli() {
        $('#left').attr('src', 'img/1x1.png');
        $('#up').attr('src', 'img/1x1.png');
        $('#down').attr('src', 'img/1x1.png');
        $('#right').attr('src', 'img/1x1.png');
    };

    var displayStimuli = function () {
        $('#blockPrompt').addClass("hide");
        initTime = new Date();
        var randIndex = Math.floor(Math.random() * completeList.length);    // generate a random integer governed by the length of the array
        var currTrial = completeList[randIndex];                            // get the current trial values based on the random index generated above
        startDot = blackImgPrefix + currTrial[0] + '.png';
        endDot = redImgPrefix + currTrial[1] + '.png';

        $(".startDot").attr('src', startDot);
        activeTrial = currTrial;
        bugout.log("0,0,0,0,0");               // marks as the separation between two trials
        hideStimuli();

        completeList.splice(randIndex, 1);          // else remove the trial from the trial list

        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        beginOtherBlock = completeList.length <= 0;

        if (currentBlock == 1) {
            if (currTrial[2] == 1)
                showImgAndStopTracking($('#left'));
            else
                showImgAndStopTracking($('#right'));
        }
        else {
            if (currTrial[2] == 1)
                showImgAndStopTracking($('#up'));
            else
                showImgAndStopTracking($('#down'));
        }
    };

    var enableTrialButton = function () {
        var ele = $('#horizontal .startDot');
        if ((currentBlock == 1 && beginOtherBlock) || (currentBlock == 2 && !beginOtherBlock))
            ele = $('#vertical .startDot');
        $(ele).one('click', function () {
            // $(this).unbind("click");                // remove the click functionality from the start button, until one of the stimuli is selected
            timesToRepeat--;
            if (completeList.length > 0)
                displayStimuli();                   // display the stimuli if trials are still remaining
        });
    };

    var activateBlock = function (activateHorizon) { // 1 for horizon and 2 for vertical
        $('#welcomeMessage').addClass('hide');
        $("#toBeTracked").removeClass('hide');
        if (activateHorizon) {
            currentBlock = 1;
            timesToRepeat = blocOneTrials.length;
            completeList = Array.from(blocOneTrials);
            blockTrialsNum = blocOneTrials.length;
            $("#horizontal").removeClass("hide");
            $("#vertical").addClass("hide");
            elementToBeTracked = $('#horizontal');
        }
        else {
            currentBlock = 2;
            timesToRepeat = blocTwoTrials.length;
            completeList = Array.from(blocTwoTrials);
            blockTrialsNum = blocTwoTrials.length;
            $("#vertical").removeClass("hide");
            $("#horizontal").addClass("hide");
            elementToBeTracked = $('#vertical');
        }
    };

    $('#blockSelect').on('click', '.columns', function () {
        var parentEle = $(event.target).parent();
        activateBlock($(parentEle).hasClass("horizon"));
        enableTrialButton();
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
