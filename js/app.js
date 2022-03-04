const apiKay = `76bd4687e783eedf7cb4331fa69159e0`;

const searchTemperature = ()=>{
    const city= document.getElementById('searcName').value;

    const url=`http://api.openweathermap.org/data/2.5/weather?q={${city}}&appid={${apiKay}}`

    console.log(url);

}