'use strict';

$(document).ready(function () {
    var $body = $('body');

    //Fullscreen Launch function
    function launchIntoFullscreen(element) {

        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    //Fullscreen exit function
    function exitFullscreen() {

        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }


    $body.on('click', '[data-ma-action]', function (e) {
        e.preventDefault();

        var $this = $(this);
        var action = $this.data('ma-action');
        var target = '';

        switch (action) {
            /*-------------------------------------------
                Search
            ---------------------------------------------*/
            // Open
            case 'search-open':
                $('.search').addClass('search--toggled');
                break;

            // Close
            case 'search-close':
                $('.search').removeClass('search--toggled');
                break;


            /*-------------------------------------------
                Aside
            ---------------------------------------------*/
            // Open
            case 'aside-open':
                target = $this.data('ma-target');
                $this.addClass('toggled')
                $(target).addClass('toggled');
                $('.content, .header').append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target='+target+' />');
                break;


            case 'aside-close':
                target = $this.data('ma-target');
                $('[data-ma-action="aside-open"], '+target).removeClass('toggled');
                $('.content, .header').find('.ma-backdrop').remove();
                break;


            /*-------------------------------------------
                Full screen browse
            ---------------------------------------------*/
            case 'fullscreen':
                launchIntoFullscreen(document.documentElement);
                break;


            /*-------------------------------------------
                Print
            ---------------------------------------------*/
            case 'print':
                window.print();
                break;


            /*-------------------------------------------------
                Clear local storage (SweetAlert 2 required)
            --------------------------------------------------*/
            case 'clear-localstorage':
                swal({
                    title: 'Are you sure?',
                    text: 'This can not be undone!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Yes, clear it',
                    cancelButtonText: 'No, cancel'
                }).then(function() {
                    localStorage.clear();
                    swal(
                        'Cleared!',
                        'Local storage has been successfully cleared',
                        'success'
                    );
                });
                break;


            /*-------------------------------------------
                Login
            --------------------------------------------*/
            case 'login-switch':
                target = $this.data('ma-target');
                $('.login__block').removeClass('active');
                $(target).addClass('active');
                break;


            /*-------------------------------------------
                Notifications clear
            --------------------------------------------*/
            case 'notifications-clear':
                e.stopPropagation();

                var items = $('.top-nav__notifications .listview__item');
                var itemsCount = items.length;
                var index = 0;
                var delay = 150;

                $this.fadeOut();

                items.each(function () {
                    var currentItem = $(this);
                    setTimeout(function () {
                        currentItem.addClass('animated fadeOutRight');
                    }, index+=delay);
                });

                setTimeout(function () {
                    items.remove();
                    $('.top-nav__notifications').addClass('top-nav__notifications--cleared');
                }, itemsCount*180);
                break;


            /*------------------------------------------------
                Toolbar search toggle
            -------------------------------------------------*/

            // Open
            case 'toolbar-search-open':
                $(this).closest('.toolbar').find('.toolbar__search').fadeIn(200);
                $(this).closest('.toolbar').find('.toolbar__search input').focus();
                break;

            // Close
            case 'toolbar-search-close':
                $(this).closest('.toolbar').find('.toolbar__search input').val('');
                $(this).closest('.toolbar').find('.toolbar__search').fadeOut(200);
                break;
        }
    }); 
});

/*------------------------------------------------
    Page Loader
-------------------------------------------------*/
$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
    }, 500);
});


$(document).ready(function () {
    /*------------------------------------------------
        Theme Switch
    -------------------------------------------------*/
    $('body').on('change', '.theme-switch input:radio', function () {
        var theme = $(this).val();

        $('body').attr('data-ma-theme', theme);
    });


    /*------------------------------------------------
        Search
    -------------------------------------------------*/

    // Active Stat
    $('body').on('focus', '.search__text', function () {
        $(this).closest('.search').addClass('search--focus');
    });

    // Clear
    $('body').on('blur', '.search__text', function () {
        $(this).val('');
        $(this).closest('.search').removeClass('search--focus');
    });


    /*------------------------------------------------
        Sidebar toggle menu
    -------------------------------------------------*/
    $('body').on('click', '.navigation__sub > a', function (e) {
        e.preventDefault();

        $(this).parent().toggleClass('navigation__sub--toggled');
        $(this).next('ul').slideToggle(250);
    });


    /*------------------------------------------------
        Form group blue line
    -------------------------------------------------*/
    if($('.form-group--float')[0]) {
        $('.form-group--float').each(function () {
            var p = $(this).find('.form-control').val()

            if(!p.length == 0) {
                $(this).find('.form-control').addClass('form-control--active');
            }
        });

        $('body').on('blur', '.form-group--float .form-control', function(){
            var i = $(this).val();

            if (i.length == 0) {
                $(this).removeClass('form-control--active');
            }
            else {
                $(this).addClass('form-control--active');
            }
        });
    }


    /*------------------------------------------------
        Clock
    -------------------------------------------------*/
    if($('.time')[0]) {
        var newDate = new Date();
        newDate.setDate(newDate.getDate());

        setInterval( function() {
            var seconds = new Date().getSeconds();
            $('.time__sec').html(( seconds < 10 ? '0' : '' ) + seconds);
        },1000);

        setInterval( function() {
            var minutes = new Date().getMinutes();
            $('.time__min').html(( minutes < 10 ? '0' : '' ) + minutes);
        },1000);

        setInterval( function() {
            var hours = new Date().getHours();
            $('.time__hours').html(( hours < 10 ? '0' : '' ) + hours);
        }, 1000);
    }
});

