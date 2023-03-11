import React from "react"

export const Booking = () => {
  return (
    <div id="book-a-call" className="bg-accent p-16 text-center">
      <h1 className="text-5xl text-center font-medium italic">
        Book a FREE Consultation Call with us
      </h1>

      <p className="text-2xl mb-12">
        Sends us an email indicating your best date & time for a 20-30 minutes
        call
      </p>

      <a href="mailto:vysiogenpro@gmail.com">
      <button className="btn btn-primary text-center">I want to book!</button>
      </a>

      <p className="mt-16 text-lg">
        For any other issue or extra information feel free to send us a message:
        <span className="text-2xl"> support@vysiogen.com</span>
      </p>
      <p className="text-lg">We will reply within 24 hours.</p>
    </div>
  )
}
