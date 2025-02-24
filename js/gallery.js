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
    { src: 'Padre Dámaso.jpg', description: 'Padre Dámaso' },
    { src: 'Padre Salvi.jpg', description: 'Padre Salvi' },
    { src: 'Sisa.jpg', description: 'Sisa' },
    { src: 'Sisa2.jpg', description: 'Sisa' },
    { src: 'Tasya (Doña Consolación).png', description: 'Tasya (Doña Consolación)' },
    { src: 'Tiya Isabel.jpg', description: 'Tiya Isabel' }
];

// Array of image filenames and descriptions for Key Locations
const keyLocations = [
    { src: 'Binondo.png', description: 'Binondo' },
    { src: 'Escolta Street.jpg', description: 'Escolto Street' },
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

const youtubeVideos = [
    { src: 'https://www.youtube.com/watch?v=3NwZtDmD0hY', description: 'Maria Clara at Ibarra | Official Trailer' },
    { src: 'https://www.youtube.com/watch?v=3CNY8dkOzx8', description: 'Noli Me Tangere Opera' },
    { src: 'https://www.youtube.com/watch?v=a1OfP5ju8bw', description: 'Original Manuscripts of<br>Noli me Tangere' }
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

// Function to load images and YouTube videos dynamically into the Multimedia modal
function loadMultimedia() {
    const modalGallery = document.getElementById('multimedia-gallery');
    multimedia.forEach(item => {
        const anchor = document.createElement('a');
        anchor.href = `images/Multimedia/${item.src}`;
        
        // Check if the item is a YouTube link
        if (item.src.includes('youtube.com') || item.src.includes('youtu.be')) {
            anchor.setAttribute('data-featherlight', `
                <div style="text-align: center;">
                    <h2 id="h2-f" style="color: #fff">${item.description}</h2>
                    <iframe width="560" height="315" src="${item.src.replace('watch?v=', 'embed/')}" frameborder="0" allowfullscreen></iframe>
                </div>
            `);
        } else {
            anchor.setAttribute('data-featherlight', `
                <div style="text-align: center;">
                    <h2 id="h2-f" style="color: #fff">${item.description}</h2>
                    <img src="images/Multimedia/${item.src}" alt="Multimedia ${item.description}" style="max-width: 100%; height: auto;">
                </div>
            `);
        }

        const mediaElement = document.createElement(item.src.includes('youtube.com') || item.src.includes('youtu.be') ? 'iframe' : 'img');
        if (mediaElement.tagName === 'IFRAME') {
            mediaElement.src = item.src.replace('watch?v=', 'embed/');
            mediaElement.width = '100%';
            mediaElement.height = 'auto';
            mediaElement.frameBorder = '0';
            mediaElement.allowFullscreen = true;
        } else {
            mediaElement.src = `images/Multimedia/${item.src}`;
        }
        mediaElement.alt = `Multimedia ${item.description}`;
        mediaElement.style.maxWidth = '100%';
        mediaElement.style.height = 'auto';

        const span = document.createElement('span');
        span.className = 'image-description';
        span.textContent = item.description;

        anchor.appendChild(mediaElement);
        anchor.appendChild(span);
        modalGallery.appendChild(anchor);
    });
}

// Function to load YouTube videos dynamically into the YouTube modal
function loadYoutubeVideos() {
    const modalGallery = document.getElementById('youtube-gallery');
    youtubeVideos.forEach(video => {
        const anchor = document.createElement('a');
        anchor.href = video.src;
        anchor.setAttribute('data-featherlight', `
            <div class="featherlight-content">
                <h2 id="h2-v" style="color: #fff">${video.description}</h2>
                <iframe src="${video.src.replace('watch?v=', 'embed/')}" frameborder="0" allowfullscreen></iframe>
            </div>
        `);

        const img = document.createElement('img');
        img.src = `https://img.youtube.com/vi/${video.src.split('v=')[1]}/0.jpg`; // Thumbnail image
        img.alt = `YouTube Video ${video.description}`;

        const span = document.createElement('span');
        span.className = 'image-description';
        span.innerHTML = video.description;

        anchor.appendChild(img);
        anchor.appendChild(span);
        modalGallery.appendChild(anchor);
    });
}


// Call the functions to load images and videos
loadKeyCharacters();
loadKeyLocations();
loadMultimedia();
loadYoutubeVideos();

// Add event listener to each button
function openGalleryModal(modalId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        document.getElementById("banner").style.display = 'none';

        setTimeout(() => {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }, 10);
    }

    // taena diko alam ano meron pero eto nag ayos hahaha
    if (modalId === 'key-characters-modal') {
        $.featherlight('');
    }
}
function closeGalleryModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('open'); 
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';

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
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';

            setTimeout(() => {
                modal.style.display = 'none';
                document.getElementById("banner").style.display = 'block';
                document.body.classList.remove('modal-open'); 
            }, 300); 
        }
    });
});

