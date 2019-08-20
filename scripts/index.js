function openModal(button, callback = function() {}) {
    const btn = document.querySelector(button);
    btn.addEventListener('click', callback);
}

openModal('.js_addUser', function(){
    alert('hola');
})
