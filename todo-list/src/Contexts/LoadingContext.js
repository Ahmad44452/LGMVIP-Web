import { createContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={setIsLoading}>
      {
        isLoading ?
          <div className="loading-screen">
            <div className="loading-screen__wrapper">
              <span className="loading-screen__loader"></span>
            </div>
          </div>
          : null
      }
      {children}
    </LoadingContext.Provider>
  );
}


export default LoadingContext;