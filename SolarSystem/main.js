document.addEventListener('DOMContentLoaded', function () {
    let planets;

    fetch('main.json')
    .then(response => response.json())
    .then(data => {
        planets = data.planets;
    })
    .catch(error => console.error('Error loading the JSON file:', error));
    console.log(planets);

    let activePlanetElement = undefined;
    let listenersInitialized = false;

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
        const modalElement = document.getElementById('infoModal');
        const modal = new bootstrap.Modal(modalElement);
        
        if (activePlanetElement && !listenersInitialized) {
            console.log("entra -->", activePlanetElement);
            initializeModalListeners();
        }

        modal.show();
    }
    
    function initializeModalListeners() {
        const modalElement = document.getElementById('infoModal')

        modalElement.addEventListener('shown.bs.modal', () => {
            if (activePlanetElement) {
                toggleBorderStyle({ target: activePlanetElement });
                console.log("abre -->", activePlanetElement);
                activePlanetElement.classList.add('selected');
            }
        });
    
        modalElement.addEventListener('hidden.bs.modal', () => {
            if (activePlanetElement) {
                toggleBorderStyle({ target: activePlanetElement });
                console.log("cierra -->", activePlanetElement);
                activePlanetElement.classList.remove('selected');
            }
        });
    
        listenersInitialized = true; // Mark listeners as initialized
    }
    
    function toggleBorderStyle(event) {
        const element = event.target;
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            element.style.border = '0.5px solid rgba(255, 255, 255, 80%)'; // Revert to original style
        } else {
            element.classList.add('selected');
            element.style.border = '0.5px solid rgba(255, 255, 255, 0.26)';
        }
    }
    
    // Event listeners for planet elements
    document.querySelectorAll('.planet').forEach(planetElement => {
        planetElement.addEventListener('click', () => {
            const planetKey = planetElement.getAttribute('data-planet');
            const planetData = planets[planetKey];
            activePlanetElement = document.querySelector(`.${planetKey}-container`);
            if (planetData) {
                updateModal(planetData);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const radio3D = document.getElementById('changeView3D');
    const radio2D = document.getElementById('changeView2D');
    console.log("empieza");
    // Función para cambiar el estilo
    function changeViewStyle() {
      if (radio3D.checked) {
        document.body.style.backgroundColor = 'lightblue'; 
        console.log("3d");
      } else if (radio2D.checked) {
        document.body.style.backgroundColor = 'lightgreen'; 
        console.log("2d");
      }
    }

    // Añadir eventos a los inputs de radio
    radio3D.addEventListener('change', changeViewStyle);
    radio2D.addEventListener('change', changeViewStyle);
    
    changeViewStyle();
  });