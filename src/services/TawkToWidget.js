import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Dynamically load the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/678149e2af5bfec1dbe9cc6d/1ih8gh7pj"; // Your Tawk.to script URL
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Ensure the script is removed when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No need to render anything here, as it's dynamically injecting the script.
};

export default TawkToWidget;
