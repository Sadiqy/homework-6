const apikey = 'ff08eb5d4213f782c579bf4227c2f56d'

$('button').on('click', function(){
let searchTerm = $('#search').val().trim()


$.ajax({
    method:"GET",
    url:`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apikey}`
}).then(data=>{
    console.log(data)

    //second API call to get forecast
    $.ajax({
        method:"GET",
    url:`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${apikey}`
}).then(data2=>{
    console.log(data2)
    })
})
})