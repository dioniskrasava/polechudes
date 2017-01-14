var pervPop = true;  // ПЕРВАЯ ПОПЫТКА
var ugadal = false;  // УГАДАЛ БУКВУ
var prizDubl = true; // "выключатель", который отключает зацикливание функции при попадании на приз
var ciklPrizOchk = true; // "выключатель", который отключает зацикливание начисления очков, при выигрыше приза
var prizViigrishiBool = false;  // "выключатель" зацикливания при выигрыше приза
var ciklOpen = true; // "выключатель" цикла при попадании на сектор "открыть букву"
var prizNoAnswerTextBaraban = false; // если выпал приз и нажали (нет) - предложить прокрутить барабан.


function logic1(){
  if(ochkiV == "bank"){ochki = 0};
  if(ochkiV == 150 || ochkiV == 300 || ochkiV == -100 || ochkiV == 100 || ochkiV == 200 || ochkiV == 0
    || ochkiV == 50 || ochkiV == 250  || ochkiV == "bank" ||
      ochkiV == 350 || ochkiV == 500 || ochkiV == "dubl" )
  {
    
    obrisovksButton();
    if(pushBookv == ""){vernayaBookvCicle = true};
    if(boolButtonBukv==true && vernayaBookv == true && 
    ciklOchkiv == true && vernayaBookvCicle == true && pushBookv !=""  && 
    boolButtonProverka==true)                                     /*Если выбирают букву и выбрали ее верно , то...*/
    { 
      ochki += ochkiVN; 
      ciklOchkiv = false;  // отключаем зацикливание очков
      vernayaBookvCicle = false;
      pushBookv = "";
      posledniUglBarabana = angleFunction(baraban.angle);
      boolVrashBarabZanovo = true;
      boolButtonBukv=false;
      vernayaBookv = false; // УБИРАЕТ ЗАЦИКЛИВАНИЕ 
      music3.play();		// ЗВУК
      ugadal = true;
      pervPop = false;
      boolButtonProverka=false;
    };

    if(boolButtonBukv==true && vernayaBookv == false && ciklOchkiv == true && vernayaBookvCicle == true && pushBookv != "" && 
    	ugadal == false && boolButtonProverka==true) 
   {                                                        /// ВЫБРАЛИ БУКВУ ... И НЕВЕРНО
      ciklOchkiv = false;  // отключаем зацикливание очков
      vernayaBookvCicle = false;
      pushBookv = "";
      posledniUglBarabana = angleFunction(baraban.angle);
      boolVrashBarabZanovo = false;
      boolButtonBukv=false;
      vernayaBookv = false;
      ugadal = false;
      boolButtonProverka=false;

    };

    if(ugadal == true && dAngle == 0){
    	brush.drawText({x:600,y:170,text:"Вы угадали букву !",color:'black',size:25});};

    if(ugadal == false && dAngle == 0 && pervPop != true && boolButtonBukv==true && pushBookv != "" && vernayaBookv == false){
    	brush.drawText({x:600,y:170,text:"Такой буквы нет !",color:'black',size:25});
      };

if(boolButtonSlovo == true){
  brush.drawText({x:940,y:315,text:'Стереть',color:"black",size:18});
  brush.drawRect({x:930,y:303,h:40,w:100,strokeColor:'black',strokeWidth:1});
};
if(boolButtonSlovo == true){
  brush.drawText({x:500,y:140,text:"Вводите буквы поочередно.",color:'black',size:25});
  brush.drawText({x:500,y:170,text:otvPush,color:'blue',size:25});
};

 otvetDrawLeftPole();  // пишем "Ваша буква"
 };  


	if(posledniUglBarabana != angleFunction(baraban.angle) && dAngle != 0){ // если барабан крутится
		    boolVashBukv=false;
        boolVrashBarabZanovo = false;
		    ugadal = false;
        prizDubl = true; // на случай, если сектор приз выпадет несколько раз за игру
        prizNoAnswerTextBaraban = false; 
        ciklPrizOchk = true; // 
        prizViigrishiBool = false;
        pushBookv = "";
       
       if(ciklOpen == false){ciklOpen = true};
        };

  if(posledniUglBarabana != angleFunction(baraban.angle) && dAngle == 0){	// если барабан прокрутился и остановился
     	ciklOchkiv = true;ugadal = false;
    
      boolCiklPopad = true; // чтобы не зацикливал уничтожение элементов массива букв-ответа..
     };
    

    if(randNum == 1){ logicQuest1(); };
    if(randNum == 2){ logicQuest2(); };
    if(randNum == 3){ logicQuest3(); };
    if(randNum == 4){ logicQuest4(); };
    if(randNum == 5){ logicQuest5(); };
    if(randNum == 6){ logicQuest6(); };
    if(randNum == 7){ logicQuest7(); };
    if(randNum == 8){ logicQuest8(); };
    if(randNum == 9){ logicQuest9(); };
    if(randNum == 10){ logicQuest10(); };
    if(randNum == 11){ logicQuest11(); };
    if(randNum == 12){ logicQuest12(); };
    if(randNum == 13){ logicQuest13(); };
    if(randNum == 14){ logicQuest14(); };
    if(randNum == 15){ logicQuest15(); };
    if(randNum == 16){ logicQuest16(); };
    if(randNum == 17){ logicQuest17(); };
    if(randNum == 18){ logicQuest18(); };
    if(randNum == 19){ logicQuest19(); };
    if(randNum == 20){ logicQuest20(); };



    if(ochkiV == "priz" && prizDubl == true){
      brush.drawText({x:500,y:140,text:'Рискнёте и попробуете выиграть приз?',color:"red",size:18});
      brush.drawText({x:500,y:160,text:'В случае проигрыша - игра окончена. В случае выигрыша - получите 1000 очков',color:"red",size:18});
      brush.drawRect({x:930,y:303,h:40,w:100,strokeColor:'black',strokeWidth:1});
      brush.drawRect({x:815,y:303,h:40,w:100,strokeColor:'black',strokeWidth:1});
      brush.drawText({x:937,y:313,text:'Нет',color:'black',size:18});
      brush.drawText({x:822,y:313,text:'Рискнуть',color:'black',size:18});

      prizF();
    };

    if(prizNoAnswerTextBaraban == true){brush.drawText({x:500,y:140,text:'Вращайте барабан заново.',color:"red",size:18})};

    if(ochkiV == "open" && ciklOpen==true && dAngle == 0){
      posledniUglBarabana = angleFunction(baraban.angle);
      if(ciklOpen == true){
        randomBukv = randomOpenBukv();
        ciklOpen=false;
      };
    };

     if(ochkiV == "?"){
        brush.drawText({x:30,y:430,text:"Неизвестная область.",color:'black',size:28});
        brush.drawText({x:30,y:460,text:"Крутите барабан заново.",color:'black',size:28});
      };
    
   
   if(arrNumberLetter.length == 0 || massivZapolnNulls){game.setLoop('theEndHappy');}      

  };



