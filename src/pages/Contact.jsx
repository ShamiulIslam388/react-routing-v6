import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact page";
  }, []);
  return <div>This is contact page</div>;
}
