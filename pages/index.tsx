import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listing</h1>
        <Card title="Sample Property" imageUrl="/assets/sample.jpg" />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert('Button clicked!')} />
        </div>
      </main>
    </>
  )
}
