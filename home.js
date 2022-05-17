function loadCoupon(){
    document.getElementById("coupon").style.display="block"
}

function closeCoupon(){
    document.getElementById("coupon").style.display="none"
}


let Geolocation=()=>{
  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("GeoLocation not supported.")
    }
}

let showPosition=(data)=>{
    let y = document.getElementById("weather");
    let z =  document.getElementById('icon')
    let lon=data.coords.longitude;
    let lat=data.coords.latitude;
    console.log(data);
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
   
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.list.map((item)=>{
            console.log(item.temp.day)
            y.innerText=`${item.temp.day}°C`;
            z.innerHTML=`<img class='card-img-top' src='images/weather.png'${item.weather[0].icon}' alt='weather'/>`
        })
        
    })
}
Geolocation();