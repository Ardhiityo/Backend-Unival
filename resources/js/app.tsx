import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
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
                <>
                    <TooltipProvider>
                        <App {...props} />
                    </TooltipProvider>
                    <Toaster position="top-right" />
                </>,
            );
        }
    },
});
