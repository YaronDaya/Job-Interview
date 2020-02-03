
   <?php
   /* created by yaron daya */
    if(isset($_POST['submit'])) {
     $name = $_POST['name'];
     $email = $_POST['email'];
     $msg = $_POST['message'];
     echo "the name is : $name" ."<br> "."the email is : $email "." <br>" ."the msg is : $msg" ;
     echo "<script>alert('the name is : $name ' + 'the email is : $email ' + ' the msg is : $msg')</script>";
    } else { 
      echo  "________ERROR_________";
    }
   ?>