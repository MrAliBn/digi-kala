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

           $('.form-story').scroll(function() {
                let scrollLeft = $(this).scrollLeft();
                let scrollWidth = $(this)[0].scrollWidth;
                let clientWidth = $(this)[0].clientWidth;

                if (scrollLeft <= 0) {
                    $('#scroll-left').hide(); //
                    $('#scroll-right').show(); //
                } else if (scrollLeft + clientWidth >= scrollWidth) {
                    $('#scroll-right').hide();
                    $('#scroll-left').show();
                } else {
                    $('#scroll-left').show();
                    $('#scroll-right').show();
                }
            });

           $('#scroll-right').on('click', function() {
               $('.form-story').animate({
                   scrollLeft: '+=200'
               }, 'slow');

           });
           $('#scroll-left').on('click', function() {
               $('.form-story').animate({
                   scrollLeft: '-=200'
           }, 'slow');
           });

           $('.haraj-3').scroll(function() {
                let scrollLeft = $(this).scrollLeft();
                let scrollWidth = $(this)[0].scrollWidth;
                let clientWidth = $(this)[0].clientWidth;

                if (scrollLeft <= 0) {
                    $('#scroll-left2').hide(); //
                    $('#scroll-right2').show(); //
                } else if (scrollLeft + clientWidth >= scrollWidth) {
                    $('#scroll-right2').hide();
                    $('#scroll-left2').show();
                } else {
                    $('#scroll-left2').show();
                    $('#scroll-right2').show();
                }
            });

            $('#scroll-right2').on('click', function() {
               $('.haraj-3').animate({
                   scrollLeft: '+=200'
               }, 'slow');
           });
           $('#scroll-left2').on('click', function() {
               $('.haraj-3').animate({
                   scrollLeft: '-=200'
           }, 'slow');
           });


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

        // ذخیره زمان باقی‌مانده در local storage
        localStorage.setItem('timer', timer);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const oneHour = 60 * 60 * 8;
    const display = document.querySelector('#timer');


    // بررسی وجود مقدار timer در local storage
    let savedTimer = localStorage.getItem('timer');
    let initialTimer = savedTimer ? parseInt(savedTimer) : oneHour;

    startTimer(initialTimer, display);
};
})
