# App Startup Marketplace

This project is a web application for connecting app startups with potential investors. It consists of a Flask backend and a React frontend.

## Setup Instructions

### Prerequisites
- Python 3.7+
- Node.js 14+
- Git

### Cloning the Repository
1. Open your terminal (Command Prompt on Windows, Terminal on macOS/Linux)
2. Run the following command:
   ```
   git clone https://github.com/your-username/app-startup-marketplace.git
   cd app-startup-marketplace
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`
4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```
5. Run the Flask application:
   ```
   flask run
   ```
   The backend should now be running on `http://localhost:5000`

### Frontend Setup
1. Open a new terminal window/tab
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install the required packages:
   ```
   npm install
   ```
4. Start the React application:
   ```
   npm start
   ```
   The frontend should now be running on `http://localhost:3000`

## Usage
Open your web browser and go to `http://localhost:3000` to use the application. You can register as a new user, log in, create startup listings, and view existing listings.

## Development
- The backend code is located in `backend/app.py`
- The frontend code is located in `frontend/src/App.js`

Feel free to modify these files to add new features or make improvements!
