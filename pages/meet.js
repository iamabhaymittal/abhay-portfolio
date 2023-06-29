import { useEffect } from "react";
import { useRouter } from "next/router";

function GmeetRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://meet.google.com/cnz-bjzi-qvf");
  }, []);

  return null;
}

export default GmeetRedirect;
