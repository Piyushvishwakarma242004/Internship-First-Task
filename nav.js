window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scroll-nav');
    } else {
        navbar.classList.remove('scroll-nav');
    }
  });

 // Add click event listener to li element with id 'item1'
document.getElementById('homeId').addEventListener('click', function() {
   // alert('You clicked on Home');
   window.location.href = 'home.html'
});

// Add click event listener to li element with id 'item2'
document.getElementById('aboutId').addEventListener('click', function() {
    alert('You clicked on About');
});

// Add click event listener to li element with id 'item2'
document.getElementById('serviceId').addEventListener('click', function() {
    alert('You clicked on Service');
});

// Add click event listener to li element with id 'item3'
document.getElementById('contactId').addEventListener('click', function() {
    alert('You clicked on Contact');
});
