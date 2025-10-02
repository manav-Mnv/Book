"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Latest", "Popular", "Mystery", "Thriller", "Fantasy"]

const books = [
  {
    id: "tomorrowland",
    title: "Tomorrowland",
    category: "Latest",
    image: "/tomorrowland-book-cover-colorful-future.jpg",
    description: "A journey into the possibilities of tomorrow",
  },
  {
    id: "west-of-jesus",
    title: "West of Jesus",
    category: "Popular",
    image: "/west-of-jesus-book-cover-modern-art-black.jpg",
    description: "Exploring faith and spirituality in modern times",
  },
  {
    id: "abundance",
    title: "Abundance",
    category: "Popular",
    image: "/abundance-book-cover-leadership-mountain.jpg",
    description: "Unlocking your leadership potential",
  },
  {
    id: "stealing-fire",
    title: "Stealing Fire",
    category: "Mystery",
    image: "/stealing-fire-book-cover-mystery-dark-green.jpg",
    description: "A thrilling mystery that will keep you guessing",
  },
  {
    id: "art-of-impossible",
    title: "Art of Impossible",
    category: "Thriller",
    image: "/art-of-impossible-book-cover-leadership-black-gold.jpg",
    description: "Achieving the impossible through determination",
  },
  {
    id: "furry-prayer",
    title: "Furry Prayer",
    category: "Fantasy",
    image: "/furry-prayer-book-cover-modern-pattern-design.jpg",
    description: "A unique reflection on design and creativity",
  },
]

export default function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBooks = selectedCategory === "All" ? books : books.filter((book) => book.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">All Books</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my complete collection of works spanning various genres and themes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="bg-primary/5 rounded-lg p-6 transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-lg">
                {/* Book Cover */}
                <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Book Info */}
                <div className="text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {book.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">Be the first to know about new releases and upcoming events.</p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
