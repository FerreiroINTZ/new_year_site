import React, {useEffect} from 'react'

function reloadWarning() {

    useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    // window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
    
  return (
    <div>reloadWarning</div>
  )
}

export default reloadWarning