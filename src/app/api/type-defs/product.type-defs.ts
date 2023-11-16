export const productTypeDefs = `
	type Product {
		id: ID!
		name: String!
		description: String!
		image_url: String!
		category: String!
		price_in_cents: Int!
		sales: Int!
		created_at: String!
	}

	type ProductsQueryReturn {
		items: [Product]
		totalItems: Int!
		totalPages: Int!
		itemsPerPage: Int!
	}

	type Query {
		products(page: Int, limit: Int, category: String): ProductsQueryReturn
	}
`
