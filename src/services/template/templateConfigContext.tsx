import React from "react";
import type { TemplateConfig } from "./withTemplateConfig";

export const TemplateConfigContext = React.createContext<TemplateConfig>({});

interface TemplateConfigProviderProps {
  children: React.ReactNode;
  value: TemplateConfig;
}
export function TemplateConfigProvider({ value, children }: TemplateConfigProviderProps) {
  return (
    <TemplateConfigContext.Provider value={value}>
      {children}
    </TemplateConfigContext.Provider>
  );
}


export const useTemplateConfig = () => {
  return React.useContext(TemplateConfigContext)
};
