// script.js

function ping() {
    // Get the value from the input field
    const hostname = document.getElementById('hostname').value;
    
    // Validate input
    if (!hostname) {
        alert('Please enter a hostname or IP address.');
        return;
    }

    // Simulate a ping operation (since real ping requires server-side handling)
    simulatePing(hostname);
}

function simulatePing(hostname) {
    // Update UI to show that a request is in progress
    const pingResult = document.getElementById('pingResult');
    pingResult.textContent = 'Pinging ' + hostname + '...';

    // Simulate network delay
    setTimeout(() => {
        // Simulate a response (replace this with real data from a server)
        const responseTime = Math.floor(Math.random() * 100) + 1; // Random response time
        const success = Math.random() > 0.1; // 90% chance of success

        if (success) {
            pingResult.textContent = `Ping to ${hostname} successful. Response time: ${responseTime} ms`;
        } else {
            pingResult.textContent = `Ping to ${hostname} failed.`;
        }
    }, 1000); // Simulate a 1-second delay
}

// Optional: Add event listener to handle Enter key press
document.getElementById('hostname').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ping();
    }
});

document.getElementById("foot01").innerHTML =
"<p>&copy;  "+ new Date().getFullYear() + "  epsonagunda. All rights reserved.</p>";
