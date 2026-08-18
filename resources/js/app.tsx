import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider';
import { TooltipProvider } from './components/ui/tooltip';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    setup({ el, App, props }) {
        if (el) {
            createRoot(el).render(
                <ThemeProvider defaultTheme='system'>
                    <TooltipProvider>
                        <App {...props} />
                    </TooltipProvider>
                    <Toaster position="top-right" />
                </ThemeProvider >
            );
        }
    },
});
