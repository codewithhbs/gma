"use client";

import { Suspense } from "react";
import AddEditPage from "./AddEditPage";

export default function AddPageWrapper() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AddEditPage />
    </Suspense>
  );
}
