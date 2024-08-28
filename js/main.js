//   loading spinner start
  $(window).on('load', function() {
    $('#loading').fadeOut('slow', function() {
      $('#content').css('visibility', 'visible');
    });
  });
//   loading spinner end

// animation start
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

// animation end

// navbar animation start
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
// navbar animation end

// Carousel Start
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
// Carousel End

// Modal Start
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
// Modal End


// Payment Section Add Card Start
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
// Payment Section Add Card End

// International Phone Num Input section start
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
	"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
// International Phone Num Input section End

document.addEventListener('DOMContentLoaded', function() {
    const donationTypeRadios = document.querySelectorAll('input[name="donation-type"]');
    const monetaryDonationSection = document.getElementById('monetary-donation');
    const equipmentDonationSection = document.getElementById('equipment-donation');
    const paymentMethodsSection = document.getElementById('payment-methods');
  
    // Initially hide all donation-specific sections
    monetaryDonationSection.style.display = 'none';
    equipmentDonationSection.style.display = 'none';
    paymentMethodsSection.style.display = 'none';
  
    // Function to show or hide sections based on the selected donation type
    function updateDonationSections() {
      const selectedDonationType = document.querySelector('input[name="donation-type"]:checked');
      if (selectedDonationType) {
        if (selectedDonationType.value === 'monetary') {
          monetaryDonationSection.style.display = 'block';
          paymentMethodsSection.style.display = 'block';
          equipmentDonationSection.style.display = 'none';
        } else if (selectedDonationType.value === 'equipment') {
          equipmentDonationSection.style.display = 'block';
          monetaryDonationSection.style.display = 'none';
          paymentMethodsSection.style.display = 'none';
        }
      }
    }
  
    // Add event listener to update sections when the donation type changes
    donationTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateDonationSections);
    });
});
  

// Function to update the total quantity of equipment
function updateTotalEquipmentQuantity() {
    let totalQuantity = 0;

    // Select all equipment quantity input fields and calculate the total
    document.querySelectorAll('input[name="equipment-quantity[]"]').forEach(input => {
        totalQuantity += parseInt(input.value) || 0; // Ensure NaN is handled by defaulting to 0
    });

    // Update the total quantity display
    document.getElementById('equipment-quantity-total').value = totalQuantity;
    document.getElementById('equipment-quantity-total-1').value = totalQuantity;
    document.getElementById('equipment-quantity-total-2') = totalQuantity;
}

// Event listener to add new equipment fields dynamically
document.getElementById('add-equipment').addEventListener('click', function() {
    const equipmentFields = document.getElementById('equipment-fields');
    const newEquipmentGroup = document.createElement('div');
    newEquipmentGroup.classList.add('equipment-group');
    newEquipmentGroup.innerHTML = `
        <label for="equipment-type">Type:</label>
        <input type="text" name="equipment-type[]" class="form-input" placeholder="e.g., Golf Clubs">
        
        <label for="equipment-quantity">Quantity:</label>
        <input type="number" name="equipment-quantity[]" class="form-input equipment-quantity" placeholder="e.g., 5">

        <button type="button" class="remove-equipment">Remove</button>
    `;
    
    equipmentFields.appendChild(newEquipmentGroup);

    // Attach event listener to new quantity input to update total quantity
    newEquipmentGroup.querySelector('input[name="equipment-quantity[]"]').addEventListener('input', updateTotalEquipmentQuantity);

    // Attach event listener to the remove button to handle dynamic deletion
    newEquipmentGroup.querySelector('.remove-equipment').addEventListener('click', function() {
        newEquipmentGroup.remove();
        updateTotalEquipmentQuantity();  // Update total quantity after removal
    });
});

// Attach event listeners to all initial equipment quantity inputs to update total quantity
document.querySelectorAll('input[name="equipment-quantity[]"]').forEach(input => {
    input.addEventListener('input', updateTotalEquipmentQuantity);
});

// Initial call to set the total quantity based on the default state of the form
updateTotalEquipmentQuantity();

 
// Automatic total and Radio buttons (Payment Section)
document.addEventListener("DOMContentLoaded", function() {
    var amountInput = document.getElementById("amount");
    var totalInput = document.getElementById("total");
    var totalDisplay = document.getElementById("total-display");
    var radioButtons = document.querySelectorAll("input[name='preset-amount']");
    var radioOptions = document.querySelectorAll(".radio-option");

    // Function to update the total amount and display
    function updateTotalAmount() {
        var amount = amountInput.value;
        totalInput.value = amount;
        totalDisplay.textContent = `$${amount}`;
    }

    // Update total when amount input changes manually
    amountInput.addEventListener("input", updateTotalAmount);

    // Update total when preset amount is selected
    radioButtons.forEach(function(radio, index) {
        radio.addEventListener("change", function() {
            if (this.checked) {
                amountInput.value = this.value;
                updateTotalAmount(); // Automatically update total
                radioOptions.forEach(function(option) {
                    option.classList.remove("selected");
                });
                radioOptions[index].classList.add("selected");
            }
        });
    });

    // Initialize the total amount on page load
    updateTotalAmount();
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



