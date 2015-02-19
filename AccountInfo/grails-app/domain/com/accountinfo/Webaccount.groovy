package com.accountinfo


import grails.rest.Resource;
@Resource
class Webaccount {

    String provider
    String username
    String password
    String registeredEmail
    String iconUrl
    String homepageUrl


    static constraints = {

                provider(nullable:false)
                username(nullable:false)
                password(nullable:false)
                registeredEmail(nullable:true)
                homepageUrl(nullable:false)
                iconUrl(nullable:true)
    }
    
    void beforeValidate() {
        homepageUrl = (!homepageUrl || homepageUrl?.contains('://')) ? homepageUrl : 'http://' + homepageUrl
    }
    
}
