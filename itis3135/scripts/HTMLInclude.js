function HTMLInclude() {
    const includes = document.querySelectorAll('[data-include]');
    
    includes.forEach(function(include) {
        const file = include.getAttribute('data-include');
        if (!file) return;
        
        fetch(file)
            .then(response => response.text())
            .then(data => {
                include.outerHTML = data;
                setupValidationLinks();
            })
            .catch(error => {
                console.error('Error loading include:', error);
            });
    });
}

function setupValidationLinks() {
    const htmlValidationLink = document.getElementById('validation_link_html');
    if (htmlValidationLink) {
        htmlValidationLink.setAttribute('href', 
            'https://validator.w3.org/check?uri=' + location.href);
    }
    
    const cssValidationLink = document.getElementById('validation_link_css');
    if (cssValidationLink) {
        cssValidationLink.setAttribute('href', 
            'https://jigsaw.w3.org/css-validator/validator?uri=' + location.href);
    }
}

document.addEventListener('DOMContentLoaded', HTMLInclude);