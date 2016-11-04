<!DOCTYPE html>
<html>
<head>
	<title>Value Calculator</title>
	
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta content="utf-8" http-equiv="encoding">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="main.css" />
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/ajaxupload.js"></script>
	<script type="text/javascript" src="js/jquery.textfill.min.js"></script>
	<!--<script src="https://use.fontawesome.com/cfbe62a5e3.js"></script>-->
	<script type="text/javascript" src="main.js"></script>

	<link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Lato|Open+Sans|Rubik|Work+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Arima+Madurai" rel="stylesheet">
<head>
<body>

<script>
	function previewFile(){
       var preview = document.querySelector('.clilog'); //selects the query named img
       var file    = document.querySelector('#imageUpload1').files[0]; //sames as here
       var reader  = new FileReader();
       $(".chooseif").hide();
       $(".tochange").css('display', 'flex');

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
    }

    function previewFile2(){
       var preview = document.querySelector('.c1'); //selects the query named img
       var file    = document.querySelector('#imageUpload2').files[0]; //sames as here
       var reader  = new FileReader();
       $(".cc1").hide();
       $(".c1").css('display', 'block');

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
    }

    function previewFile3(){
       var preview = document.querySelector('.c2'); //selects the query named img
       var file    = document.querySelector('#imageUpload3').files[0]; //sames as here
       var reader  = new FileReader();
       $(".cc2").hide();
       $(".c2").css('display', 'block');

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
    }
</script>

