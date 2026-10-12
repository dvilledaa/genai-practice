const meals = [
  {
    id: 'salmon-rice-bowl', name: 'Ginger salmon & rice bowl',
    description: 'Flaky salmon, warm jasmine rice, cucumber ribbons, and a bright ginger-lime dressing.',
    recovery: ['low', 'medium', 'high'], training: ['hard', 'endurance', 'light'], mealType: ['lunch', 'post-workout', 'dinner'], mode: 'cook',
    diets: [], allergens: ['fish', 'soy'], macro: 'Carb-forward · quality protein'
  },
  {
    id: 'chicken-grain-bowl', name: 'Lemon chicken grain bowl',
    description: 'Herby chicken, quinoa, roasted greens, and lemony tahini for a filling, balanced plate.',
    recovery: ['low', 'medium', 'high'], training: ['hard', 'endurance', 'light'], mealType: ['lunch', 'post-workout', 'dinner'], mode: 'prep',
    diets: [], allergens: ['sesame'], macro: 'Balanced carbs · lean protein'
  },
  {
    id: 'tofu-noodle-bowl', name: 'Sesame tofu noodle bowl',
    description: 'Crisp-edged tofu with rice noodles, crunchy vegetables, and a savory sesame-ginger sauce.',
    recovery: ['low', 'medium', 'high'], training: ['hard', 'endurance', 'light'], mealType: ['lunch', 'post-workout', 'dinner'], mode: 'cook',
    diets: ['vegetarian', 'vegan'], allergens: ['soy', 'sesame'], macro: 'Carb-forward · plant protein'
  },
  {
    id: 'overnight-oats', name: 'Berry overnight oats',
    description: 'Rolled oats, berries, chia, and creamy yogurt—ready in the fridge when you are.',
    recovery: ['low', 'medium', 'high'], training: ['rest', 'light', 'hard', 'endurance'], mealType: ['breakfast'], mode: 'prep',
    diets: ['vegetarian'], allergens: ['dairy', 'gluten'], macro: 'Steady carbs · fiber'
  },
  {
    id: 'chickpea-curry', name: 'Golden chickpea curry',
    description: 'Comforting coconut chickpeas with basmati rice, spinach, and a squeeze of lime.',
    recovery: ['low', 'medium'], training: ['rest', 'light', 'hard'], mealType: ['lunch', 'dinner'], mode: 'cook',
    diets: ['vegetarian', 'vegan'], allergens: [], macro: 'Carb-forward · plant protein'
  },
  {
    id: 'egg-toast', name: 'Green eggs & avocado toast',
    description: 'Soft eggs, smashed avocado, and peppery greens on golden sourdough toast.',
    recovery: ['medium', 'high'], training: ['rest', 'light', 'hard'], mealType: ['breakfast', 'lunch'], mode: 'cook',
    diets: ['vegetarian'], allergens: ['eggs', 'gluten'], macro: 'Balanced carbs · satisfying protein'
  },
  {
    id: 'delivery-burrito', name: 'Build-your-own burrito bowl',
    description: 'Brown rice, grilled chicken, black beans, pico, and fresh greens from a nearby kitchen.',
    recovery: ['low', 'medium', 'high'], training: ['hard', 'endurance'], mealType: ['lunch', 'post-workout', 'dinner'], mode: 'order',
    diets: [], allergens: [], macro: 'Higher carb · high protein'
  },
  {
    id: 'lentil-soup', name: 'Cozy lentil & tomato soup',
    description: 'A hearty bowl of red lentils, tomato, and warming spices with a simple herb finish.',
    recovery: ['low', 'medium'], training: ['rest', 'light'], mealType: ['lunch', 'dinner'], mode: 'prep',
    diets: ['vegetarian', 'vegan'], allergens: [], macro: 'Fiber-rich · plant protein'
  },
  {
    id: 'greek-yogurt-bowl', name: 'Honeyed yogurt power bowl',
    description: 'Thick Greek yogurt, fruit, toasted seeds, and a little honey for an easy start.',
    recovery: ['medium', 'high'], training: ['rest', 'light', 'hard', 'endurance'], mealType: ['breakfast', 'post-workout'], mode: 'cook',
    diets: ['vegetarian'], allergens: ['dairy', 'sesame'], macro: 'Quick protein · easy carbs'
  },
  {
    id: 'shrimp-rice-box', name: 'Chili-lime shrimp rice box',
    description: 'Tender shrimp, fluffy rice, crunchy slaw, and a zingy lime dressing. Ready in a flash.',
    recovery: ['low', 'medium', 'high'], training: ['hard', 'endurance'], mealType: ['lunch', 'post-workout', 'dinner'], mode: 'prep',
    diets: [], allergens: ['shellfish'], macro: 'Lean protein · replenishing carbs'
  },
  {
    id: 'avocado-quinoa', name: 'Roasted veggie quinoa plate',
    description: 'Roasty seasonal vegetables, warm quinoa, avocado, and a tangy green dressing.',
    recovery: ['low', 'medium', 'high'], training: ['rest', 'light', 'hard', 'endurance'], mealType: ['lunch', 'dinner'], mode: 'cook',
    diets: ['vegetarian', 'vegan'], allergens: [], macro: 'Balanced carbs · plant-powered'
  },
  {
    id: 'oat-smoothie', name: 'Banana oat recovery smoothie',
    description: 'Banana, oats, milk, and almond butter blended into a cool, easy post-session snack.',
    recovery: ['low', 'medium', 'high'], training: ['hard', 'endurance'], mealType: ['breakfast', 'post-workout'], mode: 'cook',
    diets: ['vegetarian'], allergens: ['dairy', 'peanuts', 'tree nuts', 'gluten'], macro: 'Quick carbs · protein boost'
  },
  {
    id: 'delivery-falafel', name: 'Falafel & hummus mezze box',
    description: 'Crispy falafel, hummus, crisp vegetables, and warm pita from a neighborhood favorite.',
    recovery: ['low', 'medium', 'high'], training: ['rest', 'light', 'hard', 'endurance'], mealType: ['lunch', 'dinner'], mode: 'order',
    diets: ['vegetarian', 'vegan'], allergens: ['sesame', 'gluten'], macro: 'Fiber-rich · steady carbs'
  },
  {
    id: 'turkey-sandwich', name: 'Turkey crunch sandwich',
    description: 'Roast turkey, crisp greens, tomato, and mustard on hearty multigrain bread.',
    recovery: ['medium', 'high'], training: ['light', 'hard', 'endurance'], mealType: ['lunch', 'post-workout'], mode: 'prep',
    diets: [], allergens: ['gluten'], macro: 'Balanced carbs · lean protein'
  },
  {
    id: 'sushi-order', name: 'Salmon avocado sushi set',
    description: 'A fresh salmon and avocado roll set with rice, cucumber, and pickled ginger.',
    recovery: ['medium', 'high'], training: ['light', 'hard', 'endurance'], mealType: ['lunch', 'dinner', 'post-workout'], mode: 'order',
    diets: [], allergens: ['fish', 'soy'], macro: 'Easy carbs · quality protein'
  }
];

