import { Provider } from 'react-redux';
import { Snowfall } from 'react-snowfall';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

import '@/app/assets/styles/global.scss';
import { persistor, store } from '@/store/store';
import snowflakeImg from '../public/images/snowflake.png';
import { useState, useEffect } from 'react';

const queryClient: QueryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const [snowflakeImage, setSnowflakeImage] = useState<HTMLImageElement | null>(null);

    useEffect((): void => {
        if (typeof window !== 'undefined') {
            const img: HTMLImageElement = new Image();
            img.src = snowflakeImg.src;
            setSnowflakeImage(img);
        }
    }, []);

    if (!snowflakeImage) {
        return ''
    }

    const images = [snowflakeImage, snowflakeImage];

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ChakraProvider>
                        <Snowfall
                            snowflakeCount={300}
                            speed={[1, 3]}
                            wind={[1, 2]}
                            images={images}
                            radius={[6, 15]}
                        />
                        <Component {...pageProps} />
                    </ChakraProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
}