import React from 'react'

const post = ({ data }) => {
    console.log(">>>", data)
    return (
        <div>
            {/* {data && data.map((post) => {
                return (
                    <p>
                        <strong>
                            {post.id}
                        </strong>
                        {post.title}
                    </p>
                )
            })} */}
            <p>
                <strong>
                    {data.id}
                </strong>
                {data.title}
            </p>
        </div>
    )
}

export default post

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()



    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            },
        }
    })
    return {
        paths,
        fallback: false
    }


}

export async function getStaticProps(context) {

    const { params } = context

    console.log("params>>>", params)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const data = await response.json()

    return {
        props: {
            data: data
        }
    }
}