const form = document.querySelector('#metrics-form');
const inputScreen = document.querySelector('#input-screen');
const resultScreen = document.querySelector('#result-screen');
const recommendationCard = document.querySelector('#recommendation-card');
const alternativesList = document.querySelector('#alternatives-list');
const alternativesWrap = document.querySelector('#alternatives-wrap');
const rejectPanel = document.querySelector('#reject-panel');
const acceptState = document.querySelector('#accept-state');
const resultActions = document.querySelector('#result-actions');
const fewOptions = document.querySelector('#few-options');
const allDone = document.querySelector('#all-done');
const toast = document.querySelector('#toast');

let rankedMeals = [];
let recommendation = null;
let alternatives = [];
let rejectedIds = new Set();
let shownIds = new Set();
let toastTimer;

const formValues = {
  sleep: document.querySelector('#sleep'),
  hrv: document.querySelector('#hrv'),
  recovery: document.querySelector('#recovery'),
  training: document.querySelector('#training'),
  meal: document.querySelector('#meal'),
  diet: document.querySelector('#diet')
};

document.querySelector('#sample-button').addEventListener('click', () => {
  formValues.sleep.value = '6.5';
  formValues.hrv.value = '48';
  formValues.recovery.value = '41';
  formValues.training.value = 'hard';
  formValues.meal.value = 'post-workout';
  formValues.diet.value = 'none';
  document.querySelector('input[name="mode"][value="order"]').checked = true;
  document.querySelectorAll('input[name="allergies"]').forEach((input) => { input.checked = false; });
  clearValidation();
  document.querySelector('#form-summary').textContent = '';
  formValues.sleep.focus();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateMetrics()) {
    document.querySelector('#form-summary').textContent = 'A quick check: please update the highlighted metrics.';
    const firstInvalid = form.querySelector('.field-card.has-error input');
    firstInvalid?.focus();
    return;
  }
  document.querySelector('#form-summary').textContent = '';
  generateRecommendations();
});

