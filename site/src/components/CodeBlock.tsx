import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import shell from 'highlight.js/lib/languages/shell'
import xml from 'highlight.js/lib/languages/xml'
import { type FC } from 'react'
import { twMerge } from 'tailwind-merge'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('xml', xml)

type Props = {
  code: string
  language?: string
  className?: string
}

const CodeBlock: FC<Props> = ({ code, language = 'jsx', className }) => {
  const highlightedCode = hljs.highlight(code, {
    language,
  }).value

  return (
    <code
      className={twMerge(
        'block w-fit max-w-full overflow-scroll whitespace-pre-wrap rounded border border-mid bg-dark px-4 py-2 text-xs sm:overflow-hidden sm:text-base',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
}

export default CodeBlock
