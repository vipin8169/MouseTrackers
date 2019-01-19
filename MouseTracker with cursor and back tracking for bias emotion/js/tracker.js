// In the following 2D Array list elements are coded as follows:
// left side  	1 2 3 4 5 6 7 8		// which image will appear on the left
// right side 	5 6 7 8 1 2 3 4 	// which image will appear on the right
// cursor 		0 1 0 1 0 1 0 1 	// 0=spider, 1=flower, -1=auto
// block 1 or 2
// list = [left face, right face, cursor, block]
// var blocOneTrials = [[1, 5, 0], [2, 6, 1], [3, 7, 0], [4, 8, 1], [5, 1, 0], [6, 2, 1], [7, 3, 0], [8, 4, 1]]; // first 4 are females and last 4 are females
var blocTwoTrials = [[1, 10, 2, 2], [1, 12, 2, 2], [1, 14, 2, 2], [1, 16, 2, 2], [10, 1, 2, 2], [9, 1, 2, 2],
    [14, 1, 2, 2], [13, 1, 2, 2], [2, 10, 2, 2], [2, 11, 2, 2], [2, 13, 2, 2], [2, 16, 2, 2], [10, 2, 2, 2],
    [12, 2, 2, 2], [14, 2, 2, 2], [16, 2, 2, 2], [3, 10, 2, 2], [3, 9, 2, 2], [3, 14, 2, 2], [3, 13, 2, 2],
    [10, 3, 2, 2], [11, 3, 2, 2], [13, 3, 2, 2], [16, 3, 2, 2], [4, 10, 2, 2], [4, 12, 2, 2], [4, 14, 2, 2],
    [4, 16, 2, 2], [10, 4, 2, 2], [9, 4, 2, 2], [14, 4, 2, 2], [13, 4, 2, 2], [5, 10, 2, 2], [5, 11, 2, 2],
    [5, 13, 2, 2], [5, 16, 2, 2], [10, 5, 2, 2], [12, 5, 2, 2], [14, 5, 2, 2], [16, 5, 2, 2], [6, 10, 2, 2],
    [6, 9, 2, 2], [6, 14, 2, 2], [6, 13, 2, 2], [10, 6, 2, 2], [11, 6, 2, 2], [13, 6, 2, 2], [16, 6, 2, 2],
    [7, 10, 2, 2], [7, 12, 2, 2], [7, 14, 2, 2], [7, 16, 2, 2], [10, 7, 2, 2], [9, 7, 2, 2], [14, 7, 2, 2],
    [13, 7, 2, 2], [8, 10, 2, 2], [8, 11, 2, 2], [8, 13, 2, 2], [8, 16, 2, 2], [10, 8, 2, 2], [12, 8, 2, 2],
    [14, 8, 2, 2], [16, 8, 2, 2], [9, 1, 1, 2], [9, 3, 1, 2], [9, 5, 1, 2], [9, 7, 1, 2], [4, 9, 1, 2], [3, 9, 1, 2],
    [8, 9, 1, 2], [7, 9, 1, 2], [10, 1, 1, 2], [10, 4, 1, 2], [10, 6, 1, 2], [10, 7, 1, 2], [1, 10, 1, 2],
    [3, 10, 1, 2], [5, 10, 1, 2], [7, 10, 1, 2], [11, 4, 1, 2], [11, 3, 1, 2], [11, 8, 1, 2], [11, 7, 1, 2],
    [1, 11, 1, 2], [4, 11, 1, 2], [6, 11, 1, 2], [7, 11, 1, 2], [12, 1, 1, 2], [12, 3, 1, 2], [12, 5, 1, 2],
    [12, 7, 1, 2], [4, 12, 1, 2], [3, 12, 1, 2], [8, 12, 1, 2], [7, 12, 1, 2], [13, 1, 1, 2], [13, 4, 1, 2],
    [13, 6, 1, 2], [13, 7, 1, 2], [1, 13, 1, 2], [3, 13, 1, 2], [5, 13, 1, 2], [7, 13, 1, 2], [14, 4, 1, 2],
    [14, 3, 1, 2], [14, 8, 1, 2], [14, 7, 1, 2], [1, 14, 1, 2], [4, 14, 1, 2], [6, 14, 1, 2], [7, 14, 1, 2],
    [15, 1, 1, 2], [15, 3, 1, 2], [15, 5, 1, 2], [15, 7, 1, 2], [4, 15, 1, 2], [3, 15, 1, 2], [8, 15, 1, 2],
    [7, 15, 1, 2], [16, 1, 1, 2], [16, 4, 1, 2], [16, 6, 1, 2], [16, 7, 1, 2], [1, 16, 1, 2], [3, 16, 1, 2],
    [5, 16, 1, 2], [7, 16, 1, 2]];

