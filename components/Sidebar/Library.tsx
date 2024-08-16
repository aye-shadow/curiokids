import React from 'react'
import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenIcon, PlusIcon, MicIcon, VolumeIcon, StarIcon, HashIcon, UsersIcon, PencilIcon } from "lucide-react"

type Book = {
  id: number
  title: string
  author: string
  cover: string
  hasAudio: boolean
  hasDrawing: boolean
  rating: number
  pageCount: number
  read: boolean
}

const StarRating = ({ rating, onRatingChange }: { rating: number, onRatingChange: (newRating: number) => void }) => {
  return (
    <div className="flex items-center justify-center sm:justify-start" role="group" aria-label="Book rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`p-1 focus:outline-none focus:ring-2 focus:ring-primary rounded`}
          onClick={() => onRatingChange(star)}
          aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
        >
          <StarIcon
            className={`h-4 w-4 sm:h-5 sm:w-5 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        </button>
      ))}
    </div>
  );
};


const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType, value: number | string, label: string }) => (
  <div className="bg-white rounded-lg p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] border border-gray-800 border-b-[3px]">
    <div className="flex flex-col items-center">
      <Icon className="h-8 w-8 mb-2 text-primary" />
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
)

export default function Component() {
  const [savedBooks, setSavedBooks] = useState<Book[]>([
    { id: 1, title: "The Three Little Pigs", author: "Mara Alperin", cover: "/threelittlepigs.svg", hasAudio: false, hasDrawing: true, rating: 4, pageCount: 32, read: true },
    { id: 2, title: "The Very Hungry Caterpillar", author: "Eric Carle", cover: "/hungry-catepilar.svg", hasAudio: true, hasDrawing: false, rating: 5, pageCount: 26, read: true },
    
  ])

  const stats = useMemo(() => {
    const booksRead = savedBooks.filter(book => book.read).length
    const totalPages = savedBooks.reduce((sum, book) => sum + (book.read ? book.pageCount : 0), 0)
    const uniqueAuthors = new Set(savedBooks.map(book => book.author)).size
    const averageRating = savedBooks.reduce((sum, book) => sum + book.rating, 0) / savedBooks.length
    
    return { booksRead, totalPages, uniqueAuthors, averageRating: averageRating.toFixed(1) }
  }, [savedBooks])

  const handleRatingChange = (bookId: number, newRating: number) => {
    setSavedBooks(books => 
      books.map(book => 
        book.id === bookId ? { ...book, rating: newRating } : book
      )
    )
  }

  const handleAudioUpload = (bookId: number) => {
    // Implement audio upload logic here
    console.log(`Uploading audio for book ${bookId}`)
  }

  const handleDrawingUpload = (bookId: number) => {
    // Implement drawing upload logic here
    console.log(`Uploading drawing for book ${bookId}`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-8 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] border border-gray-800 border-b-[3px] mb-8">
          <h1 className="text-3xl font-bold mb-4">My Library</h1>
          <p className="text-muted-foreground mb-6">Capture your reading journey, rate your favourite books and add audio highlights!</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard icon={BookOpenIcon} value={stats.booksRead} label="Books Read" />
            <StatCard icon={HashIcon} value={stats.totalPages} label="Total Pages" />
            <StatCard icon={UsersIcon} value={stats.uniqueAuthors} label="Unique Authors" />
            <StatCard icon={StarIcon} value={stats.averageRating} label="Average Rating" />
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">My Saved Books</h2>
          
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {savedBooks.map((book) => (
              <Card key={book.id} className="flex flex-col border border-gray-200 rounded-lg shadow-sm">
                <CardHeader className="p-0">
                  <img src={book.cover} alt={`Cover of ${book.title}`} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-lg line-clamp-1 mb-1">{book.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                  <StarRating rating={book.rating} onRatingChange={(newRating) => handleRatingChange(book.id, newRating)} />
                  {book.hasAudio && (
                    <div className="flex items-center text-sm text-green-600 mt-2">
                      <VolumeIcon className="h-4 w-4 mr-1" />
                      Audio sample uploaded
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-col gap-2">
                <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => handleAudioUpload(book.id)}
                  >
                    <MicIcon className="h-4 w-4 mr-2" />
                    {book.hasAudio ? "Update Audio" : "Upload Audio"}
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => handleDrawingUpload(book.id)}
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    {book.hasDrawing ? "Update Drawing" : "Upload Drawing"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {/* Add a Book Card */}
            <Card className="flex flex-col items-center justify-center h-full border border-gray-200 rounded-lg shadow-sm">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <PlusIcon className="h-12 w-12 mb-4 text-muted-foreground" />
                <CardTitle className="text-lg mb-2">Add a Book</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">Save a new book to your collection</p>
                <Button className="w-full">
                  Add Book
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}