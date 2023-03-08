import { useEffect } from "react";
import { useRouter } from "next/router";

function ResumeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://drive.google.com/file/d/1QpYRyySyk6Bfh9ucfOQQvd6DNKNDygMi/view?usp=sharing"
    );
  }, []);

  return null;
}

export default ResumeRedirect;
