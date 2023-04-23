import { useEffect } from "react";

export function ClearStorage() {
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.clear();
    };
  }, []);
  return null;
}