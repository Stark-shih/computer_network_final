var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlYjAyOWNjZTQ4ZjJmOWViOTcwNzQxNTAwNjcwZWQ3MjcyNjUwOThhYzhkYmYxMWE5N2RhZWRkNmRkMTQ3MDdhOTk3MGFmOGU0OTNlNWRiIn0.eyJhdWQiOiIyIiwianRpIjoiOGViMDI5Y2NlNDhmMmY5ZWI5NzA3NDE1MDA2NzBlZDcyNzI2NTA5OGFjOGRiZjExYTk3ZGFlZGQ2ZGQxNDcwN2E5OTcwYWY4ZTQ5M2U1ZGIiLCJpYXQiOjE1NzcwMzYzMTMsIm5iZiI6MTU3NzAzNjMxMywiZXhwIjoxNjA4NjU4NzEzLCJzdWIiOiIyNjciLCJzY29wZXMiOltdfQ.jw5fs0FM5X0HW4r0Ox14jHU8JDFIK112KsTrgprg5-fgCOOVhKlnBRcAlndi7X20s154jaBghFYJgsfv4hsFMlOxabNYWnWVkEueG0tM-YDr6C3eFADvXoFn1gwo3v6ZYe29FBM5mSOiWebAgS3IF5R6Owl7otgU12Km5s6j6x2eDKvJr9XxZfCT9E9ap36e_bOOf-qyxYfatZvdbM5NKGIWS7GX8TDG9-Fqgo5GPGhhHegRyqIM8mS1tTQ8NvN4Jdxx5tZtHBydJjcb69BNSKUiv1RZbp0aFfcyR4hAM620QgIcRXLCKFg-iWvHS1YaeFyOyslME9S4oR7ecjDmUnzEgEnpu7TGrHQeA5GA9BUEVA3a2X69LzD-qXIX-nEVGNwzygUUHmtFBJFuwYeUNKgViWUH2fB4_TI8GMjgHe-gYuhagZisAL1xafGn17cNHmu4tXeaZsXM-bWGIUel9ioIwK7GHzOMTPrEdGhu0011xjzkmBdjMHOmf1hTweQGbue3EhgGe3HaUhw-1tA2ag-KVdRBVUyMEu2jh5zurwIHzqt3fRStOXFgfp1gZajEdL-10xtWhvrglniJY_MD70000dyoicO4KJ2e_VhgPQiW8z1Ydfu1l_CuuKOrqvpTGH2aOmm7Xo4D4zYT7O8gEdhkp4wPfSu0xuRxRPdcFxI";

$(document).ready(function () {
    $('#datetime').datepicker({
      format: "yyyy-mm-dd",
      autoclose: true,
      clearBtn: true,
      calendarWeeks: true,
      todayHighlight: true,
      language: 'zh-TW'
    });
    $("#button").click(function() {
        if(document.getElementById('datetime').value != ''){
            var date = document.getElementById("datetime").value
            var macaddr = "?macaddr=" + "aa52b964";
            var date_filter = "&date_filter=" + date+" 00:00:00+-+"+date+" 23:59:59";
            var data_array;
            $.ajax({
                type: "POST",
                url: "https://campus.kits.tw/ICN_API" + macaddr + date_filter,
                dataType: "json",
                async: false, 
                success: function(response) {
                    data_array = response;
                    total_list = []
                    for(i = 0; i < data_array.length; i++){
                        total_list.push('"'+data_array[i]['created_at']+'"')
                    }
                    document.getElementById('amount').innerHTML = "total in and out: "+data_array.length;
                    document.getElementById('data').innerHTML = total_list.join(' ');
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
        }
    });
  });
