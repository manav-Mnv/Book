export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="coral-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Discover the journey behind the words and the passion that drives every story.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Main Portrait */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/professional-author-portrait-with-glasses-and-dram.jpg"
                    alt="Author portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">A Journey Through Words</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Welcome to my world of storytelling. I'm a passionate author dedicated to crafting narratives that
                  challenge perspectives, ignite imagination, and explore the depths of human experience.
                </p>
                <p className="text-muted-foreground mb-6">
                  With over a decade of writing experience, I've had the privilege of exploring diverse genres—from
                  thought-provoking mysteries to inspiring leadership guides. Each book represents a journey of
                  discovery, both for myself and my readers.
                </p>
                <p className="text-muted-foreground mb-8">
                  My work has been featured in numerous publications and has touched the lives of readers worldwide. I
                  believe in the power of words to transform, inspire, and connect us all.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">Books Published</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                  <div className="text-sm text-muted-foreground">Readers Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Speaking Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Behind the Scenes</h2>
            <p className="text-lg text-muted-foreground">Glimpses from my writing journey and speaking engagements.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Photo Grid */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src="/author-writing-at-desk-with-books.jpg"
                alt="Writing at desk"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src="/author-speaking-at-podium-to-audience.jpg"
                alt="Speaking event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src="/author-portrait-casual-sweater.jpg"
                alt="Casual portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src="/author-with-red-and-blue-dramatic-lighting.jpg"
                alt="Dramatic portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">My Writing Philosophy</h2>
            <blockquote className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
              "Every story has the power to change a life. My mission is to craft narratives that not only entertain but
              also inspire readers to see the world—and themselves—in new ways."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Inspiration</h3>
                <p className="text-sm text-muted-foreground">
                  Finding wonder in everyday moments and transforming them into extraordinary stories.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Purpose</h3>
                <p className="text-sm text-muted-foreground">
                  Creating meaningful connections between readers and the deeper truths of human experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering readers to embrace their potential and create positive change in their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
