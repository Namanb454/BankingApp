import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firsName: 'Naman' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firsName || 'Guests'}
            subtext='Access and manage your account and transcations efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home