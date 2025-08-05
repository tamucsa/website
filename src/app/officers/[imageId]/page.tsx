import FullImage from "@/app/components/officers/FullImage";
import { OfficerList } from "@/content/officers";

import { Metadata, ResolvingMetadata } from "next";

export default async function OfficerImagePage({
    params,
}: {
    params: Promise<{ imageId: number }>;
}) {
    const { imageId } = await params;
    const officer = OfficerList.find(o => o.id === imageId);
    if (!officer) {
        return (
            <div>Officer not found</div>
        );
    }
    return (
        <FullImage officer={officer} />
    );
}

export async function generateMetadata ({ params }: { params: Promise<{ imageId: number }>}, parent: ResolvingMetadata): Promise<Metadata> {
    const { imageId } = await params;
    const officer = OfficerList.find(o => o.id === imageId);
    if (!officer) {
        return {
            title: "TAMU CSA - Officer Not Found",
            description: "The officer you are looking for does not exist.",
        };
    }
    return {
        title: `TAMU CSA - ${officer.name}`,
        description: `Full image for ${officer.name}, an officer of the Chinese Student Association at Texas A&M University.`,
    };
}