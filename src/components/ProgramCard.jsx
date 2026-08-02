export default function ProgramCard({ title, description, imageId }) {
  const imgUrl = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=600`
  
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--code-bg)] p-5 text-left">

      <div className="mb-4 h-50 overflow-hidden rounded-lg">
        <img
          src={imgUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="font-display text-[28px] font-semibold text-[var(--text-h)] mb-4">{title}</h3>
      <p className="mt-2 text-[18px] text-[var(--text)]">{description}</p>
      <a href="/programs" className="mt-3 inline-block text-[15px] font-semibold text-[var(--accent)]">
        Learn more
      </a>
    </div>
  )
}