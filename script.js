window.addEventListener('load', function() {
    var progressBar = document.querySelector('.progress');
    var startDate = new Date(new Date().getFullYear() + '-01-01'); // Specify the start date
    var endDate = new Date(new Date().getFullYear() + '-12-31'); // Specify the end date
    var currentDate = new Date();
    var progress = ((currentDate - startDate) / (endDate - startDate)) * 100;
    progressBar.style.width = progress + '%';

    var percentage = Math.round(progress); // Round the progress to the nearest whole number

    var yearText = new Date().getFullYear();

    var percentageElement = document.getElementById('percentage'); // Get the #percentage element
    percentageElement.textContent = yearText + ' is ' + percentage + '% Complete.'; // Set the text content of the element
});