export interface Movie {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director?: string,
    producer?: string,
    release_date?: string,
    id?: number,
    characters: string[],
    edited: string
}
