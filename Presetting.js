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


 var resultSpan;

 window.onload = function () {

     // настройки страницы
     document.body.style.margin = "0px";
     document.body.style.padding = "0px";
     document.body.style.backgroundColor = "#f5f5f7";
     document.body.style.fontFamily = "Tahoma, Geneva, Kalimati, sans-serif";

     // основной слой
     var maindiv = document.createElement('div');
     maindiv.style.margin = "0 auto";
     maindiv.style.width = "800px";
     maindiv.style.height = "100%";
     maindiv.style.padding = "15px";
     maindiv.style.backgroundColor = "#fdfdfe";
     maindiv.style.borderLeft = "4px double navy";
     maindiv.style.borderRight = "4px double navy";
     maindiv.style.borderBottom = "4px double navy";
     maindiv.style.fontSize = "18px";
     maindiv.style.color = "navy";

     /**** действия над двумя операндами ****/
     var strtext = document.createTextNode('Калькулятор и конвертер большых чисел On-Line');
     maindiv.appendChild(strtext);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var selectAction = document.createElement('select');
     selectAction.style.fontSize = "18px";
     selectAction.style.color = "navy";

     var option = document.createElement("option");
     option.selected = "selected";
     option.disabled = "disabled";
     option.text = "выбирите действие";
     selectAction.add(option);

     var optionAdd = document.createElement("option");
     optionAdd.value = "add";
     optionAdd.text = "сложение";
     selectAction.add(optionAdd);

     var optionSubtract = document.createElement("option");
     optionSubtract.value = "subtract";
     optionSubtract.text = "вычитание";
     selectAction.add(optionSubtract);

     var optionMultiply = document.createElement("option");
     optionMultiply.value = "multiply";
     optionMultiply.text = "умножение";
     selectAction.add(optionMultiply);

     var optionDivide = document.createElement("option");
     optionDivide.value = "divide";
     optionDivide.text = "деление";
     selectAction.add(optionDivide);

     var optionMod = document.createElement("option");
     optionMod.value = "mod";
     optionMod.text = "остаток от деления";
     selectAction.add(optionMod);

     var optionPow = document.createElement("option");
     optionPow.value = "pow";
     optionPow.text = "возведение в степень";
     selectAction.add(optionPow);

     var optionCompare = document.createElement("option");
     optionCompare.value = "compare";
     optionCompare.text = "сравнение";
     selectAction.add(optionCompare);

     maindiv.appendChild(selectAction);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var aInput = document.createElement('input');
     aInput.style.width = "100%";
     aInput.style.fontSize = "18px";
     aInput.style.color = "silver";
     aInput.value = "первое число";
     aInput.onclick = function (e) {
         if (this.value == "первое число") {
             this.value = "";
             this.style.color = "navy";
         } // end if
     } // end fun
     maindiv.appendChild(aInput);


     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var bInput = document.createElement('input');
     bInput.style.width = "100%";
     bInput.style.fontSize = "18px";
     bInput.style.color = "silver";
     bInput.value = "второе число";
     bInput.onclick = function (e) {

         if (this.value == "второе число") {
             this.value = "";
             this.style.color = "navy";
         }

     } // end fun 
     maindiv.appendChild(bInput);


     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var countUpInput = document.createElement('input');
     countUpInput.style.fontSize = "18px";
     countUpInput.style.color = "#483D8B";
     countUpInput.type = "button";
     countUpInput.value = "посчитать";
     countUpInput.onclick = function (e) {

         if (!isNaN(aInput.value) && !isNaN(bInput.value)) {
             calculate(aInput.value, bInput.value, selectAction.value);
         } else {
             alert("Одно или оба значения не являются числами!");
         } // end if



     } // end fun 
     maindiv.appendChild(countUpInput);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     resultSpan = document.createElement('span');
     resultSpan.style.width = "100%";
     resultSpan.style.fontSize = "18px";
     resultSpan.style.color = "navy";
     maindiv.appendChild(resultSpan);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     /**** действия над одним операндом ****/

     var strtextOne = document.createTextNode('С одним числом');
     maindiv.appendChild(strtextOne);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var selectActionOne = document.createElement('select');
     selectActionOne.style.fontSize = "18px";
     selectActionOne.style.color = "navy";

     var optionOne = document.createElement("option");
     optionOne.selected = "selected";
     optionOne.disabled = "disabled";
     optionOne.text = "выбирите действие";
     selectActionOne.add(optionOne);

     var optionNegate = document.createElement("option");
     optionNegate.value = "negate";
     optionNegate.text = "отрицание десятичного числа";
     selectActionOne.add(optionNegate);

     var optionAbs = document.createElement("option");
     optionAbs.value = "abs";
     optionAbs.text = "модуль десятичного числа";
     selectActionOne.add(optionAbs);

     var optionIntPart = document.createElement("option");
     optionIntPart.value = "intPart";
     optionIntPart.text = "целая часть десятичного числа";
     selectActionOne.add(optionIntPart);

     var optionRevers = document.createElement("option");
     optionRevers.value = "revers";
     optionRevers.text = "реверс числа";
     selectActionOne.add(optionRevers);

     var option10to2 = document.createElement("option");
     option10to2.value = "10to2";
     option10to2.text = "преобразовать десятичное число в двоичное";
     selectActionOne.add(option10to2);

     var option10to8 = document.createElement("option");
     option10to8.value = "10to8";
     option10to8.text = "преобразовать десятичное число в 8-миричное";
     selectActionOne.add(option10to8);

     var option10to16 = document.createElement("option");
     option10to16.value = "10to16";
     option10to16.text = "преобразовать десятичное число в 16-тиричное";
     selectActionOne.add(option10to16);

     var option16to2 = document.createElement("option");
     option16to2.value = "16to2";
     option16to2.text = "преобразовать 16-тиричное число в двоичное";
     selectActionOne.add(option16to2);

     var option16to8 = document.createElement("option");
     option16to8.value = "16to8";
     option16to8.text = "преобразовать 16-тиричное число в 8-миричное";
     selectActionOne.add(option16to8);

     var option16to10 = document.createElement("option");
     option16to10.value = "16to10";
     option16to10.text = "преобразовать 16-тиричное число в десятичное";
     selectActionOne.add(option16to10);

     var option8to2 = document.createElement("option");
     option8to2.value = "8to2";
     option8to2.text = "преобразовать 8-миричное число в двоичное";
     selectActionOne.add(option8to2);

     var option8to10 = document.createElement("option");
     option8to10.value = "8to10";
     option8to10.text = "преобразовать 8-миричное число в десятичное";
     selectActionOne.add(option8to10);

     var option8to16 = document.createElement("option");
     option8to16.value = "8to16";
     option8to16.text = "преобразовать 8-миричное число в 16-тиричное";
     selectActionOne.add(option8to16);

     var option2to8 = document.createElement("option");
     option2to8.value = "2to8";
     option2to8.text = "преобразовать двоичное число в 8-миричное";
     selectActionOne.add(option2to8);

     var option2to10 = document.createElement("option");
     option2to10.value = "2to10";
     option2to10.text = "преобразовать двоичное число в десятичное";
     selectActionOne.add(option2to10);

     var option2to16 = document.createElement("option");
     option2to16.value = "2to16";
     option2to16.text = "преобразовать двоичное число в 16-тиричное";
     selectActionOne.add(option2to16);

     maindiv.appendChild(selectActionOne);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var aInputOne = document.createElement('input');
     aInputOne.style.width = "100%";
     aInputOne.style.fontSize = "18px";
     aInputOne.style.color = "silver";
     aInputOne.value = "введите число";
     aInputOne.onclick = function (e) {
         if (this.value == "введите число") {
             this.value = "";
             this.style.color = "navy";
         } // end if
     } // end fun
     maindiv.appendChild(aInputOne);


     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     var countUpInputOne = document.createElement('input');
     countUpInputOne.style.fontSize = "18px";
     countUpInputOne.style.color = "#483D8B";
     countUpInputOne.type = "button";
     countUpInputOne.value = "посчитать";
     countUpInputOne.onclick = function (e) {

         if (aInputOne.value != "") {
             convert(aInputOne.value, selectActionOne.value);
         } else {
             alert("Значение не являются числом!");
         } // end if



     } // end fun 
     maindiv.appendChild(countUpInputOne);

     // перенос 
     maindiv.appendChild(document.createElement('br'));
     maindiv.appendChild(document.createElement('br'));

     resultSpanOne = document.createElement('span');
     resultSpanOne.style.width = "100%";
     resultSpanOne.style.fontSize = "18px";
     resultSpanOne.style.color = "navy";
     maindiv.appendChild(resultSpanOne);


     // добавление корневых слоёв на сцену
     if (document.body.firstChild) {
         document.body.insertBefore(maindiv, document.body.firstChild);
     } else {
         document.body.appendChild(maindiv);
     } // end if

 } // end fun