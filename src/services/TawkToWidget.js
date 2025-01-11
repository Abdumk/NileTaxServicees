import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Dynamically load the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/678149e2af5bfec1dbe9cc6d/1ih8gh7pj";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup to prevent multiple instances
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToWidget;
