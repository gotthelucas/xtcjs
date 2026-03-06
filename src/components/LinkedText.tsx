const URL_PATTERN = /(https?:\/\/[^\s]+)/g
const URL_ONLY_PATTERN = /^https?:\/\/[^\s]+$/

interface LinkedTextProps {
  text: string
}

export function LinkedText({ text }: LinkedTextProps) {
  const parts = text.split(URL_PATTERN)

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null

        if (URL_ONLY_PATTERN.test(part)) {
          return (
            <a
              key={`${part}-${index}`}
              href={part}
              target="_blank"
              rel="noreferrer"
            >
              {part}
            </a>
          )
        }

        return <span key={`${part}-${index}`}>{part}</span>
      })}
    </>
  )
}
