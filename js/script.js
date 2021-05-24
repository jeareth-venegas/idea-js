let bars = document.getElementById('bars'),
    close = document.getElementById('close'),
    main = document.getElementById('main'),
    menu = document.getElementById('menu');


bars.addEventListener ('click', () => {
    main.classList.add('mover-main');
    menu.classList.add('mover-menu');
} )

close.addEventListener ('click', () => {
    main.classList.remove('mover-main');
    menu.classList.remove('mover-menu');
} )