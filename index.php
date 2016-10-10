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

	<link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Karla|Lato|Open+Sans|Rubik|Work+Sans" rel="stylesheet">
<head>
<body>

<script>
	function previewFile(){
       var preview = document.querySelector('.clilog'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
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
</script>

<div class="container">
	<div class="row">
		<div class="calccont col-lg-20 col-lg-offset-8 col-md-24 col-md-offset-6 col-sm-30 col-sm-offset-3 col-xs-36">
			<div class="logcont col-lg-7 col-lg-offset-0 col-md-7 col-md-offset-0 col-sm-7 col-sm-offset-0 col-xs-7">
				<img class="vallog col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36" src="images/valpaklogo.png"></img><br>
				<img class="vallogunder col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36" src="images/vallogunder.jpg"></img>
			</div>
			<div class="logomore col-lg-22 col-md-22 col-sm-22 col-xs-22">
				
				<div class="plus col-lg-2 col-md-2 col-sm-2 col-xs-2"> + </div>
				
				<div class="clilogcont tochange col-lg-18 col-md-18 col-sm-18 col-xs-18" style="display: none">
			    	<img class="clilog col-lg-36 col-md-36 col-sm-36 col-xs-36" src=""/>
			    </div>
			    <div class="clilogcont chooseif col-lg-18 col-md-18 col-sm-18 col-xs-18">
				    <label class="choose col-lg-36 col-md-36 col-sm-36 col-xs-36">
				    	<input class="inchoose col-lg-36 col-md-36 col-sm-36 col-xs-36" id="imageUpload" type="file" name="image" onchange="previewFile()"/>
				    </label>
				    <label class="choosey col-lg-36 col-md-36 col-sm-36 col-xs-36">
				    	<input class="textchoice col-lg-26 col-md-26 col-sm-26 col-xs-22" type="text"/><button class="companytext col-lg-10 col-md-10 col-sm-10 col-xs-14">ADD</button>
				    </label>
			    	<div class="comptextdisplay col-lg-36 col-md-36 col-sm-36 col-xs-36"></div>
			    </div>
				
				<div class="equals col-lg-2 col-md-2 col-sm-2 col-xs-2"> = </div>
				<div class="splitthree col-lg-13 col-md-13 col-sm-12 col-xs-12">
					<img class="newcust col-lg-36 col-lg-offset-0 col-md-36 col-md-offset-0 col-sm-36 col-sm-offset-0 col-xs-36" src="images/newcust.jpg"></img>
				</div>
			</div>
			<div class="newpicspot col-lg-7 col-md-7 col-sm-7 col-xs-7">
				<img class="corypic col-lg-36 col-md-36 col-sm-36 col-xs-36" src="images/cwood.jpg"></img>
				<div class="info col-lg-36 col-md-36 col-sm-36 col-xs-36">Cory Brown<br>Valpak of Va<br>703-622-4083<br>cwood@valpakva.com</div>
			</div>
			<div class="titlephoto col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="calctitle col-lg-28 col-md-28 col-sm-28 col-xs-27">How much is a New Customer Worth to 
					<div class ="calctitleu" style="text-decoration: underline">Your Business?</div>
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
						  <select class="form-control">
						  	<option class="dropdown-item" href="#">customer's</option>
						    <option class="dropdown-item" href="#">patient's</option>
						    <option class="dropdown-item" href="#">client's</option>
						    <option class="dropdown-item" href="#">diner's</option>
						    <option class="dropdown-item" href="#">student's</option>
						  </select>
						<!--</div>-->
						<p class="pinq">first</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    sale
						  </button>-->
						  <select class="form-control">
						  	<option class="dropdown-item" href="#">sale</option>
						    <option class="dropdown-item" href="#">repair</option>
						    <option class="dropdown-item" href="#">ticket</option>
						    <option class="dropdown-item" href="#">bill</option>
						  </select>
						<!--</div>-->
						<p class="pinq">?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-md-8 col-sm-6 col-xs-6">
					<input class="q1box avg col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labelsdol'><div class="dol">$</div></span>
				</div>
			</div>
			<div class="qdisplayprops averagedol col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-26 col-md-26 col-sm-30 col-xs-30">
					<div class="qtext">
						<p class="pinq">What is the average DOLLAR amount of a</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer's
						  </button>-->
						  <select class="form-control">
						  	<option class="dropdown-item" href="#">customer's</option>
						    <option class="dropdown-item" href="#">patient's</option>
						    <option class="dropdown-item" href="#">client's</option>
						    <option class="dropdown-item" href="#">diner's</option>
						    <option class="dropdown-item" href="#">student's</option>
						  </select>
						<!--</div>-->
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    TBD
						  </button>-->
						  <select class="form-control">
						  	<option class="dropdown-item" href="#">sale</option>
						    <option class="dropdown-item" href="#">repair</option>
						    <option class="dropdown-item" href="#">ticket</option>
						    <option class="dropdown-item" href="#">bill</option>
						  </select>
						<!--</div>-->
						<p class="pinq">?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-0 col-xs-6 col-xs-offset-0">
					<input class="q1box avgr col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labelsdol'><div class="dol">$</div></span>
				</div>
			</div>
			<div class="qdisplayprops timeperyrbuy col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-26 col-md-26 col-sm-26 col-xs-26">
					<div class="qtext">
						<p class="pinq addfont">How many times per year does an average</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer
						  </button>-->
						  <select class="form-control">
						  	<option class="dropdown-item" href="#">customer</option>
						    <option class="dropdown-item" href="#">patient</option>
						    <option class="dropdown-item" href="#">client</option>
						    <option class="dropdown-item" href="#">diner</option>
						    <option class="dropdown-item" href="#">student</option>
						  </select>
						<!--</div>-->
						<p class="pinq addfont">buy from you?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-4 col-xs-6 col-xs-offset-4">
					<input class="q1indentno tpr col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labels'><div class="times" >times</div><br><div class="yr">yr</div></span>
				</div>
			</div>
			<div class="qdisplayprops timeperyrbis col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qcont col-lg-28 col-md-28 col-sm-28 col-xs-30">
					<div class="qtext">
						<p class="pinq fontchanget addfont">On average how many years does a</p>
						<!--<div class="btn-group">
						  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    customer
						  </button>-->
						  <select class="form-control">
						  	<option class="dropdown-item" href="#">customer</option>
						    <option class="dropdown-item" href="#">patient</option>
						    <option class="dropdown-item" href="#">client</option>
						    <option class="dropdown-item" href="#">diner</option>
						    <option class="dropdown-item" href="#">student</option>
						  </select>
						<!--</div><br>-->
						<p class="pinq fontchanget addfont">continue doing business with you?</p>
					</div>
				</div>
				<div class="q1res col-lg-8 col-md-8 col-sm-6 col-xs-6">
					<input class="q1indentno yrs col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text"><span class='labelsyrs'><div class="yrs">yrs</div></span>
				</div>
			</div>
			</div>
			<div class="calculate col-lg-16 col-lg-offset-10 col-md-16 col-md-offset-10 col-sm-16 col-sm-offset-10 col-xs-24 col-xs-offset-6">
				<p style="text-align: center;">CALCULATE RESULTS<p>
			</div>
			<div class="qdisplayprops result col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qtext fontchange col-lg-24 col-md-26 col-sm-26 col-xs-26">The lifetime value of this customer is ...</div><div class="dol reslife">$</div>
				<div class="q1res col-lg-8 col-lg-offset-0 col-md-8 col-md-offset-0 col-sm-8 col-sm-offset-0 col-xs-8 col-xs-offset-0">
					<input class="q1box lifetime col-lg-36 col-md-36 col-sm-36 col-xs-36" type="text" style="text-indent: 0px;">
				</div>
			</div>
			<div class="words col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<div class="qtext lineheightback">Now that you know that just one new customer is worth
					<div class="displayinword"><p class="pchange">$</p></div> to your business, planning your marketing plan should be easier.<br><br>
					As long as you can obtain a new customer for less than <div class="displayinword"><p class="pchange">$</p></div>, you will receive a positive return on your
					marketing dollars!<br><br>
					VALPAK's targeted marketing to the local households looking to do business with you is the EASIEST and MOST COST EFFECTIVE to capture the new clients you need and deserve!
				</div>
			</div>
			<div class="coupons col-lg-36 col-md-36 col-sm-36 col-xs-36">
				<img class="couponpic col-lg-12 col-lg-offset-3 col-md-12 col-md-offset-3 col-sm-12 col-sm-offset-3 col-xs-12 col-xs-offset-3" src=""></img>
				<img class="couponpic col-lg-12 col-lg-offset-6 col-md-12 col-md-offset-6 col-sm-12 col-sm-offset-6 col-xs-12 col-xs-offset-6" src=""></img>
			</div>
		</div>
	</div>
</div>

<?php 
	if(isset($_POST['submit'])){
	    $to = "eamon@eamondev.com"; // this is your Email address
	    $from = $_POST['email']; // this is the sender's Email address
	    $name = $_POST['name'];
	    $subject = "Form submission";
	    $subject2 = "Copy of your form submission";
	    $message = $name . " wrote the following:" . "\n\n" . $_POST['comment'];
	    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['comment'];

	    $headers = "From:" . $from;
	    $headers2 = "From:" . $to;
	    mail($to,$subject,$message,$headers);
	    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
	    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

</body>
</html>