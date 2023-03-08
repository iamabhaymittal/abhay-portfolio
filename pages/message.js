import { useEffect } from "react";
import { useRouter } from "next/router";

function Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://wa.me/919370385836?text=Hi%20Abhay");
  }, []);

  return null;
}

export default Redirect;
