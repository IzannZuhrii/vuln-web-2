# XI TKJ 3 — Student Profile & Class Portfolio

> **SMK Telkom Malang**  
> *Mengenal lebih dekat siswa-siswa XI TKJ 3, keahlian, minat, dan potensi mereka.*

Full-stack web application built with **Next.js App Router, React, TypeScript, Tailwind CSS, and MariaDB**. This application serves as an authentic class portfolio website for class **XI TKJ 3 at SMK Telkom Malang**, while containing intentionally embedded security vulnerabilities for educational web security practicum.

---

## 🚀 Features

- **Class Profile & Student Directory**: Comprehensive directory of all 32 students of XI TKJ 3.
- **Detailed Student Profiles**: Displaying photos, nicknames, specialization track, skills pills, hobbies, career goals, and student bios.
- **Search Capabilities**: Live search filtering by student name, nickname, or major.
- **Modern Clean Design**: Slate, purple, blue, and white responsive UI palette tailored for high-school class portfolios.
- **Embedded Security Practicum**: Natural security vulnerability test cases for educational hands-on auditing:
  - **SQL Injection** in search endpoint (`/api/students/search`)
  - **Stored XSS** in student bio profile rendering (`/students/[id]`)
  - **Path Traversal** in photo retrieval API (`/api/students/photo`)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Frontend Library**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)
- **Database**: [MariaDB 11](https://mariadb.org/) via [`mysql2`](https://github.com/sidorares/node-mysql2)
- **Containerization**: [Docker Compose](https://docs.docker.com/compose/)

---

## 📁 Project Structure

```text
app/
├── page.tsx                 # Homepage (Hero, Stats, Featured Students, About)
├── students/
│   ├── page.tsx             # Student directory list & search interface
│   └── [id]/
│       └── page.tsx         # Detailed student profile (Stored XSS vulnerable)
├── about/
│   └── page.tsx             # About class & specialization tracks
└── api/
    └── students/
        ├── route.ts         # GET /api/students (Secure list)
        ├── search/
        │   └── route.ts     # GET /api/students/search (SQLi vulnerable)
        ├── photo/
        │   └── route.ts     # GET /api/students/photo (Path Traversal vulnerable)
        └── [id]/
            └── route.ts     # GET /api/students/[id] (Secure parameterized query)

lib/
├── db.ts                    # MariaDB connection pool & fallback dataset
├── students.ts              # Data query helper functions
├── secureSearch.ts          # Secure SQL injection mitigation reference
└── secureFile.ts            # Secure Path Traversal mitigation reference

public/
└── student-photos/          # Student photo assets & test files (secret.txt, notes.txt)

database/
└── init.sql                 # MariaDB table schema & 32 dummy student dataset

docs/
└── VULNERABILITY-REPORT.md # Detailed security practicum documentation

Dockerfile                   # Production Next.js Docker build
docker-compose.yml           # MariaDB + Next.js service orchestration
.env.example                 # Environment variable template
```

---

## 📦 Installation & Setup

### 1. Prerequisites
- Node.js (v18.x or v20.x recommended)
- Docker & Docker Compose (optional, for MariaDB container execution)

### 2. Environment Setup
Copy the `.env.example` file to create your `.env` file:
```bash
cp .env.example .env
```

Configuration parameters:
```env
DATABASE_HOST=db
DATABASE_PORT=3306
DATABASE_USER=classuser
DATABASE_PASSWORD=classpassword
DATABASE_NAME=class_profile
```

---

## 🐳 Running with Docker Compose (Recommended)

To start both MariaDB and the Next.js application in containers:

```bash
docker compose up --build
```

Access the application at:
- **Web Interface**: `http://localhost:3000`
- **MariaDB Database**: `localhost:3000` (internal service port 3306)

---

## 💻 Local Development Setup

If running locally without Docker:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate photo assets**:
   ```bash
   node scripts/generate-photos.js
   ```

3. **Run local development server**:
   ```bash
   npm run dev
   ```

Access the application at `http://localhost:3000`.  
*(Note: If MariaDB is not running locally, the application automatically uses the built-in fallback dataset containing all 32 students.)*

---

## 🛡️ Security Practicum Overview

The website incorporates three security vulnerabilities embedded naturally into standard features:

| Feature | Endpoint / Component | Vulnerability | Unsafe Mechanism |
| :--- | :--- | :--- | :--- |
| **Student Search** | `GET /api/students/search?q=` | **SQL Injection** | Unescaped SQL string concatenation (`LIKE '%${q}%'`) |
| **Student Profile** | `/students/[id]` | **Stored XSS** | Direct HTML rendering via `dangerouslySetInnerHTML` |
| **Student Photo** | `GET /api/students/photo?file=` | **Path Traversal** | Unvalidated `path.join(BASE_DIR, file)` |

Secure counter-implementations are provided in:
- `lib/secureSearch.ts` (Parameterized Queries)
- `lib/secureFile.ts` (Path Boundary Enforcement)
- `docs/VULNERABILITY-REPORT.md` (Comprehensive Practicum Report)

---

## 🚨 Educational Disclaimer

This application is created **strictly for educational and security practicum purposes** in controlled environments. The intentionally vulnerable endpoints demonstrate real-world web application security flaws and mitigations. Do NOT deploy vulnerable code configurations to public production servers.
# vuln-web-2
