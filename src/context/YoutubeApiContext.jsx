import {createContext, useContext} from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutubeClient();
export function YoutubeApiProvider({children}) {
	return (
		<YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>
	)
}

export function useYoutubeApi(){
	return useContext(YoutubeApiContext)
}