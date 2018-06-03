module.exports = {
    pathPrefix: '/gatsby-test-siet'
   ,plugins: [
        {
            resolve: 'gatsby-plugin-typography'
           ,options: {
                pathToConfigModule: 'src/utils/typography'
	    }
	}
    ]
}
