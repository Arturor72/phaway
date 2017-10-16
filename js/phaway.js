$(document).ready(main());
var canvas = this.__canvas = new fabric.Canvas('c');

function loadAnillo(pathAnillo, canvas){

    (function() {
        canvas.clear();
        fabric.Object.prototype.transparentCorners = false;
        
        var mImage=new fabric.Image.fromURL(pathAnillo, function(img) {
          img.scale(0.155).set({
            left: -4,
            top: -4,
            angle: 0,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            selectable:false,
          });
          canvas.add(img);
          canvas.bringToFront(img);
        }) ;

      })();
}
function createBackground(nameBackground, canvas){
    var path="img/";
    var extension=".jpg";
    (function() {
        canvas.clear();
        loadAnillo("img/Anillado.png",canvas);
        fabric.Object.prototype.transparentCorners = false;
        
        var mImage=new fabric.Image.fromURL(path+nameBackground+extension, function(img) {
          img.scale(0.15).set({
            left: 21,
            top: 0,
            angle: 0,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            selectable:false,
          });
          if(canvas.contains(img)){
            console.log("Yala");
          }else{
            console.log("Nola");
          };
          canvas.add(img);
          canvas.sendToBack(img);
        }) ;

      })();
}

function addImage(pathImage, canvas){
    (function() {
        fabric.Object.prototype.transparentCorners = false;
        var mImage=new fabric.Image.fromURL(pathImage, function(img) {
          img.scale(0.3).set({
            left: 0,
            top: 0,
            angle: 0
          });
          canvas.add(img);
        }) ;

      })();
}

function createText(texto, canvas){
    (function() {
        console.log("addText "+texto);
        var text = new fabric.Text(texto, { 
            left: 50, top: 0, fontFamily: 'Indie Flower', fontSize: 40,
        });
        canvas.add(text);
    })();
}
//sendBackwards
function main() {

    $('.carousel[data-type="multi"] .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    
    $("#Fondo").on("click",function(){
        createBackground("Fondo",canvas);
    });
    $("#FondoGato").on("click",function(){
        createBackground("FondoGato",canvas);
    });
    $("#FondoBailarina").on("click",function(){
        createBackground("FondoBailarina",canvas);
    });
    $("#FondoUnicornio").on("click",function(){
        createBackground("FondoUnicornio",canvas);
    });
    
    $("#Elefante").on("click",function(){
        addImage("img/Elefante.png",canvas);
    });
    $("#Gato").on("click",function(){
        addImage("img/Gato.png",canvas);
    });
    $("#RatonaSola").on("click",function(){
        addImage("img/RatonaSola.png",canvas);
    });
    $("#Unicornio").on("click",function(){
        addImage("img/Unicornio.png",canvas);
    });
    $("#addText").on("click",function(){
        var texto=$("#nameText").val();
        createText(texto,canvas);
    });
}




