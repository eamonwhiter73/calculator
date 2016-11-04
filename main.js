jQuery(document).ready(function( $ ) {

    $('#foremailchoice').click(function() {

        var store;
        console.log($('.chinto').css('display'));
        if($('.chinto').css('display') == 'none') {
            store = $('.changeit').text();
        }
        else {
            store = $('.chinto').text();
        }

        setTimeout(function(){ 

            $.ajax({
              type: "POST",
              url: "index.php",
              data: { box1: $('.box1').val(),
                      box2: $('.box2').val(),
                      box3: $('.box3').val(),
                      box4: $('.box4').val(),
                      business: store,
                      dd1s: $('.s').val(),
                      dd2d: $('.d').val(),
                      lifeval: $('.lifetime').text(),
                      i: $('.i2').text(),
                      email: $('.foremailinput').val()
                    }
            }).done(function( msg ) {
              alert( "Email Sent!");
            });    

        }, 1000);
        

    });
    
    /*$('body').on('load', function(){
        if($(window).width() > 1199) {
    		$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");
            //$('.choose').text("");
            $('.choosediv').remove();
            $('.inchoose').show();
        }
        if($(window).width() < 1200 && $(window).width() > 991) {
    		$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");    
            //$('.choose').text("");
            $('.choosediv').remove();
            $('.inchoose').show();
        }

        if($(window).width() < 992 && $(window).width() > 767) {
    		$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");   
            //$('.choose').text("");
            $('.choosediv').remove();
            $('.inchoose').show();
        }

        if($(window).width() < 768 && $(window).width() > 480) {
    		$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag"); 
            $('.choosediv').remove();
            $('.inchoose').show();

        }
        if($(window).width() < 481 && $(window).width() > 320) {
    		$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");    
            if($('.choosediv').length < 1) {
                $('.choose').prepend('<div class="choosediv">Choose</div>');
            }
            $('.inchoose').hide();
            $('.inchoose').hide();
    
        }

        if($(window).width() < 321) {
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").addClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").addClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").addClass("fontchangeag");
        	$("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").addClass("fontchangeag");
            if($('.choosediv').length < 1) {
                $('.choose').prepend('<div class="choosediv">Choose</div>');
            }
            $('.inchoose').hide();
            $('.inchoose').hide();


        }
    });*/

    doResize();
    $(window).on('resize', doResize);

    function doResize() {

        /*var fitWidth = parseInt($('.comptextdisplay>span').parent().css('width'));
        var $div = $('.comptextdisplay>span');
        //$(this).find('span').each(function() {
            var spanWidth = parseInt($('.comptextdisplay>span').width());
            if (fitWidth < spanWidth) {
                var fontSize = $('.comptextdisplay>span').css('font-size');
                console.log(fontSize);
                //$div.find('span').each(function() {
                $('.comptextdisplay>span').css('font-size', fontSize + 'vw');

                //});
                //if (c > 999) {
                  //  $div.css('background', 'red');
                    //break;
                //}
            }
            if (fitWidth > spanWidth) {
                //$div.find('span').each(function() {
                    var fontSize = $('.comptextdisplay>span').css('font-size');
                    //$div.find('span').each(function() {
                    $('.comptextdisplay>span').css('font-size', fontSize);
                //});

                //if (c > 999) {
                  //  $div.css('background', 'red');
                    //break;
                //}
            }*/

            /*fitWidth = parseInt($('.lifetime').css('width'));
            //$(this).find('span').each(function() {
            //var c = 0;
            spanWidth = parseInt($('.lifetime>span').width());
            while (fitWidth > spanWidth + 12 && parseInt($('.lifetime').css('font-size')) < 41) {
                //$div.find('span').each(function() {
                var fontSize = parseInt($('.lifetime').css('font-size'));
                //var line = parseInt($('.lifetime>span').css('line-height'));

                

                //if(line < 54) {
                    //line = line + 1 + "px";
                fontSize = fontSize + 1 + "px";
                //}
                //else {
                    //break;
                //}
                //$('.lifetime>span').css('line-height', line);
                $('.lifetime').css('font-size', fontSize);
                //});
                spanWidth = parseInt($('.lifetime>span').width());
                //c++;
                //if (c > 999) {
                    //$('.lifetime').css('background', 'red');
                    //break;
                //}
            }
            while (fitWidth < (spanWidth + 12) && parseInt($('.lifetime').css('font-size')) > 4) {
                //$div.find('span').each(function() {
                var fontSize = parseInt($('.lifetime').css('font-size'));
                //var line = parseInt($('.lifetime>span').css('line-height'));

                

                //if(line < 54) {
                    //line = line + 1 + "px";
                fontSize = fontSize + -1 + "px";
                //}
                //else {
                    //break;
                //}
                //$('.lifetime>span').css('line-height', line);
                $('.lifetime').css('font-size', fontSize);
                //});
                spanWidth = parseInt($('.lifetime>span').width());
                //c++;
                //if (c > 999) {
                    //$('.lifetime').css('background', 'red');
                    //break;
                //}
            }*/
          

        if($(window).width() > 1199) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");
            $('.choosediv').remove();
            $('.inchoose').show();
        }
        if($(window).width() < 1200 && $(window).width() > 991) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");    
            $('.choosediv').remove();
            $('.inchoose').show();
        }

        if($(window).width() < 992 && $(window).width() > 767) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");   
            $('.choosediv').remove();
            $('.inchoose').show();
        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag"); 
            $('.choosediv').remove();
            $('.inchoose').show();

        }
        if($(window).width() < 481 && $(window).width() > 459) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");    
            //$('.choose').text("");
            $('.choosediv').remove();
            $('.inchoose').show();

        }

        if($(window).width() < 460 && $(window).width() > 320) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").removeClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").removeClass("fontchangeag");    
            //$('.choose').text("");
            if($('.choosediv').length < 1) {
                $('.choose').prepend('<div class="choosediv">Choose</div>');
            }
            $('.inchoose').hide();
            $('.nullmiss').show();

        }

        if($(window).width() < 321) {
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(3)").addClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbuy.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-26.col-md-26.col-sm-26.col-xs-26 > div > p:nth-child(1)").addClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(1)").addClass("fontchangeag");
            $("body > div > div > div > div.qdisplayprops.timeperyrbis.col-lg-36.col-md-36.col-sm-36.col-xs-36 > div.qcont.col-lg-28.col-md-28.col-sm-28.col-xs-30 > div > p:nth-child(3)").addClass("fontchangeag");
            if($('.choosediv').length < 1) {
                $('.choose').prepend('<div class="choosediv">Choose</div>');
            }
            $('.inchoose').hide();
            $('.nullmiss').show();
        }

        if($(window).width() > 767) {
            console.log((4 - $('.textchoice').val().length) * 26 + 'px');
            if($('.textchoice').val().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '18px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '2px');
                    }
                    else{
                        var px = Math.abs($('.textchoice').val().length - 4) * 26 - 6 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '34px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '7px');
                    }
                    else {  
                        var px = (Math.abs($('.textchoice').val().length - 4) * 26) + 7 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
            }
        }

        if($(window).width() < 768 && $(window).width() > 748) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '65px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '39px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '94px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '60px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '30px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '8px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '85px');
                    }
                }
            }
        }

        if($(window).width() < 749 && $(window).width() > 680) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '58px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '32px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '85px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '48px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '20px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '13px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '75px');
                    }
                }
            }
        }

        if($(window).width() < 681 && $(window).width() > 608) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '52px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '24px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '75px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '38px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '12px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '8px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '65px');
                    }
                }
            }
        }
        
        if($(window).width() < 609  && $(window).width() > 480) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '33px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '5px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '60px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '17px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '4px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '49px');
                    }
                }
            }
        }

        if($(window).width() < 481 && $(window).width() > 416) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '4px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '42px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '5px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '30px');
                    }
                }
            }
        }

        if($(window).width() < 417) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '13px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '37px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '5px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '28px');
                    }
                }
            }
        }
    }

    $(".dropdown-item").click(function() {
        var save = $(this).parent().prev('.btn').text();
        $(this).parent().prev('.btn').text($(this).text());
    })

    var calcclick = false;

    $(".calculate").click(function() {
        var avgr = $('.avgr').val();
        var tpr = $('.tpr').val();
        var yrs = $('.yrs').val();
        var avg = $('.avg').val();

        console.log(''+avgr+''+avg+''+yrs+''+tpr+''+(yrs + 1));

        var result = ((parseInt(avgr) * parseInt(tpr)) * (parseInt(yrs) + 1)) - (avgr - avg);

        $(".lifetime").html("<span>"+result+"</span>");

        var fitWidth = parseInt($('.lifetime').css('width'));
        //$(this).find('span').each(function() {
        //var c = 0;
        var spanWidth = parseInt($('.lifetime>span').width());
        while (fitWidth > spanWidth + 12 && parseInt($('.lifetime').css('font-size')) < 41) {
            //$div.find('span').each(function() {
            var fontSize = parseInt($('.lifetime').css('font-size'));
            //var line = parseInt($('.lifetime>span').css('line-height'));

            

            //if(line < 54) {
                //line = line + 1 + "px";
            fontSize = fontSize + 1 + "px";
            //}
            //else {
                //break;
            //}
            //$('.lifetime>span').css('line-height', line);
            $('.lifetime').css('font-size', fontSize);
            //});
            spanWidth = parseInt($('.lifetime>span').width());
            //c++;
            //if (c > 999) {
                //$('.lifetime').css('background', 'red');
                //break;
            //}
        }

        $('.displayinword').html('<p class="pchange">$'+result+'</p>');

        calcclick = true;
    })

    $('.s').change(function(){
        populateSelectS();
        populateSelectH();
    });

    $('.d').change(function(){
        populateSelectD();
    });

    $('.f').change(function(){
        populateSelectF();
    });

    $('.g').change(function(){
        populateSelectG();
    });

    $('.h').change(function(){
        populateSelectH();
    });

    $('.i').change(function(){
        populateSelectI();
    });

    cars=new Array("customer's","client's","patient's","diner's","student's");
    phones=new Array('order','sale','spend','ticket','repair','bill','check','visit','installation');
    customer=new Array('customer','client','patient','diner','student');

    function populateSelectS(){
        // get the value that was selected so we can populate the other one
        // clear the other select box
        
        // now fill with new code depending on the slection
        if($('.s option:selected')){
            console.log("inisndfin88****555666");
            $('.f').empty();
            console.log($('.s').html());
            console.log($('.s option:selected').html());

            $('.f').append($('.s option:selected').html());
            //$('.s option:selected').remove();

            //var y = $('.s option:selected');
            //$('.s option:selected').remove();

            //var x = $('.s').html();
            //console.log(x);
            //$('.s').append(y);
            //$('.f').append(x);
            //$('.s').append(x);
        }
    }

    function populateSelectD(){

        if($('.d option:selected')){
            console.log("inisndfin88****555666");
            $('.g').empty();

            $('.g').append($('.d option:selected').html());
            //$('.s option:selected').remove();

            //var y = $('.d option:selected');
            //$('.d option:selected').remove();

            //var x = $('.d').html();
            //console.log(x);
            //$('.d').append(y);
            //$('.g').append(x);
            //$('.s').append(x);
        }
    }

    function populateSelectH(){
        if($('.s option:selected')){
            console.log("inisndfin88****555666");
            $('.i').empty();
            var str = $('.s option:selected').text();
            $('.i').append('<p class="pinq fontchanget i">'+str.substring(0, str.length - 2)+'</p>');
            //$('.s option:selected').remove();

            //var y = $('.h option:selected');
            //$('.h option:selected').remove();

            //var x = $('.h').html();
            //console.log(x);
            //$('.h').append(y);
            //$('.i').append(x);
            //$('.s').append(x);
        }
    }

    $(".q1box").on('input',function(e){

        var avgr = 0;
        var tpr = 0;
        var yrs = 0;
        var avg = 0;
        var avgr = $('.avgr').val();
        var tpr = $('.tpr').val();
        var yrs = $('.yrs').val();
        var avg = $('.avg').val();

        console.log(''+avgr+''+avg+''+yrs+''+tpr+''+(yrs + 1));

        var result = ((parseInt(avgr) * parseInt(tpr)) * (parseInt(yrs) + 1)) - (avgr - avg);

        if(!calcclick) {
            $(".lifetime").attr("value", "");
        }
        else {
            if(!result || $('.lifetime').attr('value') == "") {
                $(".lifetime").attr("value", "");
                $('.displayinword').html('<p class="pchange">$</p>')
            }
            else {
                $(".lifetime").attr("value", result);
                $('.displayinword').html('<p class="pchange">$'+result+'</p>');
            }
        }


        if(parseInt(this.value) > 99){
            //$(this).next(".labelsdol").hide();
            //$(this).css('text-indent', '0px');
        }
        else {
            //$(this).next(".labelsdol").show();
            //$(this).css('text-indent', '13px');
        }     
    });

    $(".q1indentno").on('input',function(e){

        var avgr = 0;
        var tpr = 0;
        var yrs = 0;
        var avg = 0;
        var avgr = $('.avgr').val();
        var tpr = $('.tpr').val();
        var yrs = $('.yrs').val();
        var avg = $('.avg').val();

        console.log(''+avgr+''+avg+''+yrs+''+tpr+''+(yrs + 1));

        var result = ((parseInt(avgr) * parseInt(tpr)) * (parseInt(yrs) + 1)) - (avgr - avg);

        console.log("result "+result);

        if(!calcclick) {
            $(".lifetime").attr("value", "");
        }
        else {
            if(!result || $('.lifetime').attr('value') == "") {
                $(".lifetime").attr("value", "");
                $('.displayinword').html('<p class="pchange">$</p>')
            }
            else {
                $(".lifetime").attr("value", result);
                $('.displayinword').html('<p class="pchange">$'+result+'</p>');
            }
        }


        if(parseInt(this.value) > 999){
            //$(this).next().hide();
        }
        else {
            //$(this).next().show();
        }          
    });

    $('.companytexthack').click(function() {
        console.log("herhe;arij;lewfrj");
        var text = $('.textchoice').val();
        $('.choose').hide();
        $('.choosey').hide();
        $('.comptextdisplay').css('display', 'block');
        $('<span>'+text+'</span>').appendTo('.comptextdisplay');

        $('.comptextdisplay>span').each(function() {
            console.log('in looooooop');
        // Fit height
            /*var fitHeight = parseInt($(this).parent().css('min-height'));
            if ($(this).height() > fitHeight) {

                var c = 0;
                while ($(this).height() > fitHeight) {
                    //$(this).find('span').each(function() {
                        var fontSize = parseInt($(this).css('font-size'));
                        fontSize = fontSize - 1 + "px";
                        $(this).css('font-size', fontSize);

                    //});
                    c++;
                    if (c > 999) {
                        $(this).css('background', 'red');
                        break;
                    }
                }
            }*/
            // Fit width
                var fitWidth = parseInt($(this).parent().css('width'));
                var $div = $(this);
                //$(this).find('span').each(function() {
                    var c = 0;
                    var spanWidth = parseInt($(this).width());
                    while (fitWidth < spanWidth) {
                        //$div.find('span').each(function() {
                            var fontSize = parseInt($(this).css('font-size'));
                            fontSize = fontSize - 1 + "px";
                            $(this).css('font-size', fontSize);
                        //});
                        spanWidth = parseInt($(this).width());
                        c++;
                        if (c > 999) {
                            $div.css('background', 'red');
                        break;
                    }
                }
            //});
        });
        
        if($(window).width() > 767) {
            console.log((4 - $('.textchoice').val().length) * 26 + 'px');
            if($('.textchoice').val().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '18px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '2px');
                    }
                    else{
                        var px = Math.abs($('.textchoice').val().length - 4) * 26 - 6 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '34px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '7px');
                    }
                    else {  
                        var px = (Math.abs($('.textchoice').val().length - 4) * 26) + 7 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
            }
        }

        if($(window).width() < 768 && $(window).width() > 748) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '65px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '39px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '94px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '60px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '30px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '8px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '85px');
                    }
                }
            }
        }

        if($(window).width() < 749 && $(window).width() > 680) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '58px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '32px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '85px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '48px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '20px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '13px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '75px');
                    }
                }
            }
        }

        if($(window).width() < 681 && $(window).width() > 608) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '52px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '24px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '75px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '38px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '12px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '8px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '65px');
                    }
                }
            }
        }
        
        if($(window).width() < 609  && $(window).width() > 480) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '33px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '5px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '60px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '17px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '4px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '49px');
                    }
                }
            }
        }

        if($(window).width() < 481 && $(window).width() > 416) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '4px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '42px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '5px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '30px');
                    }
                }
            }
        }

        if($(window).width() < 417) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '13px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '37px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '5px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '28px');
                    }
                }
            }
        }
    });

    function isEven(n) {
       return n % 2 == 0;
    }

    function isOdd(n) {
       return Math.abs(n % 2) == 1;
    }

    $('.changeit').click(function() {
        
        $('.changeit').hide();
        $('.changeitback').hide();
        $('.ch2').show();

    });

    $('.companytext').click(function() {
        console.log("herhe;arij;lewfrj^^^%%%^^^^%%%");
        var text = $('.t2').val();
        console.log(text);
        $('.ch2').hide();
        $('.chinto').show().text(text);
    });

    $('.print').click(function() {
        window.print();
    });

});