import Footer from 'components/Footer'
import { reset, globals } from 'styles'

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {globals}
    </style>
    <main>{children}</main>
    <Footer />
  </div>
)

export default DefaultLayout
