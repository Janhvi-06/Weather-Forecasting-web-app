<p align="center">
  <h1 align="center">🌤️ Weather Forecasting Web App 🌤️</h1>
</p>

---

## 📌 Overview
This is a **Weather Forecasting Web Application** built using **HTML, CSS, and JavaScript**.  
It allows users to **search for real-time weather updates** of any city in the world by fetching data from an **external weather API**.  
The project focuses on a **clean UI design**, **responsive layout**, and **dynamic data handling** through JavaScript.

---

## 💡 Features
- 🌍 Search weather information by city name  
- 🌦️ Displays temperature, humidity, wind speed, and weather condition  
- 🌡️ Dynamic background or weather icons based on live conditions  
- 📱 Responsive and mobile-friendly design  
- ⚡ Uses real-time data from an external API (like OpenWeatherMap API)

---

## 🧠 Technologies Used
| Category | Technologies |
|-----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **API** | External Weather API (e.g., OpenWeatherMap) |
| **Tools** | VS Code, Git, GitHub |

---

## ⚙️ How It Works
1. The user enters the city name in the search bar.  
2. The app sends a **fetch request** to the weather API using JavaScript.  
3. The API returns **real-time weather data** in JSON format.  
4. The data is **displayed dynamically** on the screen.

---

## 🧩 API Integration
This project uses a public API such as **OpenWeatherMap API** to fetch weather data.  
You can register for a free API key and replace it in your `script.js` file like this:
```javascript
const apiKey = "your_api_key_here";
