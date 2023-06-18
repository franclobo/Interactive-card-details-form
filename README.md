# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

|Desktop version | Mobile vwrsion |
|---|---|
| ![image](https://github.com/franclobo/Interactive-card-details-form/assets/58642949/d5ee6722-41d4-42b6-97f2-59f49bb3500f) | ![image](https://github.com/franclobo/Interactive-card-details-form/assets/58642949/d58af831-1551-49e1-939f-826a2f687144) |

### Links

- Solution URL: [Interactive-card-details-form](https://github.com/franclobo/Interactive-card-details-form)
- Live Site URL: [Interactive cards details solution](https://interactive-cards-details-solution.netlify.app/)

## My process

1. Initialize the project as a public repository on [GitHub](https://github.com/). Creating a repo to share the code with the community.
2. Configure the repository to publish the code to a web address.
3. Look through the designs to start planning out how to tackle the project.
4. Before adding any styles, structure the content with HTML.
5. Write out the base styles for the project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down.
7. Add the event listeners using DOM manipulation.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

```html
<h1>Some HTML code I'm proud of is using the best practices of HTML5 semantic tags.</h1>
<section class="card">
        <img class="card-front" src="./images/bg-card-front.png" alt="card front">
        <div class="card__logo">
          <img class="img-card-logo" src="./images/card-logo.svg" alt="card logo">
        </div>
        <div class="card-info">
          <div>
            <p class="card-number">0000 0000 0000 0000</p>
          </div>
          <div class="card-data">
            <p class="card-data__name">JANE APPLESSED</p>
            <p class="card-data__date">00/00</p>
          </div>
        </div>
      </section>
```
```css

@keyframes circular-transition {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
```
```js
window.addEventListener('load', () => {
  Content();
  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Realiza la validación manualmente
    if (form.checkValidity()) {
      Confirm();
      content.style.display = 'none';
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje de error o tomar alguna otra acción
      alert('Por favor, completa todos los campos requeridos.');
    }
  });

  const continueBtn = document.getElementById('continue');
  continueBtn.addEventListener('click', () => {
    location.reload();
  });
});
```

### Continued development

- Use an API to make the form functional for a real app.
- Add a backend to the project to store the data.
- Add a database to the project to store the data.

### Useful resources

- [Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) - This helped me to create the animations. I really liked this and will use it going forward.
- [DOM manipulation](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events) - This is an amazing article which helped me finally understand DOm manipulation. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Portfolio](https://borja-lobato-francisco-potfolio.netlify.app/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I want to acknowledge to Frontend Mentor team. I'm really grateful for the opportunity to learn and improve my skills. I'm looking forward to the next challenge.
