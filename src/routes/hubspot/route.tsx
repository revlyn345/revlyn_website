import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/hubspot")({ component: HubSpotLayout });

function HubSpotLayout() { return <Outlet />; }
