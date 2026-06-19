"use client";

import { useActionState } from "react";
import { login } from "./action";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <div className="mx-auto max-w-sm py-16 px-6">
      <h1 className="text-2xl font-semibold mb-6">Seller Login</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue="seller@lumenbooks.test"
            className="w-full rounded border border-zinc-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full rounded border border-zinc-300 px-3 py-2"
          />
        </div>
        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded bg-zinc-900 text-white py-2 disabled:opacity-50"
        >
          {isPending ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}