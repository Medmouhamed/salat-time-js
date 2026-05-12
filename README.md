# 🕌 Algeria Prayer Times Finder

A dynamic web application that fetches real-time Islamic prayer timings for various cities across Algeria using the Aladhan API and Axios.

## 🚀 Key Features
* **Real-time Data**: Fetches accurate prayer timings (Fajr, Dhuhr, Asr, Maghrib, Isha) directly from a global API.
* **Location-Based**: Support for all major Algerian Wilayas (Adrar, Chlef, Biskra, etc.) via a user-friendly dropdown menu.
* **Modern Async Architecture**: Utilizes Promises and the Axios library for smooth, non-blocking data retrieval.
* **Responsive Design**: Dark-themed, elegant UI with a focused table layout for easy reading.

## 🛠️ Technologies Used
* **Frontend**: HTML5, CSS3 (Custom styling with background overlays).
* **JavaScript (ES6)**: 
    * **Axios**: For making HTTP GET requests to the REST API.
    * **DOM Manipulation**: Updating the table dynamically based on API responses.
* **Package Management**: **NPM** (Node Package Manager) used for managing dependencies like Axios.

## 📂 Project Structure
* `salat.html`: The main user interface and layout.
* `salat.css`: Custom styles including glassmorphism and background image integration.
* `salat.js`: The core logic that handles API calls and data rendering.
