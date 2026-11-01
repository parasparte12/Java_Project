import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {useState} from  "react";

export function QueryProvider({childern}){
    const [query]=useState(()=>new QueryClient());
    return(
        <QueryClientProvider client={query}>
            {childern}
        </QueryClientProvider>
    );
}