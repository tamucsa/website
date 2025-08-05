import FullImage from "@/app/components/officers/FullImage";

import { Metadata, ResolvingMetadata } from "next";

export default async function OfficerImagePage({
    params,
}: {
    params: Promise<{ imageId: number }>;
}) {
    return (
        <FullImage params={params} />
    );
}

export async function generateMetadata ({ params }: { params: Promise<{ imageId: number }>}, parent: ResolvingMetadata): Promise<Metadata> {
    const { imageId } = await params;
    return {
        title: `TAMU CSA - Officer ${imageId} Full Image`,
        description: `Full image for officer #${imageId} of the Chinese Student Association at Texas A&M University.`,
    };
}