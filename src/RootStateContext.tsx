import React, { FC } from "react";
import { Weather } from "./store/weatherStore";

type RootStateContextProps = {
  weather: Weather;
};

const RootStateContext = React.createContext<RootStateContextProps>(
  {} as RootStateContextProps
);

const weather = new Weather();

export const RootStateProvider: FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ weather }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => React.useContext(RootStateContext);
