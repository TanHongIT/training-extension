
$(document).ready(function () {
	chrome.runtime.onMessage.addListener(function (
		request,
		sender,
		sendResqonse
	) {
		if (request.message === "start") {
			// chrome.storage.sync.get(["list"], function (result) {
			// 	let total_user_presene = result['list'].length;
			// 	console.log(total_user_presene);
			// 	$('input[type=text]').val(result["userselected"]);
			// 	$('button[type=submit]').click();
			// });
			chrome.storage.sync.get(["list"], function (result) {
				console.log(result['list']);
			});
		}
	});
});