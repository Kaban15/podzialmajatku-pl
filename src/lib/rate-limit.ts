const requests = new Map<string, number[]>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = requests.get(key) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    requests.set(key, recent);
    return true;
  }

  recent.push(now);
  requests.set(key, recent);
  return false;
}

export function resetRateLimit(key: string): void {
  requests.delete(key);
}

export function _getRequestsMap(): Map<string, number[]> {
  return requests;
}
