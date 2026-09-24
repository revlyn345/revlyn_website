import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/revops")({ component: RevOpsLayout });

function RevOpsLayout() { return <Outlet />; }
