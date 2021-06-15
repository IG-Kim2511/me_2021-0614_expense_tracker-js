"use strict";
/* 
🦄🚀 🍄🍉 🐞🌊  ⚡👻🐳  
⚽🏓🎯 💊🩸🧲  📌    
👉👇👆⚾❌⭕ 
💋🌀🎈 🎃🎨⚽ 🏓🎯 💊🩸🧲 📌 🍓🍅🍈 🍀 🔥

⚽ 🎯 🍀 섹터 나눔 마크
🍉 js-6

🦄 point, 알아낸것
🚀 공식 (알고리즘 상위호환)
🍄 Algorithm)  알고리즘 (코딩 순서, 소프트코딩)
📌⚡ 중요사항

🐞 bug
🌊 다음에 할거
 */

// 🍀 const

const submit = document.querySelector('.submit');
const expenseTable = document.querySelector('#expensetable');
const expForm = document.querySelector('#expForm');

let type = document.querySelector('#type');
let named = document.querySelector('#named');
let date = document.querySelector('#date');
let amount = document.querySelector('#amount');
let options = document.querySelector('#options');


/* 🍉js 6.
 1 click,
 2 value of input....take
 3 create element on table
 4. put values in element 
 5. clear values
 */


// 🍀 value
/*⚽ (hard-coding)
type.addEventListener("change", function() {
    let input = this.value;    
    typeValue.push(input);
});

named.addEventListener("change", function() {
    let input = this.value;      
    namedValue.push(input);
});

date.addEventListener("change", function() {
    let input = this.value;
    dateValue.push(input);
});

amount.addEventListener("change", function() {
    let input = this.value;      
    amountValue.push(input);
});

options.addEventListener("change", function() {
    let input = this.value;      
    optionsValue.push(input);
}); */

let typeValue =  [];
let namedValue =  [];
let dateValue = [];
let amountValue =  [];
let optionsValue =  [];

let empty =[];

function values(a,b) {
    a.addEventListener("change", function() {
        let input = this.value;    
        b.push(input);
    });
}

values(type, typeValue);
values(named, namedValue);
values(date, dateValue);
values(amount, amountValue);
values(options, optionsValue);


// 🍀js 8. submit


submit.addEventListener('click',expense)

 function expense(e) {
    e.preventDefault();    

    // 3 create element on table
    let tr = document.createElement('tr');    
    expenseTable.append(tr);

    /* ⚽ (hard-coding)
        td = document.createElement('td');     
        tr.append(td);
        td.innerHTML = `${namedValue}`;
        
        td = document.createElement('td');     
        tr.append(td);
        td.innerHTML = `${dateValue}`;
        
        td = document.createElement('td');     
        tr.append(td);
        td.innerHTML = `${amountValue}`;
        
        td = document.createElement('td');     
        tr.append(td);
        td.innerHTML = `${optionsValue}`; */

    let td = document.createElement('td');   
    tr.append(td);
    td.innerHTML = `${typeValue}`;

    createElement(namedValue);
    createElement(dateValue);
    createElement(amountValue);
    createElement(optionsValue);

    function createElement(a) {
        td = document.createElement('td');     
        tr.append(td);
        td.innerHTML = a;   
    }       

    let btn = document.createElement('button'); 
    btn.className='delete'
    btn.className='myButton'
    tr.append(btn);
    btn.innerHTML = `delete`;    
  
    // delete button
    btn.addEventListener('click',(e)=>{
            e.target.parentNode.remove();   

    });

    /* 🦄reset();
    각 value를 reset하는건 안통함. 전체 form을 reset해야함    */

    expForm.reset();     
}

//🍀 js.18. reset

let reset = document.querySelector('.reset');

reset.addEventListener('click',initiate);

function initiate() {
    typeValue.reset;        //🦄reset();
    namedValue.reset;
    dateValue.reset;
    amountValue.reset;
    optionsValue.reset;
} 


//🍀 js.16. deleteAll button

const deleteAll= document.querySelector(".delete_all");

deleteAll.addEventListener('click',clearAll);

function clearAll() {
    location.reload();    
    
}



