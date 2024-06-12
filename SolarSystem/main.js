document.addEventListener('DOMContentLoaded', function () {
    const planets = {
        mercury: {
            title: "Mercury",
            features: [
                { label: "Class", value: "Terrestrial" },
                { label: "Distance from Sun", value: "57.91 million km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "4,880 km" },
                { label: "Mass", value: "3.30 x 10^23 kg" },
                { label: "Phase", value: "0.949" },
                { label: "Atmosphere comp.", value: "None" },
                { label: "Orbit Period", value: "88 days" },
                { label: "Orbit Rotation", value: "59 days" },
                { label: "Solar Day", value: "176 Earth days" },
                { label: "Axial Inclination", value: "0.034°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "3.7 m/s²" },
                { label: "Average Temperature", value: "167°C" }
            ]
        },
        venus: {
            title: "Venus",
            features: [
                { label: "Class", value: "Terrestrial" },
                { label: "Distance from Sun", value: "108.2 million km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "12,104 km" },
                { label: "Mass", value: "4.87 x 10^24 kg" },
                { label: "Phase", value: "0.973" },
                { label: "Atmosphere comp.", value: "CO2, N2" },
                { label: "Orbit Period", value: "225 days" },
                { label: "Orbit Rotation", value: "243 days (retrograde)" },
                { label: "Solar Day", value: "117 Earth days" },
                { label: "Axial Inclination", value: "177.4°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "8.87 m/s²" },
                { label: "Average Temperature", value: "464°C" }
            ]
        },
        earth: {
            title: "Earth",
            features: [
                { label: "Class", value: "Terrestrial" },
                { label: "Distance from Sun", value: "149.6 million km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "12,742 km" },
                { label: "Mass", value: "5.97 x 10^24 kg" },
                { label: "Phase", value: "0.004" },
                { label: "Atmosphere comp.", value: "N2, O2, Ar" },
                { label: "Orbit Period", value: "365.25 days" },
                { label: "Orbit Rotation", value: "24 hours" },
                { label: "Solar Day", value: "24 hours" },
                { label: "Axial Inclination", value: "23.44°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "9.81 m/s²" },
                { label: "Average Temperature", value: "15°C" }
            ]
        },
        mars: {
            title: "Mars",
            features: [
                { label: "Class", value: "Terrestrial" },
                { label: "Distance from Sun", value: "227.9 million km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "6,779 km" },
                { label: "Mass", value: "6.42 x 10^23 kg" },
                { label: "Phase", value: "0.993" },
                { label: "Atmosphere comp.", value: "CO2, Ar, N2" },
                { label: "Orbit Period", value: "687 days" },
                { label: "Orbit Rotation", value: "24.6 hours" },
                { label: "Solar Day", value: "24.6 hours" },
                { label: "Axial Inclination", value: "25.19°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "3.71 m/s²" },
                { label: "Average Temperature", value: "-63°C" }
            ]
        },
        jupiter: {
            title: "Jupiter",
            features: [
                { label: "Class", value: "Gas Giant" },
                { label: "Distance from Sun", value: "778.5 million km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "139,820 km" },
                { label: "Mass", value: "1.90 x 10^27 kg" },
                { label: "Phase", value: "0.998" },
                { label: "Atmosphere comp.", value: "H2, He" },
                { label: "Orbit Period", value: "11.86 years" },
                { label: "Orbit Rotation", value: "9.9 hours" },
                { label: "Solar Day", value: "9.9 hours" },
                { label: "Axial Inclination", value: "3.13°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "24.79 m/s²" },
                { label: "Average Temperature", value: "-108°C" }
            ]
        },
        saturn: {
            title: "Saturn",
            features: [
                { label: "Class", value: "Gas Giant" },
                { label: "Distance from Sun", value: "1.43 billion km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "116,460 km" },
                { label: "Mass", value: "5.68 x 10^26 kg" },
                { label: "Phase", value: "0.921" },
                { label: "Atmosphere comp.", value: "H2, He" },
                { label: "Orbit Period", value: "29.45 years" },
                { label: "Orbit Rotation", value: "10.7 hours" },
                { label: "Solar Day", value: "10.7 hours" },
                { label: "Axial Inclination", value: "26.73°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "10.44 m/s²" },
                { label: "Average Temperature", value: "-139°C" }
            ]
        },
        uranus: {
            title: "Uranus",
            features: [
                { label: "Class", value: "Ice Giant" },
                { label: "Distance from Sun", value: "2.87 billion km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "50,724 km" },
                { label: "Mass", value: "8.68 x 10^25 kg" },
                { label: "Phase", value: "0.974" },
                { label: "Atmosphere comp.", value: "H2, He, CH4" },
                { label: "Orbit Period", value: "84 years" },
                { label: "Orbit Rotation", value: "17.2 hours (retrograde)" },
                { label: "Solar Day", value: "17.2 hours" },
                { label: "Axial Inclination", value: "97.77°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "8.69 m/s²" },
                { label: "Average Temperature", value: "-195°C" }
            ]
        },
        neptune: {
            title: "Neptune",
            features: [
                { label: "Class", value: "Ice Giant" },
                { label: "Distance from Sun", value: "4.5 billion km" },
                { label: "Lat/Lon", value: "0° to ±90° / 0° to ±180°" },
                { label: "Diameter", value: "49,244 km" },
                { label: "Mass", value: "1.02 x 10^26 kg" },
                { label: "Phase", value: "0.875" },
                { label: "Atmosphere comp.", value: "H2, He, CH4" },
                { label: "Orbit Period", value: "165 years" },
                { label: "Orbit Rotation", value: "16.1 hours" },
                { label: "Solar Day", value: "16.1 hours" },
                { label: "Axial Inclination", value: "28.32°" },
                { label: "Age", value: "4.5 billion years" },
                { label: "Gravity", value: "11.15 m/s²" },
                { label: "Average Temperature", value: "-200°C" }
            ]
        },
        sun: { title: "Sun", features: [{ label: "Diameter", value: "12,742.02 km" }, { label: "Orbit Period", value: "20230 years" }] }
    };

    function updateModal(planetData) {
        const modalTitle = document.getElementById('infoModalLabel');
        const modalTableBody = document.getElementById('modal-table-body');

        // Update modal title
        modalTitle.textContent = planetData.title;

        // Clear previous table body content
        modalTableBody.innerHTML = '';

        // Populate table body with new content
        planetData.features.forEach(feature => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${feature.label}</th>
                <td id="value-style">${feature.value}</td>
            `;
            modalTableBody.appendChild(row);
        });

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('infoModal'));
        modal.show();
    }

    // Event listeners for planet elements
    document.querySelectorAll('.planet').forEach(planetElement => {
        planetElement.addEventListener('click', () => {
            const planetKey = planetElement.getAttribute('data-planet');
            const planetData = planets[planetKey];
            if (planetData) {
                updateModal(planetData);
            }
        });
    });
});