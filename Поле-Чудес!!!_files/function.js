
var boolButtonBukv = false;    // БУЛЕВЫЕ ПЕРЕМЕННЫ ВКЛЮЧЕНИЯ ВЫДЕЛЕНИЯ КНОПОК "БУКВА" "СЛОВ"
var boolButtonSlovo = false;
var boolButtonProverka = false;
var boolButtonSteret = false;
function boolButtonBukvF(){
if(boolButtonBukv==false){if(mouse.isPeekStatic('LEFT',boxButBukv.getStaticBox())){boolButtonBukv=true;music2.play();boolVashBukv=true;}}
if(boolButtonBukv==true){if(mouse.isPeekStatic('RIGHT',boxButBukv.getStaticBox())){boolButtonBukv=false;music2.play();boolVashBukv=false;};}
};
function boolButtonSlovoF(){
if(mouse.isPeekStatic('LEFT',boxButSlovo.getStaticBox())&& boolButtonSlovo==false){boolButtonSlovo=true;music2.play();boolVashBukv=false;};
if(mouse.isPeekStatic('RIGHT',boxButSlovo.getStaticBox())&& boolButtonSlovo==true){boolButtonSlovo=false;music2.play();boolVashBukv=false;};
};
function boolButtonProverkaF(){
if(boolButtonProverka==false){if(mouse.isPeekStatic('LEFT',boxButProverka.getStaticBox())){boolButtonProverka=true;music2.play();}}
if(boolButtonProverka==true){if(mouse.isPeekStatic('RIGHT',boxButProverka.getStaticBox())){boolButtonProverka=false;music2.play();};}
};
function boolButtonSteretF(){
if(boolButtonSteret==false){if(mouse.isPeekStatic('LEFT',boxButSteret.getStaticBox())){boolButtonSteret=true;music2.play();otvPush=""}}
if(boolButtonSteret==true){if(mouse.isPeekStatic('RIGHT',boxButSteret.getStaticBox())){boolButtonSteret=false;music2.play();};}
};

//данная ф-я необходима для того, чтобы программа понимала - на какой сектор показывает стрелка.
function angleFunction(angl){       	// Даем название функции, в скобках даем вводимые данные (угол поворота)
var anglPre;							            // объявляем переменную (уголПреобразованный)
if ((angl/360) >=1){				        	// ЕСЛИ (угол/360) больше или равен 1, то
	anglPre = angl-360;				        	// уголПреобразованный = уголВведенный-360
	     while((anglPre/360) >= 1){	   	// далее вводим цикл --> пока ((уголПреобр. / 360) больше или равен 1 ) делаем цикл
	if((anglPre/360) >=1){			      	// если ((уголПреобр./360) >=1)
		anglPre -= 360;					          // уголПреобр. = уголПреобр. - 360
	}}
}
 else {anglPre = angl}					// иначе (уголПреобр. = уголВведенный) (на случай если угол не выходит за границы 360 градусов)
return anglPre;							// возвращаем значение углаПреобразованного
};
var ochki = 0;							// переменная отвечающая за количество очков
var boolPovtora = true;     // выключатель для разъединения цикла при попадании стрелки в сектор.
var ochkiV;                 // переменная на кол-во именно тех очков, на которые в данный момент указывает стрелка

