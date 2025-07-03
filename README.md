```markdown
# 🏡 StayEase – Airbnb Clone Web App

StayEase is a full-stack Airbnb-inspired web application where users can **book places to stay** and **list their own properties for rent**. The app is built using **React**, **Spring Boot**, and uses **H2 in-memory database** for fast development and testing.

---

## 🚀 Features

- 🔐 User login/signup (authentication layer can be added)
- 🏘️ View available places with full details
- 📅 Book a place with price and information
- 📤 List your own property with:
  - Name
  - Location
  - Description
  - Price
  - Additional info
- 🌍 React Router for seamless navigation
- 💅 Responsive and modern UI using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React
- 🚦 React Router
- 🎨 Tailwind CSS
- 📡 Axios
- 🎯 React Icons

### Backend
- ☕ Spring Boot
- 💾 H2 Database (In-Memory)
- 🧰 Spring Web
- 🗃️ Spring Data JPA

---

## 📁 Project Structure

```

stayease/
├── frontend/               # React App
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Pages like Home, Book, Host
│   │   └── App.js          # Routes & layout
│   ├── public/
│   └── tailwind.config.js
│
├── backend/                # Spring Boot App
│   ├── src/main/java/
│   │   └── com/
│   │       ├── controllers/
│   │       ├── models/
│   │       ├── repositories/
│   │       └── services/
│   └── resources/
│       └── application.properties

````

---

## ⚙️ Setup Instructions

### 🔙 Backend (Spring Boot)

1. Navigate to backend folder:
   ```bash
   cd backend
````

2. Make sure `application.properties` contains:

   ```properties
   spring.datasource.url=jdbc:h2:mem:testdb
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=
   spring.h2.console.enabled=true
   spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Run the Spring Boot server:

   ```bash
   ./mvnw spring-boot:run
   ```

4. Access H2 Console:

   * URL: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
   * JDBC URL: `jdbc:h2:mem:testdb`
   * Username: `sa`
   * Password: *(leave blank)*

---

### 💻 Frontend (React)

1. Navigate to frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

4. Visit the app:

   * URL: [http://localhost:3000](http://localhost:5173)

---

## 📦 Sample Data Model

The property listing model includes:

* `name` – Name of the place
* `location` – Location address or city
* `description` – Brief about the property
* `info` – Additional information
* `price` – Price per night

---
