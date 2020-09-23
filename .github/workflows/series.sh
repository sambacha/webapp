curl \
  --header "Authorization: Token ebeb85ba-9108-4295-9377-1e66ad00d58c" \
  --header "Content-Type: application/json" \
  --data "{
    \"values\":[
      {
        \"line\":\"a\",
        \"value\":\"1 %\"
      },
      {
        \"line\":\"b\",
        \"value\":\"2 %\"
      },
      {
        \"line\":\"c\",
        \"value\":\"3 %\"
      }
    ],
    \"sha\":\"${GITHUB_SHA}\"
  }" \
  https://seriesci.com/api/freight-trust/webapp/:series/many