function topLoopDraw() {
game.clear();  // чистим экран при каждом новом кадре   
baraban.draw();   // рисуем барабан
strelka2.draw();   // рисуем стрелку
brush.drawText(textTwo); // рисуем текст2
brush.drawText(textTri); // рисуем текст3
pravila();               // вырисовываем правила
prorBookv();            // прорисовываем буквы
prorBookvRect();        // прорисовыем буквенные рамки
ramka1.draw();          // прорисовываем рамку1
ramka2.draw();          // прорисовываем рамку2
ramkaBig.draw();        // прорисовываем рамку3
ramkaBig2.draw();       // прорисовываем рамку4
ramkaBig3.draw();       // прорисовываем рамку5
ramkaPravil.draw();     // прорисовываем рамку6
ramkaBukv.draw();       // прорисовываем рамку7
gagaga.draw();          // прорисовываем прыгающий мяч
dv_gagaga();            // вызываем ф-ю движения мяча
ramkaQuestion.draw();   // прорисовываем рамку вопросов
showQuest(textQestNum);           // вызываем ф-ю вывода вопроса (случайн.)
poleOtvetaRamki();     // рисуем рамки, для будущих букв
readEkr();             // подключаем возможность добавления в массив нажатой буквы
otvetDraw();           // пишем текст с интерактивной клавиатуры
logic1();
drawBoolBook();  // если клиент нажал на букву которая есть при его вопросе, то эта буква открывается.



nachaloDvizeniya();
massivZapolnNullsF();
drawNamePlayer();
playPauseGame();
drawVrashBarabanZanovo(); // при нужном условии - пишет "вращайте барабан заново"
begginGameF(); 			  // пишет "Ваша буква" если игра началась
provButtonDraw();		  // рисует кнопку "ПРОВЕРКА"
prizViigrish();

console.log(arrNumberLetter);
};

function vrashBaraban(){                          // функция вращения барабана
	baraban.angle += dAngle;                        // угол барабана зависит от скорости барабана прямозависимо
	dAngle += ddAngle;					                    // скорость барабана зависит от его ускорения
	if(key.isDown('SPACE')){dAngle = 27;}           // если нажат пробел, то скорость барабан = 27
  if(key.isUp('SPACE')){ddAngle = -0.07;}         // если пробел отпущен, то барабан замедляется со скор. = 0,07 за 1 цикл
  if(dAngle <= 0){ddAngle = 0;dAngle = 0;}        // если скорость барабана остановлена, то недопускаем его обратного вращения
  if(key.isPress('S')){ddAngle = 0;dAngle = 0;}   // если нажата кл.S - останавливаем барабан
  if(key.isPress('P')){ddAngle = 0;dAngle = 0;baraban.angle = 60} //нажата 'P' - барабан на 500 очков
  if(key.isPress('L')){ddAngle = 0;dAngle = 0;baraban.angle = 260} //нажата 'O' - барабан на 350 очков
  if(key.isPress('B')){ddAngle = 0;dAngle = 0;baraban.angle = 210}
  if(key.isDown('SPACE')){music1.play();}         // если пробел нажат, то включить звуковую дорожку
  if(dAngle <= 0){music1.stop();}                 // если барабан не вращается, то - перестать играть звук
 };

function dv_gagaga(){                   // ф-я для описывания движения прыгающего мячика
var dh=2;                               // приплюсывание. изменение высоты при ударе о пол
gagaga.y += dyGaga;                     // верт.позиция мячика зависит от его скорости
if(gagaga.y >= 320){dyGaga = -2;}       //если нижняя позиция, то меняем движение вверх
if(gagaga.y <= 120){dyGaga = 2;}        //усли взлетел достаточно высоко - начать опускаться
if(gagaga.y >= 280){gagaga.y += dyGaga-2.5;}   //замедляем скорость ближе к финалу
if(gagaga.y >= 300){gagaga.h -= dh;}        //если приближается к земле, начинаем сжимать мяч по высоте
if(gagaga.y < 310){gagaga.h = 50;}  };      // разворачиваем мяч по окончанию



function pravila(){                                       // вырисовывание текста с правилами
    brush.drawMultiText({ x : 484+7, y : 484+7,           //рисуем.мультиТекст. с коорд. по х,у
     text :"***********ПРАВИЛА*********" + 
     "**\n\nДля вращения барабана нажмите - пробел." +      
            " Для остановки барабана кликните S.\nТак-же имеются секретные кнопки P и L." + 
            "Их не стоит нажимать! :)" ,        // сам текст
     color : "black",size : 13,});  };                    // цвет текста, размер.




function randomQuestion(){    // Далее идет функция для выдачи случайного числа (вопроса)
 var randNum = pjs.math.random(1, 20);
 return randNum;};

