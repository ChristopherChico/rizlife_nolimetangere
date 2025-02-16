// Array of image filenames and descriptions for Key Characters
const keyCharacters = [
    { src: 'Alférez.jpg', description: 'Alférez' },
    { src: 'Basilio.png', description: 'Basilio' },
    { src: 'Capitán Tiago.jpg', description: 'Capitán Tiago' },
    { src: 'Crispin.png', description: 'Crispin' },
    { src: 'Doña Victorina.jpg', description: 'Doña Victorina' },
    { src: 'Elias.jpg', description: 'Elias' },
    { src: 'Juan Crisóstomo Ibarra.jpg', description: 'Juan Crisóstomo Ibarra' },
    { src: 'María Clara.jpg', description: 'María Clara' },
    { src: 'María Clara2.jpg', description: 'María Clara' },
    { src: 'Padre Dámaso.jpeg', description: 'Padre Dámaso' },
    { src: 'Padre Salvi.jpg', description: 'Padre Salvi' },
    { src: 'Sisa.jpg', description: 'Sisa' },
    { src: 'Tasya (Doña Consolación).png', description: 'Tasya (Doña Consolación)' },
    { src: 'Tiya Isabel.jpg', description: 'Tiya Isabel' }
];

// Array of image filenames and descriptions for Key Locations
const keyLocations = [
    { src: 'Binondo.png', description: 'Binondo' },
    { src: 'Escolta Street.jpg', description: 'Escolto Street' },
    { src: 'Intramuros.jpg', description: 'Intramuros' },
    { src: 'Laguna de Bay.jpg', description: 'Laguna de Bay' },
    { src: 'Paco Cemetery.jpg', description: 'Paco Cemetery' },
    { src: 'San Diego.jpg', description: 'San Diego' },
    { src: 'The Convent and Church.jpg', description: 'The Convent and Chuch' }
];

// Array of image filenames and descriptions for Multimedia
const multimedia = [
    { src: 'Noli Me Tangere 1961.png', description: 'Noli Me Tangere 1961' },
    { src: 'Noli Me Tangere 1993.png', description: 'Noli Me Tangere 1993' },
    { src: 'Noli Me Tangere Film.png', description: 'Noli Me Tangere Film' },
    { src: 'Noli Me Tangere Podcast.png', description: 'Noli Me Tangere Podcast' },
    { src: 'Noli Me Tangere The Musical.jpg', description: 'Noli Me Tangere The Musical' }
];

// Function to load images dynamically into the Key Characters modal
function loadKeyCharacters() {
    const modalGallery = document.getElementById('modal-gallery');
    keyCharacters.forEach(image => {
        const anchor = document.createElement('a');
        anchor.href = `images/Key-Characters/${image.src}`;
        anchor.setAttribute('data-featherlight', `
            <div style="text-align: center;">
                <h2 id="h2-f" style="color: #fff">${image.description}</h2>
                <img src="images/Key-Characters/${image.src}" alt="Key Character ${image.description}">
            </div>
        `);

        const img = document.createElement('img');
        img.src = `images/Key-Characters/${image.src}`;
        img.alt = `Key Character ${image.description}`;

        const span = document.createElement('span');
        span.className = 'image-description';
        span.textContent = image.description;

        anchor.appendChild(img);
        anchor.appendChild(span);
        modalGallery.appendChild(anchor);
    });
}

// Function to load images dynamically into the Key Locations modal
function loadKeyLocations() {
    const modalGallery = document.getElementById('key-locations-gallery');
    keyLocations.forEach(image => {
        const anchor = document.createElement('a');
        anchor.href = `images/Key-Location/${image.src}`;
        anchor.setAttribute('data-featherlight', `
            <div style="text-align: center;">
                <h2 id="h2-f" style="color: #fff">${image.description}</h2>
                <img src="images/Key-Location/${image.src}" alt="Key Location ${image.description}" style="max-width: 100%; height: auto;">
            </div>
        `);

        const img = document.createElement('img');
        img.src = `images/Key-Location/${image.src}`;
        img.alt = `Key Location ${image.description}`;

        const span = document.createElement('span');
        span.className = 'image-description';
        span.textContent = image.description;

        anchor.appendChild(img);
        anchor.appendChild(span);
        modalGallery.appendChild(anchor);
    });
}

// Function to load images dynamically into the Multimedia modal
function loadMultimedia() {
    const modalGallery = document.getElementById('multimedia-gallery');
    multimedia.forEach(image => {
        const anchor = document.createElement('a');
        anchor.href = `images/Multimedia/${image.src}`;
        anchor.setAttribute('data-featherlight', `
            <div style="text-align: center;">
                <h2 id="h2-f" style="color: #fff">${image.description}</h2>
                <img src="images/Multimedia/${image.src}" alt="Multimedia ${image.description}" style="max-width: 100%; height: auto;">
            </div>
        `);

        const img = document.createElement('img');
        img.src = `images/Multimedia/${image.src}`;
        img.alt = `Multimedia ${image.description}`;

        const span = document.createElement('span');
        span.className = 'image-description';
        span.textContent = image.description;

        anchor.appendChild(img);
        anchor.appendChild(span);
        modalGallery.appendChild(anchor);
    });
}

// Call the functions to load images
loadKeyCharacters();
loadKeyLocations();
loadMultimedia();

// Add event listener to each button
function openGalleryModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.getElementById("banner").style.display = 'none';
    document.body.classList.add('modal-open');

    setTimeout(() => {
        modal.classList.add('open');
    }, 10); 
}

function closeGalleryModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('open'); 

    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById("banner").style.display = 'block';
        document.body.classList.remove('modal-open');
    }, 300); 
}

window.addEventListener('click', event => {
    const modals = document.querySelectorAll('.modal-g');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.classList.remove('open');

            setTimeout(() => {
                modal.style.display = 'none';
                document.getElementById("banner").style.display = 'block';
                document.body.classList.remove('modal-open');
            }, 300); 
        }
    });
});