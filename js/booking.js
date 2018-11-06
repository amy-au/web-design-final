function paymentselect (nameselect) {
					if (nameselect) {
						credit = document.getElementById("credit").value;
						if (credit == nameselect.value) {
							document.getElementById('creditcard').style.display = 'block';
						} else document.getElementById('creditcard').style.display = 'none';
						
						cheque = document.getElementById("cheque").value;
						if (cheque == nameselect.value) {
							document.getElementById('chequepayment').style.display = 'block';
						} else document.getElementById('chequepayment').style.display = 'none';
					}
				}
				
				function openNav() {
					document.getElementById('mySidenav').style.display = 'block';
					document.getElementById('mySidenav').style.width = '100%';
					
				}
				
				function closeNav() {
					document.getElementById('mySidenav').style.display = 'none';
				}

// $(document).scroll(function() {
    // var y = $(document).scrollTop(), //get page y value 
        // rightsticky = $(".rightmenu");
    // if(y >= 320 && y<= 1344.800)  {
        // rightsticky.css({position: "fixed", "top" : "15%", "right" : "auto"});
    // } else if (y>1344.8) {
		// rightsticky.css({position: "relative", "bottom" : "10%"});
	// } else {
        // rightsticky.css("position", "relative");
    // }
// });

var windw = this;

$.fn.followTo = function (from, bumper) {
    var $this = this,
        $window = $(windw),
        $from = $(from),
        $bumper = $(bumper),
        $startPos = $from.offset().top + $from.height() - 110,
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() < $startPos + 250) { 
                $this.css({
                    position: 'absolute',
                    top: $startPos
                });
            } else if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight - 400)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 180,
					right: 0,
					'max-width' : 350
                });
            }
        };
    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};

$('.rightmenu').followTo('.top', '.bottom');
$('.phonepopup').followTo('.top', '.bottom');

