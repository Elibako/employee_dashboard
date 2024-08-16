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
document.addEventListener('DOMContentLoaded', function () {
    const newEmployeeButton = document.querySelector('.new-employee');
    const modal = document.getElementById('newEmployeeModal');
    const closeButton = document.querySelector('.close');
    const form = document.getElementById('newEmployeeForm');
    const table = document.querySelector('.employee-table');

    newEmployeeButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('employeeName').value;
        const email = document.getElementById('employeeEmail').value;
        const id = document.getElementById('employeeId').value;
        const role = document.getElementById('employeeRole').value;
        const status = document.getElementById('employeeStatus').value;
        const team = document.getElementById('employeeTeam').value;

        const row = document.createElement('div');
        row.className = 'table-row';

        row.innerHTML = `
            <div class="checkbox-cell">
                <input type="checkbox">
            </div>
            <div class="name-cell">
                <div class="profile-info">
                    <img class="profile-pic" src="profile-pic-url" alt="Profile Picture">
                    <div class="name-details">
                        <span class="name">${name}</span>
                        <span class="email">${email}</span>
                    </div>
                </div>
            </div>
            <div class="table-cell">${id}</div>
            <div class="role-cell">
                <span class="role">${role}</span>
                <span class="role-description">Role description here</span>
            </div>
            <div class="table-cell">${status}</div>
            <div class="table-cell">${team}</div>
        `;

        table.appendChild(row);
        modal.style.display = 'none';
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterBtn = document.getElementById('filterBtn');
    const tableRows = document.querySelectorAll('.employee-table .table-row');
    
    // Toggle Filter Dropdown
    filterBtn.addEventListener('click', () => {
        const filterNavbar = document.querySelector('.filter-navbar');
        filterNavbar.classList.toggle('active');
    });

    // Filter Results
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();

        tableRows.forEach(row => {
            const name = row.dataset.name.toLowerCase();
            const matches = name.includes(query);
            row.style.display = matches ? '' : 'none';
        });
    });
});



