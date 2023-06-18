const content = document.getElementById('content');
const complete = document.getElementById('complete');

const Content = () => {
    content.innerHTML = `
        <form class="form" method="post" action="index.html">
          <div class="card-holder">
            <label for="cardholder-name">CARDHOLDER NAME</label>
            <input class="input-holder" type="text" id="cardholder-name" name="cardholder-name" placeholder="e.g. Jane Appleseed" required>
          </div>
          <div class="form-card-number">
            <label for="card-number">CARD NUMBER</label>
            <input class="input-number" type="text" id="card-number" name="card-number" placeholder="e.g. 1234 5678 9123 0000" required>
          </div>
          <div class="card-details">
            <div class="card-details__date">
              <label for="exp-date">EXP. DATE (MM/YY)</label>
              <div class="card-details__date-input">
                <input class="input" type="text" id="exp-date-mm" name="exp-date" placeholder="MM" required>
                <input class="input" type="text" id="exp-date-yy" name="exp-date" placeholder="YY" required>
              </div>
            </div>
            <div class="card-details__cvc">
              <label for="cvc">CVC</label>
              <input class="input-cvc" type="text" id="cvc" name="cvc" placeholder="e.g. 123" required>
            </div>
          </div>
          <button class="submit-btn" id="confirm" type="button">Confirm</button>
        </form>`;
};

const Confirm = () => {
  complete.innerHTML = `
        <div class="confirm__container">
          <div class="confirm__img">
            <img src="./images/icon-complete.svg" class="icon__complete" alt="complete icon">
          </div>
          <h2 class="confirm__title">THANK YOU!</h2>
          <p class="confirm__text">We've added your card details</p>
          <button class="confirm__btn" id="continue" type="button">Continue</button>
        </div>`;

  const continueBtn = document.getElementById('continue');
  continueBtn.addEventListener('click', () => {
    location.reload();
  });
};

window.addEventListener('load', () => {
  Content();
  const confirm = document.getElementById('confirm');
  confirm.addEventListener('click', () => {
    Content();
    Confirm();
    content.style.display = 'none';
  });
});
