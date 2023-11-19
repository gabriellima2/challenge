import gql from 'graphql-tag'

export const GET_ALL_PRODUCTS = gql`
	query GetAllProducts($page: Int, $limit: Int, $category: String) {
		products(page: $page, limit: $limit, category: $category) {
			items {
				id
				name
				description
				image_url
				category
				price_in_cents
				sales
				created_at
			}
			totalItems
			totalPages
			itemsPerPage
		}
	}
`

export const GET_PRODUCT_BY_ID = gql`
	query GetProduct($id: String!) {
		product(id: $id) {
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