var blocOneTrials = [[1, 9, 1, 1], [1, 11, 1, 1], [1, 13, 1, 1], [1, 15, 1, 1], [12, 1, 1, 1], [11, 1, 1, 1],
    [16, 1, 1, 1], [15, 1, 1, 1], [2, 9, 1, 1], [2, 12, 1, 1], [2, 14, 1, 1], [2, 15, 1, 1], [9, 2, 1, 1],
    [11, 2, 1, 1], [13, 2, 1, 1], [15, 2, 1, 1], [3, 12, 1, 1], [3, 11, 1, 1], [3, 16, 1, 1], [3, 15, 1, 1],
    [9, 3, 1, 1], [12, 3, 1, 1], [14, 3, 1, 1], [15, 3, 1, 1], [4, 9, 1, 1], [4, 11, 1, 1], [4, 13, 1, 1],
    [4, 15, 1, 1], [12, 4, 1, 1], [11, 4, 1, 1], [16, 4, 1, 1], [15, 4, 1, 1], [5, 9, 1, 1], [5, 12, 1, 1],
    [5, 14, 1, 1], [5, 15, 1, 1], [9, 5, 1, 1], [11, 5, 1, 1], [13, 5, 1, 1], [15, 5, 1, 1], [6, 12, 1, 1],
    [6, 11, 1, 1], [6, 16, 1, 1], [6, 15, 1, 1], [9, 6, 1, 1], [12, 6, 1, 1], [14, 6, 1, 1], [15, 6, 1, 1],
    [7, 9, 1, 1], [7, 11, 1, 1], [7, 13, 1, 1], [7, 15, 1, 1], [12, 7, 1, 1], [11, 7, 1, 1], [16, 7, 1, 1],
    [15, 7, 1, 1], [8, 9, 1, 1], [8, 12, 1, 1], [8, 14, 1, 1], [8, 15, 1, 1], [9, 8, 1, 1], [11, 8, 1, 1],
    [13, 8, 1, 1], [15, 8, 1, 1], [9, 2, 2, 1], [9, 4, 2, 1], [9, 6, 2, 1], [9, 8, 2, 1], [2, 9, 2, 1], [1, 9, 2, 1],
    [6, 9, 2, 1], [5, 9, 2, 1], [10, 2, 2, 1], [10, 3, 2, 1], [10, 5, 2, 1], [10, 8, 2, 1], [2, 10, 2, 1],
    [4, 10, 2, 1], [6, 10, 2, 1], [8, 10, 2, 1], [11, 2, 2, 1], [11, 1, 2, 1], [11, 6, 2, 1], [11, 5, 2, 1],
    [2, 11, 2, 1], [3, 11, 2, 1], [5, 11, 2, 1], [8, 11, 2, 1], [12, 2, 2, 1], [12, 4, 2, 1], [12, 6, 2, 1],
    [12, 8, 2, 1], [2, 12, 2, 1], [1, 12, 2, 1], [6, 12, 2, 1], [5, 12, 2, 1], [13, 2, 2, 1], [13, 3, 2, 1],
    [13, 5, 2, 1], [13, 8, 2, 1], [2, 13, 2, 1], [4, 13, 2, 1], [6, 13, 2, 1], [8, 13, 2, 1], [14, 2, 2, 1],
    [14, 1, 2, 1], [14, 6, 2, 1], [14, 5, 2, 1], [2, 14, 2, 1], [3, 14, 2, 1], [5, 14, 2, 1], [8, 14, 2, 1],
    [15, 2, 2, 1], [15, 4, 2, 1], [15, 6, 2, 1], [15, 8, 2, 1], [2, 15, 2, 1], [1, 15, 2, 1], [6, 15, 2, 1],
    [5, 15, 2, 1], [16, 2, 2, 1], [16, 3, 2, 1], [16, 5, 2, 1], [16, 8, 2, 1], [2, 16, 2, 1], [4, 16, 2, 1],
    [6, 16, 2, 1], [8, 16, 2, 1]];