var kolvoBukv;

function randomQuestionReal(numQuest){
  var question = ["", "Какой титул был у правителя России.\n Имя которого - Петр Первый?", "Кто был одним из главных\n инициаторов создания СССР?",
  "Именем какого литературного персонажа,\nназывают людей, выросших в диких условиях.","Кто был третьим президентов\n Российской Федерации?",
  "Кто был создателем Юлианского календаря?\n Какого его второе имя?","Желтый свет/цвет, мы видим\n из-за желтого .... света.",
  "Первый правитель Руси?","Какой князь крестил Русь?","Назовите столицу Китая?!","Какая фамилия у нынешнего\n президента США?",
  "Какого цвета было бы небо без атмосферы?","Какого цвета было бы солнце без атмосферы?","Столица Беларусии!?",
  "Продолжите высказывание:'Всё, что\n не убивает, делает нас ...'!","Религия, последователи которой\n желают достичь Нирванны?",
  "'Как слон, в посудной ....'","Ближайшая к нам звезда?","Вторая ближайшая к нам звезда?","Какая 'планета' солнечной системы\n в недавнем времени лишилась этого статуса?",
  "Какой президент США напечатан на\n 5-и долларовой купюре?"];
  var vivod;
  var arrKolvo = [0,10,6,7,9,7,8,6,9,6,6,8,7,6,8,8,6,7,7,7,9];
  for(var i = 1; i <= question.length; i++){
    if(numQuest==i){vivod = question[i];kolvoBukv=arrKolvo[i]-1;}
  }
  return vivod;
};

function poleOtvetaRamki(){                       // функция для рисования рамок под буквы ответа
  var arr = [
  'Император','Ленин','Маугли','Медведев','Цезарь',
  'спектра','Рюрик','Владимир','Пекин','Трамп',
  'чёрного','белого','Минск','сильнее','буддизм',
  'лавке','Солнце','Сириус','Плутон','Линкольн',
  ];
var i;
var len = arr[randNum-1].length;
var dy = 200;
var dx, j = 0; 
var strW = 1;       // ширина рамки при обычном состоянии
var strC = "black"; // цвет рамки при обычном состоянии
for(i=0; i<len; i+=1) {
    var ii = (((dx/500)+(dy/366))/2);  // коэф. позволяющий понять, что курсов наведен во внутрь рамки
    dx = (500 + (40)*j);
    var arrBB = [brush.drawRect({
    x : dx, 
    y : dy, 
    h: 45,
    w: 37,
    strokeColor: strC,
    strokeWidth: strW,
    name: "arrBB" + i})];
         
j+=1; // рисуем след.рамку правее
if(dx > game.getWH().w - 120){dy += (50+5); j=0;}  // если рамка ушла далеко вправо, то начнем новый ряд
}
};

var textQuestD;

// Следующая ф-я выводит какой-либо вопрос в соответствии со случайно выбранным числом
function showQuest(text) {  // ПИШЕМ ВОПРОС ИГРЫ
brush.drawMultiText({ x : 480, y : 20, 
      text :  text , 
      color : "black",size : 35, font : "serif" });

    }; 

