export const fetchApi = async (path: string, options?: RequestInit) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, options);
    return response.json();
};
