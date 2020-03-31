
import Link from 'next/link'

const BackHomeLink = () => (
    <Link href='/'>
        <a>
            Back to Home

            <style jsx>{`
                a {
                    margin-top: 1.6rem;
                    color: #0070f3;
                    text-decoration: none;
                    font-weight: 600;
                }
            `}</style>
        </a>
    </Link>
)

export default BackHomeLink