// In the following 2D Array list elements are coded as follows:
// left side  	1 2 3 4 5 6 7 8		// which image will appear on the left
// right side 	5 6 7 8 1 2 3 4 	// which image will appear on the right
// cursor 		0 1 0 1 0 1 0 1 	// 0=spider, 1=flower, -1=auto
// block 1 or 2
// list = [left face, right face, cursor, block]
// var blocOneTrials = [[1, 5, 0], [2, 6, 1], [3, 7, 0], [4, 8, 1], [5, 1, 0], [6, 2, 1], [7, 3, 0], [8, 4, 1]]; // first 4 are females and last 4 are females
var blocOneTrials = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 2, 1], [1, 1, 2, 1], [1, 1, 2, 1], [1, 2, 1, 1],
    [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 3, 1, 1], [1, 3, 1, 1], [1, 3, 1, 1],
    [1, 3, 2, 1], [1, 3, 2, 1], [1, 3, 2, 1], [2, 1, 1, 1], [2, 1, 1, 1], [2, 1, 1, 1], [2, 1, 2, 1], [2, 1, 2, 1],
    [2, 1, 2, 1], [2, 2, 1, 1], [2, 2, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [2, 2, 2, 1], [2, 2, 2, 1], [2, 3, 1, 1],
    [2, 3, 1, 1], [2, 3, 1, 1], [2, 3, 2, 1], [2, 3, 2, 1], [2, 3, 2, 1], [3, 1, 1, 1], [3, 1, 1, 1], [3, 1, 1, 1],
    [3, 1, 2, 1], [3, 1, 2, 1], [3, 1, 2, 1], [3, 2, 1, 1], [3, 2, 1, 1], [3, 2, 1, 1], [3, 2, 2, 1], [3, 2, 2, 1],
    [3, 2, 2, 1], [3, 3, 1, 1], [3, 3, 1, 1], [3, 3, 1, 1], [3, 3, 2, 1], [3, 3, 2, 1], [3, 3, 2, 1]];
// blocOneTrials = [[1, 3, 2, 1], [2, 1, 1, 1]];
var blocTwoTrials = [[1, 1, 1, 2], [1, 1, 1, 2], [1, 1, 1, 2], [1, 1, 2, 2], [1, 1, 2, 2], [1, 1, 2, 2], [1, 2, 1, 2],
    [1, 2, 1, 2], [1, 2, 1, 2], [1, 2, 2, 2], [1, 2, 2, 2], [1, 2, 2, 2], [1, 3, 1, 2], [1, 3, 1, 2], [1, 3, 1, 2],
    [1, 3, 2, 2], [1, 3, 2, 2], [1, 3, 2, 2], [2, 1, 1, 2], [2, 1, 1, 2], [2, 1, 1, 2], [2, 1, 2, 2], [2, 1, 2, 2],
    [2, 1, 2, 2], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 3, 1, 2],
    [2, 3, 1, 2], [2, 3, 1, 2], [2, 3, 2, 2], [2, 3, 2, 2], [2, 3, 2, 2], [3, 1, 1, 2], [3, 1, 1, 2], [3, 1, 1, 2],
    [3, 1, 2, 2], [3, 1, 2, 2], [3, 1, 2, 2], [3, 2, 1, 2], [3, 2, 1, 2], [3, 2, 1, 2], [3, 2, 2, 2], [3, 2, 2, 2],
    [3, 2, 2, 2], [3, 3, 1, 2], [3, 3, 1, 2], [3, 3, 1, 2], [3, 3, 2, 2], [3, 3, 2, 2], [3, 3, 2, 2]]
var activeTrial = [];
var bugout = new debugout();
bugout.autoTrim = false;
// blocTwoTrials = [[1, 3, 2, 2], [2, 1, 1, 2]];
var completeList = Array.from(blocOneTrials);
var imgPrefix = 'img/red/'; // location of faces in the local
var redImgPrefix = 'img/red/'; // location of red dots
var blackImgPrefix = 'img/black/'; // location of black dots
// var initTime; // to store the initial time for every trial
var timesToRepeat = blocOneTrials.length; // repeat the block 10 times

