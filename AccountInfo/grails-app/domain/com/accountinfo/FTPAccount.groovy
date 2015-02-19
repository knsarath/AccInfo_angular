package com.accountinfo
import org.codehaus.groovy.grails.validation.routines.InetAddressValidator
import grails.rest.Resource;
@Resource
class FTPAccount {

    String provider
    String domainName
    String IP
    String serverName
    String ftpUsername
    String ftpPassword
    String ftpUploadFolder
    String SQLtype
    String SQLusername
    String SQLpassword
    String SQldbname
    String SQLHost
    String webMailId
    String webMailUsername
    String webMailPassword
    String pop3ImapHost
    String pop3Port
    String imapPort
    String smtpHost
    String smtpPort

    static constraints = {
        IP(blank: false, unique: true,  validator: {
            return InetAddressValidator.getInstance().isValidInet4Address(it)
        } )
    
        smtpPort(nullable:true)
        smtpHost(nullable:true)
        imapPort(nullable:true)
        pop3Port(nullable:true)
        pop3ImapHost(nullable:true)
        webMailPassword(nullable:true)
        webMailUsername(nullable:true)
        webMailId(nullable:true)
        SQLHost(nullable:true)
        SQldbname(nullable:true)
        SQLpassword(nullable:true)
        SQLusername(nullable:true)
        SQLtype(nullable:true)
}
}