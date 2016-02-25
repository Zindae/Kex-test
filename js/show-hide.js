$(document).ready(function(){ 
		
		// ==> SHOW & hide used to display each 'page'
		// short css 'display' reset before each hide/show in order to prevent
		// conflicts since hide/show is abstracted under jquery.
        
        $('#button1, #button2, #button3, #button4, #button5, #btn').click(function() {        
             
			 
			 
            switch(this.id) {
       	
       	// start-page
       	case 'button1': 
       		$('.login, .view2').css('display', ''); 
       		$('.login').show(); 
       		$('.view2').hide();
       		break; 
       	
       	// main1view1
       	case 'button2':
		case 'btn':
       		$('.login, .view2').css('display', ''); 
       		$('.view2').show(); 
       		$('.login').hide();
       		break; 
       		
       	// main1view2
       	// case 'button3':
			// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
			// $('.main1').show(); 
       		// $('.start-page, .main1view1, .main2').hide();
       		// break; 
       		
       	// // main2view1
       	// case 'button4':
			// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
			// $('.main2').show(); 
       		// $('.start-page, .main2view2, .main1').hide();
       		// break; 

       	// // main2view2
       	// case 'button5':
			// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
			// $('.main2').show(); 
       		// $('.start-page, .main2view1, .main1').hide();
       		// break; 
			}
		});
});