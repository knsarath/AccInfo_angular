/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var createWeb = myapp.controller('createWebController',['$scope','$http','parseErrors','fileUpload',function($scope,$http,parseErrors,fileUpload){
   
              $scope.submit = function(){
                                     $scope.errors = null;
                                     $scope.success = false;
                                     
                                     
                                     var url = '/AccountInfo/api/accounts/web';
                                    // console.log($scope.fields);
                                      $http.post(url,$scope.fields)
                                       .success(function(data,status){ var file = $scope.myFile;
                                                                        console.log(jQuery.parseXML(data)) 
                                                                       console.log(typeof file)
                                                                        if(typeof file === 'undefined') {  console.log('image not uploaded');   $scope.success = true;  }
                                                                        else  { saveIcon(data) }
                                                                     })
                                       .error(function(data){   
                                                 parseErrors.get(data,function(response,totalErrors) { $scope.totalErrors=totalErrors; $scope.errors=response });
                                   });
                              
                            
                             };
                             
             
          function saveIcon(data,status)
            {
                      
                      var file = $scope.myFile;
                     
                      data = x2js.xml_str2json(data);
                      var id = data.webaccount._id;
                      var filename = file.name;
                      var extension = filename.split('.').pop() 
                      filename = id + '.' + extension;
                      console.log(filename)
                      var uploadUrl = "/AccountInfo/UploadLogo/upload";
                      fileUpload.uploadFileToUrl(file, uploadUrl,filename);
                      $scope.success = true;
                
            }
           
        
             
    
}]);




/*
 * 
 *       LIST CONTROLLER START
 * 
 */


       myapp.controller('listAccountsController',['$scope','$http',function($scope,$http){
               
               $scope.list = function(type){
                        
                        $http.get('/AccountInfo/api/accounts/'+type)
                                .success(function(data){
                                    data = x2js.xml_str2json(data) ;
                                    $scope.listItems = data.list.webaccount;
                                    console.log( $scope.listItems);
                                });
                                         
               };
       }]);



/*
 *      END OF LIST CONTROLLER
 * 
 */




/*
 * 
 *     FTP CREATE (createFtp) CONTROLLER START
 * 
 */
      
      var createFTP = myapp.controller('createFtpController',['$scope','$http','parseErrors',function($scope,$http,parseErrors){
           
               $scope.saveFtp = function(){
                                                $scope.errors = null;
                                                $scope.success = false;
                                                console.log($scope.fields);
                                                var url = '/AccountInfo/api/accounts/ftp';
                                                $http.post(url,$scope.fields)
                                                        .success(function(data,status){ console.log(data)  })
                                                        .error(function(data){ console.log(data); parseErrors.get(data,function(response,totalErrors) { $scope.totalErrors=totalErrors; $scope.errors=response; console.log($scope.errors) }); });
                                          };   
      }]);
      
      

/*
 * 
 *    FTP CREATE CONTROLLER END
 * 
 */









console.log('Loaded Controllers');