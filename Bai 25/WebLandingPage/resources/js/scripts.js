$(document).ready(
    function () {

        //Sticky nav
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass("sticky");
                }
                else{
                    $('nav').removeClass("sticky");
                }
            }, {
                offset: '100px'
            }
        )

        //Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500); //Thông số 500: hiệu ứng tốc độ scroll
            event.preventDefault();
        });
    }
)

// var waypoint = new Waypoint({
//     element: document.getElementById('about-section-id'),
//     handler: function (direction) {
//          notify('I am 20px from the top of the window')
//         // if (direction == "down") {
//         //     $('nav').addClass('sticky')
//         // }
//     },
//     offset: 20
// })
