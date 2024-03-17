const API = process.env.NEXT_PUBLIC_API_URL;

export const getCategories = async () => {
    const res = await fetch(`${API}/category`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
