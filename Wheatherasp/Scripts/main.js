$(document).ready(function () {


    $("select[name='Country']").change(function () {
        var country = $(this).val();
           


        var url1 = "http://api.apixu.com/v1/current.json?key=f7688187a493412fb75160227190802&q=";
        var url = url1.concat(country);
        console.log(url);
          
           
            $.ajax({
                url: url,
                type: "get",
                dataType: "json",
                success: function (response) {
                    var date = new Date($.now());
                    var nwdate = date.getDay();
                    console.log(nwdate);
                    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    $(".wheatherlist").empty();
                    $(".wheatherlist").append(`  <li class="list-group-item day ">Date: ` + dayNames[nwdate] + `</li>
                    <li class="list-group-item borderless temp">Temperature: `+ response.current.temp_c + ` C°</li>
                    <li class="list-group-item borderless wind">Wind: `+ response.current.wind_mph + ` MPH</li>`)
                    console.log(response);

                }
            });
           

    });

});