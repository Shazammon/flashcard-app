import { useState, useEffect } from 'react'

export function useFetch() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {

    })

    return { loading, data, error }
}