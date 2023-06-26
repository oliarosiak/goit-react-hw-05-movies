const { Link } = require("react-router-dom")

const NotFoundPage = () => {
    return (
        <div>
            <h2>Sorry, something went wrong! 😔</h2>
            <p>Such a page does not exist!</p>
            <Link to='/' >Go to the main page</Link>
        </div>
    )
}

export default NotFoundPage;