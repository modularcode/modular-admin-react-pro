import React from 'react'

import PageContainer from '../../_common/PageContainer'

const Supporters = () => {
  return (
    <PageContainer>
      <h1>Supporters</h1>
      <div
        style={{
          marginBottom: '10px',
        }}
      >
        Support me on <strong>Patreon</strong> to release this project faster!
      </div>
      <a href="https://www.patreon.com/modularcoder">
        <img
          src="https://c5.patreon.com/external/logo/become_a_patron_button.png"
          alt="Support me on patreon"
        />
      </a>
    </PageContainer>
  )
}

export default Supporters
