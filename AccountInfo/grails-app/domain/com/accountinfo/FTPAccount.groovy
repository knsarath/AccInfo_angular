package com.accountinfo
import org.codehaus.groovy.grails.validation.routines.InetAddressValidator

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
    String pop3ImapHost
    String pop3Port
    String imapPort
    String smtpHost
    String smtpPort

    static constraints = {
        IP(blank: false, unique: true, validator: {
            return InetAddressValidator.getInstance().isValidInet4Address(it)
        } )
    }

}
