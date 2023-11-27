import { client } from "../../../../../sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "../../../../../config/tallerInventory"
import { TallerGallery } from "../../taller-gallery"
import { TallerInfo } from "../../../components/taller-info"
import BootstrapCarousel from "../../../carrousels/Bootstrap"

interface Props {
  params: {
    slug?: string
  }
}

export default async function Page({ params }: Props) {
  const Talleres = await client.fetch<SanityProduct>(groq`*[_type == "taller" && slug.current == "${params.slug}"][0] {
    _id,
    _createdAt,
    "id": _id,
    name,
    sku,
    images,
    price,
    currency,
    description,
    categories,
    "slug": slug.current
  }`)
  // console.log(product)

  return (
    <main className="mx-auto max-w-5xl mb-32 sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 md:p-8">
          {/* Product gallery */}
          <BootstrapCarousel />
          {/* Product info */}
          <TallerInfo taller={Talleres} />
        </div>
      </div>
    </main>
  )
}

