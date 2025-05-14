function nextPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.getElementById(pageId);

    if (currentPage && nextPage) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
    }
}

function previousPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const previousPage = document.getElementById(pageId);

    if (currentPage && previousPage) {
        currentPage.classList.remove('active');
        previousPage.classList.add('active');
    }
}

// Exibe a primeira página ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const firstPage = document.getElementById('page1');
    if (firstPage) {
        firstPage.classList.add('active');
    }
});