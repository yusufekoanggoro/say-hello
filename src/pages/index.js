import * as React from "react"
import Layout from "../components/Layout/index"
import LayoutGreaterThanOrEqual from "../components/Layout/greaterThanOrEqual/index"
import TypeWriter from "../components/TypeWriter/index"
import TypeWriterGreaterThanOrEqual from "../components/TypeWriter/greaterThanOrEqual/index"
import withLocation from "../components/withLocation"

const IndexPage = ({ search }) => {
  return(
    <>
      <Layout>
          <TypeWriter query={search} ></TypeWriter>
      </Layout>
      <LayoutGreaterThanOrEqual>
        <TypeWriterGreaterThanOrEqual query={search} ></TypeWriterGreaterThanOrEqual>
      </LayoutGreaterThanOrEqual>
    </>
    
  )
}


export default withLocation(IndexPage)