var massivZapolnNulls = false;

function massivZapolnNullsF(){
  var abc = true;
  for(var i=0; i<=arrNumberLetter.length; i++){
      if(arrNumberLetter[i]!=undefined) {abc=false}
    }
      if(abc==true){massivZapolnNulls = true}
  
};


   function randomBoolF(){    // Далее идет функция для выдачи случайного числа (вопроса)
       var randBool = pjs.math.random(0,1);
       return randBool;
     };


  function prizF(){
    if(mouse.isPeekStatic('LEFT',boxPrizRisk.getStaticBox())){   // игрок рискует
      var randBool = randomBoolF();                              // псевдослучайное число
      if(randBool==0){game.setLoop('theEnd');};                  // игрок проиграл
      if(randBool==1){prizViigrishiBool = true;};                // игрок выиграл 1000 очков
    };

    if(mouse.isPeekStatic('LEFT',boxPrizNoRisk.getStaticBox())){  // игрок отказывается рисковать
      prizDubl = false;
      prizNoAnswerTextBaraban = true;
    };
  };

  function prizViigrish(){        // данная функция описывает текст в случае включенной булевой переменно
    if(prizViigrishiBool == true){
        brush.drawText({x:500,y:300,text:'Вы выиграли. + 1000 очков',color:"red",size:18});
        brush.drawText({x:500,y:330,text:'Вращайте барабан!!',color:"red",size:18});
        if(ciklPrizOchk == true){ ochki +=1000; ciklPrizOchk = false;};
    }
  };


function randomOpenBukv(){

    var rand = pjs.OOP.insertRandArrElement(arrNumberLetter);  // Извлечь случайный элемент из массива с удалением
    randOpen = rand;
    return randOpen;  
};




