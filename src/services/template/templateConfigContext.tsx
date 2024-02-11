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
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'useTemplateConfig is intended to be used in combination with withTemplateConfig HOC. ' +
      'If you are not using withTemplateConfig HOC, consider using TemplateConfigContext directly.'
    );
  }
  return React.useContext(TemplateConfigContext)
};
