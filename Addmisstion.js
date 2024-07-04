var day;
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Firday"
                break;
            case 6:
                day = "Saturday";
        };
        document.getElementById('demo').innerHTML = `Happy ${day}`;
        //Name Check Function
         abc=(s)=> {
            let subbtn=document.getElementById('confirm');
            let test = /^[A-Za-z .]{2,}$/;
            if (s.value.match(test)) {
                document.getElementById('error').innerHTML = "Perfect";
                subbtn.disabled=false;
            }else{
               document.getElementById('error').innerHTML = "Input Invalid";
                subbtn.disabled=true;
            };
            if(s.value==""){
                              document.getElementById('error').innerHTML = "";
            };

        };
        feecheck=() => {
            let inp = document.getElementById('mark').value;
           try{
            if(inp.trim() == "") throw " Input Empty"         
            if(inp <= 150) throw " Mark is not Better. "
            if(inp <= 250) throw " Mark is  Better. "
            if(inp <= 450) throw " Mark is Good  "
           }
           catch(err){
            document.getElementById('showfee').innerHTML="Your"  + err;
           }
           finally{
            document.getElementById('mark').value="";
           }
        };
        //Check Fee
      /*  const fee = document.querySelector('#fee');
        fee.addEventListener('click', myfun = () => {
            let inp = document.getElementById('mark').value;
            if (inp == "") {
                alert('Fail');
            } else {
                alert(`Please Visit Counter Office 0301-2332312`);
            };
        });*/
        //CheckBox Selection 
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="subject"]:checked');
            let output = [];
            for (var a = 0; a < checkboxes.length; a++) {
                output.push(checkboxes[a].value)
            };
            document.getElementById('result').value = "Your Selection Value:" + " " + output;
            console.log(output);
        });


        //Submit Function
        submitFun = (sub) => {
            let name = document.getElementById('uname').value;
            let result = document.querySelector('#result');
            if (result.value == "") {
                alert('Please Check Box');
                return false;
            } else {
                alert(` Wel Come : ${name}`);
            };
        };
        //Table Function
        const tablebtn = document.querySelector('#tablebtn');
        tablebtn.addEventListener('click', teacher = () => {
            const table1 = document.querySelectorAll('input[name="checktab"]:checked');
            let result = [];
            for (var i = 0; i < table1.length; i++) {
                result.push(table1[i].value);
            };
            document.getElementById('demo2').innerHTML = `Your Select Teacher: ${result}`;
        });
        //aBOUT cOLLAGE & Teacher
        const set1 = document.querySelector('#set1');
        set1.addEventListener('click', (event) => {
            document.getElementById('outputAbout')
                .innerHTML = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda libero ex dignissimos aperiam!`;
        });
        const set2 = document.querySelector('#set2');
        set2.addEventListener('click', (event) => {
            document.getElementById('outputAbout')
                .innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
        });
        const set3 = document.querySelector('#set3');
        set3.addEventListener('click', (event) => {
            document.getElementById('outputAbout')
                .innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur dipisicing elit. Assumenda libero ex dignissimos adipisicing elit`;
        });
        const set4 = document.querySelector('#set4');
        set4.addEventListener('click', (event) => {
            document.getElementById('outputAbout').innerHTML = "";
        });
        //Some Information Function
        function test1(s) {
            let test = /^[0-9]{4,6}$/;
            let btnsend = document.getElementById('sendInformation')
            if (s.value.match(test)) {
                document.getElementById('err1')
                    .innerHTML = ``;
                btnsend.disabled = false;
            } else {
                document.getElementById('err1')
                    .innerHTML = `**Input Invalid`;
                btnsend.disabled = true;
            };
            if (s.value == "") {
                document.getElementById('err1')
                    .innerHTML = ``;
                btnsend.disabled = false;
            };
        };
        function test2(w) {
            let btnsend = document.getElementById('sendInformation')
            let test = /^[A-Za-z.() 0-9]{4,}$/;
            if (w.value.match(test)) {
                document.getElementById('err2')
                    .innerHTML = ``;
                btnsend.disabled = false;
            } else {
                document.getElementById('err2')
                    .innerHTML = `**Input Invalid`;
                btnsend.disabled = true;
            };
            if (w.value == "") {
                document.getElementById('err2')
                    .innerHTML = "";
                btnsend.disabled = false;
            };
        };
        function test3(e) {
            let btnsend = document.getElementById('sendInformation');
            let test = /^[0-9]{2,3}$/;
            if (e.value.match(test)) {
                document.getElementById('err3')
                    .innerHTML = ``;
                btnsend.disabled = false;
            } else {
                document.getElementById('err3')
                    .innerHTML = `**Input Invalid`;
                btnsend.disabled = true;
            };
            if (e.value == "") {
                document.getElementById('err3')
                    .innerHTML = ``;
                btnsend.disabled = false;
            };
        };
        cnsifun3 = (t) => {
            let btnsend = document.getElementById('sendInformation')
            let test = /^[0-9-]{2,14}$/;
            document.getElementById('err4')
                    .innerHTML="";
            let tss= document.getElementById('err4')
                    .innerHTML;
            
            if ( t.value.match(test)) {
                document.getElementById('err4')
                    .innerHTML = ``;
                btnsend.disabled = false;
            } else {
                document.getElementById('err4')
                    .innerHTML = `**Input Invalid`;
                btnsend.disabled = true;
            };
            if (t.value == "") {
              //  document.getElementById('err4')
                  //  .innerHTML = ``;
               // btnsend.disabled = false;
            };
        };
        namefun = (y) => {
            let btnsend = document.getElementById('sendInformation')
            let test = /^[A-Za-z. ]{3,}$/;
            if (y.value.match(test)) {
                document.getElementById('err5')
                    .innerHTML = ``;
                btnsend.disabled = false;
            } else {
                document.getElementById('err5')
                    .innerHTML = `**Input Invalid`;
                btnsend.disabled = true;
            };
            if (y.value == "") {
                document.getElementById('err5')
                    .innerHTML = ``;
                btnsend.disabled = false;
            };
        };
        //Focus
        myfou = (aa) => {
            aa.style.backgroundColor = "#7f8c8d";
        };
        //Blur
        myBlu = (ss) => {
            ss.style.backgroundColor = "";
        }
        //Keyup
        keypres = (ee) => {
            ee.style.backgroundColor = "#95a5a6";
        };
        //Result
        testFun = (ss) => {
            let yname = document.querySelector('#yName').value;
            const youname = document.querySelector('#Youname')
                .innerHTML = ` Your Name : ${yname}`.toUpperCase();
            let fname = document.querySelector('#fName').value;
            const faname = document.querySelector('#fathername')
                .innerHTML = ` Father Name : ${fname}`.toUpperCase();
            let cnis = document.querySelector('#cnisno').value;
            const cni = document.querySelector('#cnis')
                .innerHTML = ` CNIN Number : ${cnis}`.toUpperCase();
            let totals = document.querySelector('#total').value;
            const total = document.querySelector('#totalno')
                .innerHTML = ` Total Number : ${totals}`.toUpperCase();
        };
        //Subject Enter For Student
table=()=>{
    try{
    let inputtab1=document.getElementById('subName').value;
        inputtab1.innerHTML="";
    let inputtab2=document.getElementById('subNo').value;
    inputtab2.innerHTML="";
    let table=document.getElementById('subTable');
   
    var newRow=table.insertRow(1);
    cell1=newRow.insertCell(0);
    cell2=newRow.insertCell(1);

    cell1.innerHTML=inputtab1.toUpperCase();
    cell2.innerHTML=inputtab2.toUpperCase();

    console.log(inputtab1.trim());
    console.log(inputtab2);
}finally{
    document.getElementById('subName').value="";
    document.getElementById('subNo').value="";
};
};