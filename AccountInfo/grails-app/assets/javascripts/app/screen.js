/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(
   function(){ $(window).trigger( "resize" ); }
 ); 
$(window).resize(
    function(){
                
                var w = $(window).width();
                console.log(this.outerWidth)
                if(w >= 1059 && w <= 1280)
                 {
                   $("#leftbar").prop('class','span3')
                 }
                else if(w >= 1047 && w <= 1059)
                 {
                   $("#leftbar").prop('class','span2')
                 }
                  else if(w >= 903 && w < 1047)
                 {
                   $("#leftbar").prop('class','span1')
                 }
                  else if(w >= 1060 && w <= 1366)
                 {
                   $("#leftbar").prop('class','span3')
                 }
                 else if(w >= 1149 && w <= 1440)
                 {
                   $("#leftbar").prop('class','span4')
                 }
                  else if(w >= 1223)
                 {
                   $("#leftbar").prop('class','span5')
                 }
                 
                 
                 console.log($("#leftbar").prop('class'))
                
                
           }
 );   

console.log('Loaded SCreen resizer')