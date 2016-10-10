jQuery(document).ready(function( $ ) {
    
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

        var fitWidth = parseInt($('.comptextdisplay>span').parent().css('width'));
        var $div = $('.comptextdisplay>span');
        //$(this).find('span').each(function() {
            var c = 0;
            var spanWidth = parseInt($('.comptextdisplay>span').width());
            while (fitWidth < spanWidth) {
                //$div.find('span').each(function() {
                    var fontSize = parseInt($('.comptextdisplay>span').css('font-size'));
                    fontSize = fontSize - 1 + "px";
                    $('.comptextdisplay>span').css('font-size', fontSize);
                //});
                spanWidth = parseInt($('.comptextdisplay>span').width());
                c++;
                if (c > 999) {
                    $div.css('background', 'red');
                    break;
                }
            }
            while (fitWidth > spanWidth) {
                //$div.find('span').each(function() {
                    var fontSize = parseInt($('.comptextdisplay>span').css('font-size'));
                    fontSize = fontSize + 1 + "px";
                    $('.comptextdisplay>span').css('font-size', fontSize);
                //});
                spanWidth = parseInt($('.comptextdisplay>span').width());
                c++;
                if (c > 999) {
                    $div.css('background', 'red');
                    break;
                }
            }
          

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
        }

        if($(window).width() > 767) {
            console.log((4 - $('.textchoice').val().length) * 26 + 'px');
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '52px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '34px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '2px');
                    }
                    else{
                        var px = Math.abs($('.textchoice').val().length - 4) * 26 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '44px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '17px');
                    }
                    else {  
                        var px = (Math.abs($('.textchoice').val().length - 4) * 26) + 13 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
            }
        }

        if($(window).width() < 768 && $(window).width() > 748) {
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '72px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '22px');
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
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '72px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '22px');
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

        if($(window).width() < 681 && $(window).width() > 608) {
            if($('.comptextdisplay>span').text().length < 8) {
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
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '44px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '15px');
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
                        $('.comptextdisplay>span').css('padding-left', '25px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '49px');
                    }
                }
            }
        }

        if($(window).width() < 481 && $(window).width() > 416) {
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '29px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '8px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '50px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '19px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                }
            }
        }

        if($(window).width() < 417 && $(window).width() > 320) {
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
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
                        $('.comptextdisplay>span').css('padding-left', '32px');
                    }
                }
            }
        }

        if($(window).width() < 321) {
            if($('.comptextdisplay>span').text().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '10px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '30px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '22px');
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

        $(".lifetime").attr("value", result);

        $('.displayinword').html('<p class="pchange">$'+result+'</p>');

        calcclick = true;
    })

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
            $(this).next(".labelsdol").hide();
            $(this).css('text-indent', '0px');
        }
        else {
            $(this).next(".labelsdol").show();
            $(this).css('text-indent', '13px');
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
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }          
    });

    $('.companytext').click(function() {
        console.log("herhe;arij;lewfrj");
        var text = $('.textchoice').val();
        $('.choose').hide();
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
                        $('.comptextdisplay>span').css('padding-left', '52px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '34px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '2px');
                    }
                    else{
                        var px = Math.abs($('.textchoice').val().length - 4) * 26 + 'px';
                        $('.comptextdisplay>span').css('padding-left', px);
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '44px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '17px');
                    }
                    else {  
                        var px = (Math.abs($('.textchoice').val().length - 4) * 26) + 13 + 'px';
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
                        $('.comptextdisplay>span').css('padding-left', '72px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '22px');
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
                        $('.comptextdisplay>span').css('padding-left', '72px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '22px');
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
                        $('.comptextdisplay>span').css('padding-left', '15px');
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
                        $('.comptextdisplay>span').css('padding-left', '25px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
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
                        $('.comptextdisplay>span').css('padding-left', '29px');
                    }
                    else if($('.textchoice').val().length == 5) {
                        $('.comptextdisplay>span').css('padding-left', '8px');
                    }
                    else if($('.textchoice').val().length == 7) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else{
                        $('.comptextdisplay>span').css('padding-left', '50px');
                    }
                }
                else {
                    if($('.textchoice').val().length == 4) {
                        $('.comptextdisplay>span').css('padding-left', '19px');
                    }
                    else if($('.textchoice').val().length == 6) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else if($('.textchoice').val().length == 8) {
                        $('.comptextdisplay>span').css('padding-left', '0px');
                    }
                    else {
                        $('.comptextdisplay>span').css('padding-left', '45px');
                    }
                }
            }
        }

        if($(window).width() < 417) {
            if($('.textchoice').val().length < 8) {
                console.log("in if********asdfasdfasdf")
                if(isOdd($('.textchoice').val().length)) {
                    if($('.textchoice').val().length == 3) {
                        $('.comptextdisplay>span').css('padding-left', '16px');
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
                        $('.comptextdisplay>span').css('padding-left', '32px');
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
});