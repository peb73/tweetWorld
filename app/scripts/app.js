(function(){
	'use strict';

	 if(!Detector.webgl){
		Detector.addGetWebGLMessage();
    } else {

      var container = document.getElementById('container');
      var globe = new DAT.Globe(container);
		globe.animate();
      
    }

})();
