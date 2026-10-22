"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const metadata = {
  title: '[[...Tool]]',
  description: 'TODO: Add a description for the [[...Tool]] page.',
  openGraph: {
    title: '[[...Tool]]',
    description: 'TODO: Add a description for the [[...Tool]] page.',
  },
}


export default function StudioPage() {
  return <NextStudio config={config} />;
}
