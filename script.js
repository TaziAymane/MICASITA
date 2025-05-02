 // Simple JavaScript to handle category selection
 document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
        category.classList.add('active');
    });
});

// Handle bottom navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});