document
    .getElementById('heyllo')
    .addEventListener('mouseenter', function ($event) {
        $event.target.innerText = 'Hey!';
    });

document
    .getElementById('heyllo')
    .addEventListener('mouseleave', function ($event) {
        $event.target.innerText = 'Hello...';
    });
