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
        //const modalElement = document.getElementById('infoModal');
        //const modal = new bootstrap.Modal(modalElement);

        //modal.show();
    }
    
    // Event listeners for planet elements. Full the modal with the array info
    document.querySelectorAll('.planet').forEach(planetElement => {
        planetElement.addEventListener('click', () => {
            const planetKey = planetElement.getAttribute('data-planet');
            const planetData = planets[planetKey];
            activePlanetElement = document.querySelector(`.${planetKey}-container`);
            if (planetData) {
                updateModal(planetData);
                //initializeModalListeners();
                /**
                $('#infoModal').modal('show').on('shown.bs.modal', () => {
                    toggleBorderStyle({ target: activePlanetElement });
                });
                */
            }
        });
    });

    //target and select the border-planet that is click
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
    }

    //change the border of the container for each planet when select one
    function toggleBorderStyle(event) {
        const element = event.target;
        if (element.classList.contains('selected')) {
            console.log("event -->", event);
            element.classList.remove('selected');
            element.style.border = '0.5px solid rgba(255, 255, 255, 80%)'; // Revert to original style
        } else {
            element.classList.add('selected');
            element.style.border = '0.5px solid rgba(255, 255, 255, 0.26)';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const radio3D = document.getElementById('changeView3D');
    const radio2D = document.getElementById('changeView2D');
    const link3D = document.querySelector('link[href="main3d.css"]');
    const link2D = document.querySelector('link[href="main.css"]');

    //change style view
    function changeViewStyle() {
      if (radio3D.checked) {
        document.body.style.backgroundColor = 'lightblue';
        link2D.disabled = true;
        link3D.disabled = false; 
        console.log("3d");
      } else if (radio2D.checked) {
        document.body.style.backgroundColor = 'lightgreen'; 
        link2D.disabled = false;
        link3D.disabled = true;
        console.log("2d");
      }
    }

    // Añadir eventos a los inputs de radio
    radio3D.addEventListener('change', changeViewStyle);
    radio2D.addEventListener('change', changeViewStyle);
    
    changeViewStyle();
});