var elementToBeTracked = $('#toBeTracked');
var panelOffsetHeight = $('#toBeTracked .panel').height();
var panelOffsetLeft = $('#toBeTracked .panel').offset().left;
var panelOffsetTop = $('#toBeTracked .panel').offset().top;
var timeInterval = [1000, 1250, 1500, 1750];
var blockTrialsNum = blocOneTrials.length;
$(document).ready(function () {

    // stop the tracking, log the results
    function stopTracking(event, beginBlock2) {
        bugout.log("88,0,0,0,0");
        // console.log("----------------uptracking finished----------------");;
        if (event.target.id == 'left') {
            // console.log("Stimuli= " + activeTrial + ',1');                               // log what are we showing to the user
            bugout.log(activeTrial + ',1');                               // log what are we showing to the user
        }
        else {
            bugout.log(activeTrial + ',2');                               // log what are we showing to the user
            // console.log("Stimuli= " + activeTrial + ',2');                               // log what are we showing to the user
        }
        bugout.log("99,0,0,0,0");
        // console.log("----------------downtracking started----------------");
        // $(elementToBeTracked).css('cursor', 'auto');        // change the cursor to default
        $("#left").unbind("mouseenter");                // unbind the mouseenter event from the stimuli, which is binded on line 57
        $("#right").unbind("mouseenter");               // unbind the mousemove to stop mouse tracking
        $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking

        var randInterval = Math.floor(Math.random() * timeInterval.length);    // generate a random integer governed by the length of the array
        $('#startTrial').text("Wait!").addClass('white');          // change the button text
        setTimeout(function () {
            startBackTracking(beginBlock2);
            if (timesToRepeat > 0) {
                enableTrialButton();                    // enable the trial button again after 500ms
            }
        }, timeInterval[randInterval]);

        if (timesToRepeat > 0) {
            // setTimeout(function () {
            //     enableTrialButton();                    // enable the trial button again after 500ms
            // }, 500);
        }
        else {
            if (beginBlock2) {                          // timesToRepeat = 0 and the currTrial[3] == 1 defines the end of block 1
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
            //     $('#startTrial').text('End of Trials!');    // say that the trials are ended
            // }
        }
    }

    function startBackTracking(beginBlock2) {
        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        $('#startTrial').text("Come back!").removeClass('white');
        $('#startTrial').bind('mousemove', function () {
            $('#startTrial').text("Start Trial!").removeClass('white');
            // $(elementToBeTracked).css('cursor', 'auto');        // change the cursor to default
            $(this).unbind("mousemove");                // remove the click functionality from the start button, until one of the stimuli is selected
            $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
            if (timesToRepeat == blockTrialsNum / 2) {
                bugout.downloadLog();
                bugout = new debugout();
                bugout.autoTrim = false;
            }
            if (timesToRepeat <= 0) {
                if (beginBlock2) {
                    $('#welcomeMessage').removeClass('hide');
                    $(elementToBeTracked).addClass('hide');
                    $('#purpose').addClass('hide');
                    $('#instructions').html("You just finished block one! Now, take as much rest as you want. In next experiment, your task is to move the cursor to the image of a MALE face if the cursor is a FLOWER and move the cursor to the image of a FEMALE face if the cursor is a SPIDER. You may start when you are ready.");
                    // enableTrialButton();
                    completeList = Array.from(blocTwoTrials);
                    timesToRepeat = blocTwoTrials.length;
                    $('.nimstim img').attr('src', 'img/pic1.png');
                    bugout.downloadLog();
                    bugout = new debugout();
                    bugout.autoTrim = false;
                    blockTrialsNum = blocTwoTrials.length;
                }
                else {
                    bugout.downloadLog();
                    $('#startTrial').text('End of Trials!').removeClass('white');    // say that the trials are ended
                }
            }
        });
    }

    var displayStimuli = function () {
        var randIndex = Math.floor(Math.random() * completeList.length);    // generate a random integer governed by the length of the array
        var currTrial = completeList[randIndex];                            // get the current trial values based on the random index generated above
        var startDotSize =  currTrial[0];
        var endDotSize =  currTrial[1];
        var dotPosition = currTrial[2];
        var leftFace = imgPrefix + currTrial[0] + '.png';                   // get the left face index
        var rightFace = imgPrefix + currTrial[1] + '.png';                  // get the right face index

        activeTrial = currTrial;
        bugout.log("0,0,0,0,0");               // marks as the separation between two trials
        0, 0, 0, 0, 0

        $('#left').attr('src', leftFace);
        $('#right').attr('src', rightFace);
        if (completeList.length == 1)
            completeList = Array.from(blocOneTrials);   // restart again once a block is finished
        else
            completeList.splice(randIndex, 1);          // else remove the trial from the trial list
        // initTime = new Date();                          // get current time
        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        var blockOneGoing = currTrial[3] == 1;
        $('#left').bind('mouseenter', function () {
            stopTracking(event, blockOneGoing)
        });            // stop the tracking once one of the stimuli is selected
        $('#right').bind('mouseenter', function () {
            stopTracking(event, blockOneGoing)
        });            // stop the tracking once one of the stimuli is selected
    };

    var enableTrialButton = function () {
        $('#startTrial').bind('click', function () {
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
        // var timeSpent = new Date() - initTime;                                              // find the milli-seconds spent to reach this coordinate position
        // console.log("X=" + userX + ",Y=" + userY + ",Time=" + timeSpent + "ms");            // log it in the firebug console
        bugout.log(userX + "," + userY + "," + timeSpent + ",0,0");            // log it in the firebug console
    }

    $('#welcomeMessage').on('click', '.success.button', function () {
        $('#welcomeMessage').addClass('hide');
        $(elementToBeTracked).removeClass('hide');
        enableTrialButton();
    });
});
