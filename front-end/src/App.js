import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from "./app/router/Routes";
import { LayoutSplashScreen, ThemeProvider } from "./configs";

export default function App({ store, persistor, basename }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
                <React.Suspense fallback={<LayoutSplashScreen />}>
                    <BrowserRouter basename={basename}>
                        <LastLocationProvider>
                            <ThemeProvider>
                                <Routes />
                            </ThemeProvider>
                        </LastLocationProvider>
                    </BrowserRouter>
                </React.Suspense>
            </PersistGate>
        </Provider>
    );
}   