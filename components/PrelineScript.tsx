"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HSCarousel } from "preline/preline";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  return <></>;
}