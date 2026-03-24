import { usePageContext } from 'vike-react/usePageContext'

export default function Page() {
  const { is404 } = usePageContext()

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Glitch-style 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[160px] font-bold font-mono text-[#1A1A1D] select-none leading-none">
            {is404 ? '404' : '500'}
          </h1>
          <h1 className="text-[120px] sm:text-[160px] font-bold font-mono text-emerald-500/20 absolute inset-0 leading-none animate-pulse">
            {is404 ? '404' : '500'}
          </h1>
        </div>

        {/* Terminal-style message */}
        <div className="rounded-xl bg-[#1A1A1D] border border-[#2A2A2E] p-6 mb-8 text-left">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="font-mono text-sm leading-7">
            <p className="text-[#6B6B73]">
              <span className="text-emerald-500">$</span> curl {is404 ? 'this-page' : 'server'}
            </p>
            <p className="text-[#A0A0A8]">
              {is404
                ? 'Error: Page not found. The route you requested does not exist.'
                : 'Error: Something went wrong on the server.'}
            </p>
            <p className="text-[#6B6B73] mt-2">
              <span className="text-emerald-500">$</span> <span className="text-[#EDEDEF]">cd /home</span>
              <span className="animate-cursor-blink inline-block w-[7px] h-4 align-middle ml-0.5 bg-emerald-500" />
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/"
          className="btn-accent inline-flex items-center gap-2 text-base"
        >
          Go home
        </a>

        <p className="mt-6 text-xs text-[#6B6B73] font-mono">
          eugene.rusakov // {is404 ? '404' : '500'}
        </p>
      </div>
    </div>
  )
}
