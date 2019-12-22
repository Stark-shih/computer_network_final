var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlYjAyOWNjZTQ4ZjJmOWViOTcwNzQxNTAwNjcwZWQ3MjcyNjUwOThhYzhkYmYxMWE5N2RhZWRkNmRkMTQ3MDdhOTk3MGFmOGU0OTNlNWRiIn0.eyJhdWQiOiIyIiwianRpIjoiOGViMDI5Y2NlNDhmMmY5ZWI5NzA3NDE1MDA2NzBlZDcyNzI2NTA5OGFjOGRiZjExYTk3ZGFlZGQ2ZGQxNDcwN2E5OTcwYWY4ZTQ5M2U1ZGIiLCJpYXQiOjE1NzcwMzYzMTMsIm5iZiI6MTU3NzAzNjMxMywiZXhwIjoxNjA4NjU4NzEzLCJzdWIiOiIyNjciLCJzY29wZXMiOltdfQ.jw5fs0FM5X0HW4r0Ox14jHU8JDFIK112KsTrgprg5-fgCOOVhKlnBRcAlndi7X20s154jaBghFYJgsfv4hsFMlOxabNYWnWVkEueG0tM-YDr6C3eFADvXoFn1gwo3v6ZYe29FBM5mSOiWebAgS3IF5R6Owl7otgU12Km5s6j6x2eDKvJr9XxZfCT9E9ap36e_bOOf-qyxYfatZvdbM5NKGIWS7GX8TDG9-Fqgo5GPGhhHegRyqIM8mS1tTQ8NvN4Jdxx5tZtHBydJjcb69BNSKUiv1RZbp0aFfcyR4hAM620QgIcRXLCKFg-iWvHS1YaeFyOyslME9S4oR7ecjDmUnzEgEnpu7TGrHQeA5GA9BUEVA3a2X69LzD-qXIX-nEVGNwzygUUHmtFBJFuwYeUNKgViWUH2fB4_TI8GMjgHe-gYuhagZisAL1xafGn17cNHmu4tXeaZsXM-bWGIUel9ioIwK7GHzOMTPrEdGhu0011xjzkmBdjMHOmf1hTweQGbue3EhgGe3HaUhw-1tA2ag-KVdRBVUyMEu2jh5zurwIHzqt3fRStOXFgfp1gZajEdL-10xtWhvrglniJY_MD70000dyoicO4KJ2e_VhgPQiW8z1Ydfu1l_CuuKOrqvpTGH2aOmm7Xo4D4zYT7O8gEdhkp4wPfSu0xuRxRPdcFxI";
	$(document).ready(function() {
		$("#test_button").click(function() {
			var macaddr = "?macaddr=" + "aa52b964";
			var date_filter = "&date_filter=" + "2019-12-15 11:00:00+-+2019-12-22 12:00:00";
			var data_array;
			$.ajax({
				type: "POST",
				url: "https://campus.kits.tw/ICN_API" + macaddr, //+ date_filter,
				dataType: "json",
				async: false, 
				success: function(response) {
					// console.log(response);
					data_array = response;
					document.getElementById("barometer").innerHTML = response[0]['barometer'] + " hPA";
					document.getElementById("humidity").innerHTML = response[0]['humidity']  + " %";
					document.getElementById("temperature").innerHTML = response[0]['temperature'] + " Celsius degree";
				},
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + AccessToken
				},
				error: function(jqXHR) {
					//alert("Return status: " + jqXHR.status);
					if(jqXHR.status == '200')
						alert("API calling error: macaddr or url format error!");
					else
						alert("API is sleeping !");
				}
			})
		})
	});