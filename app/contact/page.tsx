"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                I'd love to hear from you. Send me a message and I'll respond as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Write your message here
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project, question, or just say hello..."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Image and Info */}
          <div className="space-y-8">
            {/* Speaking Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/author-speaking-at-podium-to-audience.jpg"
                alt="Author speaking at event"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@howkins.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+40 867 222 012</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      2312 Meadowbrook
                      <br />
                      Road, Los Angeles, CA
                      <br />
                      90017
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Follow me on:</p>
                <div className="flex space-x-2">
                  <span className="text-primary font-medium">Instagram</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-primary font-medium">Twitter</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-primary font-medium">TikTok</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Section */}
      <section className="coral-gradient py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Whether you're interested in collaborating, have questions about my work, or just want to connect, I'm
            always excited to hear from fellow storytellers and readers.
          </p>
        </div>
      </section>
    </main>
  )
}
