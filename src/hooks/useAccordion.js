import { useState } from 'react'

export function useAccordion(initialOpen = null) {
  const [openId, setOpenId] = useState(initialOpen)
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))
  return { openId, toggle }
}