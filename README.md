# Backend Notes App using JWT Authorizaiton in ExpressJS

Sign up and login to generate an access token and use the token to access the Notes related to the user

### Prerequisites
Need to install PostGres server and enter the credentials in ```config/db.config.js```

### How To run 

```
git clone https://github.com/RajParab/notes-express-backend.git
cd notes-express-backend
npm i
node server.js
```

### Examples of working endpoints
  
``` POST /api/signup/ ```<br /><br />
<img src="https://github.com/RajParab/notes-express-backend/blob/master/assets/signup.png" alt="SignUp" style="width:400px" />

``` POST /api/login/ ```<br /><br />
<img src="https://github.com/RajParab/notes-express-backend/blob/master/assets/login.png" alt="Login" style="width:400px" />

``` POST /api/notes/ ```<br /><br />
<img src="https://github.com/RajParab/notes-express-backend/blob/master/assets/createNote.png" alt="CreateNote" style="width:400px" />

``` GET /api/notes/ ```<br /><br />
<img src="https://github.com/RajParab/notes-express-backend/blob/master/assets/getNotes.png" alt="CreateNote" style="width:400px" />

``` POST /api/search?q=:query ```<br /><br />
<img src="https://github.com/RajParab/notes-express-backend/blob/master/assets/searchNote.png" alt="CreateNote" style="width:400px" />

