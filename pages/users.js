import React from 'react'

const users = ({ data }) => {
    console.log("props>>>", data)
    return (
        <div>
            {data.map((user) => {
                return (
                    <p>
                        {user.name}
                    </p>
                )
            })}
        </div>
    )
}

export default users




export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            data: data
        }
    }
} 