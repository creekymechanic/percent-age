window.addEventListener('load', function() {
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
    }
    
    // Call the updateProgress function initially
    updateProgress();
    
    // Update the progress every second
    setInterval(updateProgress, 10);
});


//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////CONFETTI//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

