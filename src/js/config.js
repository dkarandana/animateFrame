$(function(){
	$('#type1').bind({
		click:function(){
			
			$('.animateFrame').animateFrame({
				selector:'img'      
			});
			
			console.log('clicked');
		}
	});
	$('#type1-revers').bind('click',function(){
		  $('.animateFrame').animateFrame({
			  selector:'img',
			  prop:'height',
			  time:2000,
			  reverse:true
		  });   
	});
	// width anim
	$('#type2').bind('click',function(){
		  $('.animateFrame').animateFrame({
			  selector:'img',
			  prop:'width',
			  time:2000
		  });   
	});

	$('#type2-revers').bind('click',function(){
		  $('.animateFrame').animateFrame({
			  selector:'img',
			  prop:'width',
			  time:2000,
			  reverse:true
		  });   
	});
});