//инициализируем виртуальную клавиатуру
var arrLettersEkr = ['А','Б','В','Г','Д','Е','Ч','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф',
'Х','Ц','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
function readEkr(){
  for(var i = 1; i < 33; i++){
    if(mouse.isPeekStatic('LEFT',buk[i].getStaticBox())) {pushBookv = arrLettersEkr[i-1];otvPush+=arrLettersEkr[i-1]};
  };
};



function otvetDraw() {              // поле вывода нажатой буквы на виртуальной клавиатуре
  if(pushBookv === undefined){pushBookv = ""};
  brush.drawText({
  text : pushBookv, 
  x : 740, y : 295, 
  color : "black",
  size: 45
});
};

var begginGame = true;  // ПЕРЕМЕННАЯ ОЗНАЧАЮЩАЯ НАЧАЛО ИГРЫ!!
var boolVashBukv = false;
function otvetDrawLeftPole() {     // поле надписи: "Ваша буква!!!" ЕСЛИ ТОЛЬКО ЭТО НЕ НАЧАЛО ИГРЫ
  if(begginGame != true && boolVashBukv == true){brush.drawText({
  text : "Ваша буква:", 
  x : 500, y : 300, 
  color : "red",
  size: 38
});};
};
///////////////////////////////////////////////
function begginGameF(){      // функция выдает значение того, что игра началась если нажата кнопка "БУКВА" или "СЛОВО" 
	if(boolButtonBukv == true || boolButtonSlovo == true){begginGame=false};
};





function obrisovksButton() {    // ОБРИСОВКА КНОПОК (БУКВА, СЛОВО)
    brush.drawMultiText({text : "---  Будете называть букву\nили слово?",
     x : 22, y : 410, color : "#000000", fillColor : "#000000",strokeColor : "#000000",size: 18});
    buttonBuk.draw();
    buttonSlovo.draw();
    if(boolButtonBukv==false){brush.drawRoundRect({x:60,y:585,h:27,w:62,strokeWidth:2,strokeColor: "black",radius : 5});};
    if(boolButtonSlovo==false){brush.drawRoundRect({x:350,y:585,h:25,w:70,strokeWidth:2,strokeColor: "black",radius : 5});};
    boolButtonBukvF();    // если нажали на кнопку БУКВА - включить буль
    
    boolButtonSlovoF();   // если нажали на кнопку СЛОВО - включить буль
    if(boolButtonBukv==true && boolButtonSlovo==false)
      {brush.drawRoundRect({x:60,y:585,h:27,w:62,strokeWidth:4,strokeColor: "red",radius : 5});};
    if(boolButtonSlovo==true && boolButtonBukv==false)
      {brush.drawRoundRect({x:350,y:585,h:25,w:70,strokeWidth:4,strokeColor: "red",radius : 5});};
    if(boolButtonBukv==true && boolButtonSlovo==true){boolButtonBukv=false;boolButtonSlovo=false};
    brush.drawText({text:'Выбрать ЛЕВОЙ кнопкой мыши. Отменить - ПРАВОЙ.',x:100,y:625,size:10,color:"black"});

    boolButtonProverkaF();
    if(boolButtonProverka==true)
      {brush.drawRoundRect({x:815,y:303,h:40,w:100,strokeWidth:4,strokeColor: "black",radius:5});};
    boolButtonSteretF();
    if(boolButtonSteret==true){ brush.drawRect({x:930,y:303,h:40,w:100,strokeColor:'red',strokeWidth:3});};
};


function provButtonDraw(){
	if(pushBookv != "" && ochkiV != "priz"){
		brush.drawText({text:'Проверить',x:815,y:313,size:20,color:'#1B7230'});
		brush.drawRect({x:815,y:303,w:100,h:40,strokeColor:'#1B7230',strokeWidth:2});
	};
};

function drawVrashBarabanZanovo() {
if(boolVrashBarabZanovo){brush.drawText({text:'Вращайте барабан заново!!!',x:20,y:455,color:'#D61D1D',size:23});};
};

function playPauseGame() {
  if (key.isPress('Q')){game.stop();};
};

var boolDialog = true;
var dialogText = "";


function myDialog(){
if(boolDialog == true){
brush.drawText({x:50,y:100,text:'Как вас зовут ???',color:'black',fillColor: '#E0F335',size:65});

pjs.dialogs.openLine({ 
  x : 50, y : 200, 
  w : 300, h : 30, 
  size : 80, 
  fillColor : "#E0F335" 
}, function (text) {
  dialogText = text; 
  if (!text) return; 
  console.log(text); 
});
};
boolDialog = false;
};


function drawNamePlayer(){
  brush.drawText({text:'Игрок : ' + dialogText ,x:500,y:585,size:22,color:'black'});
}