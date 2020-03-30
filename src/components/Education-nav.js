import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'



export default (props) => {
  const data = useStaticQuery(graphql`
  {
    allEducationJson{
      edges{
        node{
          slug
          title
          description
        }
      }
    }
  }
  `)

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center">Conoce sobre mi formación educactiva</h2>
      <nav className=" flex justify-center mt-8">
        {
          data.allEducationJson.edges.map((element, index) => {
            const { node } = element;
            return (
              <article className="flex-1 bg-white shadow m-4 mx-w-sm p-4" key={index}>
                <header className="font-light ">
                  <h2 className="font-bold leading-loose"> {node.title} </h2>
                  <div className="mt-8 flex">
                    <p className="font-light">
                      {node.description}
                    </p>
                    <Link to={`/${node.slug}`} className="btn inline-block mt-4 self-end">
                      Ir
                    </Link>
                  </div>
                </header>
              </article>
            )
          })
        }
      </nav>
  
    </div>
  )
}