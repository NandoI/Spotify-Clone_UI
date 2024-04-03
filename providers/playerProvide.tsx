import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Track } from "../component/data/types";

type PlayerContextType = {
    track: Track | undefined;
    setTrack: React.Dispatch<React.SetStateAction<Track | undefined>>;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default function PlayerProvider({ children }: PropsWithChildren) {
    const [track, setTrack] = useState<Track | undefined>(undefined);
    return (
        <PlayerContext.Provider value={{ track, setTrack }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayerContext = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayerContext must be used within a PlayerProvider");
    }
    return context;
};
