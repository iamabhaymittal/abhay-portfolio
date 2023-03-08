import { useEffect } from "react";
import { useRouter } from "next/router";

function TwitterRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://twitter.com/AbhayM1ttal");
  }, []);

  return null;
}

export default TwitterRedirect;
