import Head from 'next/head'
import React from 'react'
import AddModal from '../components/AddModal'
import Header from '../components/Header'

function dashboard() {
    return (
        <div>
          <Head>
            <title>Notes App ● Dashboard</title>
            <meta name="description" content="Notes App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
            <Header />
            <AddModal />
          </div>
        </div>
    )
}

export default dashboard
