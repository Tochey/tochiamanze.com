import React, { ReactNode } from 'react'
import { rhythm } from '../utils/typography'

type LayoutProps = {
    children: ReactNode;
  };

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`}}>
       <main>{children}</main>
      </div>
    );
  };

export default Layout