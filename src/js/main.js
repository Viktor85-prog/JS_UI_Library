import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
})

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
})


$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
})


$('.wrap').html(
    `<div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton3">Drop btn</button>

            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton3">
                <a href="#" class="dropdown-item">wrfwrfwr</a>
                <a href="#" class="dropdown-item">wrfwrfwr</a>
                <a href="#" class="dropdown-item">wrfwrfwr</a>
            </div>

        </div>`
);

$('.dropdown-toggle').dropdown();



$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'hi modal',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit f  qui adquod deserunt molestiae porro.'
    },
    btns: {
        count: 3,
        settings: [
            [
                "Close",
                ["btn-danger", "mr-10"],
                true
            ],
            [
                "Save",
                ['btn-success'],
                false,
                () => {
                    alert('hello');
                }
            ],
            [
                "btn",
                ["btn-warning", "ml-10"],
                false,
                () => {
                    alert('hi')
                }
            ]
        ]
    }
}));


// $().get('https://jsonplaceholder.typicode.com/posts')
// .then(res=> console.log(res));