<div class="container">
	<div class="row">
		<div class="calccont col-lg-20 col-lg-offset-8 col-md-24 col-md-offset-6 col-sm-30 col-sm-offset-3 col-xs-36">
			<div class="logcont col-lg-7 col-lg-offset-0 col-md-7 col-md-offset-0 col-sm-7 col-sm-offset-0 col-xs-7">
				<img class="vallog col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36" src="images/valpaklogo.png"></img><br>
				<img class="vallogunder col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36" src="images/vallogunder.jpg"></img>
			</div>
			<div class="logomore col-lg-21 col-md-21 col-sm-21 col-xs-21">
				
				<div class="plus col-lg-2 col-md-2 col-sm-2 col-xs-2"> + </div>
				
				<div class="clilogcont tochange col-lg-18 col-md-18 col-sm-18 col-xs-18" style="display: none">
			    	<img class="clilog col-lg-36 col-md-36 col-sm-36 col-xs-36" src=""/>
			    </div>
			    <div class="clilogcont chooseif col-lg-18 col-md-18 col-sm-18 col-xs-18">
				    <label class="choose col-lg-36 col-md-36 col-sm-36 col-xs-36">
				    	<input class="inchoose col-lg-36 col-md-36 col-sm-36 col-xs-36" id="imageUpload1" type="file" name="image" onchange="previewFile()"/>
				    </label>
				    <label class="choosey col-lg-36 col-md-36 col-sm-36 col-xs-36">
				    	<input class="textchoice col-lg-26 col-md-26 col-sm-26 col-xs-20" type="text"/><button class="companytexthack col-lg-10 col-md-10 col-sm-10 col-xs-16">ADD</button>
				    </label>
			    	<div class="comptextdisplay col-lg-36 col-md-36 col-sm-36 col-xs-36"></div>
			    </div>
				
				<div class="equals col-lg-2 col-md-2 col-sm-2 col-xs-2"> = </div>
				<div class="splitthree col-lg-13 col-md-13 col-sm-12 col-xs-12">
					<img class="newcust col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36" src="images/newcust.jpg"></img>
				</div>
			</div>
			<div class="newpicspot col-lg-8 col-md-8 col-sm-8 col-xs-8">
				<img class="corypic col-lg-36 col-md-36 col-sm-36 col-xs-36" src="images/cwood.jpg"></img>
				<div class="info col-lg-36 col-md-36 col-sm-36 col-xs-36">Cory Brown<br>Valpak of Va<br>703-622-4083<br><a href="mailto:cwood@valpakva.com">cwood@valpakva.com</a></div>
			</div>
			<div class="titlephoto col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="calctitle col-lg-36 col-md-36 col-sm-36 col-xs-36">HOW MUCH IS A <div class='fonty'>NEW CUSTOMER</div> WORTH TO 
					<div class ="calctitleu" style="text-decoration: underline">
						<div class="yb yb2">
							<label class="choosey ch2 bottomch2 col-lg-36 col-md-36 col-sm-36 col-xs-36" style="display: none">
								<input class="textchoice t2 col-lg-26 col-md-26 col-sm-26 col-xs-22" type="text"/><button class="companytext ct2 col-lg-10 col-md-10 col-sm-10 col-xs-14">ADD</button>
							</label>
							<p class="calctitleu chinto" style="text-decoration:underline; display: none;"></p>
							<p class="calctitleu changeit" style="text-decoration:underline;">YOUR BUSINESS</p>
						</div>
					</div>?
				</div>
			</div>
			<div class="forshadow">
			<div class="qdisplayprops averagedolnew col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-28 col-md-28 col-sm-28 col-xs-30">
					<div class="qtext">
						<p class="pinq">What is the average DOLLAR amount of a NEW</p>
						<!-- Example single danger button -->
						<!--<div style="max-width: 100%;">-->
						  <!--<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer's
						  </button>-->
						  <select class="form-control s">
						  	<option class="dropdown-item" href="#">customer's</option>
						    <option class="dropdown-item" href="#">client's</option>
						    <option class="dropdown-item" href="#">patient's</option>
						    <option class="dropdown-item" href="#">diner's</option>
						    <option class="dropdown-item" href="#">student's</option>
						  </select>
						<!--</div>-->
						<p class="pinq">FIRST</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    sale
						  </button>-->
						  <select class="form-control d">
						  	<option class="dropdown-item" href="#">order</option>
						  	<option class="dropdown-item" href="#">sale</option>
						    <option class="dropdown-item" href="#">spend</option>
						    <option class="dropdown-item" href="#">ticket</option>
						    <option class="dropdown-item" href="#">repair</option>
						    <option class="dropdown-item" href="#">bill</option>
						    <option class="dropdown-item" href="#">check</option>
						    <option class="dropdown-item" href="#">visit</option>
						    <option class="dropdown-item" href="#">installation</option>
						  </select>
						<!--</div>-->
						<p class="pinq">?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-md-8 col-sm-6 col-xs-6">
					<input class="q1box avg box1 col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labelsdol'><div class="dol">$</div></span>
				</div>
			</div>
			<div class="qdisplayprops averagedol col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-26 col-md-26 col-sm-30 col-xs-30">
					<div class="qtext">
						<p class="pinq">What is the average DOLLAR amount of a</p>
						<p class="pinq f">customer's</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer's
						  </button>-->
						  <!--<select class="form-control f">
						  	<option class="dropdown-item" href="#">customer's</option>
						    <option class="dropdown-item" href="#">client's</option>
						    <option class="dropdown-item" href="#">patient's</option>
						    <option class="dropdown-item" href="#">diner's</option>
						    <option class="dropdown-item" href="#">student's</option>
						  </select>-->
						<!--</div>-->
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    TBD
						  </button>-->
						  <!--<select class="form-control g">
						  	<option class="dropdown-item" href="#">order</option>
						  	<option class="dropdown-item" href="#">sale</option>
						    <option class="dropdown-item" href="#">spend</option>
						    <option class="dropdown-item" href="#">ticket</option>
						    <option class="dropdown-item" href="#">repair</option>
						    <option class="dropdown-item" href="#">bill</option>
						    <option class="dropdown-item" href="#">check</option>
						    <option class="dropdown-item" href="#">visit</option>
						    <option class="dropdown-item" href="#">installation</option>
						  </select>-->
						<!--</div>-->
						<p class="pinq g">order</p>
						<p class="pinq">?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-0 col-xs-6 col-xs-offset-0">
					<input class="q1box avgr box2 col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labelsdol'><div class="dol">$</div></span>
				</div>
			</div>
			<div class="qdisplayprops timeperyrbuy col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-26 col-md-26 col-sm-26 col-xs-26">
					<div class="qtext">
						<p class="pinq addfont">How many times per year does an average</p> <p class="pinq addfont i">customer</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer
						  </button>-->
						  <!--<select class="form-control h">
						  	<option class="dropdown-item" href="#">customer</option>
						    <option class="dropdown-item" href="#">client</option>
						    <option class="dropdown-item" href="#">patient</option>
						    <option class="dropdown-item" href="#">diner</option>
						    <option class="dropdown-item" href="#">student</option>
						  </select>-->
						<!--</div>-->
						<p class="pinq addfont">buy from you?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-4 col-xs-6 col-xs-offset-4">
					<input class="q1indentno tpr box3 col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><div class='labels'><div class="times" >times</div><br><div class="yr">yr</div></div>
				</div>
			</div>
			<div class="qdisplayprops timeperyrbis col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-28 col-md-28 col-sm-28 col-xs-30">
					<div class="qtext">
						<p class="pinq fontchanget">On average how many years does a</p>
						<p class="pinq fontchanget i">customer</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer
						  </button>-->
						  <!--<select class="form-control i">
						  	<option class="dropdown-item" href="#">customer</option>
						    <option class="dropdown-item" href="#">client</option>
						    <option class="dropdown-item" href="#">patient</option>
						    <option class="dropdown-item" href="#">diner</option>
						    <option class="dropdown-item" href="#">student</option>
						  </select>-->
						<!--</div><br>-->
						<p class="pinq fontchanget">continue doing business with you?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-md-8 col-sm-6 col-xs-6">
					<input class="q1indentno yrs box4 col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labelsyrs'><div class="yrs">yrs</div></span>
				</div>
			</div>
			</div>
			<div class="calculate col-lg-16 col-lg-offset-10 col-md-16 col-md-offset-10 col-sm-16 col-sm-offset-10 col-xs-24 col-xs-offset-6">
				<p style="text-align: center;">CALCULATE RESULTS<p>
			</div>
			<div class="spaceforprint col-lg-16 col-lg-offset-10 col-md-16 col-md-offset-10 col-sm-16 col-sm-offset-10 col-xs-24 col-xs-offset-6"></div>
			<div class="qdisplayprops result col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="starburst">
					<img class="starburstimg" src="images/starburstc.png"/>
				</div>
				<div class="qtext fontchange col-lg-24 col-md-26 col-sm-26 col-xs-26">The lifetime value of this <p class="qtext2 fontchanger i">customer</p> is ...</div><div class="dol reslife">$</div>
				<div class="q1res col-lg-8 col-lg-offset-0 col-md-8 col-md-offset-0 col-sm-8 col-sm-offset-0 col-xs-8 col-xs-offset-0">
					<div class="q1box lifetime col-lg-36 col-md-36 col-sm-36 col-xs-36" style="text-indent: 0px;"></div>
				</div>
			</div>
			<div class="words col-lg-28 col-md-28 col-sm-28 col-xs-28">
				<div class="qtext lineheightback withborder arima">Now that you know that just one new <p class="qtext2 i arima i2">customer</p> is worth
					<div class="displayinword arima"><p class="pchange">$</p></div> to your business, making a marketing plan should be easier.<br><br class="nobreak">
					As long as you can obtain ONE new <p class="qtext2 i arima">customer</p> for less than <div class="displayinword arima"><p class="pchange">$</p></div>, you will receive a positive return on your
					investment!<br>
				</div>
			</div>
			<!--<div class="envelopeshowhow col-lg-12 col-md-12 col-sm-12 col-xs-12">
	
			</div>-->
			<div class="envelope col-lg-8 col-lg-offset-0 col-md-8 col-md-offset-0 col-sm-8 col-sm-offset-0 col-xs-8 col-xs-offset-0">
				<div class="qtext lineheightback overtext col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36 col-xs-offset-0" style="font-weight: 900; text-align: center;">LET ME SHOW YOU HOW!</div>
				<img class="envpic overlap col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36 col-xs-offset-0" src="images/image14.jpg">
				<img class="envpic overlap3 col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36 col-xs-offset-0" src="images/image1.gif">
			</div>
			<div class="applicant-break"></div>
			<div class="words  w2 col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qtext lineheightback forover">For over 48years, Valpak has helped local businesses gain <p class="qtext2 " style="text-decoration:underline">NEW CUSTOMERS</p> and
					<p class="qtext2 " style="text-decoration:underline">INCREASE SALES</p> with customized strategies that will get
					<p class="qtext2 " style="text-decoration:underline">YOUR MESSAGE</p> TO YOUR TARGET AUDIENCE!
				</div>
			</div>
			<div class="coupons col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<label class="choosecoup cc1 col-lg-36 col-md-36 col-sm-36 col-xs-36">
				    <input class="inchoose nullmiss col-lg-12 col-lg-offset-12 col-md-12 col-md-offset-12 col-sm-12 col-sm-offset-12 col-xs-12 col-xs-offset-11" id="imageUpload2" type="file" name="image2" onchange="previewFile2()"/>
				</label>
				<img class="couponpic c1 col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36 col-xs-offset-0" style="display: none" src=""/>
				<label class="choosecoup cc2 col-lg-36 col-md-36 col-sm-36 col-xs-36">
			    	<input class="inchoose nullmiss col-lg-12 col-lg-offset-12 col-md-12 col-md-offset-12 col-sm-12 col-sm-offset-12 col-xs-12 col-xs-offset-11" id="imageUpload3" type="file" name="image3" onchange="previewFile3()"/>
			    </label>
				<img class="couponpic c2 col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36 col-xs-offset-0" style="display: none" src=""/>
			</div>
			<div class="words2 col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<!--<div class="qtext lineheightback">Now that you know that just one new <p class="qtext2 i">customer</p> is worth
					<div class="displayinword"><p class="pchange">$</p></div> to your business, planning your marketing plan should be easier.<br><br>
					As long as you can obtain a new <p class="qtext2 i">customer</p> for less than <div class="displayinword"><p class="pchange">$</p></div>, you will receive a positive return on your
					marketing dollars!<br><br>
					VALPAK's targeted marketing to the local households looking to do business with you is the EASIEST and MOST COST EFFECTIVE way to capture the new clients you need and deserve!
				</div>-->
				<div class="qtext lineheightback lhb"><div class="qtext2">Every month Valpak mails to over 800,000 of the best households in
					<!--<div class="yb">
						<label class="choosey ch2 col-lg-36 col-md-36 col-sm-36 col-xs-36" style="display: none">
							<input class="textchoice t2 col-lg-26 col-md-26 col-sm-26 col-xs-22" type="text"/><button class="companytext ct2 col-lg-10 col-md-10 col-sm-10 col-xs-14">ADD</button>
						</label>-->
						Northern Virginia! Is
						<p class="qtext2 changeitback" style="text-decoration:underline;">YOUR BUSINESS</p>
						<p class="qtext2 chinto" style="text-decoration:underline; display: none"></p>
					<!--</div>-->
					ready to gain the new customers you need?</div>
				</div>
			</div>
			<div class="bottombar col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="newpicspot nps2 col-lg-7 col-md-7 col-sm-7 col-xs-7">
					<img class="corypic cpic2 col-lg-36 col-md-36 col-sm-36 col-xs-36" src="images/cwood.jpg"></img>
				</div>
				<div class="col-lg-29 col-md-29 col-sm-29 col-xs-29">
					<div class="qtext2 alignbot" style="display: inline-block; float: left;">Cory Brown &#8226 Valpak of Virginia</div>
					<div class="emailmecont col-lg-7 col-md-7 col-sm-7 col-xs-6">
						<a href="tel://1-703-622-4083" class="emailme displayb call col-lg-36 col-md-36 col-sm-36 col-xs-36">CALL ME</a>
						<a href="tel://1-703-622-4083" class="displayb htt move1 col-lg-36 col-md-36 col-sm-36 col-xs-36">703-622-4083</a>
					</div>
					<div class="emailmecont col-lg-7 col-md-7 col-sm-7 col-xs-7">
						<a href="mailto:cwood@valpakva.com" class="emailme displayb col-lg-36 col-md-36 col-sm-36 col-xs-36">EMAIL ME</a>
						<!--<div class='hypertext col-lg-36 col-md-36 col-sm-36 col-xs-36'>
							<a href="tel://1-703-622-4083" class="htt col-lg-7 col-lg-offset-21 col-md-7 col-md-offset-21 col-sm-7 col-sm-offset-21 col-xs-5 col-xs-offset-19">1-703-622-4083</a>
							<a href="mailto:cwood@valpakva.com" class="htt col-lg-7 col-md-7 col-sm-7 col-xs-5">cwood@valpakva.com</a>
						</div>-->
						<a href="mailto:cwood@valpakva.com" class="displayb htt printy col-lg-36 col-md-36 col-sm-36 col-xs-36">cwood@valpakva.com</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="printholder col-lg-36 col-md-36 col-sm-36 col-xs-36">
					<div class="print col-lg-6 col-lg-push-6 col-md-6 col-md-push-6 col-sm-6 col-sm-push-6 col-xs-6 col-xs-push-4">PRINT</div>
					<label class="choosey foremail col-lg-16 col-lg-push-6 col-md-16 col-md-push-6 col-sm-16 col-sm-push-6 col-xs-16 col-xs-push-4">
				    	<input placeholder="Enter e-mail..." class="textchoice foremailinput col-lg-26 col-md-26 col-sm-26 col-xs-20" type="text"/><button id="foremailchoice" class="col-lg-10 col-md-10 col-sm-10 col-xs-16">SEND</button>
				    </label>
				</div>
			</div>
		</div>
	</div>
