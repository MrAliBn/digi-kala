let search_input = $('#search-input')
let list = $('.list')
let modal = $('.modall')
let back_icon = $('#back-icon')
let search_icon = $('#search-icon')
$(document).ready(function(){
     var lastScrollTop = 0;

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();


        if (scrollTop > lastScrollTop) {
            $('.nav-bottom').hide();
        }

        else {
            $('.nav-bottom').slideDown();
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
                $('body').css('overflow', 'hidden');
                // عمل دیگر در اینجا اضافه شود
            });


           $('#r').on('mouseleave', function() {
                $('#r').css('visibility', 'hidden');
                $('body').css('overflow', 'auto');
                });
});
