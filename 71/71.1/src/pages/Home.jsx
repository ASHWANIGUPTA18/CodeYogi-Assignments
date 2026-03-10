import React from "react";
import ProductList from "../components/ProductList";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-indigo-700">E-Commerce</div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>{user?.email}</span>
            <button
              onClick={logout}
              className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Products</h1>
        <ProductList />
      </main>
    </div>
  );
}

export default Home;
