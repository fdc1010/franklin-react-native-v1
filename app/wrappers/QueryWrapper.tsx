import { QueryClient, QueryClientProvider, QueryObserverOptions } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from 'react';

export function QueryWrapper({
    children,
    queryConfig,
}: {
    children: ReactNode;
    queryConfig?: QueryObserverOptions;
}) {
    const queries =
        typeof queryConfig !== 'undefined'
            ? queryConfig
            : {
                  refetchOnWindowFocus: false,
                  staleTime: 30000,
                  retry: false,
              };

    const queryClient = new QueryClient({
        defaultOptions: {
            queries,
        },
    });

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
