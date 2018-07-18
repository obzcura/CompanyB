$(function(){

    var products = '{"products":[{"id":1,"title":"MenShoes1","price":2000,"img_url":"img/menshoes1.jpg","category":"men"},{"id":2,"title":"MenShoes2","price":2500,"img_url":"img/menshoes2.jpg","category":"men"},{"id":3,"title":"MenShoes3","price":1800,"img_url":"img/menshoes3.jpg","category":"men"},{"id":4,"title":"WomenShoes1","price":1500,"img_url":"img/womenshoes1.jpg","category":"women"},{"id":5,"title":"WomenShoes2","price":1750,"img_url":"img/womenshoes2.jpg","category":"women"},{"id":6,"title":"WomenShoes3","price":2200,"img_url":"img/womenshoes3.jpg","category":"women"},{"id":7,"title":"KidShoes1","price":1000,"img_url":"img/menshoes1.jpg","category":"kid"},{"id":8,"title":"KidShoes2","price":1200,"img_url":"img/menshoes2.jpg","category":"kid"},{"id":9,"title":"KidShoes3","price":800,"img_url":"img/menshoes3.jpg","category":"kid"}]}';

    $(document)
    .scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('#float-navbar').fadeIn(100);
        } else {
            $('#float-navbar').fadeOut(100);
        }
    })

    $('#main-navbar .dropdown').on('mouseenter', function(){
        if($(window).width()>751){
            var that = this, 
            index = $('#main-navbar .dropdown').index(that);
            $('#main-navbar .dropdown .dropdown-menu').eq(index).show();
        }
    });
    $('#main-navbar .dropdown').on('mouseleave', function(){
        if($(window).width()>751){
            var that = this, 
            index = $('#main-navbar .dropdown').index(that); 
            $('#main-navbar .dropdown .dropdown-menu').eq(index).hide();
        }
    });

    $('#float-navbar .dropdown').on('mouseenter', function(){
        if($(window).width()>751){
            var that = this, 
            index = $('#float-navbar .dropdown').index(that);
            $('#float-navbar .dropdown .dropdown-menu').eq(index).show();
        }
    });
    $('#float-navbar .dropdown').on('mouseleave', function(){
        if($(window).width()>751){
            var that = this, 
            index = $('#float-navbar .dropdown').index(that); 
            $('#float-navbar .dropdown .dropdown-menu').eq(index).hide();
        }
    });

    if($(window).width()<751){
        $('#main-navbar .dropdown, #float-navbar .dropdown').addClass('open');
    }

    $(window).resize(function(){
        if($(window).width()>751){
            $('#main-navbar .dropdown, #float-navbar .dropdown').removeClass('open');
            $('#float-navbar .dropdown .dropdown-menu, #main-navbar .dropdown .dropdown-menu').hide();
        }else{
            $('#main-navbar .dropdown, #float-navbar .dropdown').addClass('open');
            $('#float-navbar .dropdown .dropdown-menu, #main-navbar .dropdown .dropdown-menu').show();
        }
    });

    $('.navbar-toggle').on('click', function(e) {
        if(e.originalEvent!==undefined){
            var index = $('.navbar-toggle').index(this),
            x = index === 0 ? 1 : 0;
            $('.navbar-toggle').eq(x).click();
        }    
    });

    $('.more-info').on('click',function(){

        $('.navbar-nav li[data-nav="about"]').click();
    })

    $('.navbar-nav li[data-nav="about"]').on('click', function(e){
        
        e.preventDefault();
        $('#content-wrapper').html(
            '<div class="container-fluid about-container">'+
                '<div class="row">'+
                    '<div class="col-sm-2"></div>'+
                    '<div class="col-sm-8">'+
                        '<h1>About Company B</h1>'+
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet ante ipsum, ut fermentum risus posuere in. In volutpat metus nec odio porttitor, ac iaculis nisl feugiat. Donec tempor porttitor felis sit amet dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc porttitor non lectus ut luctus. Nullam a nisl nec risus faucibus faucibus. Phasellus in egestas orci. Aenean ac augue ut augue feugiat lacinia. Nam accumsan auctor risus, et rhoncus erat condimentum sed. Donec efficitur volutpat porta. Integer sed eros at arcu tincidunt interdum. Sed faucibus consectetur aliquet. Pellentesque mi mi, molestie non velit eget, luctus rutrum urna. Nulla imperdiet odio porta orci eleifend consequat.</p>'+
                        '<p>Aenean imperdiet luctus justo, vel ultrices ipsum volutpat eu. Morbi posuere mattis lacus, sit amet facilisis turpis rutrum ut. Proin viverra, ipsum vel ornare auctor, urna odio facilisis urna, dapibus auctor quam ex non urna. Fusce vestibulum, erat vitae posuere pellentesque, urna turpis eleifend nisi, et lobortis turpis ex in dui. Aenean pretium, massa ac auctor condimentum, mauris eros malesuada sapien, non facilisis metus tortor vitae mauris. Pellentesque rhoncus lectus at ex porta cursus. Sed convallis, nunc eu facilisis bibendum, odio lectus scelerisque libero, sed feugiat felis metus ut nulla. Quisque euismod venenatis metus et euismod. Praesent scelerisque dui felis, nec facilisis nulla scelerisque in.</p>'+
                        '<h2>Mission</h2>'+
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius efficitur felis, eget molestie dui condimentum ut. Nulla scelerisque ipsum vel rutrum commodo. In augue sem, imperdiet vel ultricies at, vehicula sed sem. Nullam at pulvinar enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse feugiat metus at lorem cursus, at commodo tortor ullamcorper. Vestibulum facilisis quam nec risus placerat, sit amet porttitor nisl pharetra. Fusce sodales metus sit amet placerat luctus. Nullam lobortis, lorem vel rutrum pretium, tellus mi posuere nisl, a semper massa eros ac nibh. Pellentesque ultrices ultricies suscipit. Sed massa lacus, ornare in ornare eu, placerat et sem.</p>'+
                        '<h2>Vision</h2>'+
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada enim id dignissim malesuada. Aenean volutpat blandit odio, facilisis pretium est facilisis id. Proin faucibus volutpat cursus. Integer blandit, neque sed bibendum mattis, felis odio dictum mauris, a porta est tortor quis nulla. Duis at felis eget ante hendrerit porta eu nec ipsum. Integer eu neque et lectus mollis dapibus accumsan a ex. Proin semper odio vitae mi facilisis sagittis. Quisque molestie commodo nibh, eu maximus nisi maximus eget. Vestibulum sed eros nisl. Sed vulputate tincidunt magna a finibus. Proin ornare eros et faucibus ornare. Suspendisse nec magna vel libero varius efficitur sagittis non massa. Quisque hendrerit orci euismod, volutpat tellus vitae, laoreet nunc. Cras ut mauris magna. Quisque nunc nibh, ornare eu massa non, pulvinar euismod nisl. Maecenas vitae tortor quis ex auctor pellentesque ut ut est.</p>'+
                    '</div>'+
                    '<div class="col-sm-2"></div>'+
                '</div>'+
            '</div>'
        )
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li[data-nav="about"]').addClass('active');
        $('#content-wrapper').fadeIn('1000');
        $('html, body').animate({
            scrollTop: $("#content-wrapper").offset().top-50
        }, 1000);
    });

    $('.navbar-nav li[data-nav="contacts"]').on('click', function(e){
        
        e.preventDefault();
        $('#content-wrapper').html(
            '<div class="container-fluid contact-container">'+
                '<div class="row">'+
                    '<div class="col-sm-2"></div>'+
                    '<div class="col-sm-6 feedback-form">'+
                        '<h1>Customer Feedback</h1>'+
                        '<p style="font-size:10px;">All fields are required</p>'+
                        '<div class="form-group">'+
                            '<label for="name">*Name:</label>'+
                            '<input type="text" class="form-control" id="name">'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label for="pwd">*Email:</label>'+
                            '<input type="email" class="form-control" id="email">'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label for="message">*Message:</label>'+
                            '<textarea class="form-control" rows="10" id="message"></textarea>'+
                        '</div>'+
                        '<button type="button" class="btn btn-info send"><strong>SEND</strong></button>'+
                    '</div>'+
                    '<div class="col-sm-2">'+
                        '<h2>Contact Details</h2>'+
                        '<p><i class="fa fa-phone" aria-hidden="true"></i> +63 999 9999</p>'+
                        '<p><i class="fa fa-envelope" aria-hidden="true"></i> info@companyb.com</p>'+
                        '<ul style="color:#fff;list-style-type: none;padding:0px">'+
                            '<li><img src="http://westchasedistrictfarmersmarket.com/wp-content/uploads/Facebook-Icon.png" style="width:25px;"> Facebook</li>'+
                            '<li><img src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png" style="height:25px;"> Twitter</li>'+
                            '<li><img src="https://maxcdn.icons8.com/Color/PNG/512/Logos/instagram_new-512.png" style="height:25px;"> Instagram</li>'+
                            '<li><img src="http://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/256/youtube-icon.png" style="height:25px;"> Youtube</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="col-sm-2"></div>'+
                '</div>'+
            '</div>'
        )
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li[data-nav="contacts"]').addClass('active');
        $('#content-wrapper').fadeIn('1000');
        $('html, body').animate({
            scrollTop: $("#content-wrapper").offset().top-50
        }, 1000);
    });

    $('#content-wrapper').on('click', '.contact-container .send',function() {
        if(!$('.contact-container #name').val()){
            swal(
                'Ooops!',
                'Name field is empty',
                'warning'
            )
        }else if(!$('.contact-container #email').val()){
            swal(
                'Ooops!',
                'Email field is empty',
                'warning'
            )
        }else if(!$('.contact-container #message').val()){
            swal(
                'Ooops!',
                'Message field is empty',
                'warning'
            )
        }else {
            swal(
                'SENT!',
                "You're message has been sent!",
                'success'
            )
            $('.contact-container #name').val('');
            $('.contact-container #email').val('');
            $('.contact-container #message').val('');
        }
    });

    $('.navbar-nav li[data-nav="products"]').on('click', function(e){

        e.preventDefault();
        var product_html = "";

        var data = JSON.parse(products);

        swal({
            title: 'Loding...',
            onOpen: () => {
                swal.showLoading()
            }
        })
        for(var i=0; i<data.products.length; i++) {
            product_html += "<div class='shoe-container'>"+
                                "<img src='"+data.products[i].img_url+"' title='"+data.products[i].title+"'>"+
                                "<h4>"+data.products[i].title+"</h4>"+
                                "<p>P"+data.products[i].price+"</p>"+
                            "</div>";
        }

        $('#content-wrapper').html(
            '<div class="container-fluid product-container">'+
                '<div class="row">'+
                    '<div class="col-sm-1"></div>'+
                    '<div class="col-sm-2 product-filter">'+
                        '<div class="product-filter">'+
                            '<h3>Categories</h3>'+
                            '<div class="checkbox">'+
                                '<label><input type="checkbox" class="category-filter" value="men">Men</label>'+
                            '</div>'+
                            '<div class="checkbox">'+
                                '<label><input type="checkbox" class="category-filter" value="women">Women</label>'+
                            '</div>'+
                            '<div class="checkbox">'+
                                '<label><input type="checkbox" class="category-filter" value="kid">Children</label>'+
                            '</div>'+
                            '<h3>Price Range</h3>'+
                            '<div class="form-group">'+
                                '<label for="from-price">From:</label>'+
                                '<input type="number" class="form-control" id="from-price">'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<label for="to-price">To:</label>'+
                                '<input type="number" class="form-control" id="to-price">'+
                            '</div>'+
                            '<button type="button" class="btn btn-default filter">Filter</button>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-sm-8 product-list">'+
                        product_html+
                    '</div>'+
                    '<div class="col-sm-1"></div>'+
                '</div>'+
            '</div>'
        )
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li[data-nav="products"]').addClass('active');
        $('#content-wrapper').fadeIn('1000');
        for(var i=0; i<3; i++) {
            $('.category-filter').eq(i).prop( "checked", true );
        }
        $('html, body').animate({
            scrollTop: $("#content-wrapper").offset().top-50
        }, 1000);
        swal.close();
    });

    $('.navbar-nav li[data-nav="products"] .dropdown-menu li').on('click', function(e){

        e.preventDefault();
        e.stopPropagation();
        var product_html = "";

        var data = JSON.parse(products);

        swal({
            title: 'Loding...',
            onOpen: () => {
                swal.showLoading()
            }
        })
        for(var i=0; i<data.products.length; i++) {
            if(data.products[i].category===$(this).data('nav')){
                product_html += "<div class='shoe-container'>"+
                                    "<img src='"+data.products[i].img_url+"' title='"+data.products[i].title+"'>"+
                                    "<h4>"+data.products[i].title+"</h4>"+
                                    "<p>P"+data.products[i].price+"</p>"+
                                "</div>";
            }
        }

        $('#content-wrapper').html(
            '<div class="container-fluid product-container">'+
                '<div class="row">'+
                    '<div class="col-sm-1"></div>'+
                    '<div class="col-sm-2 product-filter">'+
                        '<div class="product-filter">'+
                            '<h3>Categories</h3>'+
                            '<div class="checkbox">'+
                                '<label><input type="checkbox" class="category-filter" value="men">Men</label>'+
                            '</div>'+
                            '<div class="checkbox">'+
                                '<label><input type="checkbox" class="category-filter" value="women">Women</label>'+
                            '</div>'+
                            '<div class="checkbox">'+
                                '<label><input type="checkbox" class="category-filter" value="kid">Children</label>'+
                            '</div>'+
                            '<h3>Price Range</h3>'+
                            '<div class="form-group">'+
                                '<label for="from-price">From:</label>'+
                                '<input type="number" class="form-control" id="from-price">'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<label for="to-price">To:</label>'+
                                '<input type="number" class="form-control" id="to-price">'+
                            '</div>'+
                            '<button type="button" class="btn btn-default filter">Filter</button>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-sm-8 product-list">'+
                        product_html+
                    '</div>'+
                    '<div class="col-sm-1"></div>'+
                '</div>'+
            '</div>'
        )
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li[data-nav="products"]').addClass('active');
        $('#content-wrapper').fadeIn('1000');
        for(var i=0; i<3; i++) {
            if($('.category-filter').eq(i).val()===$(this).data('nav')){
                $('.category-filter').eq(i).prop( "checked", true );
            }
        }
        $('html, body').animate({
            scrollTop: $("#content-wrapper").offset().top-50
        }, 1000);
        swal.close();
    });

    $('.navbar-nav li[data-nav="home"]').on('click', function(e){
        $('#content-wrapper').fadeOut(500);
        $('html, body').animate({
            scrollTop: $("#page-wrapper").offset().top
        }, 1000);
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li[data-nav="home"]').addClass('active');
    });

    $('#content-wrapper').on('click' ,'.filter' ,function(){
        var product_html = "",
            category_filter = [],
            from_price = "",
            to_price = "";

        var data = JSON.parse(products);

        $('.product-list').html('');

        for(var i=0; i<3; i++) {
            if($('.category-filter').eq(i).is(":checked")){
                category_filter.push($('.category-filter').eq(i).val());
            }
        }

        if(($('#from-price').val()&&!$('#to-price').val())||(!$('#from-price').val()&&$('#to-price').val())){
            swal(
                'Ooops!',
                'Please complete the price range',
                'warning'
            )
        }else if($('#from-price').val()&&$('#to-price').val()) {
            from_price = $('#from-price').val();
            to_price = $('#to-price').val()
        }

        if(category_filter.length){
            for(var j=0; j<category_filter.length; j++){
                for(var i=0; i<data.products.length; i++) {
                    if(from_price){
                        if(data.products[i].category===category_filter[j]&&from_price<=data.products[i].price&&to_price>=data.products[i].price){
                            product_html += "<div class='shoe-container'>"+
                                                "<img src='"+data.products[i].img_url+"' title='"+data.products[i].title+"'>"+
                                                "<h4>"+data.products[i].title+"</h4>"+
                                                "<p>P"+data.products[i].price+"</p>"+
                                            "</div>";
                        }
                    } else {
                        if(data.products[i].category===category_filter[j]){
                            product_html += "<div class='shoe-container'>"+
                                                "<img src='"+data.products[i].img_url+"' title='"+data.products[i].title+"'>"+
                                                "<h4>"+data.products[i].title+"</h4>"+
                                                "<p>P"+data.products[i].price+"</p>"+
                                            "</div>";
                        } 
                    }
                }
            }
            $('.product-list').html(product_html);
        }else{
            swal(
                'Ooops!',
                'Please select a category',
                'warning'
            )
        }
    })

    $('#content-wrapper').on('click' ,'.shoe-container' ,function(){
        swal({
            title: $(this).children('h4').text(),
            text: $(this).children('p').text(),
            imageUrl: $(this).children('img').attr('src'),
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: $(this).children('h4').text(),
            animation: false,
            showConfirmButton: false
          })
    });
});