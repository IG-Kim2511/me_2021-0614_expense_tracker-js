"use strict";

// ๐ const

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

/*  */
const secondTitle = document.querySelector(".secondTitle");

let reset = document.querySelector('.reset');

const deleteAll= document.querySelector(".delete_all");


/* ๐js 6.
1 click,
2 value of input....take
3 create element on table
4. put values in element 
5. clear values
*/

// ๐ value
/*โฝ (hard-coding)
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


// ๐js 8. submit

submit.addEventListener('click',run)


// ๐js 10. submit-expense : when value is not empty.

 function run(e) {
   
    e.preventDefault();    

    // ๐ฆnamedValue.length > 0 :: array๊ฐ empty ์ธ์ง ์๋์ง ํ์ธํ ๋ .length ์ฌ์ฉ

    if (namedValue.length > 0 || amountValue.length > 0) {
        // 3๐ create element tr,td on table
        
        // ๐  way-1 ํ๋ํ๋ create
        // let tr = document.createElement('tr');    
        // tr.className = "classname_tr";
        // expenseTable.append(tr);

        // /* โฝ (hard-coding)
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

        // โฝ (soft-coding)
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

        // ๐  way-2 ``๋ฌธ๋ฒ์ผ๋ก ํ๋ฒ์ ๊ฐ๋จํ๊ฒ
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

        /* ๐ฆreset();
        ๊ฐ value๋ฅผ resetํ๋๊ฑด ์ํตํจ. ์ ์ฒด form์ resetํด์ผํจ
        ์์ธ์ง reset๋ง์ผ๋ก๋ ์์ ์ ์ฅ๋ value๋ฅผ ์ด๊ธฐํ ์ํค์ง ๋ชปํจ ๐namedValue๋ฑ์ ""์ผ๋ก ์ด๊ธฐํ

        ๐2๋ฒ์งธsubmit๋ถํฐ๋ ๋ชจ๋ ๋น์นธ์ด์ด๋ submit๊ฐ ๊ณ์ ๋๋ ํ์
        */
       
       expForm.reset();    
          namedValue='';
          amountValue = "";       
        
    } else {

        //๐ js 12, Change innerhtml and color for 1 seconds
        let secondTitleOriginal = secondTitle.innerHTML;
        let secondTitleOriginalColor = secondTitle.style.color;

        secondTitle.innerHTML="fill box up please";
        secondTitle.style.color="red";
   
        setTimeout(function(){
            secondTitle.innerHTML=secondTitleOriginal;
            secondTitle.style.color=secondTitleOriginalColor;
       }, 1000);


        return null;        // ๐ฆreturn null
    }
}

//๐ js.18. reset

reset.addEventListener('click',initiate);

function initiate() {
    typeValue.reset;        //๐ฆreset();
    namedValue.reset;
    dateValue.reset;
    amountValue.reset;
    optionsValue.reset;
} 


//๐ js.16. deleteAll button

deleteAll.addEventListener('click',clearAll);

function clearAll() {
    location.reload();    
    
}



