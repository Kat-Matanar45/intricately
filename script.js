const inputText = document.querySelector('.text');
const textP = document.querySelector('.textP');

const updateDebounceText = debounce(text => {
    textP.textContent = text
});

inputText.addEventListener('input', (e) => {
    updateDebounceText(e.target.value)
})

function debounce(callback) {
    let timeout;
    
    return (...arg) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...arg)
        }, 300)
    }
}

