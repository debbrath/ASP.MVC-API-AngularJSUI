# ASP.NET MVC API with AngularJs System

A booking system for community halls with ASP.NET MVC Web API backend and AngularJS frontend.

<br/>

## Project Overview

This system allows managing community center hall bookings through a RESTful API with a user-friendly AngularJS UI.

<br/>

## Technologies

ASP.NET MVC Web API (Visual Studio 2015)

Entity Framework Database-First with EDMX

AngularJS 1.x

SQL Server 2014

<br/>

## Project Structure
```
CommunityCenterBookingSystem/
│
├── CommunityCenterBookingSystem.sln          # Visual Studio solution file
│
├── CommunityCenterBookingSystem.WebAPI/      # ASP.NET MVC Web API project
│   ├── Controllers/                           # API controllers (BookingsController.cs)
│   ├── Models/                                # EF generated models (from EDMX)
│   ├── EDMX/                                  # EDMX model and related files
│   ├── App_Start/                             # Web API config, routing, CORS setup
│   ├── Web.config                             # Configuration file (DB connection string)
│   ├── Global.asax                            # Application entry point
│   └── ...                                   # Other API project files
│
├── CommunityCenterBookingSystem.UI/           # AngularJS frontend project or folder
│   ├── index.html                            # Main UI page
│   ├── scripts/                              # AngularJS app scripts
│   │   └── app.js                           # AngularJS module and controller
│   ├── styles/                              # CSS stylesheets
│   └── ...                                 # Other UI assets
│
└── README.md                                # This file

```

<br/>

## Features

View bookings calendar/list

Add new bookings with form validation

API CRUD operations for bookings

Simple ledger and billing tracking (planned)

JSON and XML response formats supported

<br/>

## Getting Started
Prerequisites

Visual Studio 2015+

SQL Server 2014+

Web browser (Chrome, Edge, Firefox)

Setup

Clone the repo:

git clone https://github.com/yourusername/community-center-booking.git


Open solution in Visual Studio.

Update connection string in Web.config inside the WebAPI project to your SQL Server.

Build solution.

Run Web API project (usually http://localhost:xxxx/).

Serve the AngularJS UI by opening index.html in a browser or host it inside the WebAPI project.

API Endpoints
Method	Endpoint	Description
GET	/api/bookings	List all bookings
GET	/api/bookings/{id}	Get booking by ID
POST	/api/bookings	Create new booking
PUT	/api/bookings/{id}	Update existing booking
DELETE	/api/bookings/{id}	Delete a booking

## 🚪 API 
```
| Method | Endpoint     | Description                                                  |
|--------|--------------|--------------------------------------------------------------|
| GET    | /bookings    | List all bookings                          |
| GET    | /bookings    | Create new booking         |
| GET    | /bookings/{id}     | Update existing booking         |
| POST   | /bookings/{id}     | Delete a booking         |


```
<br/>


## Usage

Open AngularJS UI in browser.

Add bookings via form, view booking list updates.

Use API clients like Postman to test API endpoints directly.

Troubleshooting

Serialization errors: Disable EF proxy creation:

db.Configuration.ProxyCreationEnabled = false;


CORS issues: Enable CORS in API config.

Invalid date format: Send dates as ISO strings (.toISOString() in JS).

Model validation errors: Check API error messages and logs.