</div>

<?php 
	if(isset($_POST['box1'])){
	    $to = $_POST['email']; // this is your Email address
	    $from = 'fyb2009@gmail.com';//$_POST['email']; // this is the sender's Email address
	    $subject = "Valpak of VA / Customer Lifetime Value";
	    $subject2 = "Valpak calculator copy of email to " . $to;
	    $message = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>VALPAK</title>';
	    $message .= '<style type="text/css">';
	    $message .= 'body {margin: 0; padding: 0; min-width: 100%!important;} .graybox {background-color: #808080; padding: 40px 40px 40px 40px; border-style: dotted; border-color: black; border-width: 3px; color: white; font-size: 16pt;} .pad {padding: 25px 25px 25px 25px; font-size: 15pt;} .bottomb {font-size: 12pt; text-align: center; padding: 30px 15px 30px 15px; color: black;}';
	    $message .= '.titlehead {text-align: center; padding: 40px 40px 40px 40px; font-size: 25pt; font-family: "Karla", sans-serif;} .q {padding: 20px; font-weight: 700; background-color: #eeeeee; border-top-style: solid; border-top-width: 1px; border-top-color: #808080;} li {display: inline-block;} .content {width: 100%; max-width: 600px;} .whitebox {padding: 10px 10px 10px 10px; width: 10%;}</style></head><body yahoo>';
        $message .= '<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0"><tr><td>';
        $message .= '<table class="content" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>';
        $message .= '<table class="titlehead" bgcolor="#fff5ea" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>HOW MUCH IS A NEW CUSTOMER WORTH TO YOUR BUSINESS?</td></tr></table>';
        $message .= '<table class="q" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>What is the average DOLLAR amount of a NEW ' . $_POST['dd1s'] . ' FIRST ' . $_POST['dd2d'] . '?</td><td class="whitebox" bgcolor="#fff">$' . $_POST['box1'] . '</td></tr></table>';
        $message .= '<table class="q" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>What is the average DOLLAR amount of a ' . $_POST['dd1s'] . ' order ?</td><td class="whitebox" bgcolor="#fff">$' . $_POST['box2'] . '</td></tr></table>';
        $message .= '<table class="q" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>How many times per year does an average ' . $_POST['i'] . ' buy from you?</td><td class="whitebox" bgcolor="#fff">' . $_POST['box3'] . '</td></tr></table>';
        $message .= '<table class="q" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>On average how many years does a ' . $_POST['i'] . ' continue doing business with you?</td><td class="whitebox" bgcolor="#fff">' . $_POST['box4'] . '</td></tr></table>';
        $message .= '<table class="blank" bgcolor="#ffffff" width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;" border="0"><tr><td></td></tr></table>';
        $message .= '<table class="q" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td>The lifetime value of this customer is ...</td><td class="whitebox" bgcolor="#fff">$' . $_POST['lifeval'] . '</td></tr></table>';
        $message .= '</td></tr></table>';
        $message .= '<table class="blank" bgcolor="#ffffff" width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;" border="0"><tr><td></td></tr></table>';
        $message .= '<table class="content graybox" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td>Now that you know that just one new customer is worth $' . $_POST['lifeval'] . ' to your business, making a marketing plan should be easier. As long as you can obtain ONE new customer for less than $' . $_POST['lifeval'] . ', you will receive a positive return on your investment!</td></tr></tbody></table>';
        $message .= '<table class="content pad" align="center" width="100%" cellpadding="0" cellspacing="0" border="0"><tr> <td>For over 48 years, Valpak has helped local businesses gain NEW CUSTOMERS and INCREASE SALES with customized strategies that will get YOUR MESSAGE TO YOUR TARGET AUDIENCE! Every month Valpak mails to over 800,000 of the best households in Northern Virginia! Is ' . $_POST['business'] . ' ready to gain the new customers you need?</td></tr></table>';
        $message .= '<table class="bottomb" align="center" bgcolor="#fff5ea" width="100%" cellpadding="0" cellspacing="0" border="0"><tr> <td>Cory Brown <li></li> Valpak of Virginia <li></li> 703-622-4083 <li></li> cwood@valpakva.com</td> </tr> </table>';
        $message .= '</td></tr></table></body></html>';// . $_POST['comment'];*/
        /*print $message;*/
	    $message2 = "**copy**";// . $_POST['comment'];

	    $headers = "From:" . $from .  "\r\n";
	    $headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";
	    $headers2 = "From:" . $to;
	    mail($to,$subject,$message,$headers);
	    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	}
?>

</body>
</html>