import { useState, useEffect } from 'react'

export function useFetch() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(setData)
        .catch(setError)
        .finally(()=> setLoading(false))
    })

    return { loading, data, error }
}