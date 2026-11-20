const artwork = [
  ['bird.jpeg', 'Bird in a bowler hat'],
  ['snail.jpeg', 'Snail'],
  ['dino.jpeg', 'Dinosaur'],
  ['unicorn.jpeg', 'Unicorn'],
  ['climber.jpeg', 'Climber'],
  ['gatech.jpeg', 'Georgia Tech'],
  ['birthday-card-front.jpeg', 'A little birdie birthday card (front)'],
  ['birthday-card-inside.jpeg', 'A little birdie birthday card (inside)'],
];

const sketchbook = document.querySelector('.art-gallery');
const artImage = sketchbook.querySelector('img');
let currentPiece = 0;

function showPiece(index) {
  currentPiece = (index + artwork.length) % artwork.length;
  const [file, title] = artwork[currentPiece];
  artImage.src = `data/${file}`;
  artImage.alt = title;
}

document.querySelectorAll('[data-open-art]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (typeof sketchbook.showModal !== 'function' ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    showPiece(currentPiece);
    sketchbook.showModal();
  });
});

sketchbook.querySelectorAll('[data-art-step]').forEach((button) => {
  button.addEventListener('click', () => {
    showPiece(currentPiece + Number(button.dataset.artStep));
  });
});

sketchbook.addEventListener('keydown', (event) => {
  const step = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
  if (!step) return;

  event.preventDefault();
  showPiece(currentPiece + step);
});
