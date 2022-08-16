# Spotify v.2 clone

This is a Spotify web app clone.
There are some feature : 

 - Listen to music
 - navigate between your Playlists

# Requirement before use
before use you need add some files and connect to spotify API and ... :

 - Need a spotify account
 - Sign In spotify developer dashboard
 - Get **secret key** and **Client ID**
 - Need to set **Redirect URIs** in Edit Settings
 - create .env.local file for environment variable inside that you need to set 4 values :
	 - URL : your domain 
	 - Client_ID : get from spotify
	 - Secret : get from spotify
	 - JWT_Secret : generate with this command 		  {openssl rand -base64 32}
 -  create a next.config.js file  and add image domain: 
		 because we use dynamic address for images we 		  must add our image domain in config
	 -`images: {
		domains: ["i.scdn.co"],
	},`
	- install all package with : **npm install**

## run app

**npm run dev**


![Screenshot from 2022-08-17 00-47-48](https://user-images.githubusercontent.com/61544097/184977174-4dbe730a-34fd-4329-a2c4-0b792573a6e3.png)
