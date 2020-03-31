
const PageHead = (props) => (
    <div>
        <h1 className='title'>{props.title}</h1>
        <p className='description'>{props.description}</p>

        <style jsx>{`
            .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
            }
                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

            .title,
            .description {
                text-align: center;
            }

            .description {
                line-height: 1.5;
                font-size: 1.5rem;
            }
        `}</style>
    </div>
)

export default PageHead