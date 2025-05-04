# Medblocks

## Project Overview
Build a frontend-only patient registration app using Pglite for data storage. 

---

## System Requirements
Ensure your system meets the following requirements before proceeding:

- **Node.js**: v21.2.0 or higher
- **npm/yarn**: Latest version

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Database**: PGLite

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/aaqibgouher/medblocks-task.git

### Frontend (FE)

1. Change directory:
    ```bash
    cd medblocks-task
2. Install dependencies:
   ```bash
   npm install
3. Start the clinet:
    ```bash
   npm run dev

## DB Schema
We have just one table called patients, where we hold all patients records.

```js
const questionSchema = {
        id: {
            type: UUID,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Integer,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        symptoms: {
            type: String,
            required: true,
        },
        symptoms: {
            type: Date,
            required: true,
        },
    };