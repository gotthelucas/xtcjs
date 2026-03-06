const REPO_URL = 'https://github.com/varo6/xtcjs'

export function normalizeUserErrorMessage(message: string): string {
  const isStalePdfWorkerError = message.includes('Setting up fake worker failed') &&
    message.includes('Failed to fetch dynamically imported module') &&
    message.includes('pdf.worker.min-')

  if (isStalePdfWorkerError) {
    return `Refresh with Ctrl+Shift+R. If that doesn't work, open an issue on the repo: ${REPO_URL}`
  }

  return message
}
