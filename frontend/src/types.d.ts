interface StudioList {
  [key: string]: string[]
}

interface Production {
  anime_id: number
  Name: string
  English_name: string
  Image_URL: string
}

interface Anime extends Production {
  Score: number
  Other_name: string
  Genres: string
  Synopsis: string
  Type: string
  Episodes: number
  Aired: string
  Status: string
  Studios: string
  Source: string
  Rating: string
}
