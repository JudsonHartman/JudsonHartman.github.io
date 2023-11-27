document.addEventListener('DOMContentLoaded', function () {
    var moreButtons = document.querySelectorAll('.more-button');

    moreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var textContainer = button.parentElement;
            var hiddenText = textContainer.querySelector('.hidden-text');

            if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
                hiddenText.style.display = 'block';
                button.textContent = 'See Less';
            } else {
                hiddenText.style.display = 'none';
                button.textContent = 'See More';
            }
        });
    });
});