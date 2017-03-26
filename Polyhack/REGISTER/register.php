<?php

    // configuration
    require("../includes/config.php");

    // if user reached page via GET (as by clicking a link or via redirect)
    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        // else render form
        render("register_form.php", ["title" => "Register"]);
    }

    // else if user reached page via POST (as by submitting a form via POST)
    else if ($_SERVER["REQUEST_METHOD"] == "POST")
      if (empty($_POST["username"]))
    {
        apologize("Username not provided!");
    }
    
    else if (empty($_POST["password"]))
    {
        apologize("Password not provided!");
    }
    
    else if (empty($_POST["confirmation"]))
    {
        apologize("Password not confirmed!");
    }

      else if (empty($_POST["firstName"]))
    {
        apologize("First name not provided!");
    }
    
    else if (empty($_POST["lastName"]))
    {
        apologize("Last name not provided!");
    }
    
    else if ($_POST["confirmation"] != $_POST["password"])
    {
        apologize("Password does not match confirmation!");
    }

    // insert new user into database
    
    CS50::query("INSERT IGNORE INTO users (username, hash, cash) VALUES(?, ?, 10000.0000)", $_POST["username"],
    password_hash($_POST["password"], PASSWORD_DEFAULT));  
    
    if ($success === false)
    {
        apologize("Account could not be created :(");
    }
    
    else 
    {
        $rows = CS50::query("SELECT LAST_INSERT_ID() AS id");
        $id = $rows[0]["id"];
        
    // store logged in user ID in session
    
    $_SESSION["id"] = $id;
    
    redirect("https://ide50-bilalq94.cs50.io/index.php");
    
    }
    

    
?>