let search_input = $('#search-input')
let list = $('.list')
let modal = $('.modall')
let back_icon = $('#back-icon')
let search_icon = $('#search-icon')
let element = $('.form-story')[0];
let scrollLeftMax = element.scrollWidth - element.clientWidth;
$(document).ready(function(){
     var lastScrollTop = 0;
     var mobileElements;
     var bookElements;

     $('#daste-container').load('mobile.html', function(response, status, xhr) {
         if (status === "error") {
             console.log("Error: " + xhr.status + " " + xhr.statusText);
         }
     });


    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();


        if (scrollTop > lastScrollTop) {
            $('.nav-bottom').hide();
            $('.logo-search').addClass('box-shadow')
        }

        else {
            $('.nav-bottom').slideDown();
            $('.logo-search').removeClass('box-shadow')
        }

        lastScrollTop = scrollTop;
    });
    function updatePlaceholder() {
                if ($(window).width() <= 1025) {
                    search_input.attr('placeholder', "جستجو در ");
                } else {
                    search_input.attr('placeholder', 'جستجو');
                }
            }


            updatePlaceholder();

            $(window).resize(function() {
                updatePlaceholder();
            });

            search_input.click(function(event) {
                event.stopPropagation();
                 if ($(window).width() <= 1025) {
                       modal.css('height', "1800%");
                       modal.slideDown();
                       back_icon.show()
                       search_icon.hide()
                } else {
                // نمایش مدال
                modal.slideDown();
                search_icon.css('color', 'black');
                list.css('opacity', '0');
                }
            });

            $(document).click(function(event) {
                if ($(event.target).closest(modal).length) {
                    return;
                }

                modal.css('height', '900%');
                modal.slideUp();
                back_icon.hide()
                search_icon.show()
                search_icon.css('color', '');
                list.css('opacity', '1'); //
            });
            $('#back-icon').click(function (event){
                modal.css('height', '900%');
                modal.slideUp();
                back_icon.hide()
                search_icon.show()
                search_icon.css('color', '');
                list.css('opacity', '1');
            })
             $('.pr-0').on('mouseenter', function() {
                $('#r').css('visibility', 'visible');
                if ($("#active.mobile").length > 0) {
                    $('#daste-container').empty().load('mobile.html');
                }else {
                     $('#daste-container').empty().load('book.html');
                }
                $('body').css('overflow', 'hidden');
                modal.css('height', '900%');
                modal.slideUp();
                back_icon.hide()
                search_icon.show()
                search_icon.css('color', '');
                list.css('opacity', '1'); //
            });

           $('.book').on('mouseover', function() {
               bookHoverTimeout = setTimeout(function() {
                   $('.mobile').removeAttr('id');
                   $('.book').attr('id', 'active');
                   $('#daste-container').empty().load('book.html');
               }, 500);
           });

           $('.mobile').on('mouseover', function() {
               mobileHoverTimeout = setTimeout(function (){
                   $('.book').removeAttr('id');
                   $('.mobile').attr('id', 'active');
                   $('#daste-container').empty().load('mobile.html');
               }, 500)
           });

           $('.other').on('mouseover', function() {
               otherHoverTimeout = setTimeout(function (){
                   $("#daste-container").empty();
               }, 500)
           });

           $('#r').on('mouseleave', function() {
               $('#r').css('visibility', 'hidden');
               $('body').css('overflow', 'auto');
               $("#daste-container").empty();
           });

           function setupScroll(containerSelector, scrollLeftButton, scrollRightButton) {
            $(containerSelector).scroll(function() {
                let scrollLeft = $(this).scrollLeft();
                let scrollWidth = $(this)[0].scrollWidth;
                let clientWidth = $(this)[0].clientWidth;

                if (scrollLeft <= 0) {
                    $(scrollLeftButton).hide();
                    $(scrollRightButton).show();
                } else if (scrollLeft + clientWidth >= scrollWidth) {
                    $(scrollRightButton).hide();
                    $(scrollLeftButton).show();
                } else {
                    $(scrollLeftButton).show();
                    $(scrollRightButton).show();
                }
            });

            $(scrollRightButton).on('click', function() {
                $(containerSelector).animate({
                    scrollLeft: '+=200'
                }, 'slow');
            });

            $(scrollLeftButton).on('click', function() {
                $(containerSelector).animate({
                    scrollLeft: '-=200'
                }, 'slow');
            });
        }

        // فراخوانی برای عناصر مختلف
        setupScroll('.form-story', '#scroll-left', '#scroll-right');
        setupScroll('.haraj-1', '#scroll-left-haraj', '#scroll-right-haraj');
        setupScroll('.haraj-3', '#scroll-left2', '#scroll-right2');



function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.querySelector("#hours").textContent = hours;
        display.querySelector("#minutes").textContent = minutes;
        display.querySelector("#seconds").textContent = seconds;

        localStorage.setItem('timer', timer);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const oneHour = 60 * 60 * 8;
    const display = document.querySelector('#timer');

    let savedTimer = localStorage.getItem('timer');
    let initialTimer = savedTimer ? parseInt(savedTimer) : oneHour;

    startTimer(initialTimer, display);
};
})
