import gql from 'graphql-tag'

export const GET_ALL_PRODUCTS = gql`
	query GetAllProducts($page: Int, $limit: Int, $category: String) {
		products(page: $page, limit: $limit, category: $category) {
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
