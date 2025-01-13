const accordionsElement = document.querySelectorAll('.accordion-container');

accordionsElement.forEach( (accordion) => {
    accordion.addEventListener('click' , function() { /*do not use arrow functions if you are using myObject of this  */
        const elementData = this.nextElementSibling;
        elementData.classList.toggle('show');

        //get the icon and add animation
        const icon = this.querySelector('i');
        icon.classList.toggle('animate');

    });
});