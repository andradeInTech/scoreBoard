let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeSavedEl = document.getElementById("home-saved")
let guestSavedEl = document.getElementById("guest-saved")

let homeScore = 0
let guestScore = 0

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
     
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
     
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function saveHome() {
    homeSavedEl.textContent += homeScore + " - "
    homeScore = 0
    homeScoreEl.textContent = homeScore
    
}

function saveGuest() {
    guestSavedEl.textContent += guestScore + " - "
    guestScore = 0
    guestScoreEl.textContent = guestScore
    
}