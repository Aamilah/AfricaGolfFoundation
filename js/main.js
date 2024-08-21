  $(window).on('load', function() {
    $('#loading').fadeOut('slow', function() {
      $('#content').css('visibility', 'visible');
    });
  });

wow = new WOW();
wow.init();
$(document).ready(function(e) {

$('#video-icon').on('click',function(e){
e.preventDefault();
$('.video-popup').css('display','flex');
$('.iframe-src').slideDown();
});
$('.video-popup').on('click',function(e){
var $target = e.target.nodeName;
var video_src = $(this).find('iframe').attr('src');
if($target != 'IFRAME'){
$('.video-popup').fadeOut();
$('.iframe-src').slideUp();
$('.video-popup iframe').attr('src'," ");
$('.video-popup iframe').attr('src',video_src);
}
});

$('.slider').bxSlider({
pager: false
});
});

$(window).on("scroll",function () {

var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo-small.jpg');
navbar.addClass("nav-scroll");

}else{
$('.navbar-logo img').attr('src','images/logo-small-bg.png');
navbar.removeClass("nav-scroll");
}

});
$(window).on("load",function (){
var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo2.png');
navbar.addClass("nav-scroll");
}else{
$('.navbar-logo img').attr('src','images/logo1.jpg');
navbar.removeClass("nav-scroll");
}

$.scrollIt({

easing: 'swing',      // the easing function for animation
scrollTime: 900,       // how long (in ms) the animation takes
activeClass: 'active', // class given to the active nav element
onPageChange: null,    // function(pageIndex) that is called when page is changed
topOffset: -63
});
});
$(".hero-slider").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 500,
		autoplayTimeout:3500,
		singleItem: true,
		autoplayHoverPause:true,
		items:1,
		nav:true,
		dots:false,
	});
$('.article-slider').owlCarousel({
		autoplay:true,
		autoplayTimeout:4000,
		margin:15,
		smartSpeed:300,
		autoplayHoverPause:true,
		loop:true,
		nav:true,
		dots:false,
		responsive:{
			300: {
				items:1,
			},
			480: {
				items:2,
			},
			768: {
				items:2,
			},
			1170: {
				items:4,
			},
		}
	});

	$(".custom-carousel").owlCarousel({
		autoWidth: true,
		loop: true
	  });
	  $(document).ready(function () {
		$(".custom-carousel .item").click(function () {
		  $(".custom-carousel .item").not($(this)).removeClass("active");
		  $(this).toggleClass("active");
		});
	});

	// Testimonials carousel
	$(".testimonial-carousel").owlCarousel({
		autoplay: false,
		smartSpeed: 1000,
		center: true,
		dots: false,
		loop: true,
		nav : true,
		navText : [
			'<i class="bi bi-arrow-left"></i>',
			'<i class="bi bi-arrow-right"></i>'
		],
		responsive: {
			0:{
				items:1
			},
			768:{
				items:2
			}
		}
	});
        // Header carousel
        $(".modal-carousel").owlCarousel({
            autoplay: false,
            animateOut: 'fadeOutLeft',
            items: 1,
            dots: true,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
    // script.js
    document.addEventListener('DOMContentLoaded', (event) => {
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');

    const openModal1Btn = document.getElementById('openModal1Btn');
    const openModal2Btn = document.getElementById('openModal2Btn');
    const openModal3Btn = document.getElementById('openModal3Btn');

    const closeBtns = document.querySelectorAll('.closeBtn');

    // Functions to open the modals
    openModal1Btn.addEventListener('click', () => {
        modal1.style.display = 'block';
    });

    openModal2Btn.addEventListener('click', () => {
        modal2.style.display = 'block';
    });

    openModal3Btn.addEventListener('click', () => {
        modal3.style.display = 'block';
    });

    // Function to close the modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const modalId = event.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    // Close the modals if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target == modal1) {
            modal1.style.display = 'none';
        } else if (event.target == modal2) {
            modal2.style.display = 'none';
        } else if (event.target == modal3) {
            modal3.style.display = 'none';
        }
    });
});



	document.getElementById('add-method').addEventListener('click', function() {
    const paymentMethods = document.getElementById('payment-methods');
    const newMethod = document.createElement('div');
    newMethod.classList.add('payment-method');
    newMethod.innerHTML = `
        <label for="card-number">Card number:</label>
        <input type="text" name="card-number" required>

        <label for="expiry-date">Expires:</label>
        <input type="text" name="expiry-date" placeholder="MM/YYYY" required>

        <button type="button" class="remove-method">Remove</button>
    `;
    paymentMethods.appendChild(newMethod);

    newMethod.querySelector('.remove-method').addEventListener('click', function() {
        paymentMethods.removeChild(newMethod);
    });
});

document.querySelectorAll('.remove-method').forEach(button => {
    button.addEventListener('click', function() {
        button.parentElement.remove();
    });
});
  
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
	"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.addEventListener("DOMContentLoaded", function() {
    var amountInput = document.getElementById("amount");
    var radioButtons = document.querySelectorAll("input[name='preset-amount']");
    var radioOptions = document.querySelectorAll(".radio-option");

    radioButtons.forEach(function(radio, index) {
        radio.addEventListener("change", function() {
            if (this.checked) {
                amountInput.value = this.value;
                radioOptions.forEach(function(option) {
                    option.classList.remove("selected");
                });
                radioOptions[index].classList.add("selected");
            }
        });
    });
});
  // Get the current date
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = today.getFullYear();

  // Format the date as DD/MM/YYYY
  const currentDate = `${day}/${month}/${year}`;

  // Set the value of the date input field
  document.getElementById('date').value = currentDate;



