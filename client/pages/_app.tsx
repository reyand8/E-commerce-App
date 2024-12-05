import { Provider } from 'react-redux';
import {Snowfall} from 'react-snowfall';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ChakraProvider} from '@chakra-ui/react';

import '@/app/assets/styles/global.scss';
import {persistor, store} from '@/store/store';


const queryClient: QueryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ChakraProvider>
                        <Snowfall color={'#a7b7ee'} snowflakeCount={450}/>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
};