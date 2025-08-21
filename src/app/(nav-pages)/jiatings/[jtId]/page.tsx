import FullJTPopup from "@/app/components/jiatings/FullJTPopup";
import { JiatingList } from "@/content/2025-2026/jiatings";

import { Metadata, ResolvingMetadata } from "next";
import NotFound from "@/app/not-found"

export default async function JiatingIndivPage({
    params,
}: {
    params: Promise<{ jtId: number }>;
}) {
    const { jtId } = await params;
    const jiating = JiatingList.find(o => o.id === Number(jtId));
    if (!jiating) {
        return <NotFound showNavbar={true} />;
    }
    return (
        <FullJTPopup jiating={jiating} />
    );
}

export async function generateMetadata ({ params }: { params: Promise<{ jtId: number }>}, parent: ResolvingMetadata): Promise<Metadata> {
    const { jtId } = await params;
    const jiating = JiatingList.find(o => o.id === Number(jtId));
    if (!jiating) {
        return {
            title: "TAMU CSA - Jiating Not Found",
            description: "The jiating you are looking for does not exist.",
        };
    }
    return {
        title: `TAMU CSA - ${jiating.name}`,
        description: `Full image for ${jiating.name}, a jiating of the Chinese Student Association at Texas A&M University.`,
    };
}