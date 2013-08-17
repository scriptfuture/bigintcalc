/*
    Copyright 2013 Решетников Николай (Reshetnikov Nikolay)

    This file is part of BigIntCalc.

    BigIntCalc is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    BigIntCalc is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

  (Этот файл — часть BigIntCalc.
                           
   BigIntCalc - свободная программа: вы можете перераспространять ее и/или
   изменять ее на условиях Стандартной общественной лицензии GNU в том виде,
   в каком она была опубликована Фондом свободного программного обеспечения;
   либо версии 3 лицензии, либо (по вашему выбору) любой более поздней
   версии.

   BigIntCalc распространяется в надежде, что она будет полезной,
   но БЕЗО ВСЯКИХ ГАРАНТИЙ; даже без неявной гарантии ТОВАРНОГО ВИДА
   или ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ. Подробнее см. в Стандартной
   общественной лицензии GNU.

   Вы должны были получить копию Стандартной общественной лицензии GNU
   вместе с этой программой. Если это не так, см.
   <http://www.gnu.org/licenses/>.)
*/

/* Списки преобразований*/
var symb16to2 = {
    "h0" : "0000",  
    "h1" : "0001", 
    "h2" : "0010", 
    "h3" : "0011", 
    "h4" : "0100", 
    "h5" : "0101", 
    "h6" : "0110", 
    "h7" : "0111", 
    "h8" : "1000", 
    "h9" : "1001", 
    "ha" : "1010", 
    "hb" : "1011", 
    "hc" : "1100", 
    "hd" : "1101", 
    "he" : "1110", 
    "hf" : "1111" 
}

var symb8to2 = {
    "h0" : "000",  
    "h1" : "001", 
    "h2" : "010", 
    "h3" : "011", 
    "h4" : "100", 
    "h5" : "101", 
    "h6" : "110", 
    "h7" : "111"
}

var symb2to8 = {
    "000" : "0",  
    "001" : "1", 
    "010" : "2", 
    "011" : "3", 
    "100" : "4", 
    "101" : "5", 
    "110" : "6", 
    "111" : "7"
}

var symb2to16 = {
    "0000" : "0",  
    "0001" : "1", 
    "0010" : "2", 
    "0011" : "3", 
    "0100" : "4", 
    "0101" : "5", 
    "0110" : "6", 
    "0111" : "7", 
    "1000" : "8", 
    "1001" : "9", 
    "1010" : "A", 
    "1011" : "B", 
    "1100" : "C", 
    "1101" : "D", 
    "1110" : "E", 
    "1111" : "F" 
}

var symbTo10 = {
    "0" : "0",  
    "1" : "1", 
    "2" : "2", 
    "3" : "3", 
    "4" : "4", 
    "5" : "5", 
    "6" : "6", 
    "7" : "7", 
    "8" : "8", 
    "9" : "9", 
    "a" : "10", 
    "b" : "11", 
    "c" : "12", 
    "d" : "13", 
    "e" : "14", 
    "f" : "15" 
}

/* функции преобразований */
function calculate(a,b,type) {

var bigA = new BigNumber(a);
var result;

switch (type) {
   case "add":
      result = bigA.add(b);
      break;
   case "subtract":
      result = bigA.subtract(b);
      break;
   case "multiply":
      result = bigA.multiply(b);
      break;
   case "divide":
      result = bigA.divide(b);
      break;
   case "mod":
      result = bigA.mod(b);
      break;
   case "pow":
      result = bigA.pow(b);
      break;
   case "compare":
      result = bigA.compare(b);
      break;
   default:
     alert("Выбирите действие!"); 
      break;
}

resultSpan.innerHTML="Результат:<br>"+result;

} // end fun

function convert(a,type) {

var bigA = new BigNumber(a);
var result;

switch (type) {
   case "negate":
      result = bigA.negate();
      break;
   case "abs":
      result = bigA.abs();
      break;
   case "intPart":
      result = bigA.intPart();
      break;
   case "revers":
      result = a.split("").reverse().join("");
      break;
   case "10to2":
      result=convertNumber10to2(bigA,"");
      break;
   case "10to8":
      result = convertNumber10to2(bigA,"");
      result = convertNumber2to8(result);
      break;
   case "10to16":
      result = convertNumber10to2(bigA,"");
      result = convertNumber2to16(result);
      break;
   case "16to2":
      result = convertNumber16to2(a);
      break;
   case "16to8":
      result = convertNumber16to2(a);
      result = convertNumber2to8(result);
      break;
   case "16to10":
      result = convertNumberMaxTo10(a,16);
      break;
   case "2to8":
      result = convertNumber2to8(a);
      break;
   case "2to10":
      result = convertNumber2to16(a);
      result = convertNumberMaxTo10(result,16);
      break;
   case "2to16":
      result = convertNumber2to16(a);
      break;
   case "8to2":
      result = convertNumber8to2(a);
      break;
   case "8to10":
      result = convertNumber8to2(a);
      result = convertNumber2to16(result);
      result = convertNumberMaxTo10(result,16);
      break;
   case "8to16":
      result = convertNumber8to2(a);
      result = convertNumber2to16(result);
      break;
   default:
     alert("Выбирите действие!"); 
      break;
}

resultSpanOne.innerHTML="Результат:<br>"+result;

} //  end function  

