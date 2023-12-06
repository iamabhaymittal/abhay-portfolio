import { useEffect } from "react";
import { useRouter } from "next/router";

function ResumeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://drive.google.com/file/d/1C2lHKeidljJBg__2sDjeTHF2nCkzK266/view?usp=sharing"
    );
  }, []);

  return null;
}

export default ResumeRedirect;
