module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://ndrhhrxyiuaitj:ca4337b33d74012ef4647db76b0fd544648ba4d5d77331a4e5669bbdbd3749ca@ec2-54-163-47-62.compute-1.amazonaws.com:5432/d6ooi7bgr7v119',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || "postgresql://lili@localhost/noteful-test",
    CLIENT_ORIGIN: 'https://noteful-client-ashen-nine.vercel.app'
}