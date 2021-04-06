import 'tailwindcss/tailwind.css'

export default function Auth() {
    return (
        <div>

            <form>
                <div>
                    <h1>Entrar</h1>
                    <input className='' name='email' placeholder='E-mail' type='text'/>
                    <input className='' name='password' placeholder='Password' type='password'/>
                </div>
            </form>
            Authentication App
        </div>
    )
}