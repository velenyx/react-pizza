import { FC } from 'react'

import ContentLoader from 'react-content-loader'

export const Skeleton: FC = props => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="264" rx="13" ry="13" width="280" height="29" />
    <rect x="0" y="309" rx="5" ry="5" width="280" height="88" />
    <rect x="3" y="424" rx="4" ry="4" width="107" height="27" />
    <rect x="130" y="412" rx="13" ry="13" width="152" height="45" />
    <circle cx="125" cy="125" r="125" />
  </ContentLoader>
)
