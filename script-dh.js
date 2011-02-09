/**
 * @author Didier Hoareau
 */

// from vendor.couchapp
function _load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};


 $(document).ready(function(){
 	
	$("input[id='add_todo']").click(function(e){
		e.preventDefault() ;
		
		var text = $('input[type="text"]').val();
		// c'est ici qu'il faut modifier 
		// par exemple : remplacer text par : 
		// '<input type="checkbox"/>'+text+'<br/>'

		$("#todos").prepend('<input type="checkbox">'+text+'<br/>') ; //Ce qui est crée
	});
	
 });
