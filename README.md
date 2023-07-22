# Note Taking App (Electron, TypeScript, Sequelize, SQLite)

## Description

This project is a simple and lightweight desktop application for note-taking. The primary objective of this application is to provide a straightforward and intuitive interface for users to quickly jot down and manage their notes.

However, the secondary, and arguably more critical goal of this project is to serve as a learning and practice tool. As such, this application is intentionally over-engineered, using a robust technology stack that includes Electron, TypeScript, Sequelize, and SQLite. This is in an effort to deepen understanding and gain practical experience with these technologies, making this project a valuable exercise in learning, as much as it is about note-taking.

## Technologies

- Electron: Used to build the desktop application
- TypeScript: The primary language for the project, providing static types
- Sequelize: The ORM to manage SQLite transactions
- SQLite: The database to store all data locally

## Project Structure

```
src/
-main.ts
-backend/
-database/
-db.ts
-DAO/
-notesDAO.ts
-Controllers/
-notesController.ts
-Migrations
-create-note-table.ts
-Models/
-notesModel.ts
```

## Setup

Clone the repository:

```
git clone https://github.com/yourusername/notetakingapp.git
cd notetakingapp
```

## Install dependencies:

```
npm install
```

Run the app:

```
npm start
```

## Contribution

This is an open-source project. Any contributions or suggestions are welcome.

## License

This project is licensed under the MIT License.
