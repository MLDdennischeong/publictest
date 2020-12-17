$string = "hello";

$username = "user";
$password = "P@ssw0rd";

$app = document.getElementById("app");
console.log($app);
$app.innerHTML = "123<script>alert(123);</script>";
