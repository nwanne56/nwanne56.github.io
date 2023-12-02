"use client";

import { useEffect } from 'react'

const Donation = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.gofundme.com/static/js/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="gfm-embed" data-url="https://www.gofundme.com/f/mutual-aid-monday-zero-deaths-from-exposure/widget/large"></div>
  )
}

export default Donation