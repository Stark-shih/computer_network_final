var x1 = [];
var x2 = [];

var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlYjAyOWNjZTQ4ZjJmOWViOTcwNzQxNTAwNjcwZWQ3MjcyNjUwOThhYzhkYmYxMWE5N2RhZWRkNmRkMTQ3MDdhOTk3MGFmOGU0OTNlNWRiIn0.eyJhdWQiOiIyIiwianRpIjoiOGViMDI5Y2NlNDhmMmY5ZWI5NzA3NDE1MDA2NzBlZDcyNzI2NTA5OGFjOGRiZjExYTk3ZGFlZGQ2ZGQxNDcwN2E5OTcwYWY4ZTQ5M2U1ZGIiLCJpYXQiOjE1NzcwMzYzMTMsIm5iZiI6MTU3NzAzNjMxMywiZXhwIjoxNjA4NjU4NzEzLCJzdWIiOiIyNjciLCJzY29wZXMiOltdfQ.jw5fs0FM5X0HW4r0Ox14jHU8JDFIK112KsTrgprg5-fgCOOVhKlnBRcAlndi7X20s154jaBghFYJgsfv4hsFMlOxabNYWnWVkEueG0tM-YDr6C3eFADvXoFn1gwo3v6ZYe29FBM5mSOiWebAgS3IF5R6Owl7otgU12Km5s6j6x2eDKvJr9XxZfCT9E9ap36e_bOOf-qyxYfatZvdbM5NKGIWS7GX8TDG9-Fqgo5GPGhhHegRyqIM8mS1tTQ8NvN4Jdxx5tZtHBydJjcb69BNSKUiv1RZbp0aFfcyR4hAM620QgIcRXLCKFg-iWvHS1YaeFyOyslME9S4oR7ecjDmUnzEgEnpu7TGrHQeA5GA9BUEVA3a2X69LzD-qXIX-nEVGNwzygUUHmtFBJFuwYeUNKgViWUH2fB4_TI8GMjgHe-gYuhagZisAL1xafGn17cNHmu4tXeaZsXM-bWGIUel9ioIwK7GHzOMTPrEdGhu0011xjzkmBdjMHOmf1hTweQGbue3EhgGe3HaUhw-1tA2ag-KVdRBVUyMEu2jh5zurwIHzqt3fRStOXFgfp1gZajEdL-10xtWhvrglniJY_MD70000dyoicO4KJ2e_VhgPQiW8z1Ydfu1l_CuuKOrqvpTGH2aOmm7Xo4D4zYT7O8gEdhkp4wPfSu0xuRxRPdcFxI";
	$(document).ready(function() {
			var macaddr = "?macaddr=" + "aa52b964";
			var date_filter1 = "&date_filter=" + "2019-12-24 00:00:00+-+2019-12-24 23:59:59";
			var data_array1;
			var count1 = 0;
			$.ajax({
				type: "POST",
				url: "https://campus.kits.tw/ICN_API" + macaddr + date_filter1,
				dataType: "json",
				async: false, 
				success: function(response) {
                    data_array1 = response;
					for(i = 0; i < data_array1.length; i++){
						if(data_array1[i]['acc_z']!= null){
							if(data_array1[i]['created_at'][11]+data_array1[i]['created_at'][12]==count1){
								x1.push(count1)
							}else{
								count1+=1;
								x1.push(count1)
							}
						}
					}
				},
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + AccessToken
				},
				error: function(jqXHR) {
					alert("Return status: " + jqXHR.status);
					if(jqXHR.status == '200')
						alert("API calling error: macaddr or url format error!");
					else
						alert("API is sleeping !");
				}
			})
			var date_filter2 = "&date_filter=" + "2019-12-25 00:00:00+-+2019-12-25 23:59:59";
			var data_array2;
			var count2 = 0;
			$.ajax({
				type: "POST",
				url: "https://campus.kits.tw/ICN_API" + macaddr + date_filter2,
				dataType: "json",
				async: false, 
				success: function(response) {
                    data_array2 = response;
					for(i = 0; i < data_array2.length; i++){
						if(data_array2[i]['acc_z']!= null){
							if(data_array2[i]['created_at'][11]+data_array2[i]['created_at'][12]==count2){
								x2.push(count2)
							}else{
								count2+=1;
								x2.push(count2)
							}
						}
					}
				},
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + AccessToken
				},
				error: function(jqXHR) {
					alert("Return status: " + jqXHR.status);
					if(jqXHR.status == '200')
						alert("API calling error: macaddr or url format error!");
					else
						alert("API is sleeping !");
				}
			})
	//histogram
	var trace1 = {
		x: x1,
		name: "freshman",
		type: "histogram",
		opacity: 0.8,
		marker: {
		color: '#4682B4',
		},
	};
	var trace2 = {
		x: x2,
		name: "sophomore",
		type: "histogram",
		opacity: 0.8,
		marker: {
		color: '#8B008B',
		},
	};
	
	var data = [trace1, trace2];
	var layout = {
		barmode: "group",
		title: '2019/12/24&25 statistics',
		font: {size: 18},
		xaxis: {
			title: "Time",
			tickmode: 'linear',
			tick0: 0,
			dtick: 2
		},
		yaxis: {
			title: "Frequency"
		}  
	};
	Plotly.newPlot('myDiv', data, layout);
	});