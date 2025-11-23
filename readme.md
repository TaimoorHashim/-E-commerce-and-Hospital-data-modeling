# 📦 MERN Models Collection

A collection of **Mongoose Schemas** covering two major modules:

1. 🛒 **E-Commerce System**
2. 🏥 **Hospital Management System**

This repository provides clean, reusable, and scalable MongoDB/Mongoose schema structures for developers building real-world applications.

---

## 📁 Project Structure

```
/models
│
├── ecommerce/
│   ├── user.model.js
│   ├── product.model.js
│   ├── category.model.js
│   └── order.model.js
│
└── hospital/
    ├── patient.model.js
    ├── doctor.model.js
    ├── hospital.model.js
    └── medicalRecord.model.js
```

---

# 🛒 E-Commerce Models

### **1. User Model**

- Stores customer/user details
- Password encrypted using bcrypt
- Includes fields like `name`, `email`, `password`, `role`, `address`

### **2. Product Model**

- Includes product basic details
- Supports categories, pricing, stock, reviews
- Fields: `name`, `description`, `price`, `category`, `stock`, `images`

### **3. Category Model**

- Used for grouping products
- Fields: `name`, `description`

### **4. Order Model**

- Stores user orders
- Includes product list, payment, shipping details
- Fields: `userId`, `items[]`, `totalPrice`, `status`, `paymentMethod`

---

# 🏥 Hospital Management Models

### **1. Patient Model**

- Stores patient personal information
- Fields: `name`, `age`, `gender`, `contact`, `address`

### **2. Doctor Model**

- Holds doctor’s professional details
- Fields: `name`, `specialization`, `experience`, `contact`, `hospitalId`

### **3. Hospital Model**

- Stores hospital details
- Fields: `name`, `location`, `contact`, `department`

### **4. Medical Record Model**

- Linked with a patient
- Tracks patient medical history
- Fields: `patientId`, `diagnosis`, `treatment`, `prescriptions`, `visitDate`

---

## 🛠 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose ODM**

---

## 📌 Installation

```bash
git clone <your_repo_url>
cd your_repo_folder
npm install
```

---

## ▶️ Usage

Import any model wherever needed:

```js
import User from "./models/ecommerce/user.model.js";
import Patient from "./models/hospital/patient.model.js";
```

---

## 🤝 Contributing

Pull requests are welcome!
If you want to add more modules or extend schemas, feel free to open an issue.
