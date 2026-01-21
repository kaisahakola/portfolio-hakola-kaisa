import { createClient } from "@sanity/client";
import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: "tvlymivg",
  dataset: "production",
  apiVersion: "2026-01-21",
  useCdn: true
})

const builder = createImageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)
