/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

myapp.factory('parseErrors', ['$http',function($http){
       return {
           get: function(file,callback){
                  errorList  = x2js.xml_str2json(file);
                  totalErrors = errorList.errors.error_asArray.length;
                  response = (errorList.errors.error_asArray);
                  callback(response,totalErrors); 
                 
               
           }
       };
    }]);

