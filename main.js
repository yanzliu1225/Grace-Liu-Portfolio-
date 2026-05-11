const orbitWrapper = document.getElementById('appleOrbit');
const appleBtn = document.getElementById('appleTrigger');

if (appleBtn && orbitWrapper) {
    appleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents any other clicks from interfering
        orbitWrapper.classList.toggle('orbiting');
    });
}