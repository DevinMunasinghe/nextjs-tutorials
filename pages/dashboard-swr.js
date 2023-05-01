import React from 'react'
import useSWR from 'swr'

const fecthData = async () => {
    const reponse = await fetch('http://localhost:4000/dashboard')
    const data = await reponse.json()
    // console.log(data.posts)

    return data
}

const DashboardSWR = () => {
    const { data, error } = useSWR('dashboard', fecthData)

    if (error) return 'An errr'
    if (!data) return 'Loading'

    return (
        <div>
            <h1>
                <strong>DashBoard</strong>
            </h1>
            <h2>Posts - {data.posts}</h2>
            <h2>Posts - {data.likes}</h2>
            <h2>Posts - {data.followers}</h2>
        </div>
    )
}

export default DashboardSWR