for (const input of Object.values(formValues).slice(0, 3)) {
  input.addEventListener('input', () => {
    validateOneMetric(input);
    document.querySelector('#form-summary').textContent = '';
  });
}

function validateMetrics() {
  return Object.values(formValues).slice(0, 3).map(validateOneMetric).every(Boolean);
}

function validateOneMetric(input) {
  const value = input.value.trim();
  const number = Number(value);
  const fieldCard = input.closest('.field-card');
  const error = document.querySelector(`#${input.id}-error`);
  let message = '';
  if (value === '' || !Number.isFinite(number)) {
    const range = input.id === 'sleep' ? '0 and 14 hours' : input.id === 'hrv' ? '10 and 200 ms' : '0 and 100';
    message = `Enter ${input.id === 'recovery' ? 'recovery' : input.id.toUpperCase()} between ${range} — you can find it in your wearable app.`;
  } else if (number < Number(input.min) || number > Number(input.max)) {
    const range = input.id === 'sleep' ? '0–14 hours' : input.id === 'hrv' ? '10–200 ms' : '0–100%';
    message = `Keep this between ${range} — check your wearable app.`;
  }
  error.textContent = message;
  fieldCard.classList.toggle('has-error', Boolean(message));
  input.setAttribute('aria-invalid', String(Boolean(message)));
  return !message;
}

function clearValidation() {
  for (const input of Object.values(formValues).slice(0, 3)) {
    document.querySelector(`#${input.id}-error`).textContent = '';
    input.closest('.field-card').classList.remove('has-error');
    input.setAttribute('aria-invalid', 'false');
  }
}

