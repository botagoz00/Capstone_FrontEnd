# 🍋 Little Lemon Restaurant Website

A responsive multi-page React web application allowing users to explore the Little Lemon restaurant and make table reservations.

---

## 🧭 Project Overview

This project consists of:

- A **Homepage** where users can learn about the restaurant and click a “Book a Table” or “Reservations” button.  
- A **Booking Page** with a reservation form (date, time, guests, occasion) and real-time validation.  
- A **Confirmation Page** after successful booking.  
- Additional reusable components for navigation, layout, styling and accessibility.

---

## ✨ Key Features

- Responsive design that works across mobile, tablet and desktop.  
- Client-side form validation (date cannot be in the past, guests count, valid email etc.).  
- Dynamic booking times (updates as date changes).  
- Accessible UI using semantic HTML and ARIA attributes.  
- Navigation between pages via React Router.  
- Modular React component architecture.  
- Unit tests for validation logic and components.

---

## 🛠️ Built With

- **React.js** (Hooks: `useState`, `useReducer`, `useEffect`)  
- **React Router DOM** for routing between pages  
- **JavaScript (ES6+)**, **HTML5**, **CSS3** (Flexbox + Media Queries)  
- **Jest** & **React Testing Library** for unit testing  
- **create-react-app** (or your React setup)  

---

## 📗 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/Capstone_FrontEnd.git

2. **Navigate into the project directory**
   ```bash
   cd Capstone_FrontEnd
3. **Install dependencies**
    ```bash
   npm install
4. **Start the development server**
    ```bash
   npm start
5. **Open the app**
   The app should now be running at http://localhost:3000

## 🧪 Running Tests
To run the test suite for the project:

1. Run the following command:
    ```bash
   npm test
3. The testing environment will open in interactive watch mode.
4. Tests include:
   Form validation logic (valid and invalid input states)
   Component rendering and structure
   Accessibility and ARIA attribute checks
5. Press q to quit the test runner when done

## ♿ Accessibility Highlights
- Semantic HTML (<form>, <label>, <fieldset>, etc.)
- ARIA attributes (e.g., aria-label="On Click" on action buttons)
- High contrast colour palette and readable typography
- Keyboard-navigable inputs and controls

## 📱 Responsive Behaviour
The UI adapts to different screen sizes:
- On desktop, layout is wide and spreads content out.
- On tablet, spacing adjusts and font sizes scale.
- On mobile, the form becomes full-width, button expands, and padding reduces for a better touch experience.

## 👩‍💻 Author
Botagoz Amangeldiyeva
Front-End Developer | React Enthusiast

## 🙏 Acknowledgements
- Built as part of the Meta Front-End Developer Capstone Project.
- Design assets and user interaction inspired by the Little Lemon brand.
