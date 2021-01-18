import React from "react"
import Layout from "../components/layout"

const Index = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="container mx-auto text-center mt-20">
        <span className="font-bold text-7xl tracking-tight bg-indigo-400 p-3  text-center m-4 hidden md:inline-block">
          Drive in
        </span>
        <div className="font-semibold text-gray-700 m-4 italic ">
          Drive In is a demo example site utilizing{" "}
          <a href="https://strapi.io/">Strapi</a> &{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a> &{" "}
          <a href="https://tailwindcss.com/">TailwindCSS</a>.
        </div>
        <div className="font-semibold text-gray-700 m-2 md:mx-40">
          All content that you see on the site is being served from Strapi's
          headless CMS system.
        </div>
      </div>
    </Layout>
  )
}
export default Index
