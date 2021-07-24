import Link from 'next/link'
export default function Home() {
    return (
        <>
            <Layout pageTitle="Home">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Layout>
        </>
    )
}
