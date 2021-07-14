// Terminal
$('body').terminal({
	//hello function
	hello:function(what) {
		// body...
		this.echo('Hello ,'+what+
			'.Welcom to CMG terminal.');
	},
	//help function
	help:function () {
		this.echo('clear'
			+'\ntime'
			+'\ndate'
			+'\nexit'
			);
	},
	//time function
	time:function (){
		var dt = new Date();
		
		var month = dt.getMonth()+1;
		var day = dt.getDate();

		var curr_time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		this.echo(curr_time);
	}
	,
	//time function
	date:function (){
		var dt = new Date();
		
		var month = dt.getMonth()+1;
		var day = dt.getDate();

		var curr_date = dt.getFullYear()+'/'+(month<10 ? '0' : '')+month+'/'+(day<10 ? '0' : '') + day;
		
		this.echo(curr_date);
	},
	exit:function(){
		if (confirm('This action will close the current tab'+'\nAre you sure you want to precced')) {
 			
 			window.close();
		} else {
 			 // false
		}
		
	}

},{
	greetins:'My First Web Terminal'
});