var activeTrial = [];
var lastBlock = false;
var bugout = new debugout();
bugout.autoTrim = false;
var completeList = Array.from(blocOneTrials);
var startingBlock = 1;
var imgPrefix = 'img/face/'; // location of faces in the local
var cursors = ["url('img/cursor/spider.cur'), pointer", "url('img/cursor/flower.png'), pointer"]; //spider=0 & flower=1
var initTime; // to store the initial time for every trial
var numberOfBlocks = 1;
// var timesToRepeat = blocOneTrials.length * numberOfBlocks; // repeat the block 10 times
var timesToRepeat = completeList.length; // repeat the block 10 times

var elementToBeTracked = $('#toBeTracked');
var panelOffsetHeight = $('#toBeTracked .panel').height();
var panelOffsetLeft = $('#toBeTracked .panel').offset().left;
var panelOffsetTop = $('#toBeTracked .panel').offset().top;
var timeInterval = [1000, 1250, 1500, 1750];
var blockTrialsNum = completeList.length;
$(document).ready(function () {

    // stop the tracking, log the results
    function stopTracking(event, beginOtherBlock) {
        bugout.log("88,0,0,0,0");
        ;
        // console.log("----------------uptracking finished----------------");;
        if (event.target.id == 'left') {
            // console.log("Stimuli= " + activeTrial + ',1');                               // log what are we showing to the user
            bugout.log(activeTrial + ',1');                               // log what are we showing to the user
        }
        else {
            bugout.log(activeTrial + ',2');                               // log what are we showing to the user
            // console.log("Stimuli= " + activeTrial + ',2');                               // log what are we showing to the user
        }

        // console.log("----------------downtracking started----------------");
        // $(elementToBeTracked).css('cursor', 'auto');        // change the cursor to default
        $("#left").unbind("click");                // unbind the mouseenter event from the stimuli, which is binded on line 57
        $("#right").unbind("click");               // unbind the mousemove to stop mouse tracking
        $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking

        var randInterval = Math.floor(Math.random() * timeInterval.length);    // generate a random integer governed by the length of the array
        bugout.log("99,0,0,0," + timeInterval[randInterval]);
        $('#startTrial').text("Wait!").addClass('white');          // change the button text
        setTimeout(function () {
            startBackTracking(beginOtherBlock);
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
            if (beginOtherBlock) {                          // timesToRepeat = 0 and the currTrial[3] == 1 defines the end of block 1
                // $('#welcomeMessage').removeClass('hide');
                // $(elementToBeTracked).addClass('hide');
                // $('#purpose').addClass('hide');
                // $('#instructions').html("At the beginning of the trial press the button at the bottom. A cursor will appear, which appear in the form of a spider or a flower. Move the cursor to the picture of a WHITE face if the cursor is a SPIDER. Move the cursor to the picture of a BLACK face if the cursor is a FLOWER.");
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

    function startBackTracking(beginOtherBlock) {
        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        $('#startTrial').text("Come back!").removeClass('white');
        $('#startTrial').bind('mousemove', function () {
            $('#startTrial').text("Start Trial!").removeClass('white');
            $(elementToBeTracked).css('cursor', 'auto');        // change the cursor to default
            $(this).unbind("mousemove");                // remove the click functionality from the start button, until one of the stimuli is selected
            $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
            if (timesToRepeat == blockTrialsNum / 2) {
                bugout.downloadLog();
                bugout = new debugout();
                bugout.autoTrim = false;
            }
            if (timesToRepeat <= 0) {
                if (beginOtherBlock && !lastBlock) {
                    $('#welcomeMessage').removeClass('hide');
                    $(elementToBeTracked).addClass('hide');
                    $('#purpose').addClass('hide');
                    $('#instructions').html("You just finished one block! Now, take as much rest as you want. In next experiment, your task is to move the cursor to the image of a BLACK face if the cursor is a FLOWER and move the cursor to the image of a WHITE face if the cursor is a SPIDER. You may start when you are ready.");
                    // enableTrialButton();
                    $(".block1").hide();
                    $(".block2").hide();
                    lastBlock = true;
                    if (startingBlock == 1) {
                        $(".success.button").html("Click to begin second block").addClass("block2");
                        completeList = Array.from(blocTwoTrials);
                    }
                    else {
                        $(".success.button").html("Click to begin first block").addClass("block1");
                        completeList = Array.from(blocOneTrials);
                    }
                    timesToRepeat = completeList.length;
                    $('.nimstim img').attr('src', 'img/pic1.png');
                    bugout.downloadLog();
                    bugout = new debugout();
                    bugout.autoTrim = false;
                    blockTrialsNum = completeList.length;
                }
                else {
                    bugout.log("End of data");
                    bugout.downloadLog();
                    $('#startTrial').text('End of Trials!').removeClass('white');    // say that the trials are ended
                }
            }
        });
    }

    var displayStimuli = function () {
        var randIndex = Math.floor(Math.random() * completeList.length);    // generate a random integer governed by the length of the array
        var currTrial = completeList[randIndex];                            // get the current trial values based on the random index generated above
        var leftFace = imgPrefix + currTrial[0] + '.png';                   // get the left face index
        var rightFace = imgPrefix + currTrial[1] + '.png';                  // get the right face index

        activeTrial = currTrial;
        bugout.log("0,0,0,0,0");               // marks as the separation between two trials
        0, 0, 0, 0, 0
        // console.log("Stimuli= " + currTrial);                               // log what are we showing to the user

        // on the basis of the trial, show the cursor accordingly
        if (currTrial[2] == -1)
            $('#startTrial').text("Drag the cursor to one of the photos");
        else if (currTrial[2] == 0)
            $('#startTrial').text("Drag the spider to one of the photos");
        else if (currTrial[2] == 1)
            $('#startTrial').text("Drag the flower to one of the photos");

        // change the cursor to be shown
        if (currTrial[2] >= 0)
            $(elementToBeTracked).css('cursor', cursors[currTrial[2] - 1]);
        // $('#left').hide().attr('src', leftFace);
        // $('#right').hide().attr('src', rightFace);
        // $('#left').slideDown();
        // $('#right').slideDown();
        $('#left').attr('src', leftFace);
        $('#right').attr('src', rightFace);
        if (completeList.length == 1)
            completeList = Array.from(blocOneTrials);   // restart again once a block is finished
        else
            completeList.splice(randIndex, 1);          // else remove the trial from the trial list
        initTime = new Date();                          // get current time
        $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        // $('#left').mouseenter(false, stopTracking);              // stop the tracking once one of the stimuli is selected
        // $('#right').mouseenter(false, stopTracking);
        var blockOneGoing = currTrial[3] == startingBlock;
        $('#left').bind('click', function () {
            stopTracking(event, blockOneGoing)
        });            // stop the tracking once one of the stimuli is selected
        $('#right').bind('click', function () {
            stopTracking(event, blockOneGoing)
        });            // stop the tracking once one of the stimuli is selected
        // $('#startTrial').text("Start Trial!").removeClass('white');
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
        var timeSpent = new Date() - initTime;                                              // find the milli-seconds spent to reach this coordinate position
        // console.log("X=" + userX + ",Y=" + userY + ",Time=" + timeSpent + "ms");            // log it in the firebug console
        bugout.log(userX + "," + userY + "," + timeSpent + ",0,0");            // log it in the firebug console
    }

    $('#welcomeMessage').on('click', '.success.button', function () {
        $('#welcomeMessage').addClass('hide');
        $(elementToBeTracked).removeClass('hide');
        if (event.target.classList.contains("block1")) {
            completeList = Array.from(blocOneTrials);
            startingBlock = 1;
        }
        else {
            completeList = Array.from(blocTwoTrials);
            startingBlock = 2;
        }
        enableTrialButton();
    });
    $('#enableDebug').bind('click', function () {
        blocOneTrials = [[7, 13, 1, 1], [7, 15, 1, 1], [12, 7, 1, 1], [11, 7, 1, 1]];
        blocTwoTrials = [[11, 3, 2, 2], [13, 3, 2, 2], [16, 3, 2, 2], [4, 10, 2, 2]];
        timesToRepeat = blocOneTrials.length; // repeat the block 10 times
        blockTrialsNum = blocOneTrials.length;
    })
});
