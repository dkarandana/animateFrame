/* ----- jQuery animateFrame -----
	- Dependencies 
		(jQuery core) | animate Enhanced (External)
		data-animation attribute 
		<ele data-animation="300_200,450_600,500_8000"></ele>
		
 */

'use strict';
$.animateFrame = {
		defaults:{
			device:'desktop',
			reverse:false,
			selector:false, // current element
			time:500,
			prop:'height'
		},
		elements:[]
	};
	
$.fn.animateFrame = function( options ){
	
  var conf = $.extend({}, $.animateFrame.defaults, options),
      animateFrame,
	  anim,
	  selector,info,selfInfo,start ;
	  
	return this.each(function() {
 
		selector = $(this);
		
		info = selector.data('animation').split(',');

		selfInfo = info[0];
		
		animateFrame = selfInfo.split('_');
		
		if(typeof conf.selector === 'string'){
			selector = selector.children(conf.selector);
		}
		
		var anim = new Object();
         
        start = (conf.reverse === true) ? 0 : 1 ;
		
        
        console.log('stat',animateFrame[ 0 ]);
        anim[conf.prop] =  animateFrame[ start ];

	// do animate
		selector
		.animate(anim, conf.time);	
	});
	  
};
