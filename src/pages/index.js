import * as React from "react"
import Layout from "../components/Layout/index"
import TypeWriter from "../components/TypeWriter/index"
import withLocation from "../components/withLocation"

const IndexPage = ({ search }) => {
  return((
    <Layout>
        <TypeWriter query={search} ></TypeWriter>
    </Layout>
  ))
}


export default withLocation(IndexPage)
