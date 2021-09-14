import * as React from "react"
import Layout from "../components/Layout/index"
import TypeWriter from "../components/TypeWriter/index"
import withLocation from "../components/withLocation"

const IndexPage = ({ search }) => {
  const { name } = search;
  return((
    <Layout>
        <TypeWriter name={name}></TypeWriter>
    </Layout>
  ))
}


export default withLocation(IndexPage)
