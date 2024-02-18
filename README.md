# Hotel-Management-Website
The hotel management system consists of two components: an admin panel and a hotel website. The website is designed for user-based interaction and reservation processes. The admin panel, on the other hand, is created to display and manage hotel-related information. It includes details about staff, room statuses, guest information, and other general information related to the hotel. With these functionalities, a comprehensive hotel management system is aimed to be achieved.

## Project's Entity Relationship Diagram (ER Diagram)
![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture1.jpg)
 
## Technologies Used
>
> - Backend: .NET Core Web API
> - Frontend: React.js
> - Database: MSSQL


## Usage of the Project
Both parts of the application have distinct templates. For the website, a Bootstrap template was chosen and adapted for use with React.js. Components were created for both the admin panel and the website. Axios library was used to make requests to backend functions and handle responses within the components using the useState structure. User inputs were gathered through functions and sent to backend functions via Axios library. Data received from users was then stored in the database. For example, the process of checking room availability was explained step by step with images, detailing both frontend and backend operations.

## Backend Step 1:
Initially, a web API project is created in Visual Studio. Data Access Layer (DAL) is established by creating classes to represent data models used by methods. These data models reside under the models folder. Controller classes are created to handle incoming requests and perform necessary operations. These classes are organized under the controller folder.

## Backend Step 2:
A DAL is created responsible for fetching available rooms and assigning room numbers based on the selected room type according to the information entered by the user via the website.

## Backend Step 3:
The class is marked as an API controller using the [ApiController] attribute. This attribute creates an API controller class based on the ControllerBase class, which handles specific functions and responds to HTTP requests. The [Route("[controller]")] attribute specifies the beginning of the routes for the class. The placeholder [controller] is replaced with the class name. In this case, since the class name is "Room," the route "[controller]" becomes "Room."

## Backend Step 4:
The "OdaSorgula" method handles HTTP PUT requests. It takes two date parameters (check-in and check-out), as well as the number of adults (numAdult) and children (numChild). The ConnectionString contains connection information to the SQL Server database. An SqlConnection object opens a connection to the SQL Server database. An SqlCommand object represents a stored procedure named "sp_OdaSorgula." Parameters are added to the command using command.Parameters.AddWithValue to pass them to the stored procedure. An SqlDataReader object is used to read the results of the stored procedure. Each record read is used to create an object of the Room class, and these objects are added to a list called "rooms." After database operations are complete, the SqlDataReader is closed, and the list of rooms is returned.

To send the necessary parameters to the OdaSorgula method, the first step on the frontend was to create the CheckAvailability component. After importing the necessary libraries, a formData array was created to store the required information. Using the useState hook, new values were assigned to the formData array with each update. The handleChange function saved the data to be posted to the backend functions with each user input. When the user clicked on the "Check Availability" button, the handleRoomCheck function was triggered. The necessary data was extracted from the formData and formatted appropriately for the database before being sent using the Axios library. Here, the destination for the values to be sent is specified as localhost:7185 port and the Oda controller. The required parameters are appended to the end of the port address within the {&} structure, retrieved from formData. If the response from the odaSorgula method is not empty, the list of available rooms is passed to the room component, where empty rooms suitable for the user's selection are displayed.


## Reservation Process on the User Side
### Step 1:
When the user logs into the website, they enter their desired reservation dates and the number of guests, then check the availability.

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture2.png)

### Step 2:
Based on the user's request, rooms available in terms of capacity and dates are displayed. For example, a single room is not shown if the user specifies 1 child and 1 adult.

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture3.png)

### Step 3:
After selecting a suitable room type and price, the user is directed to the reservation stage.

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture4.png)

### Step 4:
First, the user fills in the information of the person responsible for the transaction and the reservation details. Then, upon clicking the "Continue" button, they are directed to the page where they will fill in the information of other guests involved in the reservation.

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture5.png)

### Step 5:
Upon clicking the "Make Reservation" button, the user's reservation is processed, and they are informed about the reservation status.

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture12.png)

### Step 6:
With this step, the process is completed, and it is reflected on the admin side as well.

## Admin Panel
The admin panel includes sections such as Booking Event for viewing information related to event bookings, Guest Stayed and Guest Event for guest-related information, Rooms Feature for viewing room features, Rooms Status for viewing and adding information about room cleaning, Staff for viewing and adding staff information, and Booking for viewing reservation transactions. It also includes a Reports section for viewing profit rates based on months and seasons.

## Images of the Admin Panel

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture9.png)

![image](https://github.com/sudenurGlcn/Hotel-Management-Website/blob/main/images/Picture10.png)
