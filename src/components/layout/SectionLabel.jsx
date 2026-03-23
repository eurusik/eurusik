const SectionLabel = ({ number, label }) => {
  return (
    <div className="mb-8">
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6B6B73]">
        {number} / {label}
      </span>
    </div>
  )
}

export default SectionLabel
