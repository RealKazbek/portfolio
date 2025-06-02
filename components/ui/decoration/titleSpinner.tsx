"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { developerInfo, navigation } from "@/data";

export default function TitleSpinner() {
  const pathname = usePathname();

  const currentPage = navigation.find((item) => item.path === pathname);
  const suffix = currentPage?.title || "Страница";

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const iRef = useRef(0);

  useEffect(() => {
    const frames = ["◐", "◓", "◑", "◒"];
    const name = developerInfo.name;

    const startAnimation = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        const frame = frames[iRef.current % frames.length];
        document.title = `${frame} ${name} | ${suffix}`;
        iRef.current++;
      }, 750);
    };

    const stopAnimation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAnimation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [suffix]);

  return null;
}
