<?php

ini_set('display_errors', 'On');

try {
   $db = new PDO('mysql:host=localhost;dbname=sampleDB','Christopher','janelleyp00');

}catch(PDOException $e) {
   die('Error connecting to the DB.');
}

if(!empty($_POST)) {
   $firstName = $_POST['firstName'];
   $lastName = $_POST['lastName'];
   $username = $_POST['username'];
   $email = $_POST['email'];
   $password = $_POST['password'];
   $confirmation = $_POST['confirmation'];
   $user = $db -> prepare("

INSERT INTO sampleTable (firstName, lastName, username, email, password, confirmation)

VALUES (:firstName, :lastName, :username, :email, :password, :confirmation)


");

$user -> execute([


'firstName' => $firstName,
'lastName' => $lastName,
'username' => $username,
'email' => $email,
'password' => $password,
'confirmation' => $confirmation

]);
    $success = true;
    if($success) {
        header('Location: login.php');
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Global Problem Solvers</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- Plugin CSS -->
    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="css/style.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">Global Problem Solvers</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="login.html">Login</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>

<header>
    <div class="header-content">
        <div class="header-content-inner">
            <a><img src="img/gpswhite.png">
                <!--<h1 id="homeHeading">GPS</h1>
                  <hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. </p> -->
                <p class="cta"><a href="#about" class="btn btn-primary btn-xl page-scroll">Find out more!</a></p>
        </div>
    </div>
</header>
<section  id="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="text-center">Who We Are</h2>
                <p>GPS (Global Problem Solvers) is an active community of users dedicated to increasing awareness of simple, yet often overlooked problems around them. This increase in awareness leads to an increased probability of positive action being taken for immediate and impactful change.</p>
                <p>By providing a dynamic, map-driven platform that allows user to both report and respond to local issues, GPS hopes to be a new way for people to get involved in their communities. Sign up and start making a difference today!</p>
            </div>
            <div class="col-lg-6 text-center">
                <h2>Register</h2>

                <form action="index.php" method="post">
                    <fieldset>
                        <div class="form-group">
                            <input   required="required" class="form-control" id="firstName" name="firstName" placeholder="First Name" type="text" required="required">
                        </div>
                        <div class="form-group">
                            <input required="required" class="form-control" id="lastName" name="lastName" placeholder="Last Name" type="text"/>
                        </div>
                        <div class="form-group">
                            <input required="required"  class="form-control" id="username" name="username" placeholder="Username" type="text"/>
                        </div>
                        <div class="form-group">
                            <input required="required" class="form-control" id="email" name="email" placeholder="Email" type="text"/>
                        </div>
                        <div class="form-group">
                            <input required="required" class="form-control" name="password" placeholder="Password" id="password" type="password"/>
                        </div>

                        <div class="form-group">
                            <input required="required" class="form-control" name="confirmation" placeholder="Confirm Password" id="confirm" type="password"/>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-small" type="submit" onclick="validate();">Register</button>
                        </div>
                    </fieldset>
                </form>
</section>

<section class="social">
    <div class="container">
        <div class="row">
            <div class="col-md-4 text-center">
                <i class="fa fa-facebook fa-4x"></i>
            </div>
            <div class="col-md-4 text-center">
                <i class="fa fa-github fa-4x"></i>
            </div>
            <div class="col-md-4 text-center">
                <i class="fa fa-instagram fa-4x"></i>
            </div>
        </div>
    </div>
</section>

<!-- jQuery -->
<script src="vendor/jquery/jquery.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="vendor/scrollreveal/scrollreveal.min.js"></script>
<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

<!-- Theme JavaScript -->
<script src="js/creative.min.js"></script>
<script src="js/validation.js"></script>

</body>

</html>
