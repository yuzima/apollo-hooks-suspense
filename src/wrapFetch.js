export const wrapQuery = (result) => {
  // useQuery
  if (!Array.isArray(result)) {
    return handleQueryResult(result)
  }
  // useLazyQuery
  else {
    const [getQuery, queryResult] = result
    return [(...rest) => {
      getQuery.call(null, ...rest)
    }, handleQueryResult(queryResult)]
  }
}

function handleQueryResult({ loading, data, error, ...rest }) {
  if (loading) {
    throw new Promise((resolve) => {
      if (!loading) {
        resolve()
      }
    })
  } else if (error) {
    throw error
  } else {
    return { data, ...rest }
  }
}