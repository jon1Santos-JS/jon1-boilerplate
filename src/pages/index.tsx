import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Jon1 Boilerplate</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="l-welcome">
                seja bem vindo ao jon1_boilerplate
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;