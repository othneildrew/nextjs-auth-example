
import MainLayout from '../layouts/Main'
import PageHead from '../components/PageHead'
import Card from '../components/Card'

const Home = () => (
    <MainLayout>
        <PageHead
            title='Next.js API Auth Example'
            description='Get started by looking at the code implementation'
            />

        <div className="grid">
            <Card
                title='Sign Up'
                description='Register for the application and setup a profile.'
                link='/signup'
                />

            <Card
                title='Log In'
                description='Login to the application to see your profile.'
                link='/login'
                />
        </div>



        <style jsx>{`
            .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                max-width: 800px;
                margin-top: 3rem;
            }

            @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
            }
        `}</style>
    </MainLayout>
)

export default Home
