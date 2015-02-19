<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js" ng-app="accountApp"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	          
	    <asset:javascript src="app.js"/>
	    <asset:stylesheet href="application.css"/>
            
            
		<r:layoutResources />

		<g:layoutHead/>
		
	</head>
	<body>
		
		<div class="row">
                    <div id="leftbar" class="span4" id style="height:80vh;"></div>
         <div class="span10 ">
             				<div class="navbar">
     							 <div class="navbar-inner">
        						 <div class="win-commandlayout">
            <a class="win-command" href="#/home">
               <span class="win-commandicon win-commandring icon-home"></span>
               <span class="win-label">Home</span>
            </a>

            <hr class="win-command">

            <a class="win-command" href="#/addnew">
               <span class="win-commandicon win-commandring icon-plus-5"></span>
               <span class="win-label">Add</span>
            </a>

            <a class="win-command" href="#">
               <span class="win-commandicon win-commandring icon-disk"></span>
               <span class="win-label">Save</span>
            </a>

            <button class="win-command">
               <span class="win-commandicon win-commandring icon-reload"></span>
               <span class="win-label">Reload</span>
            </button>

            <button class="win-command">
               <span class="win-commandicon win-commandring icon-arrow-left-12"></span>
               <span class="win-label">Previous</span>
            </button>

            <button class="win-command">
               <span class="win-commandicon win-commandring icon-arrow-right-11"></span>
               <span class="win-label">Next</span>
            </button>

            <hr class="win-command">

            <button class="win-command">
               <span class="win-commandicon win-commandring icon-cog-2"></span>
               <span class="win-label">Settings</span>
            </button>

            <button class="win-command">
               <span class="win-commandicon win-commandring icon-download"></span>
               <span class="win-label">Download</span>
            </button>

          <a class="win-command" href="#/List">
               <span class="win-commandicon win-commandring icon-list"></span>
               <span class="win-label">List</span>
            </a>
      </div>
     						 </div>
   						   </div>
             </div>


                 <g:layoutBody/>
            

            
         </div>

	<script type="text/javascript">
$(".nav li a").click(
           function()
            {
                
                 $('.nav li').prop('class','')
                 $(this).parent().prop('class','active');
                 console.log('Clicked')
            }
	);	
        
 
        
        
        
        
        
        </script>	
		
	</body>
</html>
