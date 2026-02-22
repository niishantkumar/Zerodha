# Zerodha Clone Frontend

This is a **React-based frontend** for a stock broking and investment platform inspired by Zerodha. It includes multiple pages, components, and responsive design to simulate a real-world trading platform's user interface.


---

## 🌐 Features

- **Landing Page** – Highlights key products, awards, stats, and educational initiatives.
- **Signup Page** – Form validation with Bootstrap styling.
- **About Page** – Hero and Team sections with company information.
- **Products Page** – Detailed info on trading products and apps with download links.
- **Pricing Page** – Displays brokerage, charges, and account benefits.
- **Support Page** – Searchable knowledge base and ticket creation interface.
- **Responsive Navbar & Footer** – With navigation and social media links.
- **404 Page** – User-friendly Not Found page.

---

## ⚡ Technologies Used

- **React** – Version 19.x
- **React Router DOM** – For routing between pages
- **Bootstrap 5** – For responsive layouts and components
- **Axios** – For potential API calls (currently frontend-only)
- **HTML5 & CSS3** – Custom styles in `index.css`

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

## 📦 Installation

1. Clone the repository:

```bash```
git clone https://github.com/niishantkumar/Zerodha.git

2. Navigate to the project folder:
```bash```
cd frontend

3. Install dependencies:
```bash```
npm install

4. Start the development server:
```bash```
npm start

5. Open http://localhost:3000 in your browser to see the app.

---

## 🔗 Routes

| Route      | Component   | Description                   |
| ---------- | ----------- | ----------------------------- |
| `/`        | HomePage    | Landing page with overview    |
| `/signup`  | Signup      | Account creation form         |
| `/about`   | AboutPage   | Company info and team members |
| `/product` | ProductPage | Detailed product listings     |
| `/pricing` | PricingPage | Brokerage & charges info      |
| `/support` | SupportPage | Ticketing and knowledge base  |
| `*`        | NotFound    | 404 page for unmatched routes |


---

## 📂 Folder Structure Details

* landing_page/home/ – Home page components
* landing_page/about/ – About page components
* landing_page/products/ – Product page components
* landing_page/pricing/ – Pricing page components
* landing_page/signup/ – Signup page component
* landing_page/support/ – Support page components
* landing_page/Navbar.jsx – Navigation bar
* landing_page/Footer.jsx – Footer with company info and links
* landing_page/NotFound.jsx – 404 Page

---

## 📌 Notes

* This is a frontend-only project, so signup and other forms do not interact with a backend.
* All external links (e.g., product download links) are placeholders and can be updated to live URLs.
* Styling is mostly Bootstrap-based with some custom CSS.

---

## ❤️ Author
Nishant Kumar – Full Stack Developer / Frontend Enthusiast

