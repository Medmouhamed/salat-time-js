



function Get_Prayer_Times() {
    let city = document.querySelector("#city").value
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Algeria`)
        .then((response) => {
            let timings = response.data.data.timings;
            let Fajr = document.querySelector("#Fajr")
            Fajr.innerHTML=(timings.Fajr);
            let Sunrise = document.querySelector("#Sunrise")
            Sunrise.innerHTML=(timings.Sunrise);
            let Dhuhr = document.querySelector("#Dhuhr")
            Dhuhr.innerHTML=(timings.Dhuhr);
            let Asr = document.querySelector("#Asr")
            Asr.innerHTML=(timings.Asr);
            let Maghrib = document.querySelector("#Maghrib")
            Maghrib.innerHTML=(timings.Maghrib);
            let Isha = document.querySelector("#Isha")
            Isha.innerHTML=(timings.Isha);
        })
}
