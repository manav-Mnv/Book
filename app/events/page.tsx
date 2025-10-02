import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Join me at upcoming speaking engagements, book signings, and literary events.
          </p>

          <div className="bg-muted/30 rounded-2xl p-12 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">No Upcoming Events</h2>
            <p className="text-muted-foreground mb-6">
              Stay tuned for announcements about future events and appearances.
            </p>
            <Button asChild>
              <Link href="/contact">Get Notified</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
