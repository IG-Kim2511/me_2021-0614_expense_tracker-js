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

const type = document.querySelector('#type');
const named = document.querySelector('#named');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const options = document.querySelector('#options');


// 🍀 let... value

let typeValue =  [];
type.addEventListener("change", function() {
    let input = this.value;    
    console.log(input); 
    
    typeValue.push(input);
});

let namedValue =  [];
named.addEventListener("change", function() {
    let input = this.value;      
    namedValue.push(input);
});

let dateValue = [];
date.addEventListener("change", function() {
    let input = this.value;
    let dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13

    dateValue.push(input);
});

let amountValue =  [];
amount.addEventListener("change", function() {
    let input = this.value;      
    amountValue.push(input);
});

let optionsValue =  [];
options.addEventListener("change", function() {
    let input = this.value;      
    optionsValue.push(input);
});


/* 🍉js 6.
 1 click,
 2 value of input....take
 3 create element on table
 4. put values in element 
 */

// 🍀 selectors

// 🍀 event Listeners

submit.addEventListener('click',expense)

// 🍀 functions 

// let tdInner = [];

function expense(e) {
    e.preventDefault();    

    //2 value taking    

    // 3 create element on table
    let tr = document.createElement('tr');    
    expenseTable.append(tr);

    let td = document.createElement('td');   
    tr.append(td);
    td.innerHTML = `${typeValue}`;
    
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
    td.innerHTML = `${optionsValue}`;

    // typeValue = [PaymentMethods];
    // namedValue = "";
    // dateValue = '';
    // amountValue = '';
    // optionsValue = '';
}

  