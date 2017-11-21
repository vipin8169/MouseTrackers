// In the following 2D Array list elements are coded as follows:
// left side  	1 2 3 4 5 6 7 8		// which image will appear on the left
// right side 	5 6 7 8 1 2 3 4 	// which image will appear on the right
// cursor 		0 1 0 1 0 1 0 1 	// 0=spider, 1=flower, -1=auto
// block 1 or 2
// list = [left face, right face, cursor, block]
var blocOneTrials = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 2, 1], [1, 1, 2, 1], [1, 1, 2, 1], [1, 2, 1, 1],
    [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 3, 1, 1], [1, 3, 1, 1], [1, 3, 1, 1],
    [1, 3, 2, 1], [1, 3, 2, 1], [1, 3, 2, 1], [2, 1, 1, 1], [2, 1, 1, 1], [2, 1, 1, 1], [2, 1, 2, 1], [2, 1, 2, 1],
    [2, 1, 2, 1], [2, 2, 1, 1], [2, 2, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [2, 2, 2, 1], [2, 2, 2, 1], [2, 3, 1, 1],
    [2, 3, 1, 1], [2, 3, 1, 1], [2, 3, 2, 1], [2, 3, 2, 1], [2, 3, 2, 1], [3, 1, 1, 1], [3, 1, 1, 1], [3, 1, 1, 1],
    [3, 1, 2, 1], [3, 1, 2, 1], [3, 1, 2, 1], [3, 2, 1, 1], [3, 2, 1, 1], [3, 2, 1, 1], [3, 2, 2, 1], [3, 2, 2, 1],
    [3, 2, 2, 1], [3, 3, 1, 1], [3, 3, 1, 1], [3, 3, 1, 1], [3, 3, 2, 1], [3, 3, 2, 1], [3, 3, 2, 1]];
blocOneTrials = [[1, 2, 2, 1], [2, 1, 1, 1], [1, 3, 2, 1], [3, 1, 1, 1]];
var blocTwoTrials = [[1, 1, 1, 2], [1, 1, 1, 2], [1, 1, 1, 2], [1, 1, 2, 2], [1, 1, 2, 2], [1, 1, 2, 2], [1, 2, 1, 2],
    [1, 2, 1, 2], [1, 2, 1, 2], [1, 2, 2, 2], [1, 2, 2, 2], [1, 2, 2, 2], [1, 3, 1, 2], [1, 3, 1, 2], [1, 3, 1, 2],
    [1, 3, 2, 2], [1, 3, 2, 2], [1, 3, 2, 2], [2, 1, 1, 2], [2, 1, 1, 2], [2, 1, 1, 2], [2, 1, 2, 2], [2, 1, 2, 2],
    [2, 1, 2, 2], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 3, 1, 2],
    [2, 3, 1, 2], [2, 3, 1, 2], [2, 3, 2, 2], [2, 3, 2, 2], [2, 3, 2, 2], [3, 1, 1, 2], [3, 1, 1, 2], [3, 1, 1, 2],
    [3, 1, 2, 2], [3, 1, 2, 2], [3, 1, 2, 2], [3, 2, 1, 2], [3, 2, 1, 2], [3, 2, 1, 2], [3, 2, 2, 2], [3, 2, 2, 2],
    [3, 2, 2, 2], [3, 3, 1, 2], [3, 3, 1, 2], [3, 3, 1, 2], [3, 3, 2, 2], [3, 3, 2, 2], [3, 3, 2, 2]];
var activeTrial = [];
var bugout = new debugout();
bugout.autoTrim = false;
bugout.realTimeLoggingOn = true;
blocTwoTrials = [[1, 3, 2, 2], [2, 3, 1, 2], [1, 2, 2, 2], [3, 3, 1, 2]];
var completeList;
var redImgPrefix = 'img/red/'; // location of red dots
var blackImgPrefix = 'img/black/'; // location of black dots
var initTime; // to store the initial time for every trial
var timesToRepeat; // repeat the block 10 times

