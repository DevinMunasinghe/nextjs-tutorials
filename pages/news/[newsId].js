import React from 'react'

const NewsId = (props) => {
    return (
        <div><p>seached from id :{props.id}</p>
            <div>
                <h1>{props.articles.title}</h1>
                <h2>{props.articles.category}</h2>
            </div>
            {/* {props.articles.map((news) => {
                return (
                    <div>
                        <h1>{news.title}</h1>
                        <h2>{news.category}</h2>
                    </div>
                )
            })} */}

        </div>
    )
}

export default NewsId

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    const id = params.newsId
    console.group("query>>", query)
    console.log(">>>", req.headers.cookie.name)
    //setcookies
    res.setHeader('Set-Cookie', ['name=Vishwa'])

    const response = await fetch(`http://localhost:4000/news/${id}`)
    const data = await response.json()
    console.log("dat", data)
    return {
        props: {
            articles: data,
            id
        }
    }
}