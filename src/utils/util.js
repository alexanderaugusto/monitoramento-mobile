export const splitArray = (arr, n) => {
  if (arr.length === 0) {
    return []
  }

  const splitsLength = Math.max(arr.length / n, 1)
  const splits = []

  for (var i = 0; i < n; i++) {
    if (splitsLength * (i + 1) <= arr.length) {
      splits.push(arr.slice(splitsLength * i, splitsLength * (i + 1)))
    }
  }

  return splits
}