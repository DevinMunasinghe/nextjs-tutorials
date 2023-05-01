import React from 'react'

import Link from 'next/link'

const posts = ({ data }) => {

    console.log("props112>>>", data)
    return (
        <div>
            {data.map((post) => {
                return (
                    <div>
                        <h2>
                            {post.title}&nbsp;
                        </h2>

                        <Link href={`posts/${post.id}`}>more details {">>>>"}</Link>

                        <hr></hr>
                        <br></br>

                    </div>
                )
            })}
        </div>
    )
}

export default posts



export async function getStaticProps() {


    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()



    return {
        props: {
            data: data
        }
    }
}