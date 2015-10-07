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

            //#5cb85c
            //#428bca
            //#5bc0de
            //#f0ad4e
            //#d9534f

            var value = [//
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//
                [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
                [1,0,2,5,0,3,0,2,1,0,2,5,0,3,0,2],//
                [1,0,5,0,1,0,3,0,1,0,5,0,1,0,3,0],//
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//
                [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
                [1,0,2,5,0,3,0,2,1,0,2,5,0,3,0,2],//
                [1,0,5,0,1,0,3,0,1,0,5,0,1,0,3,0],//
            ]

            var radius = 2048/(value.length*2);
            var diametre= radius*2;


            for(var y=0; y<value.length; y++) {
                for (var x = 0; x < value[y].length; x++) {
                    ctx.beginPath();
                    ctx.arc(x*diametre+radius, y*diametre+radius, radius, 0, 2 * Math.PI, false);
                    switch (value[y][x]){
                        case 5:
                            ctx.fillStyle = '#d9534f';
                            break;
                        case 4:
                            ctx.fillStyle = '#f0ad4e';
                            break;
                        case 3:
                            ctx.fillStyle = '#5bc0de';
                            break;
                        case 2:
                            ctx.fillStyle = '#5cb85c';
                            break;
                        case 1:
                            ctx.fillStyle = '#428bca';
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
