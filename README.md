# admin-dashboard-searching-sorting-pagination-profile-pictures
React.js, Node.js, Chakra UI, Multer

run backend

open the "backend" folder in vscode
open integrated terminal in root of the folder
in terminal type command "npm install" and press enter to install the node packages
after installation is complete type "npm run devStart" and press enter to run the application
open "postman" and run the endpoint

http://localhost:1198/api/v1/user-add
Content-Type: application/json
{
"name":"ashish ranjan",
"email": "admin@mail.com",
"password": "12345678",
"password_confirm": "12345678",
"role": "administrator"
}
this will add user "admin" with password "12345678" into the mongodb

to run frontend

open the folder in vscode
open integrated terminal in root of the folder
in terminal type command "npm install" and press enter to install the node packages
after installation is complete type "npm run start" and press enter to run the application
