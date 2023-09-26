const num = prompt('Enter a number:');
const message = prompt('Enter a message:');

if (!isNaN(num) && num > 0) {
  for (let i = 0; i < num; i++)
    {
   alert(message);
  }
} else {
  alert("invalid!")
}