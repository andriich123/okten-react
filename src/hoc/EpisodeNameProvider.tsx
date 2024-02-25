import { FC, PropsWithChildren, createContext, useState } from "react";

interface IContextProps {
  episodeName: string | null;
  setEpisodeName: React.Dispatch<string>;
}

const EpisodeNameContext = createContext<IContextProps>({
  episodeName: null,
  setEpisodeName: () => {},
});

const EpisodeNameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [episodeName, setEpisodeName] = useState<string | null>(null);

  return (
    <EpisodeNameContext.Provider value={{ episodeName, setEpisodeName }}>
      {children}
    </EpisodeNameContext.Provider>
  );
};

export { EpisodeNameContext, EpisodeNameProvider };
export type { IContextProps };
