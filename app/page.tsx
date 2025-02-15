"use client"

import { UserForm } from "./components/UserForm";

export default function Home() {
  return (
    <main className="max-w-full h-screen bg-[#0F0F12] px-8 py-12 font-geistSans">
      <span className="border-[1px] border-zinc-800 rounded-md p-3 text-sm text-zinc-200 font-bold cursor-default">
        FinancyDash
      </span>
      <section className="flex flex-col items-center justify-center">
        <div className="border-[1px] bg-[#151518] border-zinc-800 rounded-md p-8 text-zinc-200 w-[50%] text-center space-y-8">
          <div className="w-fit mx-auto">
          <h2 className="text-2xl font-bold mb-1">Welcome to FinancyDash</h2>
          <p className="text-sm font-semibold">Start with write your username</p>
          </div>
          <UserForm />
        </div>
      </section>
    </main>
  );
}

// TODO - Improve UI