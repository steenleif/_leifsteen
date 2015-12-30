$(document).ready(function()
   {         
      //
      // jQuery SmoothScroll | Version 18-04-2013
      //

      $('a[href*=#]').click(function() {

         // skip SmoothScroll on links inside sliders or scroll boxes also using anchors or if there is a javascript call
         if($(this).parent().hasClass('scrollable_navigation') || $(this).attr('href').indexOf('javascript')>-1) return;

         // duration in ms
         var duration=1000;

         // easing values: swing | linear
         var easing='swing';

         // get / set parameters
         var newHash=this.hash;
         var oldLocation=window.location.href.replace(window.location.hash, '');
         var newLocation=this;

         // make sure it's the same location      
         if(oldLocation+newHash==newLocation)
         {
           // get target
           var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top -60;

           //change this number to create the additional off set
           var customoffset = 60;

           // adjust target for anchors near the bottom of the page
           if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();

           // animate to target and set the hash to the window.location after the animation
           $('html, body').animate({scrollTop: target}, duration, easing, customoffset, function() {

               // add new hash to the browser location
               window.location.href=newLocation;
            });

            // cancel default click action
            return false;
         }
      });
   });

$('.chapter')
                .waypoint(function(direction) {
                    $('a[href="#' + this.id + '"]').toggleClass('active', direction === 'down');
                }, {
        //          context: '#wrapper', // Removed this, see next post!
                    offset: '100%'
                })
                .waypoint(function(direction) {
                    $('a[href="#' + this.id + '"]').toggleClass('active', direction === 'up');
                }, {
        //          context: '#wrapper', // Removed this, see next post!
                    offset: function() {
                    return -$(this).height();
                }
            });
