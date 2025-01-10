document.getElementById('about').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('work').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
});
// Toggle the menu
// const hamburger = document.getElementById('hamburger');
//  const nav = document.getElementById('nav');
// const closeBtn = document.getElementById('closeBtn');

// hamburger.addEventListener('click', () => {
//     nav.style.display = 'flex';
//  });

// closeBtn.addEventListener('click', () => {
//     nav.style.display = 'none';
// });
// const hamburger = document.getElementById('hamburger');
// const nav = document.getElementById('nav');
// const closeBtn = document.getElementById('closeBtn');

// Show menu when hamburger is clicked
// hamburger.addEventListener('click', () => {
//     nav.classList.add('active');
// });

// Close menu when close button is clicked
// closeBtn.addEventListener('click', () => {
//     nav.classList.remove('active');
// });

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('closeBtn');

// Show the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    nav.classList.add('active');
});

// Hide the menu when the close button is clicked
closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});
