document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (searchTerm.length > 0) {
            const filteredResults = data.filter(item => {
                return item.toLowerCase().includes(searchTerm);
            });
            
            filteredResults.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result;
                searchResults.appendChild(li);
            });
        }
    });
    
    // Sample data
    const data = [
        'Apple',
        'Banana',
        'Cherry',
        'Grapes',
        'Orange',
        'Pineapple',
        'Strawberry',
        'Watermelon'
    ];
});
