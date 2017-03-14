$(document).ready(function(){

            $(window).scroll(function() {  //Listen for the window's scroll event
                if (isScrolledAfterElement("#landingName")) { //if it has scrolled beyond the #content elment
                    $('nav ul').css({"background-color": "white"});
                    $('nav ul a').css("color", "Black");//Show the navigation bar
                } else {
                    $('nav ul').css({"background-color": "transparent"});
                    $('nav ul a').css("color", "transparent"); //Else hide it
                }
            });

            //Function that returns true if the window has scrolled beyond the given element
            function isScrolledAfterElement(elem) {
                var $elem = $(elem)
                var $window = $(window);
                var elemTop = $elem.offset().top;
                var docViewTop = $window.scrollTop();
                console.log('Element is : ', $elem)
                console.log('elemTop: ',elemTop)
                console.log('docViewTop: ', docViewTop)
                console.log('Current state: ', elemTop <= docViewTop)
                return 150 <= docViewTop; 
            }
        });