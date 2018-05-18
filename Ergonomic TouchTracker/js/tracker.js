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
var enableConsoleLogging = true;
var blockCount = 1;
bugout.autoTrim = false;
bugout.realTimeLoggingOn = enableConsoleLogging;
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
var stopDot;
var touchIcon = document.getElementById("touchIndicator");
var targetAreaWidth, pnum, blockNum, code, vertical;
var backTrackingEnabled = false, isBackTracking = false, startDotMediumAlways = true;

$(document).ready(function () {

    document.querySelector('html').className += ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch ? ' touch' : ' no-touch';

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    var $range = $(".js-range-slider"),
        $input = $(".js-input"),
        instance,
        min = 0,
        max = 9;

    $range.ionRangeSlider({
        type: "single",
        min: min,
        max: max,
        from: 0,
        step: 1,
        grid: true,
        grid_num: 9,
        onStart: function (data) {
            $input.prop("value", data.from);
        },
        onChange: function (data) {
            $input.prop("value", data.from);
            $(".irs-min").html("Low");
            $(".irs-max").html("High");
        }
    });

    $(".irs-min").html("Low");
    $(".irs-max").html("High");

    instance = $range.data("ionRangeSlider");
    $input.on("change keyup", function () {
        var val = $(this).prop("value");
        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        instance.update({
            from: val
        });
    });
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
        else {
            event.pageX = event.target.getBoundingClientRect().x;
            event.pageY = event.target.getBoundingClientRect().y;
        }
        var userX = event.pageX - panelOffsetLeft;                   // get the x-coordinate of the user
        var userY = event.pageY - (panelOffsetTop + areaHeight);     // get the y coordinate of the user
        userY *= -1;
        var timeSpent = new Date() - initTime;                                              // find the milli-seconds spent to reach this coordinate position
        bugout.log(userX + "," + userY + "," + timeSpent + ",0,0");            // log it in the firebug console
    }

    function startBackTracking() {
        isBackTracking = !isBackTracking;
        // $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        var ele = $('#horizontal .startDot');
        if (currentBlock == 2)
            ele = $('#vertical .startDot');
        $(ele).one('triggerTouchEnd', function () {
            isBackTracking = !isBackTracking;
            startDot = blackImgPrefix + activeTrial[0] + '.png';
            if (startDotMediumAlways)
                startDot = blackImgPrefix + "2.png";
            $(ele).attr('src', startDot);
            hideStimuli();
            $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
            $(".trialText").show();
            if (timesToRepeat == blockTrialsNum / 2) {
                // bugout.downloadLog();
                // bugout = new debugout();
                // bugout.realTimeLoggingOn = enableConsoleLogging;
                // bugout.autoTrim = false;
            }
            if (timesToRepeat <= 0) {
                $(touchIcon).addClass("hide");
                if (beginOtherBlock && blockCount < 2) {
                    blockCount++;
                    $('#rotatePrompt').removeClass('hide');
                    $("#toBeTracked").addClass('hide');
                    $('#purpose').addClass('hide');
                }
                else {
                    $("#cogScale").removeClass("hide");
                    $("#toBeTracked").addClass("hide");
                    $('#startTrial').text('End of Trials!').removeClass('white');    // say that the trials are ended
                }
            }
        });
        enableTrialButton();
    };

    $("#nextBlock").on("click", function () {
        activateBlock(currentBlock != 1);
        $('#rotatePrompt').addClass('hide');
        $('#blockPrompt').removeClass("hide");
    });

    function uploadToAWS() {
        var fd = new FormData();
        var file = new Blob([bugout.output], {type: 'plain/text'});
        fd.append('key', 'touchtracker/${filename}');
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
            bugout.log("55,0,0,0," + scaleRes.value);
            uploadToAWS();
            alert("Your response has been submitted.\nThank You!");
            $(e.target).unbind("click")
        }
        else
            alert("Please choose a response in the range 1-9");
    });

    function stopTracking() {
        if (backTrackingEnabled)
            bugout.log("88,0,0,0,0");
        // console.log("----------------uptracking finished----------------");;
        bugout.log(activeTrial + " ");
        if (backTrackingEnabled)
            bugout.log("99,0,0,0,0");
        // console.log("----------------downtracking started----------------");
        $(elementToBeTracked).unbind("mousemove");          // stop the mouse coordinate tracking
        startBackTracking();
    };

    var showImgAndStopTracking = function (ele) {
        $(".trialText").hide();
        $(ele).attr('src', endDot);
        $(ele).one('triggerTouchEnd', function () {
            startDot = redImgPrefix + activeTrial[0] + '.png';
            endDot = blackImgPrefix + activeTrial[1] + '.png';
            if (startDotMediumAlways)
                startDot = redImgPrefix + "2.png";
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
        if (startDotMediumAlways)
            startDot = blackImgPrefix + "2.png";
        endDot = redImgPrefix + currTrial[1] + '.png';


        var touchLocation = $(".startDot:visible")[0].getBoundingClientRect();
        $(touchIcon).removeClass("hide").offset({
            top: touchLocation.top + touchLocation.height / 2 - $(touchIcon).height() / 2,
            left: touchLocation.left + touchLocation.width / 2 - $(touchIcon).width() / 2
        });

        $(".startDot").attr('src', startDot);
        activeTrial = currTrial;
        bugout.log("0,0,0,0,0");               // marks as the separation between two trials
        hideStimuli();

        completeList.splice(randIndex, 1);          // else remove the trial from the trial list

        // $(elementToBeTracked).mousemove(trackMouseMovement);        // enable the mouse coordinate tracking
        beginOtherBlock = completeList.length <= 0;

        if (currentBlock == 1) {
            if (currTrial[2] == 1) {
                showImgAndStopTracking($('#left'));
                stopDot = $('#left');
            }
            else {
                showImgAndStopTracking($('#right'));
                stopDot = $('#right');
            }
        }
        else {
            if (currTrial[2] == 1) {
                showImgAndStopTracking($('#up'));
                stopDot = $('#up');
            }
            else {
                showImgAndStopTracking($('#down'));
                stopDot = $('#down');
            }
        }
    };

    function mouseMoving(event) {
        x = event.clientX;
        y = event.clientY;
        $(touchIcon).offset({top: y - $(touchIcon).height() / 2, left: x - $(touchIcon).width() / 2});
        if (backTrackingEnabled)
            trackMouseMovement(event);
        else if (!isBackTracking)
            trackMouseMovement(event);
    }

    $(touchIcon).bind("touchmove mousedown", function (e) {
        e.preventDefault();
        if (e.type == "mousedown") {
            touchIcon.addEventListener('mousemove', mouseMoving)
        }
        else {
            var orig = e.originalEvent || e;
            var x = orig.changedTouches[0].pageX;
            var y = orig.changedTouches[0].pageY;
            $(touchIcon).offset({top: y - $(touchIcon).height() / 2, left: x - $(touchIcon).width() / 2});
            if (backTrackingEnabled)
                trackMouseMovement(orig);
            else if (!isBackTracking)
                trackMouseMovement(orig);
        }
    }).on("touchend mouseleave mouseup", function (e) {
        touchIcon.removeEventListener("mousemove", mouseMoving);
        e.stopPropagation();
        var targetLoc = stopDot[0].getBoundingClientRect();
        var cursorLocation = e.target.getBoundingClientRect();
        var smallDot = $(stopDot[0]).width() < 30;    //detect if the dot is small one
        if (isBackTracking)
            targetAreaWidth = 40;
        else
            targetAreaWidth = 25;
        var left = smallDot ? targetLoc.left : (targetLoc.left + $(stopDot[0]).width() / 2 - targetAreaWidth / 2);
        var right = smallDot ? targetLoc.right : (targetLoc.right - $(stopDot[0]).width() / 2 + targetAreaWidth / 2);
        var top = smallDot ? targetLoc.top : (targetLoc.top + $(stopDot[0]).height() / 2 - targetAreaWidth / 2);
        var bottom = smallDot ? targetLoc.bottom : (targetLoc.bottom - $(stopDot[0]).height() / 2 + targetAreaWidth / 2);
        if ((cursorLocation.left > left && cursorLocation.left < right) || (cursorLocation.right > left && cursorLocation.right < right))
            if ((cursorLocation.top > top && cursorLocation.top < bottom) || (cursorLocation.bottom > top && cursorLocation.bottom < bottom)) {
                $(stopDot).trigger("triggerTouchEnd");
                if ($(stopDot).get(0) == $(".startDot:visible").get(0))
                    $(touchIcon).addClass("hide");
                else
                    stopDot = $(".startDot:visible");
            }
    });

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
        code = $("input[name='code']");
        pnum = $("input[name='pNum']");
        blockNum = $("input[name='blockNum']");
        bugout.log("0,0,0," + pnum.val() + "," + blockNum.val());
        var parentEle = $(event.target).parent();
        if ($(parentEle).hasClass("horizon"))
            vertical = 12;
        else
            vertical = 21;
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

    $('#enableDebug').on('click', function () {
        blocOneTrials = [[3, 1, 1, 1, 4]];
        blocTwoTrials = [[1, 2, 1, 2, 20]];
    })

});