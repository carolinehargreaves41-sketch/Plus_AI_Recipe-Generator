# 🍽️ AI Magic Recipe Creator

A fully responsive, AI-powered recipe generator app that creates personalised, healthy, and budget-friendly recipes based on ingredients you already have at home.

🌐 **Live Site:** [https://sweet-rugelach-9bd15f.netlify.app/](https://sweet-rugelach-9bd15f.netlify.app/)

---

## 🌟 Project Overview

This web app was created as part of the SheCodes Plus Add-on course to develop skills in integrating AI APIs into real-world projects. Users can type in a list of ingredients (or a meal idea), and the app uses an AI model to generate a formatted, chef-quality recipe — complete with ingredients, method, servings, and cooking times.

---

## 📚 Learning Objectives

- ✅ Integrate a third-party AI API using Axios
- ✅ Handle asynchronous JavaScript with `.then()` and `.catch()`
- ✅ Implement client-side form validation and error handling
- ✅ Manage UI state (loading, error, success) dynamically
- ✅ Apply a typewriter animation for an engaging user experience
- ✅ Build and style a responsive single-page web app

---

## 🛠️ Technologies Used

- **HTML5** — Semantic markup for structure and accessibility
- **CSS3** — Custom styling with gradients, transitions, and animations
- **JavaScript (ES6)** — DOM manipulation, event handling, async logic
- **Axios** — HTTP client for API requests
- **Typewriter Effect** — Animated text rendering for recipe display
- **SheCodes AI API** — AI-powered recipe generation
- **Google Fonts** — Roboto typeface for clean, readable UI
- **VS Code** — Code editor
- **GitHub Desktop** — Version control and repository management
- **Netlify** — Continuous deployment and hosting

---

## ✨ Key Features

### 🤖 AI-Powered Recipe Generation

- Sends user input to the SheCodes AI API with a detailed chef persona prompt
- Returns a fully structured recipe including name, ingredients, method, servings, and total time
- Recipes are formatted using HTML elements (`<h1>`, `<h2>`, `<ul>`, `<ol>`) for clear presentation

### 🎬 Typewriter Animation

- Uses the Typewriter Effect library to render recipes character-by-character
- Creates an engaging, dynamic "writing" effect as the recipe appears on screen

### ✅ Form Validation & Error Handling

- Validates input before making an API call (minimum 3 characters required)
- Displays user-friendly error messages for invalid input or API failures
- Handles HTTP 404 and general network errors gracefully

### 🔄 Button State Management

- Submit button is disabled while the API is loading to prevent duplicate requests
- Visual feedback (opacity, cursor, label change to "Creating...") signals loading state

### 📜 Smooth Scroll

- Automatically scrolls to the recipe result after generation for a seamless experience

---

## 📊 Project Structure

```
ai-recipe-generator/
├── index.html          # Main HTML file
├── src/
│   ├── style.css       # All CSS styles
│   └── index.js        # JavaScript logic and API integration
```

---

## 🎨 Design Approach

The app uses a soft purple and pink gradient palette to convey warmth and creativity. Key design decisions include:

- **Centered single-column layout** — Clean and focused for ease of use
- **White card containers** — Recipe form and output are visually separated from the background
- **Purple left border on recipe output** — Provides a strong visual anchor when results appear
- **Subtle hover transitions** — Submit button scales and lightens on hover for clear affordance
- **Blinking animation while loading** — Communicates that the app is working

---

## 🚀 How to View

**Option 1: View Live Deployment**
Visit: [https://sweet-rugelach-9bd15f.netlify.app/](https://sweet-rugelach-9bd15f.netlify.app/)

**Option 2: Run Locally**

1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. Note: API calls require an active internet connection

**Option 3: Live Server (Recommended for Development)**

1. Install [VS Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension by Ritwick Dey
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Site opens at `http://localhost:5500`

---

## 💡 Key Learning Takeaways

### 1. Working with APIs Unlocks Enormous Power

Connecting to a third-party AI API transformed a static webpage into an intelligent, dynamic tool. Understanding how to send prompts and handle responses opened up a whole new dimension of what web apps can do.

### 2. Async JavaScript Requires Careful Handling

Managing what happens _before_, _during_, and _after_ an API call — disabling buttons, showing loading states, catching errors — made the importance of asynchronous logic much more concrete.

### 3. Prompt Engineering Matters

The quality of the AI's output was directly shaped by the context and instructions sent in the API call. Writing a clear, detailed chef persona prompt resulted in far better-structured recipes than a vague request.

### 4. User Experience is in the Details

Small touches — the typewriter animation, the smooth scroll, the "Creating..." button state — made the app feel polished and intentional. Good UX is built from many small, thoughtful decisions.

### 5. Separation of Concerns Keeps Code Maintainable

Splitting functionality into focused functions (`validateRecipeRequest`, `showError`, `setSubmitButtonState`, `displayRecipe`) made the code easier to read, debug, and extend.

---

## 📈 Future Enhancements

**Phase 1: Interactivity**

- [ ] Add ability to save favourite recipes to local storage
- [ ] Add a "Copy Recipe" button for easy sharing
- [ ] Implement dietary preference filters (vegetarian, gluten-free, etc.)

**Phase 2: Design & Accessibility**

- [ ] Make fully responsive for mobile devices
- [ ] Add ARIA labels and improve keyboard navigation
- [ ] Implement a dark mode toggle

**Phase 3: Content & Features**

- [ ] Add a recipe history panel to review past generations
- [ ] Allow users to rate or bookmark recipes
- [ ] Add a "Surprise Me" button that generates a random recipe

---

## 👤 Author

**Caroline Hargreaves**
Aspiring Web Developer | SheCodes Student

- 💻 [GitHub Profile](https://github.com/carolinehargreaves41-sketch)
- 🌐 [Live App](https://sweet-rugelach-9bd15f.netlify.app/)

---

## 📜 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it for educational purposes.

**Usage Terms:**

- ✅ Use for learning and education
- ✅ Fork and modify for your own projects
- ✅ Use as a portfolio piece (with credit)
- ❌ Do not claim as your own work
- ❌ Do not use commercially without permission

---

## 🙏 Acknowledgments

- **SheCodes** — For the comprehensive Plus AI course
- **Matt Delac** — Founder of SheCodes and excellent instructor
- **Axios** — For making HTTP requests simple and readable
- **Typewriter Effect** — For the delightful recipe reveal animation
- **Google Fonts** — For the clean and versatile Roboto typeface
- **Netlify** — For seamless deployment and hosting
- **MDN Web Docs** — For excellent JavaScript and CSS reference documentation

---

📌 **Project Status:** ✅ Completed — January 2026
🔢 **Version:** 1.0.0
📅 **Last Updated:** January 2026

Built with 💜 and lots of 🫖 in England
