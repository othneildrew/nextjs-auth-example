
import Head from 'next/head'
import Footer from '../components/Footer'

const MainLayout = (props) => (
    <div className='container'>
        <Head>
            <title>NextJS API Auth Example</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
            {props.children}
        </main>

        <Footer />

        <style jsx>{`
            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            a {
                color: inherit;
                text-decoration: none;
            }

            code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
        `}</style>

        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }

            * {
                box-sizing: border-box;
            }
        `}</style>
    </div>
)

export default MainLayout