
import { Link } from '@inertiajs/react';
import {
    House,
    LayoutGrid,
    Package,
    Tags,
    FolderGit2,
    BookOpen,
} from 'lucide-react';

import AppLogo from '@/components/ext/app-logo';
import { NavFooter } from '@/components/ext/nav-footer';
import { NavMain } from '@/components/ext/nav-main';
import { NavUser } from '@/components/ext/nav-user';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: '/',
        icon: House,
    },
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Produtos',
        href: '/products',
        icon: Package,
    },
    {
        title: 'Categorias',
        href: '/categories',
        icon: Tags,
    },
];
export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
