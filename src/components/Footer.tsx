export function Footer() {
  return (
    <footer className="bg-dark-bg text-text-muted py-8 px-6 text-center text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="./images/navily-logo.png" alt="Navily" className="w-6 h-6 rounded" />
          <span className="text-text-light/60">Navily</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Navily. All rights reserved.</p>
      </div>
    </footer>
  )
}
