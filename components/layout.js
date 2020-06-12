import Alert from '../components/alert'
import TaraTab from './tara-tab'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <TaraTab />
    </>
  )
}
