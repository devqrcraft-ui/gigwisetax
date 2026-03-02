import PlatformStateClient from './PlatformStateClient'

const PLATFORMS = ['doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft']
const STATES = ['california','new-york','texas','florida','illinois','washington','nevada','georgia','north-carolina','ohio','arizona','colorado','pennsylvania','michigan','minnesota','new-jersey','oregon','virginia','massachusetts']

export function generateStaticParams() {
  return PLATFORMS.flatMap(platform =>
    STATES.map(state => ({ platform, state }))
  )
}

export default function PlatformStatePage({ params }: { params: { platform: string; state: string } }) {
  return <PlatformStateClient platform={params.platform} state={params.state} />
}
