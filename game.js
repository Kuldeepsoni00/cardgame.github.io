$(document).ready(function () {
   
    var game = {

        cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
        init: function () {
            game.suffle();
        },
        suffle: function () {
            var random = 0;
            var temp = 0;
            for (i = 1; i < game.cards.length; i++) {
                random = Math.round(Math.random() * i);
                console.log(random);
                temp = game.cards[i];
                game.cards[i] = game.cards[random];
                game.cards[random] = temp;
            }
            game.assigncards();
            console.log(game.cards);


        },
        assigncards: function () {

            $('.card').each(function (index) {
                $(this).attr('data-card-value', game.cards[index]);
            });
            game.clickevent();

        },
        clickevent: function () {
            $('.card').on('click', function () {

                $(this).html('<p>' + $(this).attr('data-card-value') + '</p>').addClass('selected');
                game.checkmatch();

            });
        },
        checkmatch: function () {

            if ($('.selected').length === 2) {
                if ($('.selected').first().attr('data-card-value') == $('.selected').last().attr('data-card-value')) {
                    // ya fir  if($('.selected').first().data('cardValue')==$('.selected').last().data('cardValue'))
                    $('.selected').each(function () {

                        $(this).animate({ opacity: 0 }).removeClass('unmatched');

                    });
                    $('.selected').each(function () {

                        $(this).removeClass('selected');
                    });
                    game.checkwin();
                }
                else {
                    setTimeout(function () {
                        $('.selected').each(function () {
                            $(this).html('').removeClass('selected');

                        });
                    }, 1000);



                }

            }




        },
        checkwin: function () {

            if ($('.unmatched').length === 0) {
                $('.container').html('<p>You Won</p>');
            }

        }
    };
    game.init();
});