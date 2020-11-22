$(document).ready(function () {
	$('#save').click(function () {
		var mssv = $("#inputuser").val();
		document.location="http://localhost/php-training/for-extension/request.php?mssv="+mssv;
	})
	
}); 