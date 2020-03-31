
const Footer = () => (
    <footer>
        <a
            href='https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
        >
            Powered by <img src='/zeit.svg' alt='ZEIT Logo' />
        </a>

        <style jsx>{`
            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: inherit;
                    text-decoration: none;
                }
        `}</style>
    </footer>
)

export default Footer