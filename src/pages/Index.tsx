import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"

const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }
`

export default function Index() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, rgba(10,15,30,0.75) 0%, rgba(14,116,144,0.55) 50%, rgba(10,15,30,0.85) 100%), url('https://cdn.poehali.dev/projects/992fdbe7-311b-4159-a561-58d1ddcbda6e/files/23136946-3cb0-4748-9784-63a96a10d799.jpg') center/cover no-repeat fixed`,
      }}
    >
      <style>{backgroundStyle}</style>
      <div className="bg-pattern"></div>
      <div className="content w-full">
        <WaitlistSignup />
      </div>
      <Toaster />
    </main>
  )
}