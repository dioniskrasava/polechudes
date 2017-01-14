//   ПРОРОСОВКА БУКВ ОТНОСИТЕЛЬНО ВКЛЮЧЕННОГО БУЛЕВОГО ЗНАЧЕНИЯ
var m = 21;
var n = [0,10,6,7,9,7,8,6,9,6,6,8,7,6,8,8,6,7,7,7,9];
function drawBoolBook(){
  for(var i=1;i<21;i++){
    for(var j=1;j<n[i];j++){
        if(boolDraw[i][j]){qb[i][j].draw();};
    };
  };
};


function logicQuest1(){          // Если вопрос 1-ый  -  вызывается данная функция
var arr=['И','М','П','Е','Р','А','Т','О','Р'];
for(var i=0;i<9;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1) ){ boolDraw[1][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest2(){          // Если вопрос 2-ый  -  вызывается данная функция
var arr=['Л','Е','Н','И','Н'];
for(var i=0;i<5;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[2][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest3(){          
var arr=['М','А','У','Г','Л','И'];
for(var i=0;i<6;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[3][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest4(){          
var arr=['М','Е','Д','В','Е','Д','Е','В'];
for(var i=0;i<8;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[4][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest5(){          
var arr=['Ц','Е','З','А','Р','Ь'];
for(var i=0;i<6;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[5][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest6(){         
var arr=['С','П','Е','К','Т','Р','А'];
for(var i=0;i<7;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[6][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest7(){         
var arr=['Р','Ю','Р','И','К'];
for(var i=0;i<5;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[7][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest8(){          
var arr=['В','Л','А','Д','И','М','И','Р'];
for(var i=0;i<8;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[8][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest9(){          
var arr=['П','Е','К','И','Н'];
for(var i=0;i<5;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[9][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest10(){         
var arr=['Т','Р','А','М','П'];
for(var i=0;i<5;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[10][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest11(){        
var arr=['Ч','Е','Р','Н','О','Г','О'];
for(var i=0;i<7;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[11][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest12(){          
var arr=['Б','Е','Л','О','Г','О'];
for(var i=0;i<6;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[12][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i]; };
}};
function logicQuest13(){          
var arr=['М','И','Н','С','К'];
for(var i=0;i<5;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[13][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest14(){         
var arr=['С','И','Л','Ь','Н','Е','Е'];
for(var i=0;i<7;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[14][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest15(){        
var arr=['Б','У','Д','Д','И','З','М'];
for(var i=0;i<7;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[15][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest16(){         
var arr=['Л','А','В','К','Е'];
for(var i=0;i<5;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[16][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest17(){         
var arr=['С','О','Л','Н','Ц','Е'];
for(var i=0;i<6;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[17][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest18(){          
var arr=['С','И','Р','И','У','С'];
for(var i=0;i<6;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[18][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest19(){          
var arr=['П','Л','У','Т','О','Н'];
for(var i=0;i<6;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[19][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
function logicQuest20(){          
var arr=['Л','И','Н','К','О','Л','Ь','Н'];
for(var i=0;i<8;i++){
  if(pushBookv == arr[i]||randomBukv==(i+1)){boolDraw[20][i+1] = true;vernayaBookv = true; delete arrNumberLetter[i];};
}};
