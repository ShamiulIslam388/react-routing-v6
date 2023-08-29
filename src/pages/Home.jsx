import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "home page";
  }, []);
  return <div>This is home page</div>;
}
