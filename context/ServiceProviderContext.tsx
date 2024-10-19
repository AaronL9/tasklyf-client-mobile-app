import { ProviderDataTypes } from "@/app/provider";
import { Database } from "@/utils/database.types";
import { createContext, ReactNode, useState } from "react";

// Define the type for service provider data
type ServiceProviderTypes = ProviderDataTypes | null;

// Define the type for the context value, which includes both the provider info and the setter function
type ServiceProviderContextType = {
  providerInfo: ServiceProviderTypes;
  setProviderInfo: React.Dispatch<React.SetStateAction<ServiceProviderTypes>>;
};

// Default values for the provider info

// Create context with an initial value
const ServiceProviderContext = createContext<ServiceProviderContextType>({
  providerInfo: null,
  setProviderInfo: () => {},
});

function ServiceContextProvider({ children }: { children: ReactNode }) {
  const [providerInfo, setProviderInfo] = useState<ServiceProviderTypes>(null);

  return (
    <ServiceProviderContext.Provider value={{ providerInfo, setProviderInfo }}>
      {children}
    </ServiceProviderContext.Provider>
  );
}

export { ServiceProviderContext, ServiceContextProvider };