// Disable Dropzone auto discover
if($('#dropzone-upload')[0]) {
    Dropzone.autoDiscover = false;
}

$(document).ready(function () {

    /*------------------------------------------------
        Data Table (DataTables)
    ------------------------------------------------*/
    if($('#data-table')[0]) {

        // Add custom buttons
        var dataTableButtons =  '<div class="dataTables_buttons hidden-sm-down actions">' +
                                    '<span class="actions__item zmdi zmdi-print" data-table-action="print" />' +
                                    '<span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" />' +
                                    '<div class="dropdown actions__item">' +
                                        '<i data-toggle="dropdown" class="zmdi zmdi-download" />' +
                                        '<ul class="dropdown-menu dropdown-menu-right">' +
                                            '<a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a>' +
                                            '<a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a>' +
                                        '</ul>' +
                                    '</div>' +
                                '</div>';

        // Initiate data-table
        $('#data-table').DataTable({
            autoWidth: false,
            responsive: true,
            lengthMenu: [[15, 30, 45, -1], ['15 Rows', '30 Rows', '45 Rows', 'Everything']],
            language: {
                searchPlaceholder: "Search for records..."
            },
            "sDom": '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: 'Export Data'
                },
                {
                    extend: 'csvHtml5',
                    title: 'Export Data'
                },
                {
                    extend: 'print',
                    title: 'Material Admin'
                }
            ],
            "initComplete": function(settings, json) {
                $(this).closest('.dataTables_wrapper').find('.dataTables__top').prepend(dataTableButtons);
            }
        });


        // Add blue line when search is active
        $('.dataTables_filter input[type=search]').focus(function () {
            $(this).closest('.dataTables_filter').addClass('dataTables_filter--toggled');
        });

        $('.dataTables_filter input[type=search]').blur(function () {
            $(this).closest('.dataTables_filter').removeClass('dataTables_filter--toggled');
        });


        // Data table buttons
        $('body').on('click', '[data-table-action]', function (e) {
            e.preventDefault();

            var exportFormat = $(this).data('table-action');

            if(exportFormat === 'excel') {
                $(this).closest('.dataTables_wrapper').find('.buttons-excel').trigger('click');
            }
            if(exportFormat === 'csv') {
                $(this).closest('.dataTables_wrapper').find('.buttons-csv').trigger('click');
            }
            if(exportFormat === 'print') {
                $(this).closest('.dataTables_wrapper').find('.buttons-print').trigger('click');
            }
            if(exportFormat === 'fullscreen') {
                var parentCard = $(this).closest('.card');

                if(parentCard.hasClass('card--fullscreen')) {
                    parentCard.removeClass('card--fullscreen');
                    $('body').removeClass('data-table-toggled');
                }
                else {
                    parentCard.addClass('card--fullscreen')
                    $('body').addClass('data-table-toggled');
                }
            }
        });
    }


    /*------------------------------------------------
        Autosize Textarea (Autosize)
    ------------------------------------------------*/
    if($('.textarea-autosize')[0]) {
        autosize($('.textarea-autosize'));
    }


    /*------------------------------------------------
        Input Mask (jQuery Mask Plugin)
    ------------------------------------------------*/
    if ($('input-mask')[0]) {
        $('.input-mask').mask();
    }


    /*------------------------------------------------
        Select 2
    ------------------------------------------------*/
    if($('select.select2')[0]) {
        var select2parent = $('.select2-parent')[0] ? $('.select2-parent') : $('body');

        $('select.select2').select2({
            dropdownAutoWidth: true,
            width: '100%',
            dropdownParent: select2parent
        });
    }


    /*------------------------------------------------
        Drag n Drop file upload (DropzoneJs)
    ------------------------------------------------*/
    if($('#dropzone-upload')[0]) {
        $('#dropzone-upload').dropzone({
            url: "/file/post",
            addRemoveLinks: true
        });
    }


    /*------------------------------------------------
        Datetime picker (Flatpickr)
    ------------------------------------------------*/
    // Date and time
    if($('.datetime-picker')[0]) {
        $('.datetime-picker').flatpickr({
            enableTime: true,
            nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
            prevArrow: '<i class="zmdi zmdi-long-arrow-left" />'
        });
    }

    // Date only
    if($('.date-picker')[0]) {
        $('.date-picker').flatpickr({
            enableTime: false,
            nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
            prevArrow: '<i class="zmdi zmdi-long-arrow-left" />'
        });
    }

    // Time only
    if($('.time-picker')[0]) {
        $('.time-picker').flatpickr({
            noCalendar: true,
            enableTime: true
        });
    }


    /*------------------------------------------------
        Input slider (noUiSlider)
    ------------------------------------------------*/
    // Single
    if($('#input-slider')[0]) {
        var slider = document.getElementById ('input-slider');

        noUiSlider.create (slider, {
            start: [20],
            connect: 'lower',
            range: {
                'min': 0,
                'max': 100
            }
        });

        slider.noUiSlider.on('update', function( values, handle ) {
            document.getElementById('input-slider-value').value = values[handle];
        });
    }

    // Range
    if($('#input-slider-range')[0]) {
        var sliderRange = document.getElementById ('input-slider-range');
        var sliderRangeUpper = document.getElementById('input-slider-range-value-1');
        var sliderRangeLower = document.getElementById('input-slider-range-value-2');
        var sliderRangeInputs = [sliderRangeUpper, sliderRangeLower]

        noUiSlider.create(sliderRange, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });

        sliderRange.noUiSlider.on('update', function( values, handle ) {
            sliderRangeInputs[handle].value = values[handle];
        });
    }

    // Theme examples
    if($('.input-slider')[0]) {
        var sliderThemes = document.getElementsByClassName('input-slider');

        for ( var i = 0; i < sliderThemes.length; i++ ) {

            noUiSlider.create(sliderThemes[i], {
                start: [20],
                connect: 'lower',
                range: {
                    'min': 0,
                    'max': 100
                }
            });
        }
    }


    /*------------------------------------------------
        Color picker (Bootstrap color picker)
    -------------------------------------------------*/
    if ($('.color-picker')[0]) {
        $('.color-picker').each(function () {
            var horizontal = $(this).data('horizontal') || false;

            $(this).colorpicker({
                horizontal: horizontal
            });
        });

        $('body').on('change', '.color-picker', function () {
            $(this).next('.color-picker__preview').css('backgroundColor', $(this).val());
        });
    }


    /*------------------------------------------------
        WYSIWYG editor (Trumbowyg)
    -------------------------------------------------*/
    if($('.wysiwyg-editor')[0]) {
        $('.wysiwyg-editor').trumbowyg({
            autogrow: true
        });
    }


    /*------------------------------------------------
        Lightbox (LightGallery)
    -------------------------------------------------*/
    if ($('.lightbox')[0]) {
        $('.lightbox').lightGallery({
            enableTouch: true
        });
    }


    /*------------------------------------------------
        Popovers (Bootstrap)
    -------------------------------------------------*/
    if($('[data-toggle="popover"]')[0]) {
        $('[data-toggle="popover"]').popover();
    }


    /*------------------------------------------------
        Tooltip (Bootstrap)
    -------------------------------------------------*/
    if($('[data-toggle="tooltip"]')[0]) {
        $('[data-toggle="tooltip"]').tooltip();
    }


    /*------------------------------------------------
        Calendar Widget
    ------------------------------------------------*/
    if($('.widget-calendar__body')[0]) {
        $('.widget-calendar__body').fullCalendar({
            contentHeight: 'auto',
            theme: false,
            buttonIcons: {
                prev: ' zmdi zmdi-long-arrow-left',
                next: ' zmdi zmdi-long-arrow-right'
            },
            header: {
                right: 'next',
                center: 'title, ',
                left: 'prev'
            },
            defaultDate: '2016-08-12',
            editable: true,
            events: [
                {
                    title: 'Dolor Pellentesque',
                    start: '2016-08-01',
                    className: 'bg-cyan'
                },
                {
                    title: 'Purus Nibh',
                    start: '2016-08-07',
                    className: 'bg-amber'
                },
                {
                    title: 'Amet Condimentum',
                    start: '2016-08-09',
                    className: 'bg-green'
                },
                {
                    title: 'Tellus',
                    start: '2016-08-12',
                    className: 'bg-blue'
                },
                {
                    title: 'Vestibulum',
                    start: '2016-08-18',
                    className: 'bg-cyan'
                },
                {
                    title: 'Ipsum',
                    start: '2016-08-24',
                    className: 'bg-teal'
                },
                {
                    title: 'Fringilla Sit',
                    start: '2016-08-27',
                    className: 'bg-blue'
                },
                {
                    title: 'Amet Pharetra',
                    url: 'http://google.com/',
                    start: '2016-08-30',
                    className: 'bg-amber'
                }
            ]
        });

        //Display Current Date as Calendar widget header
        var mYear = moment().format('YYYY');
        var mDay = moment().format('dddd, MMM D');
        $('.widget-calendar__year').html(mYear);
        $('.widget-calendar__day').html(mDay);
    }

    /*------------------------------------------------
        Notes line clamp (Succinct)
    ------------------------------------------------*/
    if($('.notes__body')[0]) {
        var clamp;

        $('.notes__body').each(function(index, element) {
            if($(this).prev().is('.notes__title')) {
                clamp = 4;
            }
            else {
                clamp = 6;
            }

            $clamp(element, { clamp: clamp });
        });
    }


    /*----------------------------------------------------------
        Custom Scrollbars (jQuery.scrollbar and ScrollLock)
    -----------------------------------------------------------*/
    if($('.scrollbar-inner')[0]) {
        $('.scrollbar-inner').scrollbar().scrollLock();
    }


    /*------------------------------------------------
        Tree view - jqTree
    ------------------------------------------------*/
    var treeviewData = [
        {
            name: 'node1',
            children: [
                {
                    name: 'node1_1',
                    children: [
                        { name: 'node1_1_1' },
                        { name: 'node1_1_2' },
                        { name: 'node1_1_3' }
                    ]
                },
                { name: 'node1_2' },
                { name: 'node1_3' }
            ]
        },
        {
            name: 'node2',
            children: [
                { name: 'node2_1' },
                { name: 'node2_2' },
                { name: 'node2_3' }
            ]
        },
        {
            name: 'node3',
            children: [
                { name: 'node3_1' },
                { name: 'node3_2' },
                { name: 'node3_3' }
            ]
        }
    ];

    var treeviewSimpleData = [
        {
            name: 'node1',
            children: [
                { name: 'node1_1' },
                { name: 'node1_2' },
                { name: 'node1_3' }
            ]
        },
        {
            name: 'node2',
            children: [
                { name: 'node2_1' },
                { name: 'node2_2' },
                { name: 'node2_3' }
            ]
        }
    ];

    var treeviewEscapeData = [
        {
            label: 'node1',
            children: [
                { name: '<a href="example1.html">node1_1</a>' },
                { name: '<a href="example2.html">node1_2</a>' },
                '<a href="example3.html">Example </a>'
            ]
        }
    ];

    if($('.treeview')[0]) {
        $('.treeview').tree({
            data: treeviewData,
            closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
            openedIcon: $('<i class="zmdi zmdi-minus"></i>')
        });
    }

    if($('.treeview-expanded')[0]) {
        $('.treeview-expanded').tree({
            data: treeviewSimpleData,
            autoOpen: true,
            closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
            openedIcon: $('<i class="zmdi zmdi-minus"></i>')
        });
    }

    if($('.treeview-drag')[0]) {
        $('.treeview-drag').tree({
            data: treeviewSimpleData,
            dragAndDrop: true,
            autoOpen: true,
            closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
            openedIcon: $('<i class="zmdi zmdi-minus"></i>')
        });
    }

    if($('.treeview-drag')[0]) {
        $('.treeview-drag').tree({
            data: treeviewSimpleData,
            dragAndDrop: true,
            autoOpen: true,
            closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
            openedIcon: $('<i class="zmdi zmdi-minus"></i>')
        });
    }

    if($('.treeview-escape')[0]) {
        $('.treeview-escape').tree({
            data: treeviewEscapeData,
            autoEscape: false,
            autoOpen: true,
            closedIcon: $('<i class="zmdi zmdi-plus"></i>'),
            openedIcon: $('<i class="zmdi zmdi-minus"></i>')
        });
    }


    /*------------------------------------------------
        Ratings - RateYo!
    ------------------------------------------------*/
    if($('.rating')[0]) {
        $('.rating').each(function () {
            var rating = $(this).data('rating');

            $(this).rateYo({
                rating: rating,
                normalFill: '#e9ecef',
                ratedFill: '#ffc721'
            });
        });
    }


    /*------------------------------------------------
        Form text counter - jQuery Text Counter
    ------------------------------------------------*/
    if($('.text-counter')[0]) {
        $('.text-counter').each(function () {
            var minLength = $(this).data('min-length') || 0;
            var maxLength = $(this).data('max-length');

            $(this).textcounter({
                min: minLength,
                max: maxLength,
                countDown: true,
                inputErrorClass: 'is-invalid',
                counterErrorClass: 'text-red'
            });
        });
    }

});