import { useEffect } from 'react';

const useScript = (url, id, content="") => {
  useEffect(() => {
    const element = document.getElementById(id);
    const script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript"
    script.innerText = content
    element.appendChild(script);
    return () => {
        element.removeChild(script);
    }
  }, [url]);
};

export default useScript;