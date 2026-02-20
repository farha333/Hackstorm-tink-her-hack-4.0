let donors = [
    { name: "Arun", blood: "A+", location: "Chennai", available: true },
    { name: "Priya", blood: "O+", location: "Chennai", available: true },
    { name: "Rahul", blood: "B+", location: "Madurai", available: false },
    { name: "Sneha", blood: "O-", location: "Chennai", available: true }
];

function scrollToSearch() {
    document.getElementById("search-section").scrollIntoView({ behavior: "smooth" });
}

function searchDonor() {
    let blood = document.getElementById("bloodGroup").value;
    let location = document.getElementById("location").value;
    let urgency = document.getElementById("urgency").value;

    let resultsDiv = document.getElementById("results");
    let riskDiv = document.getElementById("riskLevel");

    resultsDiv.innerHTML = "";

    if (urgency === "Critical") {
        riskDiv.innerHTML = "🔴 CRITICAL CASE - Priority Alert Activated!";
        riskDiv.style.color = "red";
    } else {
        riskDiv.innerHTML = "🟢 Normal Request";
        riskDiv.style.color = "green";
    }

    let filtered = donors.filter(d =>
        d.blood === blood &&
        d.location.toLowerCase() === location.toLowerCase() &&
        d.available === true
    );

    if (filtered.length > 0) {
        filtered.forEach(d => {
            resultsDiv.innerHTML += `
                <div style="background:white;padding:10px;margin:10px;border-radius:8px;">
                    <h4>${d.name}</h4>
                    <p>Blood Group: ${d.blood}</p>
                    <p>Location: ${d.location}</p>
                    <p style="color:green;">Available</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = "<p style='color:red;'>No available donors found.</p>";
    }
}0