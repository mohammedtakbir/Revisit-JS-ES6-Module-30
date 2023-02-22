document.querySelector('.bg-btn').addEventListener('click', () => {
    const friends = document.querySelectorAll('.friend');
    for (let i = 0; i < friends.length; i++) {
        friends[i].style.backgroundColor = 'lightblue';
    }
})
document.querySelector('.center-btn').addEventListener('click', function () {
    document.getElementById('third-friend').style.textAlign = 'center';
})
document.getElementById('Add-btn').addEventListener('click', function () {
    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
        <h3 class="friend-name">friend-${container.children.length + 1}</h3>
        <p>lorem ipsum dollar sit amit</p>
    `;
    container.appendChild(div);
})