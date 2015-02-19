class UrlMappings {

	static mappings = {
        "/api/accounts/web"(resources:"Webaccount")
         "/api/accounts/ftp"(resources:"FTPAccount")

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
