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

	type Query {
		products(page: Int, limit: Int): [Product]
	}
`
