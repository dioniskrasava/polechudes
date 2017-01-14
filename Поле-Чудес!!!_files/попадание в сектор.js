
function nachaloDvizeniya(){
    if(dAngle != 0 && ddAngle !=0){boolPovtora = true}
};

function popal1Sekt() {
if((dAngle == 0) && (ddAngle == 0) &&                        // если барабан остановлен!!                                
  (angleFunction(baraban.angle) > 0) &&                      // и стрелка находится в первом  секторе!!
  (angleFunction(baraban.angle) < 22.5) && boolPovtora)      // а так-же отключен режим повтора 
    {
     boolPovtora = false;                                     // отключаем зацикливание начисления очков                                   
     ochkiV = 150;
     ochkiVN = 150;
     textTwo.setText("У вас всего " + ochki + " очков! ");    // изменяем текст
     textTri.setText("Выпало 150 очков");                     // изменяем текст кол-ва выпавших очков 
    };
};



function popal2Sekt(){
if((dAngle == 0) && (ddAngle == 0) &&                // Аналогичный код, вышеописанному коду для первого сектора                        
(angleFunction(baraban.angle) > 22.5) && (angleFunction(baraban.angle) < 45) && boolPovtora){
boolPovtora = false; ; ochkiV = "priz"; ochkiVN = 0;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Сектор приз.");
 }};


function popal3Sekt(){
if((dAngle == 0) && (ddAngle == 0) &&                      														                            
(angleFunction(baraban.angle) > 45) && (angleFunction(baraban.angle) < 67.5) && boolPovtora){
boolPovtora = false; ochkiV = "?"; ochkiVN = 0;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Выпал ?");
 }};


function popal4Sekt() {
if((dAngle == 0) && (ddAngle == 0) &&                   	    														                          
(angleFunction(baraban.angle) > 67.5) && (angleFunction(baraban.angle) < 90) && boolPovtora){
boolPovtora = false; ochkiV = 300; ochkiVN = 300;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Выпало 300 очков.");
 }};


function popal5Sekt(){if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 90) &&
 (angleFunction(baraban.angle) < 112.5) && boolPovtora){
boolPovtora = false;  ochkiV = -100; ochkiVN = -100;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Увы! - 100 очков");
 }};


function popal6Sekt(){
if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 112.5) && (angleFunction(baraban.angle) < 135)
 && boolPovtora){boolPovtora = false;  ochkiV = 100; ochkiVN = 100;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Выпало 100 очков.");
}};

function popal7Sekt(){if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 135) &&
 (angleFunction(baraban.angle) < 157.5) && boolPovtora){
boolPovtora = false;  ochkiV = 200; ochkiVN = 200;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Выпало 200 очков.");
 }};


function popal8Sekt(){ if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 157.5) &&                   
(angleFunction(baraban.angle) < 180) && boolPovtora){
boolPovtora = false;  ochkiV = 0; ochkiVN = 0;
textTwo.setText("У вас " + ochki + " очков. ");
textTri.setText("Выпало 0 очков.");
 }};

function popal9Sekt(){if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 180) && (angleFunction(baraban.angle) < 202.5) && boolPovtora){
boolPovtora = false;  ochkiV = 300; ochkiVN = 300;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Выпало 300 очков.");
}};

function popal10Sekt(){
	if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 202.5) && (angleFunction(baraban.angle) < 225) && boolPovtora){
boolPovtora = false;  ochkiV = "bank"; ochkiVN = -ochki;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Вы банкрот...");
}};

function popal11Sekt(){if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 225) &&                
(angleFunction(baraban.angle) < 247.5) && boolPovtora){ boolPovtora = false;  ochkiV = 50; ochkiVN = 50;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Выпало 50 очков.");
}};

function popal12Sekt(){
	if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 247.5) &&                
(angleFunction(baraban.angle) < 270) && boolPovtora){ boolPovtora = false; ochkiV = "open"; ochkiVN = 0;
textTwo.setText("У вас " + ochki + " очков.");
textTri.setText("Откройте букву какую-нибудь.");

}};
function vklBool12Sekt(){
	if((dAngle == 0) && (ddAngle == 0) && (((angleFunction(baraban.angle) > 270) && (angleFunction(baraban.angle) > 247.5))
|| 
((angleFunction(baraban.angle) < 270) && (angleFunction(baraban.angle) <  247.5)))){ boolPovtora = true;}
};

function popal13Sekt(){if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 270) &&               
(angleFunction(baraban.angle) < 292.5) && boolPovtora){boolPovtora = false;  ochkiV = 250; ochkiVN = 250;
textTwo.setText("У вас " + ochki + " очков!!");
textTri.setText("Выпало 250 очков");
}};


function popal14Sekt(){
	if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 292.5) &&               
(angleFunction(baraban.angle) < 315) && boolPovtora){boolPovtora = false; ochkiV = 350; ochkiVN = 350;
textTwo.setText("У вас " + ochki + " очков!!");
textTri.setText("Выпало 350 очков");
}
};


function popal15Sekt(){
if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 315) &&               
(angleFunction(baraban.angle) < 337.5) && boolPovtora){boolPovtora = false;  ochkiV = 500; ochkiVN = 500;
textTwo.setText("У вас " + ochki + " очков!!");
textTri.setText("Выпало 500 очков");
}
};
function vklBool15Sekt(){
if((dAngle == 0) && (ddAngle == 0) && (((angleFunction(baraban.angle) > 315) && (angleFunction(baraban.angle) > 337.5))
|| 
((angleFunction(baraban.angle) < 315) && (angleFunction(baraban.angle) <  337.5)))){ boolPovtora = true;}
};

function popal16Sekt(){
	if((dAngle == 0) && (ddAngle == 0) && (angleFunction(baraban.angle) > 337.5) &&               
(angleFunction(baraban.angle) < 359.9) && boolPovtora){boolPovtora = false;  ochkiV = "dubl"; ochkiVN = ochki;
textTwo.setText("У вас " + ochki + " очков!!");
textTri.setText("Очки удваиваются!!");
}
};

function block_1(){
    popal1Sekt();
    popal2Sekt();
    popal3Sekt();
    popal4Sekt();
    popal5Sekt();
    popal6Sekt();
    popal7Sekt();
    popal8Sekt();
    popal9Sekt();
    popal10Sekt();
    popal11Sekt();
    popal12Sekt();
    popal13Sekt();
    popal14Sekt();
    popal15Sekt();
    popal16Sekt();
};
