import ParentFullImage from "@/app/components/jiatings/ParentFullImage";
import { MegateamList } from "@/content/2025-2026/megateam";
import { JiatingList } from "@/content/2025-2026/jiatings";
import NotFound from "@/app/not-found"

import { Metadata } from "next";


export default async function ParentImagePage({
    params,
}: {
    params: Promise<{ imageId: number, jtId: number }>;
}) {
    const { imageId, jtId } = await params;
    const parent = MegateamList.find(o => o.id === Number(imageId));
    const jiating = JiatingList.find(j => j.id === Number(jtId));
    if (!parent || !jiating) {
        return <NotFound showNavbar={false} />;
    }
    return (
        <ParentFullImage parent={parent} jiating={jiating} />
    );
}

export async function generateMetadata ({ params }: { params: Promise<{ imageId: number }> }): Promise<Metadata> {
    const { imageId } = await params;
    const parent = MegateamList.find(o => o.id === Number(imageId));
    if (!parent) {
        return {
            title: "TAMU CSA - Parent Not Found",
            description: "The parent you are looking for does not exist.",
        };
    }
    return {
        title: `TAMU CSA - ${parent.name}`,
        description: `Full image for ${parent.name}, a parent of the Chinese Student Association at Texas A&M University.`,
    };
}