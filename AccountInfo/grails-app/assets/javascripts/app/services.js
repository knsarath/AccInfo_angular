/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

myapp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl,filename){
        var fd = new FormData();
        fd.append('file', file);
        fd.append('filename', filename);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
            console.log(data)
        })
        .error(function(data){ console.log(data)
        });
    };
}]);
console.log('services loaded');