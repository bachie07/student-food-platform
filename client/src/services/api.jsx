const API_URL = 'http://localhost:5001/api'


export const login = async(email, password) => { 

    const response = await fetch(`${API_URL}/auth/login`, { // fetch backend api , with post request
 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // this to let express now its a json file
        },
        body: JSON.stringify({email,password}), // convert to json
        
    });

    if(!response.ok) {

        const error = await response.json();
        throw new Error(error.error || 'Log in failed')
    }

    return response.json()
}
