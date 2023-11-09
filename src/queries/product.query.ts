import gql from 'graphql-tag'

export const GET_ALL_PRODUCTS = gql`
	query GetAllProducts($page: Int, $limit: Int) {
		products(page: $page, limit: $limit) {
			id
			name
			description
			image_url
			category
			price_in_cents
			sales
			created_at
		}
	}
`
