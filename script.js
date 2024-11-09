// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Define available images and text files with their associated parameter values
const content = {
    'image1': { image: 'images/image1.jpg', text: 'texts/image1.txt' },
    'image2': { image: 'images/image2.jpg', text: 'texts/image2.txt' },
    'image3': { image: 'images/image3.jpg', text: 'texts/image3.txt' }
};

// Function to fetch text from a file
async function fetchText(filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            return await response.text();
        } else {
            throw new Error('Text file not found');
        }
    } catch (error) {
        console.error('Error fetching text:', error);
        return 'Text not available';
    }
}

// Set the image and text based on the URL parameter
document.addEventListener('DOMContentLoaded', async () => {
    const imageKey = getUrlParameter('img'); // "img" is the parameter name
    const imgElement = document.getElementById('dynamic-image');
    const textElement = document.getElementById('dynamic-text');

    if (imageKey && content[imageKey]) {
        // Set image source
        imgElement.src = content[imageKey].image;

        // Fetch and set text content
        const textContent = await fetchText(content[imageKey].text);
        textElement.textContent = textContent;
    } else {
        // Default message if parameter is missing or invalid
        imgElement.src = 'images/default.jpg';
        textElement.textContent = 'Content not available';
    }
});
