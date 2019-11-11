'use strict';
/*
function tipCaculator(bill){
    let percentage;

    if(bill < 50){
        percentage = .2;

    }else if(bill >=50 && bill < 200){
        percentage = .15
    }else{
        percentage = .1;
    }return percentage * bill;
}

console.log(tipCaculator(100));

let bills = [124, 48, 268 ];
let tips = [tipCaculator(bills[0]),
            tipCaculator(bills[1]),
            tipCaculator(bills[2])];
    console.log(tips);
    bills.push(222)
    console.log(bills);

let finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
    console.log(finalValues);  */
    
/*    let john = {
        fullName:'johnTeam',
        mass: 78,
        height: 1.69,
        BMICalc: function(){
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };


    let mark = {
        fullName: 'MarkTeam',
        mass: 92,
        height: 1.95,
        BMICalc: function(){
          this.bmi =  this.mass / (this.height * this.height);
            return this.bmi;
        }
    };


    john.BMICalc();
    mark.BMICalc();
    console.log(john,mark);

    if(john.BMICalc > mark.BMICalc){
        console.log('john\'s team is the winner'+' '+ john.bmi );
    }else if(mark.BMICalc > john.BMICalc){
        console.log('mark team is the winner'+ ' ' + mark.bmi );
    }else{
        console.log('draw');
 
    }


    let john = {
        fullName: 'john smith',
        billValues: [124, 48, 268, 180, 42],
        calTips: function ()  {
            this.tips = [];
            this.finalValues = [];

            for(let i = 0; i < this.billValues.length; i++){

                let percentage;
                let bills = this.billValues[i];
                if(bills < 50){
                    percentage = .2;
                }else if(bills > 50 && bills < 200){
                    percentage = .15;
                }else{
                    percentage = .1;
                }

                this.tips[i] = bills * percentage;
                this.finalValues = bills + bills * percentage;
            }
           }
        }

        john.calTips();
        console.log(john);*/
    
        let cupBoard = document.querySelector('#cup').style.border = '1px solid red';