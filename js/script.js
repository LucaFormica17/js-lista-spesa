const list = ['latte','uova','farina','zucchero','burro','sale','cioccolato'];
const list_container = document.getElementById('shipping-list');

let i=0;
while(i<list.length){
    const li = document.createElement('li');
    li.innerText = list[i];
    list_container.appendChild(li);

    i++
}