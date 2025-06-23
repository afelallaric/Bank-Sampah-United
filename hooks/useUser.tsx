"use client";

import { useEffect, useState } from "react";

type User = {
  username: string;
  token: string;
};

export function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const username = getCookie("username");
    const token = getCookie("token");

    if (token && username) {
      setUser({ username, token });
    }
  }, []);

  return user;
}

// Helper
function getCookie(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return decodeURIComponent(match[2]);
  return null;
}
