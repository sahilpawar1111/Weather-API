async function getWeather() {

      const city = document.getElementById("city").value;

      
      const apiKey = "1b314e36825f5ee6bb1edd5009c3954b";

    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {

        const response = await fetch(url);
        const data = await response.json();

        
        if (data.cod == "404") {
          document.getElementById("result").innerHTML =
            `<p class="text-danger">City not found</p>`;
          return;
        }

       
        document.getElementById("result").innerHTML = `
          
          <h3>${data.name}</h3>

          <h1>${data.main.temp}°C</h1>

          <p>Humidity: ${data.main.humidity}%</p>

          <p>Wind Speed: ${data.wind.speed} km/h</p>
        `;

      } catch (error) {

        document.getElementById("result").innerHTML =
          `<p class="text-danger">Something went wrong</p>`;
      }
    }