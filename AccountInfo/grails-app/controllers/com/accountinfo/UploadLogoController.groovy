package com.accountinfo
import org.apache.commons.io.FilenameUtils;

import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.multipart.MultipartFile
import org.codehaus.groovy.grails.web.context.ServletContextHolder
class UploadLogoController {

       def upload() {
       
                 try{
                     
                        def f =  request.getFile('file')
                        def filename = params.filename
                        def id = FilenameUtils.removeExtension(filename);   
                        def webrootDir = servletContext.getRealPath("/")
                        def newFilename = webrootDir+'images/logos/'+filename
                        f.transferTo(new File(newFilename)) 
                        def account =  Webaccount.get(id)
                        account.iconUrl = 'static/images/logos/'+filename
                        account.save(flush:true)
                        render "success"
                 }
                catch(Exception e)
                 {
                       render e;
            
                 }

    }
    
}

