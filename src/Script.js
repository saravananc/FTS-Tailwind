document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('[data-drawer-toggle="logo-sidebar"]');
    const drawer = document.getElementById('logo-sidebar');

    button.addEventListener('click', function() {
        drawer.classList.toggle('-translate-x-full');
    });
});