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

// 🍀 let, const

const submit = document.querySelector('.submit');
const expenseTable = document.querySelector('#expensetable');


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

function expense(e) {
    e.preventDefault();
    
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.className = "expense_td";
    td.innerHTML = "input.value";   //
    expenseTable.append(tr);
    tr.append(td);
    
}

  