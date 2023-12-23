import { useEffect } from "react";
import { useRouter } from "next/router";

function ResumeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://axentia.in"
    );
  }, []);

  return null;
}

export default ResumeRedirect;
