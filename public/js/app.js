

const Default = '4c8a873bfb6dafa8850e26120943bfe0';

/*Api Call with city parameter */
let apiCall = function(city){
        let url=('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=' + Default);

        fetch(url).then((response) => 
                response.json().then((data)=>{
                console.log(data);

        document.querySelector('#city').innerHTML = "<i class='fa-solid fa-tree-city'></i>" + data.name;
        document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-high'></i>" + data.main.temp + '°C';
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
        if (data.weather[0].main === 'Clear') {
                document.querySelector('#weatherInfo').innerHTML = data.weather[0].main;
                document.querySelector('#weather').innerHTML = "<i class='wheatherIcon fa-solid fa-sun text-warning'></i>";
                document.querySelector('#btn').className = 'btn btn-warning btn-block mx-3';
        }else if (data.weather[0].main === 'Clouds'){
                document.querySelector('#weatherInfo').innerHTML = data.weather[0].main;
                document.querySelector('#weather').innerHTML = "<i class='wheatherIcon fa-solid fa-cloud text-secondary'></i>";
                document.querySelector('#btn').className = 'btn btn-secondary btn-block mx-3';
        }else if (data.weather[0].main === 'Rain'){
                document.querySelector('#weatherInfo').innerHTML = data.weather[0].main;
                document.querySelector('#weather').innerHTML = "<i class='wheatherIcon fa-solid fa-cloud-showers-heavy text-primary'></i>";
                document.querySelector('#btn').className = 'btn btn-primary btn-block mx-3';
        }
        console.log(data.weather[0].main)
                })
        ).catch(err => console.log('Erreur : ' + err));
}
/*Event Listener on form submission*/
document.querySelector('form').addEventListener('submit', function(e){
        e.preventDefault();
        let city = document.querySelector('#inputCity').value;

        apiCall(city);
})