import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center coral-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Beyond words into wonder ideas
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl text-pretty">
                Discover a world where imagination meets reality through captivating stories and profound insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/books">Explore Books</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/professional-author-portrait-with-glasses-and-dram.jpg" alt="Author portrait" className="w-full h-full object-cover" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my latest publications and discover stories that will transport you to new worlds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Tomorrowland", category: "Latest" },
              { title: "West of Jesus", category: "Popular" },
              { title: "Abundance", category: "Featured" },
            ].map((book, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-primary/10 rounded-lg p-6 h-80 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <img
                    src={`/abstract-book-cover.png?height=300&width=200&query=book cover ${book.title}`}
                    alt={book.title}
                    className="w-48 h-64 object-cover rounded shadow-lg"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">{book.title}</h3>
                <p className="text-sm text-primary text-center font-medium">{book.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/books">View All Books</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
