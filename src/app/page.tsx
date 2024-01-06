"use client";

import { pageCursor } from "@/utils/atom";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";

export default function Home() {
  const cursor = useAtomValue(pageCursor);

  const component = useMemo(() => {
    switch (cursor) {
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      case 4:
        return <FourthPage />;
      case 5:
        return <FifthPage />;
      case 6:
        return <SixthPage />;
      case 7:
        return <SeventhPage />;
      default:
        return <FirstPage />;
    }
  }, [cursor]);

  return component;
}
