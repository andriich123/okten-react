import { FC, PropsWithChildren, createContext, useState } from "react";

interface IContextProps {
  episodeName: string;
  setEpisodeName: React.Dispatch<string>;
}

const EpisodeNameContext = createContext<IContextProps>({
  episodeName: "",
  setEpisodeName: () => {},
});

const EpisodeNameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [episodeName, setEpisodeName] = useState("");

  return (
    <EpisodeNameContext.Provider value={{ episodeName, setEpisodeName }}>
      {children}
    </EpisodeNameContext.Provider>
  );
};

export { EpisodeNameContext, EpisodeNameProvider };
export type { IContextProps };
