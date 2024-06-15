Car Rental App
This project is a web application for a company that provides car rental services in Ukraine.

## Features

- Home Page:
 Displays an overview of the company's services.
- Catalog Page: 
 Lists available cars with options to filter by brand, price per hour, and mileage.
- Favorites Page:
  Shows user's favorite car listings.

  ## Routing

Implemented using React Router with the following routes:
- `/` - Home page with a general description of the services.
- `/catalog` - Catalog page with various car listings.
- `/favorites` - Favorites page with user's favorite car listings.

Users navigating to a non-existent route will be redirected to the home page.

## Backend Setup

For managing the list of advertisements, a custom backend is created using the UI service [mockapi.io](https://mockapi.io/).

### Installation

1. Clone the repository:
    git clone https://github.com/yourusername/car-rental-app.git
  
2. Navigate to the project directory:
    cd car-rental-app

3. Install dependencies:
    npm install

### Running the Application
Start the development server:
npm start


Usage
- Browse through available cars.
- Filter cars by brand, rental price per hour, and mileage.
- Click on any car to view more details.
- Add cars to your favorites by clicking on the 'Add to Favorites' button on any car listing.
- View all your favorite cars in the favorites page.

Contact Information
For questions or feedback, please contact us at Didenkoelizabeth@gmail.com