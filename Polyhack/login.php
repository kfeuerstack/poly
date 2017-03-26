<?php
include 'db.php';
$sel         = "SELECT * FROM sampleTable";
$sel_run     = mysqli_query($conn, $sel);
$count       = 1;
$username = $_POST['username'];
$password = $_POST['password'];
while($rows = mysqli_fetch_assoc($sel_run)) { ?>
<?php
$count++;
    if($username == $rows['username'] && $password == $rows['password']) {
        header('Location: default.html');
    }
?>
<!--<a href="#" class="list-group-item list-group-item-success"><strong>--><?php // echo $rows['firstName'],' -'; ?><!--</strong> --><?php //echo $rows['lastName']; ?><!--</a>-->
<?php } ?>
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

<body id="page-top">

    <nav id="mainNav" class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="index.php" id="navTitle">Global Problem Solvers</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <section class="login">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">
                    <img src="img/login.jpg" alt="GPS logo">
                    <h1></h1>
                    <form action="login.php" method="post">
                        <fieldset>                    
                            <div class="form-group">
                                <input autocomplete="off" autofocus class="form-control" name="username" placeholder="Username" type="text"/>
                            </div>
                             <div class="form-group">
                                <input class="form-control" name="password" placeholder="Password" type="password"/>
                             </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-xl" type="submit">Log In</button>
                        </div>
                        <p><a href="forgot.html">Forgot username or password?</a></p>
                    </fieldset>
                </form>
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

</body>

</html>
