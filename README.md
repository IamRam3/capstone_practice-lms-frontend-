# Library Management System (LMS) - Frontend

## Overview
This project is the **frontend** part of the Library Management System (LMS), built with **React**, **Axios**, and **Bootstrap**. It provides a responsive and role-based user interface integrated with the backend Spring Boot REST API, secured with JWT authentication.

The LMS frontend enables operations such as:

- [ ] User authentication and authorization (Admin, Librarian, Member)
- [x] Viewing and searching the book catalog
- [x] Navigating between dashboard and book catalog
- [ ] Logging out securely with JWT token management

This frontend works in tandem with a Spring Boot backend (not included here) and connects via REST API endpoints.

---
## Glimpse of the project

### Login Page
<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/67ab4d7f-9c8b-4b7f-87a9-9b8c9ad86479" />

---
### Dashboard Page
<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/eca048b4-05a8-4102-a907-c7f87169dee0" />

---
### Books Catalog Page
<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/360d7304-53d9-4592-b99c-70c63d7d4694" />

---

## Project Structure

- `src/components/`  
  React components including `Login`, `Dashboard`, `BookCatalog`, and others
- `src/App.js`  
  Main app component with routing and login state management

---

## Setup & Run

1. **Clone the repository**

2. **Navigate to frontend directory**:

```

cd capstone_practice-lms-frontend-/lms-frontend

```

3. **Install dependencies**
```

npm install

```
4. **Start the React development server**
```

npm start

```

5. **To access the app**

Open `http://localhost:3000` in your browser.

---

## Usage

- Initially, the login page will appear.  
- ### Use mock credentials for now.
     Username :- `admin`
  
     Password :- `admin123`
- After successful login, you land on the Dashboard page.  
- From Dashboard, navigate to the Book Catalog page using the provided button.  
- In Book Catalog, you can search/filter books and navigate back or logout.  
- Logout clears JWT and returns to the login page.

---

## Notes on Backend Integration

- Currently, a mock book list is used in `BookCatalog.js` for testing without backend.
- To enable backend integration:  
- Uncomment the backend fetch code in `BookCatalog.js`  
- Ensure backend server is running and accessible at `http://localhost:8080`  
- Axios requests attach JWT token stored in localStorage in Authorization header.

---

## Future Improvements

- Implement complete role-based UI for Admin, Librarian, and Member.
- Add more components for Member Management, Lending, Fine Management and Reports.
- Enhance error handling and loading states.
- Add global state management (e.g., Context API or Redux).
- Responsive UI enhancements and accessibility improvements.

---
### Bugs
- The 'Logout' Button on Books Catalog page redirects to Dashboard page!

---

This frontend forms the user interface layer of a LMS system.

