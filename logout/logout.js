var ref = new Firebase("https://linkedin-project.firebaseio.com");

function logout() {
	ref.unauth();
}

function authDataCallback() {
  	var authData = ref.getAuth();
	if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  	} 
	else {
	    console.log("User is logged out");
	    window.location = "login/login.html";
	}
}
ref.onAuth(authDataCallback);