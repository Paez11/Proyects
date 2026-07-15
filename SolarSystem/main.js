document.addEventListener('DOMContentLoaded', function () {
    let planets;

    fetch('main.json')
        .then(response => response.json())
        .then(data => {
            planets = data.planets;
        })
        .catch(error => console.error('Error loading the JSON file:', error));

    let activePlanetElement = null;

    const modalElement = document.getElementById('infoModal');

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop-custom';
    document.body.appendChild(backdrop);

    function openModal() {
        modalElement.classList.add('show');
        modalElement.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modalElement.classList.remove('show');
        modalElement.setAttribute('aria-hidden', 'true');
        if (activePlanetElement) {
            activePlanetElement.classList.remove('selected');
            activePlanetElement = null;
        }
    }

    // Cierra solo si el clic fue en el fondo, no en el contenido del modal
    modalElement.addEventListener('click', (event) => {
        if (event.target === modalElement) {
            closeModal();
        }
    });

    // Cerrar con la tecla Escape
    /*
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalElement.classList.contains('show')) {
            closeModal();
        }
    });
    */
   
    document.addEventListener('click', (event) => {
        const isClickInsidePanel = panel.contains(event.target);
        const isClickOnButton = toggleBtn.contains(event.target);

        if (panel.classList.contains('show') && !isClickInsidePanel && !isClickOnButton) {
            panel.classList.remove('show');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
    });

    function updateModal(planetData) {
        const modalTitle = document.getElementById('infoModalLabel');
        const modalTableBody = document.getElementById('modal-table-body');

        // Actualizar título del modal
        modalTitle.textContent = planetData.title;

        // Limpiar contenido anterior de la tabla
        modalTableBody.innerHTML = '';

        // Rellenar la tabla con los datos del planeta
        planetData.features.forEach(feature => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${feature.label}</th>
                <td id="value-style">${feature.value}</td>
            `;
            modalTableBody.appendChild(row);
        });
    }

    // Listeners para cada planeta: llenar y abrir el modal
    document.querySelectorAll('.planet').forEach(planetElement => {
        planetElement.addEventListener('click', () => {
            const planetKey = planetElement.getAttribute('data-planet');
            const planetData = planets && planets[planetKey];

            if (!planetData) return;

            activePlanetElement = document.querySelector(`.${planetKey}-container`);
            updateModal(planetData);
            activePlanetElement.classList.add('selected');
            openModal();
        });
    });

    // ---------------------------------------------------------------
    // Collapse propio (reemplaza data-bs-toggle="collapse")
    // ---------------------------------------------------------------
    const toggleBtn = document.getElementById('togglePanelBtn');
    const panel = document.getElementById('collapseWidthExample');

    toggleBtn.addEventListener('click', () => {
        const isOpen = panel.classList.toggle('show');
        toggleBtn.setAttribute('aria-expanded', isOpen);

        // Disparar la animación completa, aunque sueltes el clic rápido
        toggleBtn.classList.remove('clicked');
        void toggleBtn.offsetWidth; // fuerza reflow para poder re-disparar si haces doble click seguido
        toggleBtn.classList.add('clicked');
    });

    toggleBtn.addEventListener('animationend', () => {
        toggleBtn.classList.remove('clicked');
    });

    // ---------------------------------------------------------------
    // Cambio de vista 2D / 3D
    // ---------------------------------------------------------------
    const radio3D = document.getElementById('changeView3D');
    const radio2D = document.getElementById('changeView2D');
    const link3D = document.querySelector('link[href="main3d.css"]');
    const link2D = document.querySelector('link[href="main.css"]');

    function changeViewStyle() {
        if (radio3D.checked) {
            link2D.disabled = true;
            link3D.disabled = false;
        } else if (radio2D.checked) {
            link2D.disabled = false;
            link3D.disabled = true;
        }
    }

    radio3D.addEventListener('change', changeViewStyle);
    radio2D.addEventListener('change', changeViewStyle);

    changeViewStyle();
});