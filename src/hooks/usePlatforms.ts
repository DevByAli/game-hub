// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";
import { FetchResponse } from "./useData";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

// const usePlatform = () => ({ data: platforms, error: null, isLoading: false });

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;