var elementToBeTracked = $('#toBeTracked');
var panelOffsetHeight = $('#toBeTracked .panel').height();
var panelOffsetLeft = $('#toBeTracked .panel').offset().left;
var panelOffsetTop = $('#toBeTracked .panel').offset().top;
// var timeInterval = [1000, 1250, 1500, 1750];
var blockTrialsNum;
var currentBlock;
$(document).ready(function () {

    // stop the tracking, log the results
    function stopTracking(event, beginOtherBlock) {
        bugout.log("88,0,0,0,0");
        // console.log("----------------uptracking finished----------------");;
        // if (event.target.id == 'left' || event.target.id == 'up') {
        //     // console.log("Stimuli= " + activeTrial + ',1');                               // log what are we showing to the user
        //     bugout.log(activeTrial + ',1');                               // log what are we showing to the user
        // }
        // else {
        //     bugout.log(activeTrial + ',2');                               // log what are we showing to the user
        //     // console.log("Stimuli= " + activeTrial + ',2');                               // log what are we showing to the user
        // }
        bugout.log("99,0,0,0,0");
        // console.log("----------------downtracking started----------------");
        $("#left").unbind("mouseenter");                // unbind the mouseenter event from the stimuli, which is binded on line 57
        $("#right").unbind("mouseenter");               // unbind the mousemove to stop mouse tracking
        $("#up").unbind("mouseenter");               // unbind the mousemove to stop mouse tracking
        $("#down").unbind("mouseenter");               // unbind the mousemove to stop mouse tracking
        $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking

        // var randInterval = Math.floor(Math.random() * timeInterval.length);    // generate a random integer governed by the length of the array
        // $('#startTrial').text("Wait!").addClass('white');          // change the button text
        // setTimeout(function () {
        startBackTracking(beginOtherBlock);

        // }, timeInterval[randInterval]);

        if (timesToRepeat > 0) {
            // setTimeout(function () {
            //     enableTrialButton();                    // enable the trial button again after 500ms
            // }, 500);
        }
        else {
            if (beginOtherBlock) {                          // timesToRepeat = 0 and the currTrial[3] == 1 defines the end of block 1
                // $('#welcomeMessage').removeClass('hide');
                // $(elementToBeTracked).addClass('hide');
                // $('#purpose').addClass('hide');
                // $('#instructions').html("You just finished block one! Now, take as much rest as you want. In next experiment, your task is to move the cursor to the image of a MALE face if the cursor is a FLOWER and move the cursor to the image of a FEMALE face if the cursor is a SPIDER. You may start when you are ready.");
                // // enableTrialButton();
                // completeList = Array.from(blocTwoTrials);
                // timesToRepeat = blocTwoTrials.length;
                // $('.nimstim img').attr('src', 'img/pic1.png');
            }
            // else{
            //     bugout.downloadLog();
            //     $('.startTrial').text('End of Trials!');    // say that the trials are ended
            // }
        }
    }

    function startBackTracking(beginOtherBlock) {
        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        // $('#startTrial').text("Come back!").removeClass('white');
        $('.startDot').bind('mousemove', function () {
            // $('#startTrial').text("Start Trial!").removeClass('white');
            // $(elementToBeTracked).css('cursor', 'auto');        // change the cursor to default
            $(this).unbind("mousemove");                // remove the click functionality from the start button, until one of the stimuli is selected
            $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
            // if (timesToRepeat > 0) {
            enableTrialButton();                    // enable the trial button again after 500ms
            // }
            if (timesToRepeat == blockTrialsNum / 2) {
                bugout.downloadLog();
                bugout = new debugout();
                bugout.realTimeLoggingOn = true;
                bugout.autoTrim = false;
            }
            if (timesToRepeat <= 0) {
                // if (beginOtherBlock) {
                // $('#welcomeMessage').removeClass('hide');
                // $(elementToBeTracked).addClass('hide');
                $('#purpose').addClass('hide');
                $('#instructions').html("You just finished block one! Now, take as much rest as you want. In next experiment, your task is to move the cursor to the image of a MALE face if the cursor is a FLOWER and move the cursor to the image of a FEMALE face if the cursor is a SPIDER. You may start when you are ready.");
                // enableTrialButton();
                if (currentBlock == 1) {
                    completeList = Array.from(blocTwoTrials);
                    timesToRepeat = blocTwoTrials.length;
                    $("#horizontal").addClass("hide");
                    $("#vertical").removeClass("hide");
                    blockTrialsNum = blocTwoTrials.length;
                }
                else {
                    completeList = Array.from(blocOneTrials);
                    timesToRepeat = blocOneTrials.length;
                    $("#horizontal").removeClass("hide");
                    $("#vertical").addClass("hide");
                    blockTrialsNum = blocOneTrials.length;
                }

                // $('.nimstim img').attr('src', 'img/pic1.png');
                bugout.downloadLog();
                bugout = new debugout();
                bugout.realTimeLoggingOn = true;
                bugout.autoTrim = false;

                // }
                // else {
                // bugout.downloadLog();
                // $('.startTrial').text('End of Trials!');    // say that the trials are ended
                // }
            }
        });
    }

    var showImgAndStopTracking = function (ele, endDot, changeBlock) {
        $(ele).attr('src', endDot);
        $(ele).bind('mouseenter', function () {
            stopTracking(event, changeBlock)
        });            // stop the tracking once one of the stimuli is selected
    }

    var displayStimuli = function () {
        initTime = new Date();
        var randIndex = Math.floor(Math.random() * completeList.length);    // generate a random integer governed by the length of the array
        var currTrial = completeList[randIndex];                            // get the current trial values based on the random index generated above
        var startDot = blackImgPrefix + currTrial[0] + '.png';
        var endDot = redImgPrefix + currTrial[1] + '.png';
        // var dotPosition = currTrial[2];

        $(".startDot").attr('src', startDot).removeClass("hide");
        $(".startTrial").addClass("hide-for-small-only  hide-for-medium-up");
        activeTrial = currTrial;
        bugout.log("0,0,0,0,0");               // marks as the separation between two trials
        $('#left').attr('src', '');
        $('#up').attr('src', '');
        $('#down').attr('src', '');
        $('#right').attr('src', '');

        // if (completeList.length == 1)
        //     completeList = Array.from(blocOneTrials);   // restart again once a block is finished
        // else
        completeList.splice(randIndex, 1);          // else remove the trial from the trial list

        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        var changeBlock = completeList.length <= 0;

        if (currentBlock == 1) {
            if (currTrial[2] == 1)
                showImgAndStopTracking($('#left'), endDot, changeBlock);
            else
                showImgAndStopTracking($('#right'), endDot, changeBlock);
        }
        else {
            if (currTrial[2] == 1)
                showImgAndStopTracking($('#up'), endDot, changeBlock);
            else
                showImgAndStopTracking($('#down'), endDot, changeBlock);
        }
    };

    var enableTrialButton = function () {
        $(".startDot").addClass("hide");
        $(".startTrial").removeClass("hide-for-small-only  hide-for-medium-up");
        $('.startTrial').bind('click', function () {
            $(this).unbind("click");                // remove the click functionality from the start button, until one of the stimuli is selected
            timesToRepeat--;
            if (completeList.length > 0)
                displayStimuli();                   // display the stimuli if trials are still remaining
        });
    };

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
        // console.log("X=" + userX + ",Y=" + userY + ",Time=" + timeSpent + "ms");            // log it in the firebug console
        bugout.log(userX + "," + userY + "," + timeSpent + ",0,0");            // log it in the firebug console
    }

    $('#blockSelect').on('click', '.columns', function () {
        $('#welcomeMessage').addClass('hide');
        $(elementToBeTracked).removeClass('hide');
        var parentEle = $(event.target).parent();
        if ($(parentEle).hasClass("horizon")) {
            currentBlock = 1;
            timesToRepeat = blocOneTrials.length;
            completeList = Array.from(blocOneTrials);
            blockTrialsNum = blocOneTrials.length;
            $("#horizontal").removeClass("hide");
        }
        else {
            currentBlock = 2;
            timesToRepeat = blocTwoTrials.length;
            completeList = Array.from(blocTwoTrials);
            blockTrialsNum = blocTwoTrials.length;
            $("#vertical").removeClass("hide");
        }
        enableTrialButton();
    });
});
