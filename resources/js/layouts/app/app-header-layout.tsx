import { AppContent } from '@/components/ext/app-content';
import { AppHeader } from '@/components/ext/app-header';
import { AppShell } from '@/components/ext/app-shell';
import type { AppLayoutProps } from '@/types';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: AppLayoutProps) {
    return (
        <AppShell variant="header">
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent variant="header">{children}</AppContent>
        </AppShell>
    );
}
