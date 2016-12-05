OVERVIEW

Billing Simplified is a transparent communication application for doctors and their billing companies. This dev team built Billing Simplified to solve a practical business problem, and in so doing were able to strengthen their skills with the MEAN stack.

Billing Simplified allows Doctors and their billing companies an easier way to be more transparent financially. There are four different types of users, Practice Admin, Practice Staff, Billing Admin, and Billing Staff. The Practice Admin and Staff can add patients, update their information, and document bill payments. Eventually, we hope to allow the Practice Admin to be able to view their financial wellness using D3. The Billing Staff are able to see all of the practice offices and their patient’s payment history. Billing admin can add new practices, staff members along with the additional functionality that the Practice Staff has. 

MAJOR TECHNOLOGIES

•	Angular

•	Gulp/Sass

•	MongoDB

•	HTML5

•	CSS

•	Node

LOG IN AND AUTHENTICATION

From this screen, users are able to log in with valid credentials provided to them by the Billing Administrator. Authentication is done using passportjs and bcryptjs to make sure user information is protected and secure. Since there are four different user types, checks are done in the app.js to check the users type, depending on the type they will be taken to their different login views accordingly.   

 
 DATABASE
 
The database stores:

•	user information, including login information

•	practice information, including its patients and bills

DISCLAIMER

Billing Simplified is a non-commercial student project meant to be a prototype for a future billing solution, but at this moment is open-source code. The project was a tool for new developers to learn to build fully functional websites using the MEAN stack.

