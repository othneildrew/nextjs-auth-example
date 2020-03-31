
import Head from 'next/head'
import MainLayout from '../layouts/Main'
import PageHead from '../components/PageHead'
import BackHomeLink from '../components/BackHomeLink'

const SignUp = () => (
    <MainLayout>
        <Head>
            <title>Sign Up | Next.js API</title>
        </Head>

        <PageHead
            title='Sign Up'
            />

        <div className="form-container">
            <form>
                <div className='form-group'>
                    <label for='name'>Full Name</label>
                    <input type='text' id='name' />
                </div>
                <div className='form-group'>
                    <label for='email'>Email</label>
                    <input type='text' id='email' />
                </div>
                <div className='form-group'>
                    <label for='password'>Password</label>
                    <input type='password' id='password' />
                </div>
                <div className='form-group'>
                    <label for='confirmPassword'>Confirm Password</label>
                    <input type='confirmPassword' id='confirmPassword' />
                </div>
                <button type='submit'>Create Account</button>
            </form>
        </div>

        <BackHomeLink />

        <style jsx global>{`
            .form-container {
                margin-top: 3rem;
                width: 300px;
            }

                @media (min-width: 576px) {
                    width: 600px;
                }

            form {
                width: 100%;
            }

                form label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                }

                form input {
                    width: 100%;
                    height: 40px;
                    padding: 0 12px;
                    outline: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                    form input:hover,
                    form input:focus,
                    form input:active {
                        border-color: #0070f3;
                        color: #0070f3;
                    }

            .form-group {
                margin: 1rem 0;
            }

            button {
                cursor: pointer;
                display: block;
                width: 100%;
                height: 48px;
                outline: none;
                border: none;
                border-radius: 10px;
                background: #0070f3;
                color: #ffffff;
                font-size: 16px;
                transition: color 0.15s ease;
            }

                button:hover {
                    opacity: 0.8;
                }
        `}</style>
    </MainLayout>
)

export default SignUp