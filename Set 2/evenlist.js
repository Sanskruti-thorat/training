const n = prompt('Enter a number:');
if (!isNaN(n)) {
    
  const evenList = [];
  
  for (let i = 2; i <= n; i++) 
  {
    if (i % 2 === 0)
    {
      evenList.push(i);
    }
  }
  
  console.log('List of even numbers:', evenList);
} 
else {
  console.log('Invalid number');
}