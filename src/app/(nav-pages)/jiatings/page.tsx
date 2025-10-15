import JiatingPageComponent from "@/app/components/jiatings/JiatingPageComponent";

import { Metadata } from "next";

const JiatingsPage = () => {
    return (
      <JiatingPageComponent/>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Jiatings",
  description: "Meet the Jiatings of the Chinese Student Association at TAMU!",
};

export default JiatingsPage;