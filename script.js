function updateDateTime() {
    const now = new Date();
    
    // Get time in HH:MM:SS AM/PM format
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Get date in a readable format (e.g., Monday, Feb 25, 2025)
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    // Get the user's time zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Update HTML elements
    document.getElementById('time').textContent = `Time: ${timeString}`;
    document.getElementById('date').textContent = `Date: ${dateString}`;
    
    // Append time zone if you have an element for it
    let timeZoneElement = document.getElementById('timezone');
    if (timeZoneElement) {
        timeZoneElement.textContent = `Time Zone: ${timeZone}`;
    }
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initial call to set the time immediately
updateDateTime();
document.addEventListener("DOMContentLoaded", function () {
    let videos = [
        document.getElementById("video1"),
        document.getElementById("video2"),
        document.getElementById("video3"),
    ];

    let currentIndex = 0;

    function playNextVideo() {
        if (currentIndex < videos.length - 1) {
            setTimeout(() => {
                videos[currentIndex].classList.add("hidden"); // Hide current video
                currentIndex++; 
                videos[currentIndex].classList.remove("hidden"); // Show next video
                videos[currentIndex].play();
                videos[currentIndex].onended = playNextVideo; // Play next after finish
            }, 3000); // 3-second delay (Change to 5000 for 5 seconds)
        }
    }

    videos[currentIndex].onended = playNextVideo; // Start sequence
});
