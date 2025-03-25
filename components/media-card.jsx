import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"

export default function MediaCard({ media, showProgress = false }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Image
          src={media.image || "/placeholder.svg"}
          alt={media.title}
          width={350}
          height={200}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Play className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        {showProgress && media.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div className="h-full bg-primary" style={{ width: `${media.progress}%` }} />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{media.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <span>{media.type}</span>
          <span className="mx-2">•</span>
          <span>{media.genre}</span>
        </div>
      </CardContent>
    </Card>
  )
}

