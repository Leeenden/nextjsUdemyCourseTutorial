//core imports
import { Fragment } from "react"
import MainHeader from "./main-header"

// define the cmponent fucniton
function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}
//export the function
export default Layout
