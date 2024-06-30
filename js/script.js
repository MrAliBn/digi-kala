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
                $('.daste-mobile').css('visibility', 'visible');
                $('body').css('overflow', 'hidden');
            });


           $('#r').on('mouseleave', function() {
                $('#r').css('visibility', 'hidden');
                $('body').css('overflow', 'auto');
                $('.daste-mobile').css('visibility', 'hidden');
                });


           $('.book').on('mouseenter', function() {
               $('.mobile').removeAttr('id');
               $('.daste-mobile').css('visibility', 'hidden');
               $('.daste-book').css('visibility', 'visible');
               $('.book').attr('id', 'active');
           });
           $('#r').on('mouseleave', function() {
              $('.book').removeAttr('id');
              $('.daste-book').css('visibility', 'hidden');
              $('.mobile').attr('id', 'active');
           });

           $('.mobile').on('click, mouseenter', function() {
                $('.mobile').attr('id', 'active');
               $('.book').removeAttr('id');
               $('.daste-mobile').css('visibility', 'visible');
           });
           $('#r').on('mouseleave', function() {
              $('.daste-mobile').css('visibility', 'hidden');
           });



           $(document).ready(function() {
        $('.daste-mobile').empty();
    // زمانی که روی موبایل هاور کردید
    $('.mobile').hover(function() {
        // نمایش دوباره کدهای بخش موبایل
        $('.daste-mobile').html(`
            <!-- کدهای بخش موبایل -->
            <div class="name-kala3 col-md-3">
                <ul>
                    <li><a><h6 class="font-weight-bold">داغ ترین ها</h6></a></li>
                    <li><a>گلکسی s23 ultra</a></li>
                    <li><a>گلکسی 54</a></li>
                    <li><a>گلکسی 34</a></li>
                    <li><a>گلکسی 24</a></li>
                    <li><a>گلکسی s23 fe</a></li>
                    <li><a>ردمی نوت ۱۲</a></li>
                    <li><a>پوکو c40</a></li>
                    <li><a>پوکو x5 pro 5g</a></li>
                    <li><a>ردمی a2 plus</a></li>
                    <li><a>پوکو m5s</a></li>
                    <li><a>آنر x9a</a></li>
                    <li><a>موتورولا moto e13</a></li>
                    <li><a>جی پلاس Q20s</a></li>
                    <li><a>جدید ترین محصولات اپل</a></li>
                    <li><a><h6 class="font-weight-bold">برند های برتر</h6></a></li>
                    <li><a>اپل</a></li>
                    <li><a>سامسونگ</a></li>
                    <li><a>هواوی</a></li>
                    <li><a>آنر</a></li>
                    <li><a>ریلمی</a></li>
                </ul>
            </div>
            <div class="name-kala3 col-md-3">
                <ul>
                    <li><a><h6 class="font-weight-bold">لوازم جانبی موبایل</h6></a></li>
                    <li><a>شارژر گوشی</a></li>
                    <li><a>قاب کاور گوشی</a></li>
                    <li><a>گلس گوشی</a></li>
                    <li><a>هولدر گوشی موبایل</a></li>
                    <li><a>کابل شارژر و مبدل</a></li>
                    <li><a>پاور بانک (شارژر همراه)</a></li>
                    <li><a><h6 class="font-weight-bold">تبلت</h6></a></li>
                    <li><a>تبلت سامسونگ</a></li>
                    <li><a>تبلت اپل</a></li>
                    <li><a>تبلت شیاپومی</a></li>
                    <li><a>تبلت لنوو</a></li>
                    <li><a>تبلت مایکروسافت</a></li>
                    <li><a>تبلت دانش اموزی</a></li>
                    <li><a><h6 class="font-weight-bold">هدفون</h6></a></li>
                    <li><a>هدفون بی سیم</a></li>
                    <li><a>هدفون اپل</a></li>
                    <li><a>هدفون بیتس</a></li>
                    <li><a>هدفون سونی</a></li>
                    <li><a>هدفون سامسونگ</a></li>
                    <li><a>هدفون شیاپومی</a></li>
                    <li><a>هدفون جی پی ال</a></li>
                    <li><a><h6 class="font-weight-bold">ساعت و مچ بند هوشمند</h6></a></li>
                    <li><a>ساعت هوشمند سامسونگ</a></li>
                    <li><a>ساعت هوشمند شیاپومی</a></li>
                    <li><a>اپل واچ</a></li>
                </ul>
            </div>
            <div class="name-kala3 col-md-3">
                <ul>
                    <li><a><h6 class="font-weight-bold">گوشی بر اساس قیمت</h6></a></li>
                    <li><a>گوشی موبایل ارزان</a></li>
                    <li><a>گوشی موبایل قسطی</a></li>
                    <li><a>گوشی تا ۲ میلیون تومان</a></li>
                    <li><a>گوشی تا 5 میلیون تومان</a></li>
                    <li><a>گوشی تا 7 میلیون تومان</a></li>
                    <li><a>گوشی تا 15 میلیون تومان</a></li>
                    <li><a>گوشی بالای 15 میلیون تومان</a></li>
                    <li><a><h6 class="font-weight-bold">گوشی بر اساس عملکرد</h6></a></li>
                    <li><a>گوشی گیمینگ</a></li>
                    <li><a>گوشی 5g</a></li>
                    <li><a>گوشی دکمه ای</a></li>
                    <li><a>گوشی ضد آب</a></li>
                    <li><a>گوشی مناسب عکاسی</a></li>
                    <li><a>گوشی میان رده ای</a></li>
                    <li><a>گوشی اقتصادی</a></li>
                    <li><a>گوشی دانش اموزی</a></li>
                    <li><a>گوشی پرچمدار</a></li>
                    <li><a>دو سیمکارت</a></li>
                    <li><a><h6 class="font-weight-bold">گوشی بر اساس حافظه داخلی</h6></a></li>
                    <li><a>گوشی تا 16 گیگابایت</a></li>
                    <li><a>گوشی تا 32 گیگابایت</a></li>
                    <li><a>گوشی تا 64 گیگابایت</a></li>
                    <li><a>گوشی تا 128 گیگابایت</a></li>
                    <li><a>گوشی تا 256 گیگابایت</a></li>
                    <li><a>گوشی تا 1 ترابایت</a></li>
                    <li><a><h6 class="font-weight-bold">رزلوشن عکس</h6></a></li>
                    <li><a>گوشی تا ۱۳ مگاپیکسل</a></li>
                    <li><a>گوشی تا 16 مگاپیکسل</a></li>
                    <li><a>گوشی تا 48 مگاپیکسل</a></li>
                    <li><a>گوشی تا 64 مگاپیکسل</a></li>
                    <li><a>گوشی تا 128 مگاپیکسل</a></li>
                </ul>
            </div>
            <div class="name-kala3 col-md-3">
                <ul>
                    <li><a><h6 class="font-weight-bold">برند های مختلف گوشی</h6></a></li>
                    <li><a>گوشی ایفون</a></li>
                    <li><a>گوشی سامسونگ</a></li>
                    <li><a>گوشی شیاپومی</a></li>
                    <li><a>گوشی نوکیا</a></li>
                    <li><a>گوشی ریلمی</a></li>
                    <li><a>گوشی آنر</a></li>
                    <li><a>گوشی موتورلا</a></li>
                    <li><a>گوشی ناتینگ فون</a></li>
                    <li><a>گوشی جی پلاس</a></li>
                    <li><a>گوشی هواوی</a></li>
                    <li><a>گوشی جی ال ایکس</a></li>
                    <li><a>گوشی جنرال لوکس</a></li>
                    <li><a>گوشی داریا</a></li>
                    <li><a>گوشی گوگل</a></li>
                    <li><a>گوشی اوپو</a></li>
                    <li><a>گوشی ارد</a></li>
                    <li><a>گوشی وان پلاس</a></li>
                    <li><a>گوشی موبایل رنسو</a></li>
                </ul>
            </div>
        `);
    });
});


})
