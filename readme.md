Here’s a **clean and practical list of important Angular CLI commands** every developer should know 👇

---

# 🚀 Angular CLI Essential Commands

## 📦 1. Create & Setup Project

```bash
npm install -g @angular/cli     # Install Angular CLI
ng new my-app                   # Create new Angular project
cd my-app
ng serve                        # Run project (default: http://localhost:4200)
ng serve --open                # Auto open in browser
ng build                        # Build project
ng build --prod                 # Production build
```

---

## 🧱 2. Generate Components & Core Files

### 🔹 Component

```bash
ng generate component my-component
# shorthand
ng g c my-component
```

### 🔹 Service

```bash
ng generate service my-service
# shorthand
ng g s my-service
```

### 🔹 Module

```bash
ng generate module my-module
ng g m my-module
```

### 🔹 Pipe

```bash
ng generate pipe my-pipe
ng g p my-pipe
```

### 🔹 Directive

```bash
ng generate directive my-directive
ng g d my-directive
```

### 🔹 Class

```bash
ng generate class my-class
ng g cl my-class
```

### 🔹 Interface

```bash
ng generate interface my-interface
ng g i my-interface
```

### 🔹 Enum

```bash
ng generate enum my-enum
ng g e my-enum
```

---

## 🌐 3. Routing

### Create module with routing

```bash
ng generate module app-routing --flat --module=app
```

### Generate component with routing module

```bash
ng g m feature --routing
```

---

## 🔐 4. Interceptor (Very Important 🔥)

```bash
ng generate interceptor auth
ng g interceptor auth
```

👉 Used for:

- Adding JWT tokens
- Handling API errors
- Logging requests

---

## 🧪 5. Testing

```bash
ng test            # Run unit tests
ng e2e             # End-to-end tests
```

---

## 📊 6. Linting & Formatting

```bash
ng lint
```

---

## 🔄 7. Update Angular

```bash
ng update @angular/core @angular/cli
```

---

## 📦 8. Add Libraries

```bash
ng add @angular/material
ng add @ng-bootstrap/ng-bootstrap
```

---

## ⚙️ 9. Environment & Config

```bash
ng config
ng config projects.my-app.architect.build.options.outputPath=dist/new-folder
```

---

## 📁 10. Generate with Folder Structure

```bash
ng g c admin/user-list
ng g s services/api
```

👉 Automatically creates nested folders

---

## ⚡ 11. Useful Flags (Very Important)

```bash
ng g c my-comp --skip-tests
ng g c my-comp --inline-style --inline-template
ng g c my-comp --module=app
ng g c my-comp --export
```

---

## 🧠 Pro Tips (From Real Projects)

✔ Use `ng g c feature/component-name` for clean structure
✔ Use services for API calls (never inside components)
✔ Always create interceptor for auth handling
✔ Use modules for large apps (lazy loading)

---

If you want, I can also give you:

✅ Angular project folder structure (best practice)
✅ Real-world example (login + API + interceptor)
✅ Laravel API + Angular frontend integration

Just tell me 👍
