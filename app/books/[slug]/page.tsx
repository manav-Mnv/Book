"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, Play, ChevronLeft, ChevronRight } from "lucide-react"

const books = {
  "furry-prayer": {
    title: "Furry Prayer",
    price: "$5.99 USD",
    author: "Francois Mercer",
    format: "Paperback",
    category: "Mystery",
    published: "05 January, 2025",
    image: "/furry-prayer-book-cover-modern-pattern-design.jpg",
    description:
      "Furry Prayer Is A Unique Reflection On Design, Spirituality, And Patterns Of Meaning In Life. Blending Art, Creativity, And Mindful Observation, This Book Offers A Fresh Perspective On Finding Harmony In Chaos. A Beautiful Written Book For Creatives And Seekers Alike.",
    videoThumbnail: "/placeholder.svg?key=video1",
    testimonials: [
      {
        name: "Robert Mitchell, Marketing Manager",
        text: "I've Read Many Authors, But Howkins Stands Out With His Unique Blend Of Eloquence. Whether It's A Stirring Personal Narrative Or A Textbook Of Creativity, Consistency In His Writing Is Top-Notch.",
        avatar: "/placeholder.svg?key=avatar1",
      },
      {
        name: "David Johnson, Software Engineer",
        text: "As An Avid Reader, I Appreciate How Serious It Is To Find Popular Books That Are Both Entertaining And Classic. And The Recommendations Feel Genuinely Helpful.",
        avatar: "/placeholder.svg?key=avatar2",
      },
    ],
  },
  tomorrowland: {
    title: "Tomorrowland",
    price: "$12.99 USD",
    author: "Francois Mercer",
    format: "Hardcover",
    category: "Latest",
    published: "15 March, 2025",
    image: "/tomorrowland-book-cover-colorful-future.jpg",
    description:
      "A journey into the possibilities of tomorrow, exploring how technology and human creativity will shape our future. This visionary work challenges readers to imagine beyond the present and embrace the potential of what's to come.",
    videoThumbnail: "/placeholder.svg?key=video2",
    testimonials: [
      {
        name: "Sarah Chen, Tech Executive",
        text: "Tomorrowland opened my eyes to possibilities I never considered. Howkins has a gift for making complex future concepts accessible and inspiring.",
        avatar: "/placeholder.svg?key=avatar3",
      },
      {
        name: "Michael Torres, Futurist",
        text: "A brilliant exploration of what lies ahead. This book should be required reading for anyone interested in the future of humanity.",
        avatar: "/placeholder.svg?key=avatar4",
      },
    ],
  },
  "west-of-jesus": {
    title: "West of Jesus",
    price: "$9.99 USD",
    author: "Francois Mercer",
    format: "Paperback",
    category: "Popular",
    published: "22 August, 2024",
    image: "/west-of-jesus-book-cover-modern-art-black.jpg",
    description:
      "Exploring faith and spirituality in modern times, this profound work examines the intersection of belief, doubt, and human experience in contemporary society.",
    videoThumbnail: "/placeholder.svg?key=video3",
    testimonials: [
      {
        name: "Dr. Emily Rodriguez, Theologian",
        text: "A thoughtful and nuanced exploration of faith that speaks to believers and skeptics alike. Howkins writes with remarkable wisdom and compassion.",
        avatar: "/placeholder.svg?key=avatar5",
      },
      {
        name: "James Wilson, Philosophy Professor",
        text: "West of Jesus challenges conventional thinking while remaining deeply respectful of diverse perspectives. A masterful work of spiritual inquiry.",
        avatar: "/placeholder.svg?key=avatar6",
      },
    ],
  },
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const book = books[params.slug as keyof typeof books]

  if (!book) {
    notFound()
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % book.testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + book.testimonials.length) % book.testimonials.length)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/books">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Books
          </Link>
        </Button>

        {/* Book Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-primary/5 rounded-2xl p-8 max-w-md">
              <img
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{book.title}</h1>
              <p className="text-2xl font-bold text-primary mb-4">{book.price}</p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Quantity:</span>
                <Button variant="outline" size="sm">
                  -
                </Button>
                <span className="px-3 py-1 border rounded">1</span>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add To Cart
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Author:</span>
                <span className="font-medium">{book.author}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span className="font-medium">{book.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <Badge variant="secondary">{book.category}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Published:</span>
                <span className="font-medium">{book.published}</span>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img
              src={book.videoThumbnail || "/placeholder.svg"}
              alt="Video thumbnail"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button size="lg" variant="secondary" className="rounded-full w-16 h-16 p-0">
                <Play className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Words of Readers</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {book.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-muted/30 rounded-2xl p-6 transition-opacity duration-300 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-50"
                }`}
              >
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-sm">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Books */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">More Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(books)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedBook]) => (
                <Link key={slug} href={`/books/${slug}`} className="group">
                  <div className="bg-muted/30 rounded-lg p-6 group-hover:bg-muted/50 transition-colors">
                    <img
                      src={relatedBook.image || "/placeholder.svg"}
                      alt={relatedBook.title}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="font-serif text-lg font-semibold mb-2">{relatedBook.title}</h3>
                    <p className="text-primary font-medium">{relatedBook.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
