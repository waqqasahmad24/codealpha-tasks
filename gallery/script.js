// Image data - In a real project, you might fetch this from an API
const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Mountain Landscape",
        category: "nature",
        description: "Beautiful mountain landscape with a clear lake reflecting the peaks."
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "City Skyline at Night",
        category: "city",
        description: "Skyscrapers illuminated against a dark night sky."
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1518834103328-93d45986dce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "African Lion",
        category: "animals",
        description: "Majestic lion resting in the savanna."
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Fresh Salad Bowl",
        category: "food",
        description: "Healthy salad with fresh vegetables and avocado."
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Forest Path",
        category: "nature",
        description: "Sunlight filtering through trees on a forest path."
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Urban Architecture",
        category: "city",
        description: "Modern city buildings with unique architectural design."
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Colorful Macaws",
        category: "animals",
        description: "Two colorful macaws perched on a branch."
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Gourmet Pizza",
        category: "food",
        description: "Delicious pizza with fresh toppings and melted cheese."
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Snowy Mountains",
        category: "nature",
        description: "Snow-covered mountain peaks under a blue sky."
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "City Lights",
        category: "city",
        description: "Long exposure shot of city traffic at night."
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Cute Puppy",
        category: "animals",
        description: "Adorable golden retriever puppy looking at the camera."
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        title: "Pancake Breakfast",
        category: "food",
        description: "Stack of pancakes with berries and syrup."
    }
];

// DOM Elements
const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxTitle = document.querySelector('.image-title');
const lightboxCategory = document.querySelector('.image-category');
const lightboxDescription = document.querySelector('.image-description');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const lightboxThumbnails = document.querySelector('.lightbox-thumbnails');

// Current image index for lightbox navigation
let currentImageIndex = 0;
let filteredImages = [...images];

// Initialize the gallery
function initGallery() {
    displayImages(images);
    setupEventListeners();
}

// Display images in the gallery
function displayImages(imagesToDisplay) {
    gallery.innerHTML = '';
    
    imagesToDisplay.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${image.category}`;
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" class="gallery-img">
            <div class="image-overlay">
                <h3 class="image-title">${image.title}</h3>
                <p class="image-category">${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });
    
    // Add click event to each gallery item
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            openLightbox(filteredImages, index);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter images
            const filter = this.dataset.filter;
            if (filter === 'all') {
                filteredImages = [...images];
            } else {
                filteredImages = images.filter(image => image.category === filter);
            }
            
            // Display filtered images
            displayImages(filteredImages);
        });
    });
    
    // Lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

// Open lightbox with selected image
function openLightbox(imagesArray, index) {
    currentImageIndex = index;
    updateLightbox(imagesArray);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Update lightbox content
function updateLightbox(imagesArray) {
    const currentImage = imagesArray[currentImageIndex];
    
    // Update main image and info
    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.title;
    lightboxTitle.textContent = currentImage.title;
    lightboxCategory.textContent = `Category: ${currentImage.category.charAt(0).toUpperCase() + currentImage.category.slice(1)}`;
    lightboxDescription.textContent = currentImage.description;
    
    // Update thumbnails
    lightboxThumbnails.innerHTML = '';
    imagesArray.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = image.title;
        thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightbox(imagesArray);
        });
        lightboxThumbnails.appendChild(thumbnail);
    });
}

// Show previous image in lightbox
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightbox(filteredImages);
}

// Show next image in lightbox
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightbox(filteredImages);
}

// Initialize the gallery when page loads
document.addEventListener('DOMContentLoaded', initGallery);