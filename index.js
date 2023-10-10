const scrollButton = document.querySelector('.scrollButton');
scrollButton.addEventListener('click', () => document.querySelector('.container').scrollIntoView({ behavior: "smooth"}))
