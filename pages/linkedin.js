import { useEffect } from "react";
import { useRouter } from "next/router";

function LinkedinRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://www.linkedin.com/in/abhay-mittal-845946161/"
    );
  }, []);

  return null;
}

export default LinkedinRedirect;
