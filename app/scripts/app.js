(function(){
	'use strict';

	 if(!Detector.webgl){
		Detector.addGetWebGLMessage();
    } else {

      var container = document.getElementById('container');
      var globe = new DAT.Globe(container);
		globe.animate();
    }


    var c = document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img = new Image(4096, 2048);
    img.onload = function(){

        ctx.drawImage(img,0,0);

        setInterval(function(){

            ctx.clearRect(0, 0, 4096, 2048);

            var blue = '#34aadc';
            var green = '#4cd964';
            var yellow = '#ffdb4c';
            var orange = '#ff9500';
            var red = '#ff3b30';


            //#5cb85c
            //#428bca
            //#5bc0de
            //#f0ad4e
            //#d9534f

            var value = [];

            for(var y=0;y<256;y++){
                value[y] = [];
                for(var x=0;x<512;x++){
                    if(!parseInt(Math.random()*5))
                        value[y].push(parseInt(Math.random()*6));
                    else
                        value[y].push(0);
                }
            }


            var radius = 2048/(value.length*2);
            var diametre= radius*2;


            for(var y=0; y<value.length; y++) {
                for (var x = 0; x < value[y].length; x++) {
                    if(value[y][x]==0)
                        continue;
                    ctx.beginPath();
                    ctx.arc(x*diametre+radius, y*diametre+radius, radius, 0, 2 * Math.PI, false);
                    switch (value[y][x]){
                        case 5:
                            ctx.fillStyle = red;
                            break;
                        case 4:
                            ctx.fillStyle = orange;
                            break;
                        case 3:
                            ctx.fillStyle = yellow;
                            break;
                        case 2:
                            ctx.fillStyle = green;
                            break;
                        case 1:
                            ctx.fillStyle = blue;
                            break;
                    }
                    ctx.fill();
                }
            }

            ctx.drawImage(img,0,0);
        },1000)

    }
    img.src = 'images/world_white_2.png';

})();
