
$(document).ready(function () {
	chrome.runtime.onMessage.addListener(function (
		request,
		sender,
		sendResqonse
	) {
		if (request.message === "start") {
			load_presence();
		}
	});
});

function load_presence() {

	var get_mssv_server;

	chrome.storage.sync.get(["list_online"], function (result) {

		//save list mssv from "main server online presence" to chrome storage
		for (var i = 0; i <= 100; i++) {
			if ($('#grvListStudents_lblStudentID_' + i)) {
				get_mssv_server = $('#grvListStudents_lblStudentID_' + i).html();
				var get_list = result['list_online'];
				get_list['mssv_user'].push(get_mssv_server);
				chrome.storage.sync.set({
					"list_online": get_list
				});
			} else;
		}
		var list_user_server = result['list_online'];

	});
}