import { cn } from "@/lib/utils"
import MediaCard from "./media-card"

export default function DashboardContent({ collapsed }) {
  const trendingMedia = [
    {
      id: 1,
      title: "Cosmic Odyssey",
      type: "Movie",
      genre: "Sci-Fi",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Dark Waters",
      type: "TV Series",
      genre: "Thriller",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "The Last Kingdom",
      type: "TV Series",
      genre: "Historical",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      title: "Eternal Sunshine",
      type: "Movie",
      genre: "Romance",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 5,
      title: "Cosmic Odyssey 2",
      type: "Movie",
      genre: "Sci-Fi",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 6,
      title: "Dark Waters 2",
      type: "TV Series",
      genre: "Thriller",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 7,
      title: "The Last Kingdom 2",
      type: "TV Series",
      genre: "Historical",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 8,
      title: "Eternal Sunshine 2",
      type: "Movie",
      genre: "Romance",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 9,
      title: "Cosmic Odyssey 3",
      type: "Movie",
      genre: "Sci-Fi",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 10,
      title: "Dark Waters 3",
      type: "TV Series",
      genre: "Thriller",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 11,
      title: "The Last Kingdom 3",
      type: "TV Series",
      genre: "Historical",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 12,
      title: "Eternal Sunshine 3",
      type: "Movie",
      genre: "Romance",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <div className={cn("flex-1 overflow-auto transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">In Case You Missed</h1>
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingMedia
              .map((media) => (
                <MediaCard key={media.id} media={media} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

