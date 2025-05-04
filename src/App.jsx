import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import { PGlite } from "@electric-sql/pglite";
import { live } from "@electric-sql/pglite/live";
import { PGliteProvider } from "@electric-sql/pglite-react";

const db = await PGlite.create({
  extensions: { live },
  dataDir: "idb://my-pgdata",
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    gender TEXT NOT NULL,
    email TEXT,
    address TEXT,
    symptoms TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

function App() {
  return (
    <>
      <PGliteProvider db={db}>
        <AppRoutes />
      </PGliteProvider>
    </>
  );
}

export default App;
