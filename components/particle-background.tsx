"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface ParticleBackgroundProps {
  cursorPosition: { x: number; y: number }
}

const ParticleBackground = ({ cursorPosition }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef(cursorPosition)
  const frameId = useRef<number | null>(null)   // ✅ compile-safe

  /* update live cursor */
  useEffect(() => {
    cursorRef.current = cursorPosition
  }, [cursorPosition])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let vw = 0, vh = 0             // ▶ CSS-pixel viewport size (kept in sync)

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      vw = window.innerWidth
      vh = window.innerHeight
      canvas.width  = vw * dpr
      canvas.height = vh * dpr
      canvas.style.width  = vw + "px"    // ▶ keep element size correct
      canvas.style.height = vh + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0) // ▶ reset & scale once
    }
    resize()
    window.addEventListener("resize", resize)

    /* particle class (unchanged except it references vw / vh) */
    class P {
      x: number; y: number; ox: number; oy: number
      vx: number; vy: number; s: number; c: string
      constructor() {
        this.x = this.ox = Math.random() * vw          // ▶ use vw/vh
        this.y = this.oy = Math.random() * vh
        this.vx = (Math.random() - 0.5) * 0.15
        this.vy = (Math.random() - 0.5) * 0.15
        this.s = Math.random() * 2 + 0.5
        const pal = ["rgba(59,130,246,.7)","rgba(139,92,246,.7)","rgba(20,184,166,.7)"]
        this.c = pal[(Math.random()*pal.length)|0]
      }
      update(cx:number,cy:number){
        this.x+=this.vx; this.y+=this.vy
        if(this.x<0||this.x>vw) this.vx*=-1            // ▶ compare to vw/vh
        if(this.y<0||this.y>vh) this.vy*=-1
        const dx=cx-this.x, dy=cy-this.y, d=Math.hypot(dx,dy), max=120
        if(d<max&&d>0.1){
          const f=Math.pow(1-d/max,2)*1.2
          this.vx-=(dx/d)*f; this.vy-=(dy/d)*f
        }
        this.vx+=(this.ox-this.x)*0.0015
        this.vy+=(this.oy-this.y)*0.0015
      }
      draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.s,0,Math.PI*2)
        ctx.fillStyle=this.c; ctx.fill()
      }
    }

    /* create particles */
    const COUNT = Math.min((vw*vh)/12000,150)
    const parts = Array.from({length:COUNT}, () => new P())

    const connect = () => {
      const max = 90
      for(let i=0;i<parts.length;i++){
        for(let j=i+1;j<parts.length;j++){
          const dx=parts[i].x-parts[j].x, dy=parts[i].y-parts[j].y, d=Math.hypot(dx,dy)
          if(d<max){
            ctx.beginPath()
            ctx.strokeStyle=`rgba(129,140,248,${((max-d)/max)*0.18})`
            ctx.lineWidth=0.4
            ctx.moveTo(parts[i].x,parts[i].y)
            ctx.lineTo(parts[j].x,parts[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      ctx.clearRect(0,0,vw,vh)                 // ▶ clear using vw/vh
      const {x:cx,y:cy}=cursorRef.current
      parts.forEach(p=>{p.update(cx,cy);p.draw()})
      connect()
      frameId.current=requestAnimationFrame(loop)
    }
    loop()

    return () => {
      if(frameId.current) cancelAnimationFrame(frameId.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default ParticleBackground
