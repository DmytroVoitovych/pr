export {activWatched, activQueue}

const refs = {
    wached: document.querySelector(".watched"),
    queue: document.querySelector(".queue"),
}

refs.wached.addEventListener('click', activWatched);
refs.queue.addEventListener('click', activQueue);

function activWatched(e) {
    e.preventDefault();
    refs.wached.classList.add('selected');
    refs.queue.classList.remove('selected');
}

function activQueue(e) {
    e.preventDefault();
    refs.wached.classList.remove('selected');
    refs.queue.classList.add('selected');
}