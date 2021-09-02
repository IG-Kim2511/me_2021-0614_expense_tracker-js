"use strict";

// 🍀 const

const submit = document.querySelector('.submit');
const expenseTable = document.querySelector('#expensetable');
const expForm = document.querySelector('#expForm');

let type = document.querySelector('#type');
let named = document.querySelector('#named');
let date = document.querySelector('#date');
let amount = document.querySelector('#amount');
let options = document.querySelector('#options');

/*  */
let typeValue =  [];
let namedValue =  [];
let dateValue = [];
let amountValue =  [];
let optionsValue =  [];

let empty =[];


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

function values(p_a,p_b) {

    p_a.addEventListener("change", function() {
        let input = this.value;    
        p_b.push(input);
    });
   
}

values(type, typeValue);
values(named, namedValue);
values(date, dateValue);
values(amount, amountValue);
values(options, optionsValue);


// 🍀js 8. submit

submit.addEventListener('click',run)


// 🍀js 10. submit-expense : when value is not empty.

 function run(e) {
    e.preventDefault();    

    // 🦄namedValue.length > 0 :: array가 empty 인지 아닌지 확인할때 .length 사용

    if (namedValue.length > 0 || amountValue.length > 0) {
        // 3🍈 create element tr,td on table
        
        // 💊  way-1 하나하나 create
        // let tr = document.createElement('tr');    
        // tr.className = "classname_tr";
        // expenseTable.append(tr);

        // /* ⚽ (hard-coding)
        //     td = document.createElement('td');     
        //     tr.append(td);
        //     td.innerHTML = `${namedValue}`;
            
        //     td = document.createElement('td');     
        //     tr.append(td);
        //     td.innerHTML = `${dateValue}`;
            
        //     td = document.createElement('td');     
        //     tr.append(td);
        //     td.innerHTML = `${amountValue}`;
            
        //     td = document.createElement('td');     
        //     tr.append(td);
        //     td.innerHTML = `${optionsValue}`; */

        // ⚽ (soft-coding)
        // let td = document.createElement('td');   
        // tr.append(td);
        // td.innerHTML = `${typeValue}`;

        // createElement(namedValue);
        // createElement(dateValue);
        // createElement(amountValue);
        // createElement(optionsValue);

        // function createElement(a) {
        //     td = document.createElement('td');     
        //     tr.append(td);
        //     td.innerHTML = a;   
        // }             

        // 💊  way-2 ``문법으로 한번에 간단하게
        let tr = document.createElement('tr');
        tr.classList.add('tr_ui');
        
        tr.innerHTML = `
            <td class='td_ui'>${typeValue}</td>
            <td class='td_ui'>${namedValue}</td>
            <td class='td_ui'>${dateValue}</td>
            <td class='td_ui'>${amountValue}</td>
            <td class='td_ui'>${optionsValue}</td>                  
        `;
        expenseTable.append(tr); 
        
        // button
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
    } else {
        return null;        // 🦄return null
    }
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



