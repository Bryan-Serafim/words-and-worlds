# Words and Worlds – Interactive English Learning Platform

## 📌 Overview

**Words and Worlds** is an interactive English learning platform built with **React + Vite**, focused on delivering structured lessons through audio-driven exercises and modular page architecture.

This repository contains a **curated and performance-optimized subset** of the original project, designed for demonstration and portfolio purposes.

The platform emphasizes **active learning**, combining listening, repetition, and structured grammar patterns to improve comprehension and retention.

---

## 🚀 Features

* 🎧 **Audio-based learning**

  * Native audio playback using JavaScript Audio API
  * English and Portuguese audio support
  * Slow playback for better comprehension

* 📚 **Modular lesson system**

  * Each lesson is a self-contained React page
  * Independent structure with dedicated styles and assets
  * Scalable architecture for large content volumes

* ✅ **Interactive exercises**

  * Immediate feedback (correct/incorrect)
  * Reinforcement through repetition
  * Grammar-focused drills

* 🧠 **Grammar-focused progression**

  * Structured approach (affirmative, negative, interrogative forms)
  * Pronouns, verbs, and sentence construction
  * Contextual translation support

* ⚡ **Performance optimization**

  * Reduced from 700+ pages to a focused subset
  * Manual dependency analysis and asset pruning
  * Optimized for faster load and better maintainability

---

## 🏗️ Tech Stack

* **Frontend:** React + Vite
* **Language:** JavaScript (JSX)
* **Styling:** CSS Modules
* **Audio Handling:** Native Web Audio API
* **Tooling:** ESLint, Vite

---

## 📂 Project Structure

```bash
src/
 ├── assets/
 │   ├── audios/
 │   ├── images/
 │   └── icons/
 │
 ├── pages/
 │   ├── pagina1.jsx
 │   ├── pagina5.jsx
 │   ├── pagina6.jsx
 │   ├── ...
 │   └── pagina97.jsx
 │
 ├── routes/
 │   └── routesList.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🧠 Architecture Highlights

* **Self-contained pages**

  * Each lesson manages its own logic, styles, and assets
  * No dependency on shared components or global state

* **Asset-driven design**

  * Lessons rely heavily on structured audio and image assets
  * Naming conventions enable scalable content management

* **Manual dependency extraction**

  * Project was refactored from a large-scale codebase
  * Only necessary pages and assets were preserved
  * Ensures minimal footprint without breaking functionality

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SEU_USUARIO/words-and-worlds.git
cd words-and-worlds
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

---

## 📌 Use Case

This project simulates a real-world educational platform aimed at:

* Beginner to intermediate English learners
* Audio-based comprehension training
* Structured grammar reinforcement

---

## ⚠️ Disclaimer

This project is a **partial, non-commercial version** of a larger educational platform under development.

The content, structure, and materials are shared strictly for **portfolio and technical demonstration purposes**.

All rights related to the original course content remain with the project creators.

Unauthorized use, redistribution, or commercial use of this material is not permitted.

---

## 📈 Future Improvements

* Centralized state management for lessons
* Dynamic content loading instead of static pages
* Backend integration for progress tracking
* User authentication and persistence
* Content management system (CMS)

---

## 📄 License

This project is not licensed for public reuse.
See the disclaimer section for more details.

---

## 💡 Final Notes

This project highlights:

* Frontend architecture design
* Performance optimization in large-scale React apps
* Dependency analysis and codebase reduction
* Real-world educational product thinking

---
