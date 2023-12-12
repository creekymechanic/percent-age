window.addEventListener('load', function() {

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////THEME PICKER//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

    // Get all the theme buttons
    var themeButtons = document.querySelectorAll('.theme-button');

    // Add click event listener to each theme button
    themeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var selectedTheme = button.dataset.theme;
            applyTheme(selectedTheme);
        });
    });

    // Function to apply the selected theme
    function applyTheme(theme) {
        // Remove existing theme classes
        document.body.classList.remove('theme1', 'theme2', 'theme3');

        // Add the selected theme class
        document.body.classList.add(theme);
    }


//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////DATE CALCULATIONS//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

var progressBar = document.querySelector('.progress');
var startDate = new Date(new Date().getFullYear() + '-01-01'); // Specify the start date
var endDate = new Date(new Date().getFullYear() + '-12-31'); // Specify the end date

function updateProgress() {
    var currentDate = new Date();
    var totalTime = (endDate - startDate) / 1000; // Convert milliseconds to seconds
    var elapsedTime = (currentDate - startDate) / 1000; // Convert milliseconds to seconds
    var progress = ((elapsedTime / totalTime) * 100).toFixed(7);
    progressBar.style.width = progress + '%';
    var yearText = new Date().getFullYear();
    var percentageElement = document.getElementById('percentage'); // Get the #percentage element
    percentageElement.textContent = yearText + ' is ' + progress + '% complete.'; // Set the text content of the element

    // Check if 'progress' is greater than or equal to 100%
    if (progress == 100) {
        // Add a class to the animation text to start the animation
        document.querySelector('.animation-text').classList.add('animate');
      }
}

// Call the updateProgress function initially
updateProgress();

// Update the progress every second
setInterval(updateProgress, 10);

//var progressBar = document.querySelector('.progress');
//var startDate = new Date(new Date().getFullYear() + '-01-01'); // Specify the start date
//var endDate = new Date(new Date().getFullYear() + '-12-31'); // Specify the end date
//var totalTime = 30; // Total time in seconds
//
//function updateProgress() {
//    var currentTime = new Date();
//    var elapsedTime = (currentTime - startDate) / 1000; // Convert milliseconds to seconds
//    var progress = (elapsedTime / totalTime) * 100;
//    progressBar.style.width = progress + '%';
//    var yearText = new Date().getFullYear();
//    var percentageElement = document.getElementById('percentage');
//    percentageElement.textContent = yearText + ' is ' + progress + '% complete.';
//
//    if (progress >= 69) {
//        clearInterval(progressInterval); // Stop the interval
//        const animatedText = document.getElementById('nice-text');
//        let fontSize = 24; // Initial font size
//        let opacity = 0; // Initial opacity
//        const targetFontSize = 48; // Target font size
//        const targetOpacity = 1; // Target opacity
//        const duration = 10000; // Animation duration in milliseconds
//
//        function animateText() {
//            if (fontSize < targetFontSize) {
//                fontSize += 1; // Increase font size
//                animatedText.style.fontSize = fontSize + 'px';
//                animatedText.style.transform = 'translate(-50%, -50%) scale(' + (fontSize / targetFontSize) + ')';
//            }
//
//            if (opacity < targetOpacity) {
//                opacity += 0.02; // Increase opacity
//                animatedText.style.opacity = opacity;
//            }
//
//            if (fontSize < targetFontSize || opacity < targetOpacity) {
//                requestAnimationFrame(animateText);
//            }
//        }
//
//        // Start the animation
//        animateText();
//    }
//}
//
//// Call the updateProgress function initially
//updateProgress();
//
//// Update the progress every 300 milliseconds
//var progressInterval = setInterval(updateProgress, 300);
});