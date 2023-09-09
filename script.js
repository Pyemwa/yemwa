// script.js
const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Function to update the current day of the week
function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeekElement.textContent = currentDay;
}

// Function to update the current UTC time in milliseconds
function updateCurrentUTCTime() {
    const currentUTCTime = new Date().getTime();
    currentUTCTimeElement.textContent = currentUTCTime;
}

// Update the current day and UTC time on page load
updateCurrentDay();
updateCurrentUTCTime();