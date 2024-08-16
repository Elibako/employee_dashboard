document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdown = document.querySelector('.dropdown');
    const searchInput = document.getElementById('searchInput');
    const tableRows = document.querySelectorAll('.employee-table .table-row');

    // Dropdown functionality
    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        dropdown.classList.toggle('active');
    });

    // Search functionality
    searchInput.addEventListener('keyup', function() {
        const query = this.value.toLowerCase();
        
        tableRows.forEach(row => {
            const cells = row.querySelectorAll('.table-cell, .name-cell');
            let match = false;

            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(query)) {
                    match = true;
                }
            });

            row.style.display = match ? '' : 'none';
        });
    });
});

