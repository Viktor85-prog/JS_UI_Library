import './lib/lib';
import $ from './lib/lib';

// $('.active').on('click', sayHello);
$('button').on('click', function () {
    $('div').eq(4).toggleClass('active');
});


$('div').click(function () {
    console.log($(this).index());

})

// console.log($('button').html('hi'));



// console.log($("div").eq(2).find('.more'))
// console.log($('div').eq(1))


// console.log($('.some').closest('.findMe'))


console.log($('.more').eq(0).siblings());