function convertNumber10to2(bigA,res){

    var mod = bigA.mod(2);
    var osn = bigA.divide(2).subtract(mod.divide(2)).intPart();
    
    res+=mod;
    
    if(osn>0) { 
        return convertNumber10to2(osn,res);
    } else {
        return res.split("").reverse().join("");
    }
}


function convertNumberMaxTo10(a,src_ss){

    var sla = a.toLowerCase().split("").reverse();

    var result = new BigNumber("0");
    for(var i in sla){

        var sumbcode=sla[i];
        var numsymb = new BigNumber(symbTo10[sumbcode]);
        var stepen = new BigNumber(src_ss);
         stepen = stepen.pow(i);
        numsymb = numsymb.multiply(stepen);
        result=result.add(numsymb);
    } // end for
  return result;
}


function convertNumber16to2(a){

    var sla = a.toLowerCase();

    var result="";
    for(var i in sla){

        var sumbcode='h'+sla[i];
        result+=symb16to2[sumbcode];
    } // end for
  return result;
}


function convertNumber8to2(a){

    var sla = a.toLowerCase();

    var result="";
    for(var i in sla){

        var sumbcode='h'+sla[i];
        result+=symb8to2[sumbcode];
    } // end for
  return result;
}



function convertNumber2to8(a){

    var sla = a.toLowerCase();

    var result="";
    
    var z=0;
    var n=0;
    var sybmRes=[];
    var sakom="";
    for(var i in sla){
    
        if(z==2) {  
            sakom+=sla[i]; sybmRes[n]=sakom; sakom="";  z=0; n++; 
        } else { 
            sakom+=sla[i]; z++;
            if(i==sla.length-1) { sybmRes[n]=sakom; }  
        } 
    } // end for  
    
    if(z==1 || z==2) {
    
       // из массива в строку
       sybmRes=sybmRes.join(''); 
    
       if(z==1) { sybmRes="00"+sybmRes; }
       if(z==2) { sybmRes="0"+sybmRes; }
    
        var z2=0;
        var n2=0;
        var sybmRes2=[];
        var sakom2="";
        for(var i in sybmRes){
    
            if(z2==2) {  
                sakom2+=sybmRes[i]; sybmRes2[n2]=sakom2; sakom2="";  z2=0; n2++; 
            } else { 
                sakom2+=sybmRes[i]; z2++; 
                if(i==sybmRes.length-1) { sybmRes2[n2]=sakom2; } 
            } 
        } // end for 
        
        sybmRes=sybmRes2;  
    
    }// end if
    
    
    for(var i in sybmRes){
        var sumbcode=sybmRes[i];
        result+=symb2to8[sumbcode];
    } // end for 
    
  return result;
} //end fun


function convertNumber2to16(a){

    var sla = a.toLowerCase();

    var result="";
    
    var z=0;
    var n=0;
    var sybmRes=[];
    var sakom="";
    for(var i in sla){
    
        if(z==3) {  
            sakom+=sla[i]; sybmRes[n]=sakom; sakom="";  z=0; n++; 
        } else { 
            sakom+=sla[i]; z++;
            if(i==sla.length-1) { sybmRes[n]=sakom; }  
        } 
    } // end for
    

    if(z==1 || z==2 || z==3) {
    
       // из массива в строку
       sybmRes=sybmRes.join(''); 
    
       if(z==1) { sybmRes="000"+sybmRes; }
       if(z==2) { sybmRes="00"+sybmRes; }
       if(z==3) { sybmRes="0"+sybmRes; }
    
        var z2=0;
        var n2=0;
        var sybmRes2=[];
        var sakom2="";
        for(var i in sybmRes){
    
            if(z2==3) {  
                sakom2+=sybmRes[i]; sybmRes2[n2]=sakom2; sakom2="";  z2=0; n2++; 
            } else { 
                sakom2+=sybmRes[i]; z2++; 
                if(i==sybmRes.length-1) { sybmRes2[n2]=sakom2; } 
            } 
        } // end for 
        
        sybmRes=sybmRes2;  
    
    }// end if
    
    
    for(var i in sybmRes){
        var sumbcode=sybmRes[i];
        result+=symb2to16[sumbcode];
    } // end for 
    
  return result;
} //end fun

function zeroPadding(str, razr) {

    var keyM=razr-str.length;
  
    var mr="";
    var z=0;
    for(var i=1;i<=razr;i++) {
        if(i>keyM) { 
            mr+=str[z]; 
            z++;
        } else { 
            mr+='0'; 
        }
    } // end for
  return mr;
} // end fun