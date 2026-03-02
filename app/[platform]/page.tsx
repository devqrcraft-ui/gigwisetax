import PlatformClient from './PlatformClient'

const PLATFORMS = ['doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft']

export function generateStaticParams() {
  return PLATFORMS.map(platform => ({ platform }))
}

export default function PlatformPage({ params }: { params: { platform: string } }) {
  return <PlatformClient platform={params.platform} />
}
