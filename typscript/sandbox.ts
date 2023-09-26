// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);

// classes
class Invoice {
    client: string;
    details: string;
    amount: number;
  
    constructor(c: string, d: string, a: number){
      this.client = c;
      this.details = d;
      this.amount = a;
    }
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }

  class Payment {
    recipient: string;
    details: string;
    amount: number;

    constructor(r: string , de :string , am :number ) {
        this.recipient = r;
        this.details = de;
        this.amount = am;
    }
    ;
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }

}

interface HasFormatter {
    format(): string;
  }
  
//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

   
//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);
//   // invoices.push({ name: 'shaun' });
  
// //   console.log(invoices);

// invoices.forEach(inv => {
// console.log(inv.client, inv.amount,inv.details,inv.format())
// });


//const form = document.querySelector('form')!;

class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');
  
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );

let values: [string , string , number]
values  = [tofrom.value, details.value, amount.valueAsNumber]

let doc: HasFormatter;
if (type.value === 'invoice') {
  doc = new Invoice(...values);
} else {
  doc = new Payment(...values);
}
list.render(doc, type.value, 'end');
});