function generateRecommendations() {
  const user = {
    sleep: Number(formValues.sleep.value),
    hrv: Number(formValues.hrv.value),
    recovery: Number(formValues.recovery.value),
    training: formValues.training.value,
    mealType: formValues.meal.value,
    diet: formValues.diet.value,
    mode: form.querySelector('input[name="mode"]:checked').value,
    allergies: new Set([...form.querySelectorAll('input[name="allergies"]:checked')].map((input) => input.value))
  };
  user.recoveryState = user.recovery < 40 || user.sleep < 6
    ? 'low'
    : user.recovery >= 70 && user.sleep >= 7
      ? 'high'
      : 'medium';

  const survivors = meals.filter((meal) => {
    const dietAllowed = user.diet === 'none'
      || meal.diets.includes(user.diet)
      || (user.diet === 'vegetarian' && meal.diets.includes('vegan'));
    const allergenFree = [...user.allergies].every((allergen) => !meal.allergens.includes(allergen));
    return dietAllowed && allergenFree;
  });

  rankedMeals = survivors
    .map((meal, index) => ({
      meal,
      score: Number(meal.recovery.includes(user.recoveryState))
        + Number(meal.training.includes(user.training))
        + Number(meal.mealType.includes(user.mealType))
        + Number(meal.mode === user.mode),
      index
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ meal }) => meal);

  recommendation = rankedMeals[0] || null;
  alternatives = rankedMeals.slice(1, 3);
  rejectedIds = new Set();
  shownIds = new Set(rankedMeals.slice(0, 3).map((meal) => meal.id));
  if (!recommendation) {
    showToast('No meals matched those filters. Try another diet or allergy selection.');
    return;
  }
  renderResults(user);
  inputScreen.hidden = true;
  resultScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderResults(user) {
  recommendationCard.innerHTML = recommendationMarkup(recommendation, user, 1);
  alternativesList.innerHTML = alternatives.map((meal, index) => alternativeMarkup(meal, index + 2)).join('');
  alternativesWrap.hidden = alternatives.length === 0;
  fewOptions.hidden = rankedMeals.length >= 3;
  rejectPanel.hidden = true;
  acceptState.hidden = true;
  resultActions.hidden = false;
  allDone.hidden = true;
  document.querySelector('#result-title').innerHTML = user.recoveryState === 'low'
    ? 'A little fuel<br />goes a <span>long way.</span>'
    : user.recoveryState === 'high'
      ? 'You’re ready.<br />Let’s <span>feed that.</span>'
      : 'Good days start<br />with a <span>good plate.</span>';
  document.querySelector('#swap-button').disabled = alternatives.length === 0;
  document.querySelector('#reject-button').disabled = rankedMeals.filter((meal) => !rejectedIds.has(meal.id)).length < 2;
}

function recommendationMarkup(meal, user, index) {
  return `<div class="meal-topline">
      <span class="meal-label">TODAY’S PICK</span>
      <span class="meal-index">CRAVR PICK&nbsp; / &nbsp;${String(index).padStart(2, '0')}</span>
    </div>
    <h2 class="meal-title">${escapeHTML(meal.name)}</h2>
    <p class="meal-description">${escapeHTML(meal.description)}</p>
    <span class="macro-pill">${escapeHTML(meal.macro)}</span>
    <div class="why-card">
      <div class="why-icon" aria-hidden="true">✳</div>
      <div class="why-copy">
        <span class="field-label">WHY TODAY</span>
        <p>${escapeHTML(buildWhy(user))}</p>
      </div>
    </div>`;
}

function alternativeMarkup(meal, index) {
  return `<article class="alternative-card">
    <span class="alternative-number">0${index} &nbsp; / &nbsp; ALSO A GOOD FIT</span>
    <h3>${escapeHTML(meal.name)}</h3>
    <p>${escapeHTML(meal.description)}</p>
    <span class="macro-pill">${escapeHTML(meal.macro)}</span>
  </article>`;
}

function buildWhy(user) {
  const first = `You slept ${formatNumber(user.sleep)} h and your recovery is ${formatNumber(user.recovery)}%, so today calls for a ${user.recoveryState === 'low' ? 'gentle refuel with easy-to-digest carbs and protein' : user.recoveryState === 'high' ? 'balanced meal to support the energy you’ve built' : 'steady mix of carbs and protein to keep you going'}.`;
  const second = user.training === 'hard'
    ? 'With a hard workout on the plan, this meal helps replenish and rebuild.'
    : user.training === 'endurance'
      ? 'With endurance work today, it gives you fuel to replenish what you use.'
      : user.training === 'light'
        ? 'A lighter training day makes this a comfortable way to stay fueled.'
        : 'On a rest day, this is a satisfying way to support recovery without overdoing it.';
  return `${first} ${second}`;
}

function formatNumber(number) {
  return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

document.querySelector('#swap-button').addEventListener('click', () => {
  if (!alternatives.length) return;
  const previous = recommendation;
  recommendation = alternatives[0];
  alternatives = [previous, ...alternatives.slice(1)].slice(0, 2);
  const user = getCurrentUser();
  recommendationCard.innerHTML = recommendationMarkup(recommendation, user, 1);
  alternativesList.innerHTML = alternatives.map((meal, index) => alternativeMarkup(meal, index + 2)).join('');
  document.querySelector('#reject-button').disabled = rankedMeals.filter((meal) => !rejectedIds.has(meal.id)).length < 2;
});

document.querySelector('#reject-button').addEventListener('click', () => {
  rejectPanel.hidden = false;
  document.querySelector('#close-reject').focus();
});

document.querySelector('#close-reject').addEventListener('click', () => {
  rejectPanel.hidden = true;
  document.querySelector('#reject-button').focus();
});

document.querySelectorAll('.reason-button').forEach((button) => {
  button.addEventListener('click', () => rejectCurrentRecommendation(button.dataset.reason));
});

function rejectCurrentRecommendation(reason) {
  rejectedIds.add(recommendation.id);
  const next = rankedMeals.find((meal) => !rejectedIds.has(meal.id) && !shownIds.has(meal.id));
  recommendation = next || null;
  alternatives = next
    ? rankedMeals.filter((meal) => !rejectedIds.has(meal.id) && !shownIds.has(meal.id)).slice(1, 3)
    : [];
  rejectPanel.hidden = true;
  if (!recommendation) {
    recommendationCard.innerHTML = '<div class="meal-topline"><span class="meal-label">THAT’S A WRAP</span></div><h2 class="meal-title">You’ve seen all today’s ideas.</h2><p class="meal-description">Change your preferences to get a fresh set of suggestions.</p>';
    alternativesWrap.hidden = true;
    resultActions.hidden = true;
    fewOptions.hidden = true;
    allDone.hidden = false;
    return;
  }
  recommendationCard.innerHTML = `<div class="swap-message">Got it — here’s something different.</div>${recommendationMarkup(recommendation, getCurrentUser(), rankedMeals.indexOf(recommendation) + 1)}`;
  alternativesList.innerHTML = alternatives.map((meal, index) => alternativeMarkup(meal, index + 2)).join('');
  shownIds.add(recommendation.id);
  alternatives.forEach((meal) => shownIds.add(meal.id));
  alternativesWrap.hidden = alternatives.length === 0;
  fewOptions.hidden = rankedMeals.length >= 3;
  document.querySelector('#swap-button').disabled = alternatives.length === 0;
  document.querySelector('#reject-button').disabled = rankedMeals.filter((meal) => !rejectedIds.has(meal.id)).length < 2;
  showToast(`Got it — we’ll skip that one. (${reason})`);
}

document.querySelector('#accept-button').addEventListener('click', () => {
  acceptState.hidden = false;
  resultActions.hidden = true;
  rejectPanel.hidden = true;
  acceptState.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function startOver() {
  resultScreen.hidden = true;
  inputScreen.hidden = false;
  document.querySelector('#form-summary').textContent = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelector('#back-button').addEventListener('click', startOver);
document.querySelector('#start-over').addEventListener('click', startOver);
document.querySelector('#all-done-start').addEventListener('click', startOver);
document.querySelectorAll('[data-home]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    startOver();
  });
});

function getCurrentUser() {
  const sleep = Number(formValues.sleep.value);
  const recovery = Number(formValues.recovery.value);
  return {
    sleep,
    hrv: Number(formValues.hrv.value),
    recovery,
    training: formValues.training.value,
    mealType: formValues.meal.value,
    recoveryState: recovery < 40 || sleep < 6 ? 'low' : recovery >= 70 && sleep >= 7 ? 'high' : 'medium'
  };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}
