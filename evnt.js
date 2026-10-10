// 1. Select the form element
const form = document.querySelector('#studentForm');

// 2. Add a submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from refreshing on submit

    // 3. Get the input values
    const name = document.querySelector('#name').value;
    const studentClass = document.querySelector('#studentClass').value;

    // 4. Log or handle the values
    console.log('Name:', name);
    console.log('Class:', studentClass);

    alert(`Submitted: ${name} from Class ${studentClass}`);

    // 5. Clear the form
    form.reset();
});

const phone = document.querySelector('#phoneNo')
console.log('number:', phone);
onkeydown="alert('correct')"

<input 
  type="text" 
  id="phoneNo" 
  onkeydown="console.log('number:', this.value); alert('correct');"
