import React, { useState, useEffect } from 'react'

const index = () => {
    const [isLoading, setLoading] = useState(false)
    const [dashBoardData, setDashBoardData] = useState({})

    async function fetchData() {
        setLoading(true)
        const reponse = await fetch('http://localhost:4000/dashboard')
        const data = await reponse.json()
        console.log(data.posts)
        setDashBoardData(data)
        setLoading(false)
    }

    // if (isLoading) {
    //     return (<h1>
    //         Loading...
    //     </h1>)
    // }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {isLoading && dashBoardData ?
                <h1>
                    Loading...
                </h1>
                :
                <div>
                    <h1>
                        <strong>DashBoard</strong>

                    </h1>
                    <h2>Posts - {dashBoardData.posts}</h2>
                    <h2>Posts - {dashBoardData.likes}</h2>
                    <h2>Posts - {dashBoardData.followers}</h2>
                </div>
            }

            {/* <h2>Posts - {dashBoardData.posts}</h2>
            <h2>Posts - {dashBoardData.likes}</h2>
            <h2>Posts - {dashBoardData.followers}</h2> */}

        </div>
    )
}

export default index